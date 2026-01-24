import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { DonateForm, DonationSuccess } from '@/components/DonateForm';
import type { DonationResult } from '@/types/razorpay';

interface DonationDetails {
  amount: number;
  paymentId: string;
  donorName: string;
  donorEmail: string;
}

const Donate = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [donationDetails, setDonationDetails] = useState<DonationDetails | null>(null);

  const handleSuccess = (result: DonationResult) => {
    setDonationDetails({
      amount: result.amount || 0,
      paymentId: result.paymentId || '',
      donorName: result.donorName || '',
      donorEmail: result.donorEmail || '',
    });
    setShowSuccess(true);
  };

  const resetForm = () => {
    setShowSuccess(false);
    setDonationDetails(null);
  };

  return (
    <main className="min-h-screen">
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm">
                <Heart className="h-8 w-8 text-primary-foreground" fill="currentColor" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Make a Difference Today
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Your donation helps us empower communities and transform lives across India
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {!showSuccess ? (
              <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-start">
                {/* Left: Razorpay Form */}
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="h-full"
                >
                  <h2 className="text-3xl font-bold text-center mb-6">RazorPay</h2>
                  <div className="bg-card rounded-xl p-8 shadow-lg border-2 border-primary/20 flex-1 flex flex-col">
                    <div className="flex items-center justify-center mb-6">
                      <img
                        src="https://cdn.razorpay.com/static/assets/logo/payment.svg"
                        alt="RazorPay"
                        className="h-16 object-contain"
                      />
                    </div>
                    <DonateForm
                      ngoName="Wings of Wisdom Foundation®"
                      ngoDescription="Donation for community empowerment"
                      ngoLogo="/favicon.ico"
                      themeColor="#1E6F5C"
                      minimumAmount={10}
                      onSuccess={handleSuccess}
                    />
                  </div>
                </motion.div>

                {/* Right: Other Payment Methods */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <h2 className="text-3xl font-bold text-center mb-6">Other Ways to Donate</h2>
                  <div className="space-y-6 flex-1">

                    {/* Bank Transfer */}
                    <div className="bg-card rounded-xl p-8 shadow-lg border-2 border-primary/20">
                      <div className="flex items-center justify-center mb-6">
                        <img
                          src="/images/bank-icon.jpg"
                          alt="Bank Transfer"
                          className="h-24 w-24 object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-6 text-center">Donate via Bank Transfer</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Name</span>
                          <span className="font-semibold text-primary">WINGS OF WISDOM FOUNDATION</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Bank</span>
                          <span className="font-semibold">IDFC First Bank</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">A/C No</span>
                          <span className="font-semibold font-mono">10156996393</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Branch</span>
                          <span className="font-semibold">Gurgaon Galleria Branch, G.F, Unit No - 23 & 24, Gurgaon - 122002</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">IFSC Code</span>
                          <span className="font-semibold font-mono">IDFB0020131</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground">Account Type</span>
                          <span className="font-semibold">Current Account</span>
                        </div>
                      </div>
                    </div>

                    {/* UPI QR Code */}
                    <div className="bg-card rounded-xl p-8 shadow-lg border-2 border-accent/20 flex-1">
                      <div className="flex items-center justify-center mb-6">
                        <img
                          src="/images/qr-icon.png"
                          alt="QR Code"
                          className="h-24 w-24 object-contain"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-6 text-center">Simply Scan and Donate</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-center text-muted-foreground">
                          <span className="font-semibold">Powered by</span> (BHIM) Bharat Interface For Money & (UPI) Unified Payments Interface
                        </p>
                        <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                          <p className="font-semibold">How to donate:</p>
                          <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                            <li>Open your BHIM UPI or any UPI enabled APP</li>
                            <li>Select "Scan & Pay"</li>
                            <li>Scan QR code</li>
                            <li>Enter amount</li>
                            <li>Enter your PIN and Pay</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mx-auto max-w-2xl"
              >
                {donationDetails && (
                  <DonationSuccess
                    amount={donationDetails.amount}
                    paymentId={donationDetails.paymentId}
                    donorName={donationDetails.donorName}
                    donorEmail={donationDetails.donorEmail}
                    onReset={resetForm}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-warm-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Your Impact</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-card p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary">₹100</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Can provide nutritious meals to a child for a week
                </div>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-lg">
                <div className="text-4xl font-bold text-accent">₹500</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Can supply educational materials for a student for a month
                </div>
              </div>
              <div className="rounded-xl bg-card p-6 shadow-lg">
                <div className="text-4xl font-bold text-primary">₹1000</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Can sponsor a complete learning module for a child
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;
