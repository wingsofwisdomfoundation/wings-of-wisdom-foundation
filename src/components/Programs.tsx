import { motion } from "framer-motion";
import { GraduationCap, Heart, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Empowering children through quality education, skill development, and holistic learning experiences.",
    color: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Promoting physical and mental well-being through healthcare access and awareness programs.",
    color: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Supporting women through education, skills training, and economic independence initiatives.",
    color: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: Leaf,
    title: "Environmental Protection",
    description: "Creating sustainable communities through environmental awareness and conservation efforts.",
    color: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
  },
];

export const Programs = () => {
  return (
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
            Our Thematic Areas
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive programs designed to create lasting change in communities
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-lg transition-all hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 transition-opacity group-hover:opacity-100`} />
              
              <div className="relative space-y-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${program.color} ${program.iconColor}`}>
                  <program.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground">
                  {program.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/programs">
            <Button size="lg">
              Explore All Programs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
