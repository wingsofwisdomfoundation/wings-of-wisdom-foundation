import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const campaigns = [
  {
    id: 1,
    title: "Bal Sansad: Child Parliament",
    subtitle: "Empowering Young Leaders",
    description: "Wings of Wisdom Foundation® believes that children are not just the citizens of tomorrow, but active citizens of today. Our 'Bal Sansad' (Children's Parliament) initiative is designed to create a democratic platform where children can voice their opinions, understand their rights, and actively participate in the governance of their schools and communities. In many marginalized communities, children remain unheard and are often excluded from decisions that directly affect their lives. The Bal Sansad empowers them to identify problems—ranging from school hygiene to community safety—and work collectively to find solutions. By simulating a parliamentary environment, we instill values of leadership, responsibility, and civic duty from a young age. This initiative aligns with the principles of the United Nations Convention on the Rights of the Child (UNCRC), specifically the right to participation. By fostering critical thinking and confidence, Wings of Wisdom Foundation® aims to nurture a generation of aware, articulate, and socially responsible leaders who will strengthen the roots of our democracy and drive positive social change.",
    image: "/images/campaigns/bal-sansad.jpg",
  },
  {
    id: 2,
    title: "Say No to Drugs",
    subtitle: "Drug Abuse Prevention",
    description: "Wings of Wisdom Foundation® is dedicated to promoting a drug-free life, emphasizing that 'A Drug-Free Heart is the Happiest Heart.' Our mission is to connect a drug-free lifestyle with happiness, focusing on the crucial need for preventive education among the youth of our country. We work primarily in the northern and north-eastern parts of India and are committed to raising awareness about the dangers of drug and alcohol abuse. We believe that with proper education, no child will be tempted to take such harmful paths. To achieve this, we have conducted various school awareness programs, one-on-one meetings with children aged 8-18, and informative webinars. With an estimated 8.5 lakh people injecting drugs in India, our objective is to create a sense of urgency among stakeholders about the importance of education as a tool to prevent substance abuse. This initiative aims to control the incidence and spread of substance abuse by educating people about its harmful effects, ensuring that the younger generation is well-informed and empowered to make healthy choices.",
    image: "/images/campaigns/say-no-to-drugs.jpg",
  },
  {
    id: 3,
    title: "Operation Smile",
    subtitle: "Ending Child Labour in India",
    description: "Wings of Wisdom Foundation® is launching the campaign titled 'SMILE OF EVERY CHILD'. The campaign focusses on taking initiatives on ending Child Labour in India. Most children are forced to work in inhuman and degrading working conditions and their employers do whatever is necessary to make them completely invisible and are thus able to exercise absolute control over them. The health and wellbeing of child laborers is always at risk, and they usually end up being trapped in a vicious cycle of poverty, ignorance, and bondage. The Sustainable Development Goals (SDGs), adopted by world leaders in 2015, include a renewed global commitment to ending child labour. Specifically, target 8.7 of the Sustainable Development Goals calls on the global community to 'Take immediate and effective measures to secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers', and by 2025 end child labour in all its forms.",
    image: "/images/campaigns/smile-of-every-child.jpg",
  },
  {
    id: 4,
    title: "Sunehra Kal",
    subtitle: "Education Sponsorship for Underprivileged Children",
    description: "Wings of Wisdom Foundation® is driving the 'Sunehra Kal' initiative with a singular vision: to ensure that financial instability never becomes a barrier to a child's education. We are dedicated to sponsoring the education of underprivileged children, ensuring they have the resources to stay in school and dream of a brighter future. Education is the most powerful tool to break the vicious cycle of poverty, yet millions of children in India are forced to drop out due to economic hardships. Without intervention, these children are often pushed into child labour or early marriage, denying them the dignity and opportunities they deserve. 'Sunehra Kal' steps in to provide scholarships, school supplies, and tuition support to bridge this gap. Our objective is to support the Right to Education Act (RTE) by ensuring that quality education is accessible to the most vulnerable sections of society. We believe that by investing in a child's education today, we are investing in nation-building. Through 'Sunehra Kal,' we are not just funding schooling; we are crafting a golden tomorrow where every child has the agency to write their own destiny.",
    image: "/images/campaigns/sunehra-kal.png",
  }
];

const CampaignsPage = () => {
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
              Active Campaigns
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Join our mission to transform lives. Every contribution brings us closer to our goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Image - alternates left/right */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content - alternates right/left */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                  <div>
                    <motion.h2
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {campaign.title}
                    </motion.h2>
                    <motion.p
                      className="text-xl md:text-2xl text-primary font-semibold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {campaign.subtitle}
                    </motion.p>
                  </div>

                  <motion.p
                    className="text-muted-foreground leading-relaxed text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {campaign.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Link to="/donate">
                      <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                        Support This Campaign
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CampaignsPage;
