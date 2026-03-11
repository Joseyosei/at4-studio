import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AT4Logo from "@/assets/AT4_Logo.png";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Projects", path: "/projects" },
  { label: "Expertise", path: "/expertise" },
  { label: "Studio", path: "/studio" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 border-b ${
          scrolled ? "border-foreground/10" : "border-border"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3" aria-label="AT4 Home">
            <img src={AT4Logo} alt="AT4 Logo" className="h-8 w-8 sm:h-9 sm:w-9 rounded-full" />
            <div className="flex flex-col">
              <span className="font-display text-[20px] sm:text-[22px] font-normal text-foreground leading-none">
                AT4
              </span>
              <span className="font-body text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-accent leading-tight mt-0.5">
                Arch-Team 4 Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-[13px] tracking-[0.05em] transition-colors duration-200 pb-1 text-foreground ${
                  location.pathname === link.path
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:origin-left after:transition-transform after:duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Theme Toggle + Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="hidden md:inline-flex font-body text-[13px] text-foreground border-l border-border pl-4 hover:text-accent transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-4 right-4 text-foreground"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col items-center gap-6 sm:gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`font-display text-[36px] sm:text-[48px] font-light ${
                      location.pathname === link.path ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 mt-4"
              >
                <ThemeToggle />
                <Link
                  to="/contact"
                  className="font-body text-[13px] text-accent inline-block"
                >
                  Get In Touch →
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
