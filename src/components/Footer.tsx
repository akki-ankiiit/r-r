"use client";

import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxImage from "./ParallaxImage";

function MagneticButton({ children, to, className }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

const PRE_FOOTER_CONTENT: Record<string, any> = {
  '/': {
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
    subtitle: 'Begin Your Journey',
    title: <>Ready to shape your <span className="font-script text-[1.2em] font-normal lowercase inline-block px-2 transform -rotate-2">space?</span></>,
    ctaText: 'Contact the Studio',
    ctaLink: '/contact'
  },
  '/about': {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    subtitle: 'Our Philosophy',
    title: <>Spaces that feel <span className="font-script text-[1.2em] font-normal lowercase inline-block px-2 transform -rotate-2">inevitable.</span></>,
    ctaText: 'Meet the Team',
    ctaLink: '/team'
  },
  '/portfolio': {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    subtitle: 'Explore More',
    title: <>View our latest <span className="font-script text-[1.2em] font-normal lowercase inline-block px-2 transform -rotate-2">creations.</span></>,
    ctaText: 'Start a Project',
    ctaLink: '/contact'
  },
  '/team': {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    subtitle: 'Join Us',
    title: <>Let's build something <span className="font-script text-[1.2em] font-normal lowercase inline-block px-2 transform -rotate-2">extraordinary.</span></>,
    ctaText: 'View Portfolio',
    ctaLink: '/portfolio'
  },
  '/press': {
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80',
    subtitle: 'Media & Recognition',
    title: <>Discover the stories behind our <span className="font-script text-[1.2em] font-normal lowercase inline-block px-2 transform -rotate-2">designs.</span></>,
    ctaText: 'Explore Portfolio',
    ctaLink: '/portfolio'
  }
};

export default function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  const contentPath = PRE_FOOTER_CONTENT[location.pathname] ? location.pathname :
    location.pathname.startsWith('/portfolio') ? '/portfolio' : '/';
  const content = PRE_FOOTER_CONTENT[contentPath];

  return (
    <>
      {/* Global Pre-Footer CTA */}
      {!isContactPage && (
        <section className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden bg-ink">
          <div className="absolute inset-0">
            <ParallaxImage
              src={content.image}
              alt="Interior architectural detail"
              speed={0.15}
            />
            <div className="absolute inset-0 bg-ink/70 mix-blend-multiply" />
          </div>

          <div className="relative z-10 text-center px-5 flex flex-col items-center">
            <p className="font-script text-3xl md:text-4xl text-porcelain/90 mb-6 capitalize">
              {content.subtitle}
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-porcelain mb-8 md:mb-12 max-w-4xl leading-[1.2]">
              {content.title}
            </h2>
            <MagneticButton 
              to={content.ctaLink} 
              className="group inline-flex items-center space-x-4 bg-porcelain text-ink px-8 py-4 hover:bg-transparent hover:text-porcelain border border-transparent hover:border-porcelain transition-all duration-500 rounded-none backdrop-blur-sm shadow-xl"
            >
              <span className="text-sm md:text-base font-sans font-medium uppercase tracking-[0.2em] transition-colors">
                {content.ctaText}
              </span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-2 transition-all duration-300" />
            </MagneticButton>
          </div>
        </section>
      )}

      {/* Main Footer */}
      <footer className="relative bg-stone pt-24 pb-12 overflow-hidden text-ink">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 xl:px-18 relative z-10">

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-20 border-b border-ink/10">

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
            Azure Interiors
          </h1>
        </div>
      </footer>
    </>
  );
}
