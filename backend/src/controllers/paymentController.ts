import type { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import {
    createRazorpayOrder,
    verifyPaymentSignature,
    getKeyId,
} from '../services/razorpayService.js';
import {
    createPendingDonation,
    completeDonation,
    isPaymentAlreadyProcessed,
    getDonationByOrderId,
} from '../services/donationService.js';
import type {
    CreateOrderRequest,
    CreateOrderResponse,
    VerifyPaymentRequest,
    VerifyPaymentResponse,
    ApiErrorResponse,
} from '../types/index.js';

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export async function createOrder(
    req: Request<object, object, CreateOrderRequest>,
    res: Response<CreateOrderResponse | ApiErrorResponse>
): Promise<void> {
    try {
        const { amount, donor_name, donor_email, donor_phone } = req.body;

        if (!amount || typeof amount !== 'number' || amount < 10) {
            res.status(400).json({ error: 'Amount must be at least ₹10' });
            return;
        }

        if (!Number.isInteger(amount)) {
            res.status(400).json({ error: 'Amount must be a whole number' });
            return;
        }

        if (!donor_name || donor_name.trim().length < 2) {
            res.status(400).json({ error: 'Valid donor name is required' });
            return;
        }

        if (!donor_email || !isValidEmail(donor_email)) {
            res.status(400).json({ error: 'Valid email address is required' });
            return;
        }

        const receipt = `donation_${uuidv4().slice(0, 8)}`;
        const order = await createRazorpayOrder(amount, receipt);

        createPendingDonation(
            order.id,
            amount,
            donor_name.trim(),
            donor_email.trim(),
            donor_phone?.trim()
        );

        const response: CreateOrderResponse = {
            order_id: order.id,
            amount: amount,
            currency: order.currency,
            key_id: getKeyId(),
        };

        console.log(`[Order Created] ID: ${order.id}, Amount: ₹${amount}, Donor: ${donor_name}`);
        res.json(response);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to create order';
        console.error('[Order Creation Error]', message);
        res.status(500).json({ error: 'Failed to create payment order', details: message });
    }
}

export async function verifyPayment(
    req: Request<object, object, VerifyPaymentRequest>,
    res: Response<VerifyPaymentResponse | ApiErrorResponse>
): Promise<void> {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            amount,
        } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            res.status(400).json({ error: 'Missing payment details' });
            return;
        }

        if (isPaymentAlreadyProcessed(razorpay_payment_id)) {
            const existingDonation = getDonationByOrderId(razorpay_order_id);
            if (existingDonation) {
                res.json({
                    verified: true,
                    donation_id: existingDonation.id,
                    message: 'Payment already verified',
                });
                return;
            }
        }

        const existingDonation = getDonationByOrderId(razorpay_order_id);
        if (existingDonation && existingDonation.amount !== amount) {
            console.error(`[Amount Mismatch] Order: ${razorpay_order_id}, Expected: ${existingDonation.amount}, Got: ${amount}`);
            res.status(400).json({ error: 'Amount mismatch detected' });
            return;
        }

        const isValid = verifyPaymentSignature(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        );

        if (!isValid) {
            console.error(`[Signature Invalid] Order: ${razorpay_order_id}, Payment: ${razorpay_payment_id}`);
            res.status(400).json({ error: 'Invalid payment signature' });
            return;
        }

        const donation = completeDonation(
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        );

        if (!donation) {
            res.status(404).json({ error: 'Order not found' });
            return;
        }

        res.json({
            verified: true,
            donation_id: donation.id,
            message: 'Payment verified successfully',
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Verification failed';
        console.error('[Verification Error]', message);
        res.status(500).json({ error: 'Payment verification failed', details: message });
    }
}
