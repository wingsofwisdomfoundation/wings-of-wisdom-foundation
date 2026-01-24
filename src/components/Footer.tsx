import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex flex-col items-start space-y-2">
              <img
                src="/logo.jpeg"
                alt="Wings of Wisdom Foundation Logo"
                className="h-20 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight whitespace-nowrap">Wings of Wisdom</span>
                <span className="text-xs font-bold text-black dark:text-white whitespace-nowrap">Foundation®</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering communities through education, health, and sustainable development since our inception.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/programs" className="text-muted-foreground hover:text-primary">Programs</Link></li>
              {/* <li><Link to="/projects" className="text-muted-foreground hover:text-primary">Projects</Link></li> */}
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Omaxe, Sector - 43, Faridabad 121003, IN</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">info@wingsofwisdomfoundation.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+91 8851471685</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for updates on our work.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" type="email" className="text-sm" />
              <Button size="sm">Subscribe</Button>
            </div>
            <div className="flex space-x-3 pt-2">
              <a href="https://www.linkedin.com/company/wings-of-wisdom-foundation/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/wingsofwisdomfoundation/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/people/Wings-of-Wisdom-Foundation/61558672320483/?sk=about" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/wingsofwisdomfoundation" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="X (formerly Twitter)">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@WingsofWisdomFoundation" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wings of Wisdom Foundation®. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            {/* <Link to="/terms" className="hover:text-primary">Terms of Service</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
