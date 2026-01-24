import { v4 as uuidv4 } from 'uuid';
import type { DonationRecord } from '../types/index.js';

const donations: Map<string, DonationRecord> = new Map();
const processedPayments: Set<string> = new Set();
const orderToDonation: Map<string, string> = new Map();

export function createPendingDonation(
    orderId: string,
    amount: number,
    donorName: string,
    donorEmail: string,
    donorPhone?: string
): DonationRecord {
    const donation: DonationRecord = {
        id: uuidv4(),
        donor_name: donorName,
        donor_email: donorEmail,
        donor_phone: donorPhone,
        amount: amount,
        currency: 'INR',
        razorpay_order_id: orderId,
        razorpay_payment_id: '',
        razorpay_signature: '',
        payment_status: 'pending',
        created_at: new Date(),
    };

    donations.set(donation.id, donation);
    orderToDonation.set(orderId, donation.id);

    return donation;
}

export function isPaymentAlreadyProcessed(paymentId: string): boolean {
    return processedPayments.has(paymentId);
}

export function markPaymentAsProcessed(paymentId: string): void {
    processedPayments.add(paymentId);
}

export function completeDonation(
    orderId: string,
    paymentId: string,
    signature: string
): DonationRecord | null {
    const donationId = orderToDonation.get(orderId);
    if (!donationId) {
        return null;
    }

    const donation = donations.get(donationId);
    if (!donation) {
        return null;
    }

    donation.razorpay_payment_id = paymentId;
    donation.razorpay_signature = signature;
    donation.payment_status = 'success';
    donation.verified_at = new Date();

    markPaymentAsProcessed(paymentId);

    console.log(`[Donation Complete] ID: ${donation.id}, Amount: ₹${donation.amount}, Donor: ${donation.donor_name}`);

    return donation;
}

export function failDonation(orderId: string): void {
    const donationId = orderToDonation.get(orderId);
    if (donationId) {
        const donation = donations.get(donationId);
        if (donation) {
            donation.payment_status = 'failed';
        }
    }
}

export function getDonationByOrderId(orderId: string): DonationRecord | null {
    const donationId = orderToDonation.get(orderId);
    if (!donationId) return null;
    return donations.get(donationId) || null;
}

export function getAllDonations(): DonationRecord[] {
    return Array.from(donations.values());
}
