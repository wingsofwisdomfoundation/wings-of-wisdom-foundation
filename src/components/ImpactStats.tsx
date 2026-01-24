import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { School, Users, GraduationCap, Vote, Heart, TrendingUp } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  { icon: School, value: 50, suffix: "+", label: "Schools Participated", color: "text-primary" },
  { icon: Users, value: 5000, suffix: "+", label: "Students Involved", color: "text-accent" },
  { icon: GraduationCap, value: 119, suffix: "+", label: "Teachers Trained", color: "text-primary" },
  { icon: Vote, value: 50, suffix: "+", label: "Elections Run", color: "text-accent" },
  { icon: Heart, value: 20, suffix: "+", label: "Education Sponsored", color: "text-primary" },
  { icon: TrendingUp, value: 50, suffix: "+", label: "Lives Impacted", color: "text-accent" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.floor(stepValue * currentStep), value));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl font-bold md:text-5xl">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

export const ImpactStats = () => {
  return (
    <section className="bg-warm-gradient py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white">
            Transforming lives and communities through dedicated action and sustainable development
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card p-8 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="absolute right-4 top-4 opacity-10 transition-all group-hover:scale-110 group-hover:opacity-20">
                <stat.icon className="h-20 w-20" />
              </div>

              <div className="relative space-y-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>

                <div className={stat.color}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-base font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
