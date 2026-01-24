import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, GraduationCap, TrendingUp, School, UserCheck, Eye, Vote } from "lucide-react";
import balSansadImage from "@/assets/bal-sansad.jpg";
import sunehraKalImage from "@/assets/sunehra-kal.jpg";

const projects = {
  "bal-sansad": {
    title: "Bal Sansad / Children's Parliament",
    tagline: "Empowering Tomorrow's Democratic Leaders",
    image: balSansadImage,
    description: "Bal Sansad is our flagship educational program that introduces students to democratic processes and governance through simulated parliamentary sessions. Children learn the fundamentals of democracy, debate, leadership, and civic responsibility.",
    objectives: [
      "Develop democratic values and understanding of governance",
      "Enhance public speaking and debate skills",
      "Foster leadership qualities and civic responsibility",
      "Promote student participation in school decision-making",
    ],
    // TODO: Old stats commented out
    // impact: [
    //   { icon: Users, label: "Students Involved", value: "30,000+" },
    //   { icon: GraduationCap, label: "Schools Participated", value: "150+" },
    //   { icon: TrendingUp, label: "Elections Conducted", value: "200+" },
    //   { icon: Heart, label: "Years Active", value: "10+" },
    // ],
    impact: [
      { icon: School, label: "Govt. Schools Participated", value: "50+" },
      { icon: TrendingUp, label: "Project Implemented in Schools", value: "60+" },
      { icon: UserCheck, label: "Teachers Participated and Trained", value: "119+" },
      { icon: UserCheck, label: "Teachers Involved in Bal Sansad roll out", value: "300+" },
      { icon: Users, label: "Students Involved in Bal Sansad", value: "5000+" },
      { icon: Eye, label: "Student's awareness on Bal Sansad", value: "26295+" },
      { icon: Vote, label: "Children Involved in Bal Sansad election process", value: "22000+" },
    ],
    approach: [
      "Formation of student parliaments with elected representatives",
      "Regular parliamentary sessions following democratic procedures",
      "Training workshops on leadership and governance",
      "Integration with school curriculum and activities",
    ],
    outcomes: [
      "Improved confidence and communication skills among students",
      "Enhanced understanding of democratic processes",
      "Development of leadership and decision-making abilities",
      "Greater student engagement in school activities",
    ],
  },
  "sunehra-kal": {
    title: "Sunehra Kal - Bright Future",
    tagline: "Illuminating Paths Through Education",
    image: sunehraKalImage,
    description: "Sunehra Kal is our comprehensive education sponsorship program that provides underprivileged children with access to quality education, learning materials, and mentorship support, ensuring they have the opportunity for a brighter future.",
    objectives: [
      "Provide financial support for education expenses",
      "Ensure access to quality learning materials and resources",
      "Offer mentorship and academic guidance",
      "Reduce dropout rates among underprivileged students",
    ],
    // TODO: Old stats commented out
    // impact: [
    //   { icon: Users, label: "Children Sponsored", value: "500+" },
    //   { icon: GraduationCap, label: "Partner Schools", value: "50+" },
    //   { icon: TrendingUp, label: "Graduation Rate", value: "95%" },
    //   { icon: Heart, label: "Mentors Active", value: "100+" },
    // ],
    impact: [
      { icon: GraduationCap, label: "Children's Education Sponsored", value: "20+" },
      { icon: Heart, label: "Lives Impacted", value: "50+" },
    ],
    approach: [
      "Identifying deserving students through community outreach",
      "Providing scholarships covering tuition, books, and materials",
      "Assigning mentors for academic and personal guidance",
      "Regular monitoring and progress assessments",
    ],
    outcomes: [
      "Significant reduction in dropout rates",
      "Improved academic performance among beneficiaries",
      "Enhanced access to higher education opportunities",
      "Positive impact on family economic situations",
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects[id as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link to="/projects">
            <Button className="mt-4">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay-dark via-overlay-dark/50 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link to="/">
              <Button variant="outline" className="mb-6 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-2 text-lg text-white">{project.tagline}</p>
              <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">About This Project</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {project.impact.map((stat, index) => (
                <div key={stat.label} className="rounded-xl bg-card p-6 text-center shadow-lg">
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground">Project Objectives</h2>
              <ul className="space-y-3">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl bg-warm-gradient p-8"
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground">Our Approach</h2>
              <ul className="space-y-3">
                {project.approach.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-900" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground">Key Outcomes</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="rounded-lg bg-card p-4 shadow">
                    <p className="text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl bg-hero-gradient p-8 text-center"
            >
              <h3 className="mb-4 text-2xl font-bold text-primary-foreground">
                Support This Project
              </h3>
              <p className="mb-6 text-primary-foreground/90">
                Your contribution can help us expand this program and reach more children
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link to="/donate">
                  <Button size="lg" variant="secondary">
                    <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                    Donate Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                    Become a Volunteer
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
