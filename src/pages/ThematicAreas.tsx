import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, HeartPulse, UserCheck, Baby, Leaf, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const thematicAreas = [
  {
    icon: GraduationCap,
    title: "Education",
    color: "text-primary",
    description: "Quality education for underprivileged children through scholarships, learning materials, and innovative teaching methods.",
    initiatives: [
      "Scholarship programs for meritorious students",
      "Digital literacy and computer education",
      "Library and learning resource centers",
      "Teacher training and capacity building",
      "After-school tutoring and mentorship"
    ]
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    color: "text-support",
    description: "Accessible and affordable healthcare services for marginalized communities, focusing on preventive and curative care.",
    initiatives: [
      "Mobile health camps in rural areas",
      "Maternal and child health programs",
      "Health awareness and disease prevention",
      "Medicine distribution and support",
      "Collaboration with medical institutions"
    ]
  },
  {
    icon: UserCheck,
    title: "Women Empowerment",
    color: "text-secondary",
    description: "Enabling women to become self-reliant through skill development, entrepreneurship training, and financial inclusion.",
    initiatives: [
      "Vocational skill training programs",
      "Microfinance and self-help groups",
      "Entrepreneurship development",
      "Legal awareness and rights education",
      "Leadership development workshops"
    ]
  },
  {
    icon: Baby,
    title: "Child Development",
    color: "text-accent",
    description: "Holistic development of children focusing on education, nutrition, protection, and participation rights.",
    initiatives: [
      "Child parliament (Bal Sansad) programs",
      "Nutrition and health monitoring",
      "Child protection and safety awareness",
      "Sports and cultural activities",
      "Life skills and personality development"
    ]
  },
  {
    icon: Leaf,
    title: "Environmental Protection",
    color: "text-accent",
    description: "Empowering communities to adopt sustainable practices that reverse climate change and secure a healthy environment for future generations.",
    initiatives: [
      "Tree plantation and green cover expansion drives",
      "Community waste management and recycling awareness",
      "Water conservation and rainwater harvesting projects",
      "Workshops on sustainable living and climate change",
      "Promotion of eco-friendly practices in daily life"
    ]
  },
  {
    icon: Handshake,
    title: "Partnership",
    color: "text-secondary",
    description: "Building strong global collaborations and cooperation to ensure inclusive development and the realization of Sustainable Development Goals.",
    initiatives: [
      "Collaboration with Government bodies and local administration",
      "Corporate Social Responsibility (CSR) partnerships",
      "Networking with NGOs and civil society organizations",
      "Community engagement and stakeholder meetings",
      "Volunteer exchange and capacity-building programs"
    ]
  }
];

const ThematicAreas = () => {
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
              Thematic Areas
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Our comprehensive approach to sustainable development spans multiple interconnected areas
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {thematicAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center mb-4">
                        <Icon className={`h-7 w-7 ${area.color}`} />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-sm">Key Initiatives:</h4>
                      <ul className="space-y-2">
                        {area.initiatives.map((initiative, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            <span>{initiative}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Integrated Approach</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We believe in holistic development. Our thematic areas are interconnected, ensuring that
              interventions in one area complement and strengthen outcomes in others. This integrated
              approach creates sustainable, long-term impact in the communities we serve.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThematicAreas;
