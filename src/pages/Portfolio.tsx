"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";
import { LayoutGrid, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const categories = ["All", "Residential", "Hospitality", "Commercial", "Retail", "Farm Houses", "Furniture"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"editorial" | "index">("editorial");

  const filteredProjects = projects.filter(p => activeFilter === "All" || p.category === activeFilter);

  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain pb-24 text-ink">
        
        {/* Hero */}
        <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 lg:pt-48 pb-12 md:pb-24 overflow-hidden bg-ink mb-16">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
              alt="Selected Work"
              speed={0.6}
              priority
            />
            {/* Increased overlay for visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20 mix-blend-normal" />
          </div>
          
          <div className="relative z-10 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto w-full text-porcelain flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-4xl">
              <p className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-6 opacity-80">Selected Work</p>
              <h1 className="text-5xl md:text-[6vw] lg:text-[7vw] leading-[1.1] font-serif mb-6 tracking-tight text-porcelain/95">
                Spaces with a story <br className="hidden md:block" />
                of their <span className="font-script text-[1.2em] font-normal lowercase pr-8 pb-4 -mb-4 pt-2 -mt-2 pl-4 -ml-4 inline-block opacity-90">own.</span>
              </h1>
              <p className="text-sm md:text-lg font-sans opacity-80 max-w-xl font-light tracking-wide mb-10 leading-relaxed">
                Explore residential, hospitality, retail and commercial environments shaped through material, proportion and personal expression.
              </p>
            </div>
          </div>
        </section>

        {/* Sticky Filters & View Switcher */}
        <section className="sticky top-16 z-30 bg-porcelain/90 backdrop-blur-md px-5 md:px-8 xl:px-18 py-4 border-b border-ink/10 mb-16">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-x-6 md:gap-x-8 gap-y-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    "text-xs md:text-sm font-sans uppercase tracking-widest transition-opacity relative",
                    activeFilter === cat ? "opacity-100" : "opacity-40 hover:opacity-70"
                  )}
                >
                  {cat}
                  {activeFilter === cat && (
                    <motion.div layoutId="portfolio-filter" className="absolute -bottom-2 left-0 right-0 h-[1px] bg-ink" />
                  )}
                </button>
              ))}
            </div>

            {/* View Mode */}
            <div className="hidden md:flex items-center space-x-4 border-l border-ink/20 pl-6">
              <button
                onClick={() => setViewMode("editorial")}
                className={cn("p-2 transition-opacity", viewMode === "editorial" ? "opacity-100" : "opacity-40 hover:opacity-70")}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("index")}
                className={cn("p-2 transition-opacity", viewMode === "index" ? "opacity-100" : "opacity-40 hover:opacity-70")}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto min-h-[60vh]">
          <AnimatePresence mode="wait">
            {viewMode === "editorial" ? (
              <motion.div
                key="editorial"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, idx) => {
                  return (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="group cursor-none col-span-1" // cursor-none for custom cursor to say "View"
                    >
                      <Link to={`/portfolio/${project.id}`} className="block">
                        <div className="relative w-full overflow-hidden mb-6 bg-stone aspect-[4/5]">
                          <ParallaxImage src={project.heroImage} alt={project.title} className="transform group-hover:scale-105 transition-transform duration-1000" />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl md:text-2xl font-serif mb-2 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                            <p className="text-xs md:text-sm font-sans uppercase tracking-widest opacity-50">{project.category} · {project.location}</p>
                          </div>
                          <span className="text-xs md:text-sm font-sans opacity-50">{project.year}</span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="index"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col border-t border-ink/10"
              >
                {filteredProjects.map((project, idx) => (
                  <Link to={`/portfolio/${project.id}`} key={project.id} className="group flex items-center justify-between py-6 border-b border-ink/10 hover:bg-stone/30 transition-colors relative">
                    <div className="flex items-center space-x-8 md:space-x-16 px-4">
                      <span className="text-sm font-sans opacity-40">0{idx + 1}</span>
                      <h3 className="text-2xl md:text-4xl font-serif group-hover:translate-x-4 transition-transform duration-500">{project.title}</h3>
                    </div>
                    <div className="hidden md:flex items-center space-x-16 text-sm font-sans uppercase tracking-widest opacity-50 pr-4">
                      <span className="w-24">{project.category}</span>
                      <span className="w-24">{project.location}</span>
                      <span className="w-12 text-right">{project.year}</span>
                    </div>

                    {/* Hover Thumbnail */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 aspect-[4/3] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 overflow-hidden hidden md:block">
                    <img src={project.heroImage} alt="" className="object-cover w-full h-full" />
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}
