import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const newsArticles = [
  {
    id: 1,
    title: "Wings of Wisdom Foundation Reaches 10,000 Students Milestone",
    outlet: "The Times of India",
    date: "March 15, 2024",
    category: "Education",
    excerpt: "Local NGO celebrates a decade of empowering underprivileged children through quality education and mentorship programs.",
    link: "#",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Innovative Health Initiative Brings Medical Care to Rural Communities",
    outlet: "National Herald",
    date: "February 28, 2024",
    category: "Healthcare",
    excerpt: "Mobile health clinics launched by Wings of Wisdom Foundation provide essential healthcare services to remote villages.",
    link: "#",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Women Empowerment Program Creates 500 Entrepreneurs",
    outlet: "Economic Times",
    date: "January 20, 2024",
    category: "Empowerment",
    excerpt: "Skill development and microfinance initiatives help rural women become self-reliant business owners.",
    link: "#",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Community Development Project Wins National Recognition",
    outlet: "Indian Express",
    date: "December 10, 2023",
    category: "Awards",
    excerpt: "Foundation's holistic approach to community development recognized with prestigious national award.",
    link: "#",
    image: "/placeholder.svg"
  }
];

const NewsCoverage = () => {
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
              News Coverage
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Stay updated with our latest achievements, initiatives, and impact stories featured in the media
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {article.outlet}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <a
                      href={article.link}
                      className="inline-flex items-center text-accent hover:text-accent/90 font-medium"
                    >
                      Read Full Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsCoverage;
