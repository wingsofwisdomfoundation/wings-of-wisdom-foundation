import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Heart, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { processDonation } from '@/services/paymentService';
import type { DonationResult, PaymentStatus } from '@/types/razorpay';

interface PresetAmount {
    value: number;
    label: string;
    description: string;
}

interface DonateFormProps {
    ngoName: string;
    ngoDescription: string;
    ngoLogo?: string;
    themeColor?: string;
    minimumAmount?: number;
    presetAmounts?: PresetAmount[];
    onSuccess?: (result: DonationResult) => void;
    onError?: (error: string) => void;
}

const defaultPresets: PresetAmount[] = [
    { value: 100, label: '₹100', description: "Support a child's meals" },
    { value: 500, label: '₹500', description: 'Fund educational supplies' },
    { value: 1000, label: '₹1000', description: 'Sponsor a month of learning' },
    { value: 5000, label: '₹5000', description: 'Support a full program' },
];

export function DonateForm({
    ngoName,
    ngoDescription,
    ngoLogo,
    themeColor = '#1E6F5C',
    minimumAmount = 10,
    presetAmounts = defaultPresets,
    onSuccess,
    onError,
}: DonateFormProps) {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
    const [customAmount, setCustomAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState<PaymentStatus>('idle');

    const handlePresetClick = useCallback((value: number) => {
        setSelectedAmount(value);
        setCustomAmount('');
    }, []);

    const handleCustomChange = useCallback((value: string) => {
        const numValue = parseInt(value);
        setCustomAmount(value);
        setSelectedAmount(numValue > 0 ? numValue : null);
    }, []);

    const validateForm = useCallback((): boolean => {
        if (!name.trim()) {
            toast.error('Please enter your name');
            return false;
        }
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Please enter a valid email address');
            return false;
        }
        if (!panNumber.trim()) {
            toast.error('Please enter your PAN number');
            return false;
        }
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber.toUpperCase())) {
            toast.error('Please enter a valid PAN number (e.g., ABCDE1234F)');
            return false;
        }
        if (!selectedAmount || selectedAmount < minimumAmount) {
            toast.error(`Minimum donation amount is ₹${minimumAmount}`);
            return false;
        }
        return true;
    }, [name, email, panNumber, selectedAmount, minimumAmount]);

    const handleDonate = useCallback(async () => {
        if (!validateForm() || !selectedAmount) return;

        setStatus('creating-order');

        const result = await processDonation({
            amount: selectedAmount,
            donor: {
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim() || undefined,
            },
            ngoName,
            ngoDescription,
            ngoLogo,
            themeColor,
            onSuccess: (donationResult) => {
                setStatus('success');
                toast.success('Payment successful! Thank you for your donation.');
                onSuccess?.(donationResult);
            },
            onFailure: (error) => {
                setStatus('failed');
                toast.error(error);
                onError?.(error);
            },
            onDismiss: () => {
                setStatus('cancelled');
                toast.error('Payment cancelled');
            },
        });

        if (!result.success && status !== 'cancelled') {
            setStatus('failed');
        }
    }, [selectedAmount, name, email, phone, ngoName, ngoDescription, ngoLogo, themeColor, validateForm, onSuccess, onError, status]);

    const isProcessing = status === 'creating-order' || status === 'processing' || status === 'verifying';

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <Label className="text-lg font-semibold">Choose Donation Amount</Label>
                <div className="grid gap-4 sm:grid-cols-2">
                    {presetAmounts.map((preset) => (
                        <button
                            key={preset.value}
                            onClick={() => handlePresetClick(preset.value)}
                            disabled={isProcessing}
                            className={cn(
                                'group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all',
                                selectedAmount === preset.value
                                    ? 'border-primary bg-primary/10 shadow-lg'
                                    : 'border-border hover:border-primary/50 hover:bg-muted',
                                isProcessing && 'opacity-50 cursor-not-allowed'
                            )}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="text-2xl font-bold text-foreground">
                                        {preset.label}
                                    </div>
                                    <div className="mt-1 text-sm text-muted-foreground">
                                        {preset.description}
                                    </div>
                                </div>
                                {selectedAmount === preset.value && (
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                                        <Check className="h-4 w-4 text-primary-foreground" />
                                    </div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <Label htmlFor="custom-amount" className="text-lg font-semibold">
                    Or Enter Custom Amount
                </Label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted-foreground">
                        ₹
                    </span>
                    <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => handleCustomChange(e.target.value)}
                        className="pl-10 text-xl h-14"
                        min={minimumAmount}
                        disabled={isProcessing}
                    />
                </div>
                <p className="text-sm text-muted-foreground">
                    Minimum donation: ₹{minimumAmount}
                </p>
            </div>

            <div className="space-y-4 border-t pt-6">
                <h3 className="text-lg font-semibold text-foreground">Your Details</h3>

                <div className="space-y-2">
                    <Label htmlFor="donor-name">Full Name *</Label>
                    <Input
                        id="donor-name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isProcessing}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="donor-email">Email Address *</Label>
                    <Input
                        id="donor-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isProcessing}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="donor-phone">Phone Number (Optional)</Label>
                    <Input
                        id="donor-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={isProcessing}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="donor-pan">PAN Number *</Label>
                    <Input
                        id="donor-pan"
                        type="text"
                        placeholder="ABCDE1234F"
                        value={panNumber}
                        onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                        disabled={isProcessing}
                        maxLength={10}
                        required
                    />
                    <p className="text-xs text-muted-foreground">Required for tax deduction certificate</p>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="donor-address">Address (Optional)</Label>
                    <Input
                        id="donor-address"
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        disabled={isProcessing}
                    />
                </div>
            </div>

            <div className="rounded-lg bg-accent/10 p-4 text-sm">
                <div className="flex items-start space-x-2">
                    <Check className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                    <p className="text-muted-foreground">
                        Your donation is eligible for tax deductions under Section 80G.
                        You will receive a donation receipt via email.
                    </p>
                </div>
            </div>

            <Button
                size="lg"
                className="w-full text-lg h-14"
                onClick={handleDonate}
                disabled={!selectedAmount || selectedAmount < minimumAmount || isProcessing}
            >
                {isProcessing ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>
                        <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                        Donate {selectedAmount ? `₹${selectedAmount.toLocaleString()}` : ''} Now
                    </>
                )}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
                Secure payment powered by Razorpay
            </p>
        </div>
    );
}

interface DonationSuccessProps {
    amount: number;
    paymentId?: string;
    donorName: string;
    donorEmail: string;
    onReset: () => void;
}

export function DonationSuccess({
    amount,
    paymentId,
    donorName,
    donorEmail,
    onReset,
}: DonationSuccessProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-card p-8 text-center shadow-2xl md:p-12"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="mb-6 flex justify-center"
            >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-primary/20">
                    <Check className="h-12 w-12 text-accent" />
                </div>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 text-3xl font-bold text-foreground"
            >
                Thank You for Your Donation!
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 text-lg text-muted-foreground"
            >
                Your generous contribution of{' '}
                <span className="font-bold text-primary">
                    ₹{amount.toLocaleString()}
                </span>{' '}
                will help us continue our mission to empower communities.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8 rounded-lg bg-muted p-6 text-left"
            >
                <h3 className="mb-4 text-sm font-semibold text-foreground">
                    Payment Details
                </h3>
                <div className="space-y-2 text-sm">
                    {paymentId && (
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Payment ID:</span>
                            <span className="font-mono text-foreground">{paymentId}</span>
                        </div>
                    )}
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Donor:</span>
                        <span className="text-foreground">{donorName}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span className="text-foreground">{donorEmail}</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
            >
                <p className="text-sm text-muted-foreground">
                    A receipt has been sent to your email address.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button size="lg" onClick={onReset}>
                        Make Another Donation
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => (window.location.href = '/')}
                    >
                        Return to Home
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
}
