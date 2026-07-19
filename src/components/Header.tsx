"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { ArrowRight, Menu, X } from "lucide-react";

interface HeaderProps {
  theme?: "light" | "dark"; // light means light text for dark backgrounds
}

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Team", href: "/team" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ theme = "dark" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isScrolled ? "bg-porcelain/90 backdrop-blur-md border-b border-stone/50" : "bg-transparent";
  const textColor = isScrolled || theme === "dark" ? "text-ink" : "text-porcelain";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-350 ease-in-out flex items-center",
          headerBg,
          isScrolled ? "h-16" : "h-24"
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 xl:px-18 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={isScrolled || theme === "dark" ? "/dark.svg" : "/light.svg"} 
              alt="Azure Interiors Logo" 
              className="h-8 md:h-10 w-auto" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link to={link.href}
                className={cn(
                  "text-sm font-sans tracking-wide hover:opacity-70 transition-opacity",
                  textColor
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Start a Project CTA */}
          <div className="hidden md:flex">
            <Link to="/contact"
              className={cn(
                "group flex items-center space-x-2 text-sm font-sans tracking-wide",
                textColor
              )}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2", textColor)}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-stone flex flex-col justify-between px-5 py-8"
          >
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img src="/dark.svg" alt="Azure Interiors Logo" className="h-8 md:h-10 w-auto" />
              </Link>
              <button
                className="p-2 text-ink"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 mt-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={link.href}
                    className="flex items-center space-x-4 text-4xl font-serif text-ink hover:opacity-70 transition-opacity"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-sm font-sans text-olive">0{index + 1}</span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col space-y-4 text-sm font-sans text-ink/70"
            >
              <Link to="/contact" className="text-ink font-medium" onClick={() => setMobileMenuOpen(false)}>
                Begin a Project &rarr;
              </Link>
              <div>
                <p>Raipur, India</p>
                <Link to="#" className="hover:text-ink transition-colors">Instagram</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
