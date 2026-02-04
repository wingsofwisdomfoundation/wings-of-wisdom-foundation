import { motion } from "framer-motion";
import { MapPin, GraduationCap, Users, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ImpactDetails = () => {
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
                            Detailed Impact Overview
                        </h1>
                        <p className="text-xl text-primary-foreground/90">
                            Comprehensive breakdown of our reach and impact across regions
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Detailed Impact Information */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Active Regions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex"
                        >
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <MapPin className="h-6 w-6 text-primary" />
                                        Active Regions
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {["Punjab", "Odisha", "Delhi/NCR", "Haryana", "Manipur"].map((region) => (
                                            <li key={region} className="flex items-start">
                                                <span className="mr-2 text-primary">•</span>
                                                <span className="text-muted-foreground">{region}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Partner Schools and Institutions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex"
                        >
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <GraduationCap className="h-6 w-6 text-accent" />
                                        Partner Schools and Institutions
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {[
                                            "DPS (Delhi Public School)",
                                            "Ryan International School",
                                            "United School of Business Management"
                                        ].map((institution) => (
                                            <li key={institution} className="flex items-start">
                                                <span className="mr-2 text-accent">•</span>
                                                <span className="text-muted-foreground">{institution}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Beneficiaries */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex"
                        >
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <Users className="h-6 w-6 text-primary" />
                                        Beneficiaries
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="rounded-lg bg-primary/10 p-4">
                                            <div className="text-2xl font-bold text-primary">1,500+</div>
                                            <div className="text-sm text-muted-foreground">Direct Beneficiaries</div>
                                        </div>
                                        <div className="rounded-lg bg-accent/10 p-4">
                                            <div className="text-2xl font-bold text-accent">12,000+</div>
                                            <div className="text-sm text-muted-foreground">Indirect Beneficiaries</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Active Programs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex"
                        >
                            <Card className="h-full w-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3">
                                        <Target className="h-6 w-6 text-accent" />
                                        Active Programs
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {[
                                            "Bal Sansad Program",
                                            "Sunhera Kal Program",
                                            "Trainings to Schools on POCSO",
                                            "Widow Empowerment Programs"
                                        ].map((program) => (
                                            <li key={program} className="flex items-start">
                                                <span className="mr-2 text-accent">•</span>
                                                <span className="text-muted-foreground">{program}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ImpactDetails;
