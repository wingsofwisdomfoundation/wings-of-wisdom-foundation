import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-foreground/90">
              We'd love to hear from you. Reach out to us for partnerships, volunteering, or any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground">
                  Feel free to reach out through any of these channels. We're here to help and answer any questions you may have.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      Omaxe, Sector - 43,<br />
                      Faridabad 121003, IN
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-primary/20">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@wingsofwisdomfoundation.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 8851471685</p>
                  </div>
                </div>
              </div>

              {/* <div className="rounded-xl bg-warm-gradient p-6">
                <h3 className="mb-3 font-semibold text-foreground">Office Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div> */}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl bg-card p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-card-foreground">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXX XXX XXXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
