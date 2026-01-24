import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, ChevronLeft, ChevronRight } from "lucide-react";
import heroEducation from "@/assets/hero-education.jpg";
import balSansad from "@/assets/bal-sansad.jpg";
import sunehraKal from "@/assets/sunehra-kal.jpg";
import campaignHealth from "@/assets/campaign-health.jpg";
import campaignSmile from "@/assets/campaign-smile.jpg";

const heroImages = [
  { src: heroEducation, alt: "Children learning in classroom with teacher" },
  { src: balSansad, alt: "Bal Sansad - Children's Parliament" },
  { src: sunehraKal, alt: "Sunehra Kal - Education Sponsorship" },
  { src: campaignHealth, alt: "Health Campaign" },
  { src: campaignSmile, alt: "Smile Campaign" },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, []);



  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />

      <div className="container relative mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center space-x-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent-foreground w-fit">
              <Heart className="h-4 w-4" />
              <span>Making a Difference Since Inception</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Empowering Communities Through Education & Development
            </h1>

            <p className="text-lg text-primary-foreground/90 md:text-xl">
              Wings of Wisdom Foundation® bridges developmental gaps through holistic programs in education, health, women empowerment, and environmental protection.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link to="/donate">
                <Button size="lg" className="group w-full sm:w-auto">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 md:grid-cols-3">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-primary-foreground/80">Schools Participated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5,000+</div>
                <div className="text-sm text-primary-foreground/80">Students Involved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-sm text-primary-foreground/80">Active Regions</div>
              </div>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              {/* Carousel Images */}
              <div className="relative aspect-video overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={currentIndex}
                    src={heroImages[currentIndex].src}
                    alt={heroImages[currentIndex].alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 left-6 right-6 rounded-xl bg-card p-6 shadow-xl md:left-auto md:right-12 md:w-64"
            >
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
