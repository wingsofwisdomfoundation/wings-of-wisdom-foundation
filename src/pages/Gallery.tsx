import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/education/classroom-1.jpg",
    category: "education",
    title: "Classroom Learning Session",
    isCarousel: true,
    carouselImages: [
      "/images/gallery/education/classroom-1.jpg",
      "/images/gallery/education/classroom-2.jpg",
      "/images/gallery/education/classroom-3.jpg",
      "/images/gallery/education/classroom-4.jpg",
      "/images/gallery/education/classroom-5.jpg",
    ]
  },
  // { id: 2, src: "/placeholder.svg", category: "health", title: "Mobile Health Camp" },
  {
    id: 3,
    src: "/images/gallery/women/women-empowerment-1.jpg",
    category: "women",
    title: "Women's Empowerment Workshop",
    isCarousel: true,
    carouselImages: [
      "/images/gallery/women/women-empowerment-1.jpg",
      "/images/gallery/women/women-empowerment-2.jpg",
      "/images/gallery/women/women-empowerment-3.jpg",
      "/images/gallery/women/women-empowerment-4.jpg",
      "/images/gallery/women/women-empowerment-5.png",
      "/images/gallery/women/women-empowerment-6.jpg",
    ]
  },
  {
    id: 5,
    src: "/images/gallery/community/community-1.jpg",
    category: "community",
    title: "Community Development Meeting",
    isCarousel: true,
    carouselImages: [
      "/images/gallery/community/community-1.jpg",
      "/images/gallery/community/community-2.jpg",
      "/images/gallery/community/community-3.jpg",
      "/images/gallery/community/community-4.jpg",
      "/images/gallery/community/community-5.jpg",
      "/images/gallery/community/community-6.jpg",
      "/images/gallery/community/community-7.jpg",
      "/images/gallery/community/community-8.jpg",
    ]
  },
  // { id: 6, src: "/placeholder.svg", category: "health", title: "Medical Check-up Drive" },
];

const categories = [
  { value: "all", label: "All" },
  { value: "education", label: "Education" },
  // { value: "health", label: "Healthcare" },
  { value: "women", label: "Women Empowerment" },
  { value: "community", label: "Community Development" },
];

// Carousel Component for sliding images
const ImageCarousel = ({ images, title, category, onClick }: { images: string[]; title: string; category: string; onClick: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Don't auto-slide when paused

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          className="absolute inset-0 object-cover w-full h-full"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-bold text-white text-lg mb-1 drop-shadow-lg">
          {title}
        </h3>
        <p className="text-sm text-white/80 capitalize">
          {category.replace('-', ' ')}
        </p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                Our Impact in Pictures
              </Badge>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text">
              Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Capturing moments of impact, stories of transformation, and glimpses of hope
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
            {/* Modern Tab Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TabsList className="flex flex-wrap justify-center w-full max-w-4xl mx-auto gap-3 h-auto p-3 mb-16 bg-card/50 backdrop-blur-sm border border-border/50">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <TabsTrigger
                      value={category.value}
                      className="text-sm px-4 py-2.5 whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white transition-all duration-300"
                    >
                      {category.label}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>

            {/* Image Grid with Animation */}
            <TabsContent value={selectedCategory} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className={
                    filteredImages.length === 1
                      ? "max-w-3xl mx-auto"
                      : "grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  }
                >
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      layout
                    >
                      <Card
                        className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-2xl transition-all duration-500"
                      >
                        {image.isCarousel && image.carouselImages ? (
                          <ImageCarousel
                            images={image.carouselImages}
                            title={image.title}
                            category={image.category}
                            onClick={() => { }}
                          />
                        ) : (
                          <div className="relative aspect-[4/3] overflow-hidden">
                            {/* Image */}
                            <img
                              src={image.src}
                              alt={image.title}
                              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Zoom Icon */}
                            <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <ZoomIn className="h-4 w-4 text-white" />
                              </div>
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="font-bold text-white text-lg mb-1 drop-shadow-lg">
                                {image.title}
                              </h3>
                              <p className="text-sm text-white/80 capitalize">
                                {image.category.replace('-', ' ')}
                              </p>
                            </div>
                          </div>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Empty State */}
              {filteredImages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <p className="text-muted-foreground text-lg">No images found in this category.</p>
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
