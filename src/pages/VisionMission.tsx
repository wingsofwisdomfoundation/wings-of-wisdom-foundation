import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Heart, Users, Lightbulb, Shield, Handshake, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

const coreValues = [
  {
    icon: Heart,
    title: "Humility & Respect",
    description: "We approach every individual and community with humility, valuing their dignity and perspectives"
  },
  {
    icon: Shield,
    title: "Integrity & Honesty",
    description: "We maintain the highest standards of transparency, honesty, and ethical conduct in all our actions"
  },
  {
    icon: Target,
    title: "Accountability & Sustainability",
    description: "We take responsibility for our impact and ensure our solutions create lasting, sustainable change"
  },
  {
    icon: Handshake,
    title: "Strategic & Collaborative",
    description: "We work strategically with partners and communities to maximize collective impact"
  },
  {
    icon: Zap,
    title: "Perseverance & Resilience",
    description: "We remain committed to our mission despite challenges, adapting and growing stronger"
  }
];

const VisionMission = () => {
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
              Vision & Mission
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Our guiding principles and commitment to creating lasting social change
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We envision children and families from every community equipped with quality education, health, and opportunities to rise to their full potential.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Wings of Wisdom Foundation® is dedicated to changing lives by unlocking potential and inspiring growth for marginalized communities. We work as bridge builders between the development sector and government to provide underprivileged people with equal access to sustainable opportunities in education, health, sanitation, clean water, environment, and equal treatment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="h-full text-center hover:shadow-lg transition-shadow">
                      <CardContent className="pt-8">
                        <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-7 w-7 text-accent" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-muted/50 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Goal</h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              Our aim is to contribute to the Sustainable Development Goals by empowering marginalized communities to achieve lasting change. Working with relevant stakeholders, Wings of Wisdom Foundation® equips families with the access and understanding they need to improve their lives and communities.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default VisionMission;
