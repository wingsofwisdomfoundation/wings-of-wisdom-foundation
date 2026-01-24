export interface RazorpayCheckoutOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    image?: string;
    order_id: string;
    handler: (response: RazorpaySuccessResponse) => void;
    prefill?: RazorpayPrefill;
    notes?: Record<string, string>;
    theme?: RazorpayTheme;
    modal?: RazorpayModal;
}

export interface RazorpayPrefill {
    name?: string;
    email?: string;
    contact?: string;
}

export interface RazorpayTheme {
    color?: string;
    backdrop_color?: string;
}

export interface RazorpayModal {
    ondismiss?: () => void;
    escape?: boolean;
    animation?: boolean;
    confirm_close?: boolean;
}

export interface RazorpaySuccessResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
}

export interface RazorpayErrorResponse {
    error: {
        code: string;
        description: string;
        source: string;
        step: string;
        reason: string;
        metadata: {
            order_id?: string;
            payment_id?: string;
        };
    };
}

export interface RazorpayInstance {
    open: () => void;
    close: () => void;
    on: (event: string, handler: (response: RazorpayErrorResponse) => void) => void;
}

export interface RazorpayConstructor {
    new(options: RazorpayCheckoutOptions): RazorpayInstance;
}

declare global {
    interface Window {
        Razorpay: RazorpayConstructor;
    }
}

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

export interface DonorDetails {
    name: string;
    email: string;
    phone?: string;
}

export interface DonationResult {
    success: boolean;
    paymentId?: string;
    orderId?: string;
    donationId?: string;
    amount?: number;
    donorName?: string;
    donorEmail?: string;
    error?: string;
}

export type PaymentStatus = 'idle' | 'creating-order' | 'processing' | 'verifying' | 'success' | 'failed' | 'cancelled';
