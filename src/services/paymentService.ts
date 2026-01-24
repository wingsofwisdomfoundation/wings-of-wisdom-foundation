import type {
    CreateOrderRequest,
    CreateOrderResponse,
    VerifyPaymentRequest,
    VerifyPaymentResponse,
    RazorpayCheckoutOptions,
    RazorpaySuccessResponse,
    RazorpayInstance,
    DonorDetails,
    DonationResult,
} from '@/types/razorpay';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

let razorpayScriptLoaded = false;
let razorpayScriptLoading: Promise<void> | null = null;

export async function loadRazorpayScript(): Promise<void> {
    if (razorpayScriptLoaded && window.Razorpay) {
        return;
    }

    if (razorpayScriptLoading) {
        return razorpayScriptLoading;
    }

    razorpayScriptLoading = new Promise((resolve, reject) => {
        const existingScript = document.querySelector('script[src*="razorpay"]');
        if (existingScript) {
            razorpayScriptLoaded = true;
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;

        script.onload = () => {
            razorpayScriptLoaded = true;
            resolve();
        };

        script.onerror = () => {
            razorpayScriptLoading = null;
            reject(new Error('Failed to load Razorpay checkout script'));
        };

        document.body.appendChild(script);
    });

    return razorpayScriptLoading;
}

export async function createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    const response = await fetch(`${API_BASE_URL}/payments/create-order`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Failed to create order' }));
        throw new Error(error.error || 'Failed to create payment order');
    }

    return response.json();
}

export async function verifyPayment(request: VerifyPaymentRequest): Promise<VerifyPaymentResponse> {
    const response = await fetch(`${API_BASE_URL}/payments/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Verification failed' }));
        throw new Error(error.error || 'Payment verification failed');
    }

    return response.json();
}

export interface ProcessDonationConfig {
    amount: number;
    donor: DonorDetails;
    ngoName: string;
    ngoDescription: string;
    ngoLogo?: string;
    themeColor?: string;
    onSuccess?: (result: DonationResult) => void;
    onFailure?: (error: string) => void;
    onDismiss?: () => void;
}

export async function processDonation(config: ProcessDonationConfig): Promise<DonationResult> {
    const {
        amount,
        donor,
        ngoName,
        ngoDescription,
        ngoLogo,
        themeColor = '#1E6F5C',
        onSuccess,
        onFailure,
        onDismiss,
    } = config;

    try {
        await loadRazorpayScript();

        const orderResponse = await createOrder({
            amount,
            donor_name: donor.name,
            donor_email: donor.email,
            donor_phone: donor.phone,
        });

        return new Promise((resolve) => {
            const options: RazorpayCheckoutOptions = {
                key: orderResponse.key_id,
                amount: orderResponse.amount * 100,
                currency: orderResponse.currency,
                name: ngoName,
                description: ngoDescription,
                image: ngoLogo,
                order_id: orderResponse.order_id,
                handler: async (response: RazorpaySuccessResponse) => {
                    try {
                        const verifyResponse = await verifyPayment({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            donor_name: donor.name,
                            donor_email: donor.email,
                            donor_phone: donor.phone,
                            amount,
                        });

                        if (verifyResponse.verified) {
                            const result: DonationResult = {
                                success: true,
                                paymentId: response.razorpay_payment_id,
                                orderId: response.razorpay_order_id,
                                donationId: verifyResponse.donation_id,
                                amount,
                                donorName: donor.name,
                                donorEmail: donor.email,
                            };
                            onSuccess?.(result);
                            resolve(result);
                        } else {
                            const error = 'Payment verification failed';
                            onFailure?.(error);
                            resolve({ success: false, error });
                        }
                    } catch (error) {
                        const message = error instanceof Error ? error.message : 'Verification failed';
                        onFailure?.(message);
                        resolve({ success: false, error: message });
                    }
                },
                prefill: {
                    name: donor.name,
                    email: donor.email,
                    contact: donor.phone,
                },
                notes: {
                    purpose: 'Donation',
                },
                theme: {
                    color: themeColor,
                },
                modal: {
                    ondismiss: () => {
                        onDismiss?.();
                        resolve({ success: false, error: 'Payment cancelled by user' });
                    },
                    confirm_close: true,
                },
            };

            const razorpay: RazorpayInstance = new window.Razorpay(options);

            razorpay.on('payment.failed', (response) => {
                const error = response.error.description || 'Payment failed';
                onFailure?.(error);
                resolve({ success: false, error });
            });

            razorpay.open();
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to process donation';
        onFailure?.(message);
        return { success: false, error: message };
    }
}
