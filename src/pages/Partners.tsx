import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, HandshakeIcon, Users, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const partnerCategories = [
  {
    title: "Government Partnerships",
    icon: Building2,
    color: "text-primary",
    partners: [
      { name: "Government of Punjab", contribution: "Collaborative initiatives for community development and social welfare", logo: "/images/partners/govt-punjab-logo.png" }
    ]
  },
  // {
  //   title: "Corporate Partners",
  //   icon: Building2,
  //   color: "text-primary",
  //   partners: [
  //     { name: "Tech Solutions India", contribution: "CSR Partnership - Education Infrastructure" },
  //     { name: "Global Finance Corp", contribution: "Financial Literacy Programs" },
  //     { name: "Healthcare Systems Ltd", contribution: "Mobile Health Clinics Support" },
  //     { name: "Green Energy Co", contribution: "Sustainable Development Projects" }
  //   ]
  // },
  {
    title: "NGO Collaborators",
    icon: HandshakeIcon,
    color: "text-secondary",
    partners: [
      { name: "Crowdera Foundation", contribution: "Sustainable Development & Giving Economy Initiatives", logo: "/images/partners/crowdera-logo.png" },
      { name: "Real Action Society", contribution: "Grassroots Social Welfare & Community Empowerment", logo: "/images/partners/real-action-society-logo.jpg" },
      { name: "iVolunteer", contribution: "Volunteer Engagement & Social Leadership Programs", logo: "/images/partners/ivolunteer-logo.png" },
      { name: "ConnectFor", contribution: "Structured Volunteering & NGO Capacity Building", logo: "/images/partners/connectfor-logo.png" }
    ]
  },
  {
    title: "Funders & Supporters",
    icon: Users,
    color: "text-accent",
    partners: [
      { name: "Mr. Kaur Masih", contribution: "Individual Supporter" },
      { name: "Mr. Ashish Mohanty", contribution: "Individual Supporter" },
      { name: "Mr. Sudeep Ghosh", contribution: "Individual Supporter" },
      { name: "Mr. Vishnu Dev", contribution: "Individual Supporter" },
      { name: "Shri. A.K Parashar", contribution: "Individual Supporter" },
      { name: "Mr. George Manas Ranjan", contribution: "Individual Supporter" },
      { name: "Mr. Suman Naik & Mrs. Lipika Naik", contribution: "Individual Supporters" },
      { name: "Ms. Esther", contribution: "Individual Supporter" },
      { name: "Mrs. Parul", contribution: "Individual Supporter" },
      { name: "Mr. Jitendra Awale", contribution: "Individual Supporter" }
    ]
  },
  // {
  //   title: "Institutional Partners",
  //   icon: Users,
  //   color: "text-accent",
  //   partners: [
  //     { name: "State University", contribution: "Research & Impact Assessment" },
  //     { name: "District Administration", contribution: "Government Scheme Implementation" },
  //     { name: "Regional Medical College", contribution: "Healthcare Training & Support" },
  //     { name: "Skill Development Council", contribution: "Vocational Training Certification" }
  //   ]
  // }
];

const Partners = () => {
  const [selectedLogo, setSelectedLogo] = useState<{ src: string; name: string } | null>(null);
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
              Our Partners
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Collaboration amplifies impact. Together with our partners, we create lasting change in communities
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {partnerCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {category.partners.map((partner, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <Card className="hover:shadow-lg transition-shadow h-full">
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              {partner.logo && (
                                <div
                                  className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                                  onClick={() => setSelectedLogo({ src: partner.logo!, name: partner.name })}
                                >
                                  <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="w-16 h-16 object-contain"
                                  />
                                </div>
                              )}
                              <div className="flex-1">
                                <CardTitle className="text-lg">{partner.name}</CardTitle>
                                <CardDescription>{partner.contribution}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Join us in creating sustainable impact. Whether you're a corporation, NGO, or institution,
              we welcome partnerships that align with our mission of empowering communities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Card className="flex-1 min-w-[200px] max-w-[300px]">
                <CardContent className="pt-6 text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">CSR Partnership</h3>
                  <p className="text-sm text-muted-foreground">
                    Fulfill CSR obligations with measurable social impact
                  </p>
                </CardContent>
              </Card>
              <Card className="flex-1 min-w-[200px] max-w-[300px]">
                <CardContent className="pt-6 text-center">
                  <HandshakeIcon className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">NGO Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Combine resources and expertise for greater reach
                  </p>
                </CardContent>
              </Card>
              <Card className="flex-1 min-w-[200px] max-w-[300px]">
                <CardContent className="pt-6 text-center">
                  <Users className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Institutional Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Leverage academic and technical resources
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Lightbox Modal */}
      <AnimatePresence>
        {selectedLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLogo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <button
              onClick={() => setSelectedLogo(null)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-lg overflow-hidden shadow-2xl p-8"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh'
              }}
            >
              <img
                src={selectedLogo.src}
                alt={selectedLogo.name}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-foreground">{selectedLogo.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Partners;
