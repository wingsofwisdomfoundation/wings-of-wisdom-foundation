import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const aboutSubItems = [
  { name: "Who We Are", path: "/who-we-are" },
  { name: "Vision & Mission", path: "/vision-mission" },
  { name: "Our Team", path: "/team" },
  { name: "Accreditations", path: "/accreditations" },
];

const workSubItems = [
  { name: "Thematic Areas", path: "/thematic-areas" },
  { name: "Programs", path: "/programs" },
  { name: "Campaigns", path: "/campaigns" },
  { name: "Impact Stories", path: "/impact" },
];

const mediaSubItems = [
  { name: "Gallery", path: "/gallery" },
  // { name: "News Coverage", path: "/news" },
  { name: "Testimonials", path: "/testimonials" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = (path: string) => {
    // If clicking the same page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => handleLinkClick("/")} className="flex items-center space-x-3">
            <img
              src="/logo.jpeg"
              alt="Wings of Wisdom Foundation Logo"
              className="h-16 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-foreground">
                Wings of Wisdom
              </span>
              <span className="text-xs font-bold text-black dark:text-white">Foundation®</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                isActive("/") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    isActive("/who-we-are") || isActive("/vision-mission") || isActive("/team") || isActive("/accreditations")
                      ? "text-primary" : "text-muted-foreground"
                  )}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {aboutSubItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted",
                                isActive(item.path) ? "bg-muted text-primary" : "text-muted-foreground"
                              )}
                            >
                              <div className="text-sm font-medium">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    isActive("/thematic-areas") || isActive("/programs") || isActive("/campaigns") || isActive("/impact")
                      ? "text-primary" : "text-muted-foreground"
                  )}>
                    Our Work
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {workSubItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted",
                                isActive(item.path) ? "bg-muted text-primary" : "text-muted-foreground"
                              )}
                            >
                              <div className="text-sm font-medium">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    isActive("/gallery") || isActive("/news") || isActive("/testimonials")
                      ? "text-primary" : "text-muted-foreground"
                  )}>
                    Media
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {mediaSubItems.map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted",
                                isActive(item.path) ? "bg-muted text-primary" : "text-muted-foreground"
                              )}
                            >
                              <div className="text-sm font-medium">{item.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/partners"
              onClick={() => handleLinkClick("/partners")}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                isActive("/partners") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Partners
            </Link>

            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Contact
            </Link>

            <ThemeToggle />

            <Link to="/donate" onClick={() => handleLinkClick("/donate")}>
              <Button size="sm" className="ml-4">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-foreground hover:bg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => { handleLinkClick("/"); setIsOpen(false); }}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/") ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted"
                )}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-foreground">About</div>
                {aboutSubItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-6 py-2 text-sm transition-colors",
                      isActive(item.path) ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Our Work Dropdown */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-foreground">Our Work</div>
                {workSubItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-6 py-2 text-sm transition-colors",
                      isActive(item.path) ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Media Dropdown */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-foreground">Media</div>
                {mediaSubItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-6 py-2 text-sm transition-colors",
                      isActive(item.path) ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/partners"
                onClick={() => { handleLinkClick("/partners"); setIsOpen(false); }}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/partners") ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted"
                )}
              >
                Partners
              </Link>

              <Link
                to="/contact"
                onClick={() => { handleLinkClick("/contact"); setIsOpen(false); }}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/contact") ? "bg-muted text-primary" : "text-muted-foreground hover:bg-muted"
                )}
              >
                Contact
              </Link>

              <div className="flex items-center justify-center mt-4">
                <ThemeToggle />
              </div>

              <Link to="/donate" onClick={() => { handleLinkClick("/donate"); setIsOpen(false); }}>
                <Button className="mt-2 w-full">Donate Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
