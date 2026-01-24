import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const team = [
  {
    name: "Anuja Naik",
    role: "Founder",
    bio: "Visionary leader dedicated to transforming communities through education and empowerment.",
    avatar: "/images/team/anuja-naik.jpg",
    initials: "AN",
  },
  {
    name: "Samuel Datta",
    role: "Co-Founder",
    bio: "Strategic thinker passionate about sustainable development and social impact.",
    avatar: "/images/team/samuel-datta.png",
    initials: "SD",
  },
  {
    name: "Dr. Kandasamy Krishnan",
    role: "Board Member",
    bio: "Distinguished educator and advisor with decades of experience in social development.",
    avatar: "/images/team/dr-krishnan.png",
    initials: "KK",
  },
];

const About = () => {
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
              About Wings of Wisdom Foundation®
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Bridging developmental gaps and empowering communities since our inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl bg-card p-8 shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-card-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower underprivileged communities through comprehensive programs in education, health, women empowerment, and environmental protection, creating sustainable and lasting positive change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl bg-card p-8 shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-primary/20">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-card-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every individual has access to quality education, healthcare, and opportunities for growth, living in sustainable and inclusive communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl bg-card p-8 shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-card-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, compassion, excellence, and collaboration guide every action we take. We believe in transparency, accountability, and creating sustainable impact through partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-warm-gradient py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
              About Us
            </h2>
            <div className="space-y-6 text-lg text-white">
              <p>
                Wings of Wisdom Foundation® is a non-profit organization registered under section 8 of the Companies Act, 2013. We are registered under the Darpan portal of NITI Aayog. We are accredited U/S 12AA and 80G of the Income Tax Act, 1961.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Dedicated leaders driving change and inspiring communities
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-card p-8 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">
                  <div
                    style={{
                      width: '128px',
                      height: '128px',
                      minWidth: '128px',
                      minHeight: '128px',
                      maxWidth: '128px',
                      maxHeight: '128px',
                      display: 'block',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                      style={{
                        objectPosition: 'center',
                      }}
                    />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">{member.name}</h3>
                <p className="mb-4 text-sm font-medium text-accent">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-medium text-muted-foreground">Recognized & Accredited By</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-lg font-semibold text-foreground">
              <div className="rounded-lg bg-card px-6 py-3 shadow">NITI Aayog</div>
              <div className="rounded-lg bg-card px-6 py-3 shadow">NGO Darpan</div>
              <div className="rounded-lg bg-card px-6 py-3 shadow">Government Aligned</div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
