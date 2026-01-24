export interface CreateOrderRequest {
    amount: number;
    donor_name: string;
    donor_email: string;
    donor_phone?: string;
}

export interface CreateOrderResponse {
    order_id: string;
    amount: number;
    currency: string;
    key_id: string;
}

export interface VerifyPaymentRequest {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
    donor_name: string;
    donor_email: string;
    donor_phone?: string;
    amount: number;
}

export interface VerifyPaymentResponse {
    verified: boolean;
    donation_id?: string;
    message: string;
}

export interface DonationRecord {
    id: string;
    donor_name: string;
    donor_email: string;
    donor_phone?: string;
    amount: number;
    currency: string;
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
    payment_status: 'pending' | 'success' | 'failed';
    created_at: Date;
    verified_at?: Date;
}

export interface RazorpayOrder {
    id: string;
    entity: string;
    amount: number;
    amount_paid: number;
    amount_due: number;
    currency: string;
    receipt: string;
    status: string;
    created_at: number;
}

export interface ApiErrorResponse {
    error: string;
    details?: string;
}
