import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Impact from "./pages/Impact";
import ImpactDetails from "./pages/ImpactDetails";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
// import NewsCoverage from "./pages/NewsCoverage";
import Accreditations from "./pages/Accreditations";
import Testimonials from "./pages/Testimonials";
import Partners from "./pages/Partners";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import CampaignsPage from "./pages/CampaignsPage";
import ThematicAreas from "./pages/ThematicAreas";
import VisionMission from "./pages/VisionMission";
import WhoWeAre from "./pages/WhoWeAre";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="wow-foundation-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <div id="main-content" className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/who-we-are" element={<WhoWeAre />} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/thematic-areas" element={<ThematicAreas />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/campaigns" element={<CampaignsPage />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/impact-details" element={<ImpactDetails />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/accreditations" element={<Accreditations />} />
                {/* <Route path="/news" element={<NewsCoverage />} /> */}
                <Route path="/donate" element={<Donate />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
