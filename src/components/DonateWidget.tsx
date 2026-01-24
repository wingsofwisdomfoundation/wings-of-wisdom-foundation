import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const presetAmounts = [500, 1000, 2500, 5000, 10000];

export const DonateWidget = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  const handlePresetClick = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomChange = (value: string) => {
    setCustomAmount(value);
    setAmount(value ? parseInt(value) : null);
  };

  return (
    <section className="bg-hero-gradient py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-2xl bg-card p-8 shadow-2xl md:p-12">
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                  <Heart className="h-8 w-8 text-primary" fill="currentColor" />
                </div>
              </div>
              
              <h2 className="mb-3 text-3xl font-bold text-card-foreground">
                Make a Difference Today
              </h2>
              
              <p className="text-muted-foreground">
                Your donation helps us continue our mission to empower communities and transform lives
              </p>
            </div>

            <div className="space-y-6">
              {/* Frequency Selection */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Donation Frequency</Label>
                <RadioGroup
                  value={frequency}
                  onValueChange={(value) => setFrequency(value as "once" | "monthly")}
                  className="grid grid-cols-2 gap-3"
                >
                  <Label
                    htmlFor="once"
                    className={cn(
                      "flex cursor-pointer items-center justify-center rounded-lg border-2 p-4 transition-all",
                      frequency === "once"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <RadioGroupItem value="once" id="once" className="sr-only" />
                    <span className="font-medium">One-time</span>
                  </Label>
                  
                  <Label
                    htmlFor="monthly"
                    className={cn(
                      "flex cursor-pointer items-center justify-center rounded-lg border-2 p-4 transition-all",
                      frequency === "monthly"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <RadioGroupItem value="monthly" id="monthly" className="sr-only" />
                    <span className="font-medium">Monthly</span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Preset Amounts */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Select Amount (₹)</Label>
                <div className="grid grid-cols-3 gap-3">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => handlePresetClick(preset)}
                      className={cn(
                        "rounded-lg border-2 p-4 font-semibold transition-all",
                        amount === preset
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      ₹{preset.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="space-y-3">
                <Label htmlFor="custom-amount" className="text-base font-semibold">
                  Or Enter Custom Amount
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => handleCustomChange(e.target.value)}
                    className="pl-8 text-lg"
                  />
                </div>
              </div>

              {/* Tax Benefit Notice */}
              <div className="rounded-lg bg-accent/10 p-4 text-sm text-muted-foreground">
                <Check className="mb-1 inline h-4 w-4 text-accent" /> Your donation is eligible for tax deductions under Section 80G
              </div>

              {/* Donate Button */}
              <Link to="/donate" className="w-full">
                <Button
                  size="lg"
                  className="w-full text-lg"
                >
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  Continue to Donate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <p className="text-center text-sm text-muted-foreground">
                Secure payment powered by Razorpay
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
