import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import balSansadImage from "@/assets/bal-sansad.jpg";
import sunehraKalImage from "@/assets/sunehra-kal.jpg";

const projects = [
  {
    id: "bal-sansad",
    title: "Bal Sansad / Children's Parliament",
    description: "Empowering students with democratic values and leadership skills through simulated parliamentary processes. Students learn governance, debate, and civic responsibility.",
    image: balSansadImage,
    stats: [
      { label: "Schools", value: "50+" },
      { label: "Students", value: "5,000+" },
      { label: "Elections", value: "50+" },
    ],
  },
  {
    id: "sunehra-kal",
    title: "Sunehra Kal - Bright Future",
    description: "Education sponsorship program providing comprehensive support to underprivileged children, ensuring access to quality education and brighter futures.",
    image: sunehraKalImage,
    stats: [
      { label: "Children Sponsored", value: "20+" },
      { label: "Schools", value: "50+" },
      { label: "Graduation Rate", value: "95%" },
    ],
  },
];

export const Projects = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Transformative initiatives making real impact in communities
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group overflow-hidden rounded-xl bg-card shadow-lg transition-all hover:shadow-xl flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-overlay-dark/80 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link to={`/projects/${project.id}`} className="mt-4">
                  <Button className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
