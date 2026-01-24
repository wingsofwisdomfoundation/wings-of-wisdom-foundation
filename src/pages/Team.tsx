import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  // Executive Team
  {
    name: "Anuja Naik",
    role: "Founder",
    department: "Executive Team",
    bio: "A dedicated senior management professional who strongly believes in strategic collaborations with individuals, organizations, and Government at the Centre and State. She has 15 years of work experience, and have had the privilege of working with various stakeholders, from the field level to the international level. Successfully facilitated and fostered collaborations with esteemed entities such as National Commissions, State Governments, Central Government, Media houses, Embassies, and like-minded individuals and organizations. She's always open to sharing her learnings and challenges, that can help make our country a better place.",
    avatar: "/images/team/anuja-naik.jpg",
    initials: "AN",
    email: "info@wingsofwisdomfoundation.org",
    linkedin: "https://www.linkedin.com/in/anuja-n-8aab6769/"
  },
  {
    name: "Samuel Datta",
    role: "Co-Founder",
    department: "Executive Team",
    bio: "An experienced professional hailing from a Human Resources and Administration background, who has an unwavering belief in using his expertise to create a positive impact in people's lives. Samuel, with his extensive experience spanning over 20 years in various industries, has chosen to devote the last 12 years to the social sector. His passion lies in educating children and building a sustainable society, as he tirelessly works towards raising awareness and implementing effective practices. Samuel firmly asserts that even the smallest actions have the power to bring about significant change, encouraging others to join him in his noble mission.",
    avatar: "/images/team/samuel-datta.png",
    initials: "SD",
    email: "info@wingsofwisdomfoundation.org",
    linkedin: "https://www.linkedin.com/in/samuel-datta-718639247/"
  },
  {
    name: "Dr. Kandasamy Krishnan",
    role: "Board Member",
    department: "Executive Team",
    bio: "Dr. K. Krishnan is Executive Director of the Foundation for Sustainable Development (FSD) and Convenor of the National Adivasi Solidarity Council. Krishnan is a respected trainer on issues related to tribal rights, labour rights, child rights, welfare legislations, education, livelihoods, environment, and serving as social scientist over 32 years. He is instrumental for prevented child labour and admitted more than 45,000 tribal children into schools, and organized tribal women's self-help groups in 460 villages. Moreover, Krishnan has written many books and received national and international awards for his outstanding work to the tribal society.",
    avatar: "/images/team/dr-krishnan.png",
    initials: "KK",
    email: "info@wingsofwisdomfoundation.org",
    linkedin: "https://www.linkedin.com/in/krishnan-jk-396726199/"
  },
  // Advisory Board
  {
    name: "Shri. A. K Parashar",
    role: "Sr. Advisor",
    department: "Advisory Board",
    bio: "Ex-Joint Registrar (Law), National Human Rights Commission. Recipient of the Human Rights Defender, Justice Ranganath Mishra, Karamveer, and Justice V.R. Krishna Iyer Centenary Award.",
    avatar: "/images/team/ak-parashar.png",
    initials: "AP",
    email: "info@wingsofwisdomfoundation.org",
    linkedin: "https://www.linkedin.com/in/anil-parashar-88092131a/"
  },
  {
    name: "Adv. Prashant Manchanda",
    role: "Sr. Legal Advisor",
    department: "Advisory Board",
    bio: "Experienced Advocate, Supreme Court of India, High Courts and Tribunals. Additional Advocate General, Punjab. Representing Govt. of Punjab in various high stake matter both before Hon'ble Supreme Court and Punjab & Haryana High Court. Additional Standing Counsel, Government of National Capital Territory of Delhi (GNCTD). Legal Advisor- Delhi Legislative Assembly (P&H Committee).",
    avatar: "/images/team/prashant-manchanda.jpg",
    initials: "PM",
    email: "info@wingsofwisdomfoundation.org",
    linkedin: "https://www.linkedin.com/in/prashantmanchanda/"
  },
  {
    name: "Dr. Evangeline Roque Dutta",
    role: "Sr. Advisor",
    department: "Advisory Board",
    bio: "Experienced Public Health and Development Consultant with a demonstrated history of working in the non-profit sector. Skilled in Nonprofit Organizations, community health programs, Monitoring and Evaluation, and Documentation. Strong healthcare and development professional graduated from the University of the Philippines.",
    avatar: "/images/team/evangeline-dutta.jpg",
    initials: "ED",
    email: "info@wingsofwisdomfoundation.org",
    linkedin: "https://www.linkedin.com/in/evangeline-dutta-168a6215/"
  },
  {
    name: "Kanta Mohanty",
    role: "Advisor",
    department: "Advisory Board",
    bio: "Governing Body Member, State Adoption Research Agency, Counsellor, Jawahar Navodaya Vidyalaya, Khordha, Government of India, Social Activist, Training Consultant, and Career Transition Coach. Recipient of the Women Change Maker Odisha Award 2024.",
    avatar: "/images/team/kanta-mohanty.jpg",
    initials: "KM",
    email: "info@wingsofwisdomfoundation.org",
    linkedin: "https://www.linkedin.com/in/kanta-mohanty-8259461a1/"
  }
];

const departments = ["All", "Executive Team", "Advisory Board"];

const Team = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string } | null>(null);

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
              Our Team
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              The people behind Wings of Wisdom Foundation®
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <Card className="group overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Avatar Section */}
                      <div className="flex-shrink-0">
                        <div
                          className="relative cursor-pointer transition-all duration-300 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1 group-hover:scale-105 group-hover:shadow-lg"
                          onClick={() => setSelectedImage({ src: member.avatar, name: member.name })}
                          style={{
                            width: '120px',
                            height: '120px',
                            minWidth: '120px',
                            minHeight: '120px'
                          }}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden bg-white">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 min-w-0">
                        <div className="space-y-3">
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div>
                              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {member.name}
                              </h3>
                              <p className="text-lg font-semibold text-muted-foreground mt-1">
                                {member.role}
                              </p>
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-xs px-3 py-1 w-fit"
                            >
                              {member.department}
                            </Badge>
                          </div>

                          {/* Divider */}
                          <div className="h-px w-full bg-gradient-to-r from-primary/20 via-accent/20 to-transparent" />

                          {/* Bio */}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {member.bio}
                          </p>

                          {/* Social Links */}
                          <div className="flex gap-2 pt-2">
                            <a
                              href={`mailto:${member.email}`}
                              className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center hover:from-primary hover:to-accent hover:text-white transition-all duration-300 hover:scale-110"
                              aria-label="Email"
                            >
                              <Mail className="h-4 w-4" />
                            </a>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center hover:from-primary hover:to-accent hover:text-white transition-all duration-300 hover:scale-110"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference.
              If you share our vision of empowering communities, explore career opportunities with us.
            </p>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
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
              className="relative bg-white rounded-lg overflow-hidden shadow-2xl"
              style={{
                width: '600px',
                height: '600px',
                maxWidth: '90vw',
                maxHeight: '90vh'
              }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="w-full h-full"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{selectedImage.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Team;
