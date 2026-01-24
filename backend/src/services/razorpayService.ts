import Razorpay from 'razorpay';
import crypto from 'crypto';
import { config } from '../config/env.js';
import type { RazorpayOrder } from '../types/index.js';

const razorpayInstance = new Razorpay({
    key_id: config.razorpayKeyId,
    key_secret: config.razorpayKeySecret,
});

const MIN_AMOUNT = 10;
const MAX_AMOUNT = 1000000;

export async function createRazorpayOrder(
    amount: number,
    receipt: string
): Promise<RazorpayOrder> {
    if (amount < MIN_AMOUNT) {
        throw new Error(`Amount must be at least ₹${MIN_AMOUNT}`);
    }
    if (amount > MAX_AMOUNT) {
        throw new Error(`Amount cannot exceed ₹${MAX_AMOUNT}`);
    }

    const options = {
        amount: amount * 100,
        currency: 'INR',
        receipt: receipt,
    };

    const order = await razorpayInstance.orders.create(options);
    return order as RazorpayOrder;
}

export function verifyPaymentSignature(
    orderId: string,
    paymentId: string,
    signature: string
): boolean {
    const body = `${orderId}|${paymentId}`;
    const expectedSignature = crypto
        .createHmac('sha256', config.razorpayKeySecret)
        .update(body)
        .digest('hex');

    return crypto.timingSafeEqual(
        Buffer.from(expectedSignature),
        Buffer.from(signature)
    );
}

export function getKeyId(): string {
    return config.razorpayKeyId;
}
