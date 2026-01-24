import { motion } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, Mail, FileText } from "lucide-react";

const PrivacyPolicy = () => {
    const sections = [
        {
            icon: Shield,
            title: "Information We Collect",
            content: [
                "Personal information such as name, email address, phone number, and mailing address when you voluntarily provide it through our website, donation forms, or volunteer registration.",
                "Payment information processed securely through third-party payment processors when you make donations.",
                "Usage data including IP address, browser type, device information, and pages visited on our website.",
                "Communication preferences and history of interactions with our organization.",
            ]
        },
        {
            icon: Lock,
            title: "How We Use Your Information",
            content: [
                "To process donations and provide tax receipts as required by law.",
                "To communicate with you about our programs, events, and impact stories.",
                "To respond to your inquiries and provide requested information.",
                "To improve our website, services, and user experience.",
                "To comply with legal obligations and protect our rights.",
                "To send newsletters and updates (only if you have opted in).",
            ]
        },
        {
            icon: Eye,
            title: "Information Sharing and Disclosure",
            content: [
                "We do not sell, trade, or rent your personal information to third parties.",
                "We may share information with trusted service providers who assist in our operations (e.g., payment processors, email service providers) under strict confidentiality agreements.",
                "We may disclose information when required by law or to protect our rights and safety.",
                "Aggregate, non-identifiable data may be shared for research or reporting purposes.",
            ]
        },
        {
            icon: UserCheck,
            title: "Data Security",
            content: [
                "We implement industry-standard security measures to protect your personal information.",
                "All payment transactions are processed through secure, PCI-compliant payment gateways.",
                "Access to personal data is restricted to authorized personnel only.",
                "We regularly review and update our security practices to ensure data protection.",
                "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
            ]
        },
        {
            icon: Mail,
            title: "Your Rights and Choices",
            content: [
                "You have the right to access, update, or delete your personal information by contacting us.",
                "You can opt out of receiving marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.",
                "You can disable cookies in your browser settings, though this may affect website functionality.",
                "You have the right to request a copy of the personal data we hold about you.",
            ]
        },
        {
            icon: FileText,
            title: "Cookies and Tracking Technologies",
            content: [
                "We use cookies and similar technologies to enhance your browsing experience and analyze website traffic.",
                "Essential cookies are necessary for website functionality.",
                "Analytics cookies help us understand how visitors use our website.",
                "You can control cookie preferences through your browser settings.",
            ]
        },
    ];

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
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-primary-foreground/90">
                            Your privacy is important to us. This policy explains how Wings of Wisdom Foundation® collects, uses, and protects your personal information.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl space-y-12">
                        {/* Introduction */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl bg-warm-gradient p-8"
                        >
                            <h2 className="mb-4 text-2xl font-bold text-foreground">Our Commitment to Privacy</h2>
                            <p className="text-white">
                                Wings of Wisdom Foundation® ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, share, and protect information when you visit our website, make donations, volunteer, or otherwise interact with our organization.
                            </p>
                            <p className="mt-4 text-white">
                                By using our website or services, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our website or provide us with your personal information.
                            </p>
                        </motion.div>

                        {/* Policy Sections */}
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="rounded-xl bg-card p-8 shadow-lg"
                                >
                                    <div className="mb-6 flex items-center space-x-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                                            <Icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-card-foreground">{section.title}</h2>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.content.map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}

                        {/* Additional Sections */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl bg-card p-8 shadow-lg"
                        >
                            <h2 className="mb-4 text-2xl font-bold text-card-foreground">Children's Privacy</h2>
                            <p className="text-muted-foreground">
                                Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl bg-card p-8 shadow-lg"
                        >
                            <h2 className="mb-4 text-2xl font-bold text-card-foreground">Third-Party Links</h2>
                            <p className="text-muted-foreground">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl bg-card p-8 shadow-lg"
                        >
                            <h2 className="mb-4 text-2xl font-bold text-card-foreground">Changes to This Privacy Policy</h2>
                            <p className="text-muted-foreground">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our website after such changes constitutes your acceptance of the updated policy.
                            </p>
                        </motion.div>

                        {/* Contact Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl bg-warm-gradient p-8"
                        >
                            <h2 className="mb-4 text-2xl font-bold text-foreground">Contact Us</h2>
                            <p className="mb-4 text-white">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="space-y-2 text-white">
                                <p><strong>Wings of Wisdom Foundation®</strong></p>
                                <p>Omaxe, Sector - 43, Faridabad 121003, IN</p>
                                <p>Email: info@wingsofwisdomfoundation.org</p>
                                <p>Phone: +91 8851471685</p>
                            </div>
                            <p className="mt-6 text-sm text-white">
                                We will respond to your inquiry within a reasonable timeframe and work to address your concerns promptly.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
