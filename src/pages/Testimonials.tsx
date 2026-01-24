import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  // All testimonials removed
];

const Testimonials = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Testimonials
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Hear from the people whose lives we've touched and partners who trust our mission
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Certificate of Appreciation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Certificate of Appreciation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Awarded by the Government of Punjab
              </p>
            </div>

            <Card className="overflow-hidden shadow-xl border-2 border-primary/20">
              <CardContent className="p-4 md:p-6">
                <div className="relative group">
                  <img
                    src="/images/certificate-appreciation.jpg"
                    alt="Certificate of Appreciation from Government of Punjab"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="mt-6 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-center">
                    Certificate of Appreciation awarded to{" "}
                    <span className="font-bold text-primary">Wings of Wisdom Foundation®</span>{" "}
                    by{" "}
                    <span className="font-semibold text-foreground">
                      Deputy Commissioner of Ludhiana, Government of Punjab
                    </span>{" "}
                    on successful completion of Capacity Building Workshop and Launching Bal Sansad
                    as a Pilot Project in the district of Ludhiana, Punjab.
                  </p>
                  <div className="mt-4 pt-4 border-t border-primary/20 text-center">
                    <p className="text-sm font-semibold text-primary">Government of Punjab</p>
                    <p className="text-xs text-muted-foreground mt-1">Ludhiana District</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Share Your Story?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Your experience matters to us. If you've been part of our programs or partnered with us,
              we'd love to hear about your journey and impact.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
