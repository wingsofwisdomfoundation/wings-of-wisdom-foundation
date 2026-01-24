import { motion } from "framer-motion";
import { GraduationCap, Heart, Users, Leaf, BookOpen, Stethoscope, Briefcase, TreePine } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Comprehensive educational programs ensuring quality learning for all children.",
    initiatives: [
      "Bal Sansad - Children's Parliament for democratic education",
      "Sunehra Kal - Education sponsorship for underprivileged children",
      "Teacher training and capacity building programs",
      "Digital literacy and skill development workshops",
    ],
    color: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
    image: "/images/programs/education.jpg",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Promoting physical and mental well-being through accessible healthcare.",
    initiatives: [
      "Health awareness campaigns and screenings",
      "Nutrition and hygiene education programs",
      "Mental health support and counseling services",
      "Drug abuse prevention - 'A Drug-Free Heart is a Happy Heart'",
    ],
    color: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
    image: "/images/programs/health-wellness.jpg",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Supporting women through skills, education, and economic independence.",
    initiatives: [
      "Vocational training and skill development",
      "Women's health and rights awareness",
      "Self-help group formation and microfinance",
      "Leadership development programs",
    ],
    color: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
    image: "/images/programs/women-empowerment.jpg",
  },
  {
    icon: Leaf,
    title: "Environmental Protection",
    description: "Creating sustainable communities through environmental stewardship.",
    initiatives: [
      "Environmental awareness and education campaigns",
      "Tree plantation and conservation drives",
      "Waste management and recycling programs",
      "Sustainable agriculture and water conservation",
    ],
    color: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
    image: "/images/programs/environmental-protection.jpg",
  },
];

const Programs = () => {
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
              Our Programs
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive initiatives addressing community needs through four thematic areas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${program.color} ${program.iconColor}`}>
                      <program.icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h2 className="mb-3 text-3xl font-bold text-foreground">
                        {program.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {program.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Key Initiatives:</h3>
                      <ul className="space-y-2">
                        {program.initiatives.map((initiative, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className={`mt-1.5 h-1.5 w-1.5 rounded-full ${program.iconColor === 'text-primary' ? 'bg-primary' : 'bg-accent'}`} />
                            <span className="text-muted-foreground">{initiative}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="group rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-warm-gradient py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Program Reach
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-white">
              Working across four regions to create sustainable impact
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Active Regions", value: "5" },
                { label: "Partner Schools", value: "3" },
                { label: "Beneficiaries", value: "11,000+" },
                { label: "Active Programs", value: "4" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl bg-card p-8 shadow-lg"
                >
                  <div className="text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Programs;
