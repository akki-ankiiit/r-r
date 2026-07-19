"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { Link } from "react-router-dom";

const categories = ["All", "Residential", "Hospitality", "Commercial", "Interviews", "Features"];

const pressItems = [
  { id: 1, publication: "Architectural Digest", title: "A Study in Restraint: The Aggarwal Residence", date: "Oct 2024", project: "Aggarwal Residence", category: "Residential", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80", featured: true },
  { id: 2, publication: "Elle Decor", title: "Hospitality Design Redefined at Clarks Inn", date: "Aug 2024", project: "Clarks Inn Suites", category: "Hospitality", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80", featured: false },
  { id: 3, publication: "GoodHomes", title: "The Art of Bespoke Furniture", date: "Jun 2024", project: "Studio Collection", category: "Features", image: "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?auto=format&fit=crop&q=80", featured: false },
  { id: 4, publication: "Surfaces Reporter", title: "Conversation with Rashi & Ruchi", date: "Apr 2024", project: "Azure Interiors", category: "Interviews", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", featured: false },
  { id: 5, publication: "Commercial Design India", title: "Zeqon Experience Centre", date: "Feb 2024", project: "Zeqon", category: "Commercial", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80", featured: false },
];

export default function Press() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = pressItems.filter(item => 
    !item.featured && (activeFilter === "All" || item.category === activeFilter)
  );

  const featured = pressItems.find(i => i.featured);

  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain pb-24 text-ink">
        
        {/* Hero */}
        <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 lg:pt-48 pb-12 md:pb-24 overflow-hidden bg-ink mb-16">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000"
              alt="Press & Recognition"
              speed={0.6}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20 mix-blend-normal" />
          </div>
          
          <div className="relative z-10 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto w-full text-porcelain flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-4xl">
              <p className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-6 opacity-80">Press & Recognition</p>
              <h1 className="text-5xl md:text-[6vw] lg:text-[7vw] leading-[1.1] font-serif mb-6 tracking-tight text-porcelain/95">
                Stories beyond <br className="hidden md:block" />
                the <span className="font-script text-[1.2em] font-normal lowercase pr-8 pb-4 -mb-4 pt-2 -mt-2 pl-4 -ml-4 inline-block opacity-90">spaces.</span>
              </h1>
              <p className="text-sm md:text-lg font-sans opacity-80 max-w-xl font-light tracking-wide mb-10 leading-relaxed">
                Selected projects, conversations and features from architecture and design publications.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Press */}
        {featured && (
          <section className="px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto mb-24 md:mb-32">
            <a href="#" className="group block">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
                <div className="md:col-span-8 overflow-hidden">
                  <div className="relative aspect-[16/9] w-full transform group-hover:scale-105 transition-transform duration-1000">
                    <ParallaxImage src={featured.image} alt={featured.title} />
                  </div>
                </div>
                <div className="md:col-span-4 md:-ml-12 bg-bone p-8 md:p-12 relative z-10 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-sans uppercase tracking-widest opacity-60">{featured.publication}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8">{featured.title}</h2>
                  <div className="flex justify-between items-end text-xs font-sans uppercase tracking-widest border-t border-ink/10 pt-6">
                    <span>{featured.project}</span>
                    <span>{featured.date}</span>
                  </div>
                </div>
              </div>
            </a>
          </section>
        )}

        {/* Filters */}
        <section className="px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto mb-16">
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-ink/10 pb-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "text-sm font-sans uppercase tracking-widest transition-opacity relative",
                  activeFilter === cat ? "opacity-100" : "opacity-40 hover:opacity-70"
                )}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div layoutId="press-filter" className="absolute -bottom-[25px] left-0 right-0 h-[1px] bg-ink" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Press Archive Grid */}
        <section className="px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto min-h-[50vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <a href="#" className="group block">
                    <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-stone">
                      <ParallaxImage src={item.image} alt={item.title} speed={0} className="transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-sans uppercase tracking-widest opacity-60">{item.publication}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-2xl font-serif mb-4 leading-tight">{item.title}</h3>
                    <div className="flex justify-between items-center text-xs font-sans uppercase tracking-widest text-ink/40">
                      <span>{item.project}</span>
                      <span>{item.date}</span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Press Enquiry */}
        <section className="mt-32 py-32 bg-stone text-center px-5">
          <h2 className="text-3xl md:text-5xl font-serif mb-12">
            For editorial features, collaborations<br />
            and press enquiries.
          </h2>
          <Link to="/contact"
            className="inline-block border border-ink text-ink px-8 py-4 text-sm font-sans uppercase tracking-widest hover:bg-ink hover:text-porcelain transition-colors"
          >
            Contact the Studio
          </Link>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}
