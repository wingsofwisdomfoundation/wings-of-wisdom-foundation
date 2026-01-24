import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

// TODO: Update with actual journey milestones when available
// const milestones = [
//   { year: "2015", event: "Wings of Wisdom Foundation® established" },
//   { year: "2016", event: "First education center opened, reaching 50 children" },
//   { year: "2018", event: "Launched healthcare initiatives in 5 villages" },
//   { year: "2020", event: "Reached 5,000+ beneficiaries across programs" },
//   { year: "2022", event: "Expanded to 15 districts, partnered with 20+ organizations" },
//   { year: "2024", event: "Impacted 25,000+ lives with sustainable interventions" }
// ];


const WhoWeAre = () => {
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
              Who We Are
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              A story of compassion, commitment, and community transformation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-16">
            {/* Team Photo - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group h-full overflow-hidden hover:shadow-3xl transition-shadow duration-300">
                <div className="relative w-full h-full">
                  <img
                    src="/images/team-photo.jpg"
                    alt="Wings of Wisdom Foundation Team"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      objectPosition: 'center 30%',
                      minHeight: '500px',
                      maxHeight: '600px'
                    }}
                  />
                </div>
              </Card>
            </motion.div>

            {/* Our Story - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardContent className="pt-8">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Wings of Wisdom Foundation® is a non-profit organization registered under section 8 of the Companies Act, 2013. We are registered under the Darpan portal of NITI Aayog.
                    </p>
                    <p>
                      The founder members of the organization represent the four regions of our country and aim to be the bridge builders in the development sector to overcome challenges by increasing opportunities for the marginalized communities to access equal privileges in the society within the constitutional framework. The organization adapts standard operating procedures of the government in fulfilling fundamental requirements of the needy with a committed and professional team of WoWF.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* TODO: Uncomment and update when journey milestones are available */}
          {/* <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Foundation at a Glance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Calendar className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">2</h3>
                  <p className="text-muted-foreground">Years of Impact</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <MapPin className="h-10 w-10 text-secondary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">8</h3>
                  <p className="text-muted-foreground">Districts Covered</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Users className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Lives Impacted</p>
                </CardContent>
              </Card>
              {/* <Card className="text-center">
                <CardContent className="pt-8">
                  <Award className="h-10 w-10 text-support mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">50+</h3>
                  <p className="text-muted-foreground">Team Members</p>
                </CardContent>
              </Card> */}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default WhoWeAre;
