import { motion } from "framer-motion";
import { MapPin, TrendingUp, Users, GraduationCap } from "lucide-react";

const regions = [
  {
    name: "Mumbai Metropolitan Region",
    schools: "60+",
    beneficiaries: "20,000+",
    programs: ["Bal Sansad", "Sunehra Kal", "Health Awareness"],
  },
  {
    name: "Pune Region",
    schools: "40+",
    beneficiaries: "15,000+",
    programs: ["Education", "Women Empowerment", "Environmental Protection"],
  },
  {
    name: "Nashik Region",
    schools: "30+",
    beneficiaries: "10,000+",
    programs: ["Bal Sansad", "Health & Wellness", "Skill Development"],
  },
  {
    name: "Nagpur Region",
    schools: "20+",
    beneficiaries: "5,000+",
    programs: ["Education", "Environmental Protection", "Community Development"],
  },
];

const Impact = () => {
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
              Our Impact
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Transforming communities across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Making a Difference
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our work spans multiple regions, touching thousands of lives
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, label: "Active Regions", value: "5", color: "text-primary" },
              { icon: GraduationCap, label: "Partner Schools", value: "3", color: "text-accent" },
              { icon: Users, label: "Total Beneficiaries", value: "13,000+", color: "text-primary" },
              { icon: TrendingUp, label: "Active Programs", value: "4", color: "text-accent" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl bg-card p-8 text-center shadow-lg"
              >
                <stat.icon className={`mx-auto mb-4 h-12 w-12 ${stat.color}`} />
                <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      {/* <section className="bg-warm-gradient py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Regional Reach
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Creating impact across Maharashtra with locally relevant programs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-card p-8 shadow-lg"
              >
                <div className="mb-4 flex items-start space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">{region.name}</h3>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">{region.schools}</div>
                    <div className="text-xs text-muted-foreground">Schools</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{region.beneficiaries}</div>
                    <div className="text-xs text-muted-foreground">Beneficiaries</div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold text-card-foreground">Active Programs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.programs.map((program) => (
                      <span
                        key={program}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Know More Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Want to know more about our impact?
            </h3>
            <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
              Explore detailed information about our active regions, partner institutions, beneficiaries, and programs
            </p>
            <a
              href="/impact-details"
              className="inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Know More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Stories of Change
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Every number represents a life transformed, a family uplifted, and a community strengthened
            </p>
            <div className="rounded-xl bg-hero-gradient p-12">
              <p className="text-lg text-primary-foreground/90">
                "The impact we create is measured not just in numbers, but in the smiles on children's faces,
                the confidence in women's voices, and the hope in communities' futures."
              </p>
              <p className="mt-4 font-semibold text-primary-foreground">- Wings of Wisdom Foundation Team</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Impact;
