import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Shield } from "lucide-react";
import campaignSmileImage from "@/assets/campaign-smile.jpg";
import campaignHealthImage from "@/assets/campaign-health.jpg";

const campaigns = [
  {
    icon: Heart,
    title: "Smile of Every Child",
    subtitle: "Ending Child Labour",
    description: "Working to eliminate child labour and ensure every child has access to education and a safe childhood.",
    image: campaignSmileImage,
    color: "from-accent/80 to-primary/80",
  },
  {
    icon: Shield,
    title: "A Drug-Free Heart is a Happy Heart",
    subtitle: "Youth Awareness Campaign",
    description: "Preventive education program empowering youth to make healthy choices and stay drug-free.",
    image: campaignHealthImage,
    color: "from-primary/80 to-accent/80",
  },
];

export const Campaigns = () => {
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
            Active Campaigns
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join us in creating awareness and driving positive change
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative h-96">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${campaign.color} opacity-90`} />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-primary-foreground">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/20 backdrop-blur-sm">
                  <campaign.icon className="h-6 w-6" />
                </div>
                
                <h3 className="mb-2 text-2xl font-bold">
                  {campaign.title}
                </h3>
                
                <p className="mb-4 text-sm font-medium opacity-90">
                  {campaign.subtitle}
                </p>
                
                <p className="mb-6 text-sm opacity-90">
                  {campaign.description}
                </p>

                <Link to="/donate">
                  <Button variant="secondary" className="w-full">
                    Support This Campaign
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
