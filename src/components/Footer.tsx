"use client";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-stone pt-24 pb-12 overflow-hidden text-ink">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 xl:px-18 relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-20 border-b border-ink/10">

          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link to="/" className="mb-6 inline-block hover:opacity-80 transition-opacity">
              <img src="/dark.svg" alt="Azure Interiors Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-sm font-sans leading-relaxed max-w-sm">
              Azure Interiors is a Raipur-based interior architecture and design studio creating bespoke residential, hospitality, retail and commercial spaces.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h3 className="text-sm font-sans font-medium uppercase tracking-wider mb-2">Explore</h3>
            <Link to="/about" className="text-sm font-sans hover:opacity-70 transition-opacity">About</Link>
            <Link to="/portfolio" className="text-sm font-sans hover:opacity-70 transition-opacity">Portfolio</Link>
            <Link to="/team" className="text-sm font-sans hover:opacity-70 transition-opacity">Our Team</Link>
            <Link to="/press" className="text-sm font-sans hover:opacity-70 transition-opacity">Press</Link>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h3 className="text-sm font-sans font-medium uppercase tracking-wider mb-2">Studio</h3>
            <div className="text-sm font-sans text-ink/80">
              <a 
                href="https://maps.app.goo.gl/dueZ7FzaVaBYnYtKA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <p>State Guest House, Shankar Nagar Rd,</p>
                <p>next to TruEyes Opticals Store, opp. Pahuna,</p>
                <p>Civil Lines, Raipur, Chhattisgarh 492001</p>
              </a>
            </div>
            <div className="text-sm font-sans mt-4">
              <a href="mailto:hello@azureinteriors.com" className="block hover:opacity-70 transition-opacity">hello@azureinteriors.com</a>
              <a href="tel:+919876543210" className="block mt-1 hover:opacity-70 transition-opacity">+91 98765 43210</a>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="md:col-span-3 flex flex-col space-y-8 items-start md:items-end text-left md:text-right">
            <div className="flex flex-col space-y-4">
              <h3 className="text-sm font-sans font-medium uppercase tracking-wider mb-2 md:text-right">Social</h3>
              <a href="#" className="text-sm font-sans hover:opacity-70 transition-opacity">Instagram</a>
              <a href="#" className="text-sm font-sans hover:opacity-70 transition-opacity">Pinterest</a>
            </div>

            <Link to="/contact"
              className="group flex items-center space-x-2 text-sm font-sans font-medium uppercase tracking-wide border-b border-ink pb-1 hover:opacity-70 transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-xs font-sans text-ink/60 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Azure Interiors. All rights reserved.</p> <p><a href="https://www.linkedin.com/in/ankit-chandrakar-001akki/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">Made by Akki</a></p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ink transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Large Background Phrase */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[15vw] leading-none font-serif text-ink/5 whitespace-nowrap">
          Azure Interiors.
        </h1>
      </div>
    </footer>
  );
}
