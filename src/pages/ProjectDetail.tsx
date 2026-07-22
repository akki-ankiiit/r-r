import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  
  // Find project index
  const projectIndex = projects.findIndex(p => p.id === id);
  const safeIndex = projectIndex >= 0 ? projectIndex : 0;
  
  const project = projects[safeIndex];
  
  // Next project logic (wrap around)
  const nextIndex = (safeIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain text-ink">
        
        {/* Project Hero */}
        <section className="relative min-h-[65vh] lg:min-h-[80vh] w-full flex flex-col justify-end pt-24 lg:pt-40 pb-10 md:pb-16 lg:pb-16 md:pb-24 overflow-hidden bg-ink">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src={project.heroImage}
              alt={project.title}
              speed={0.6}
              priority
            />
            {/* Proper gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20 mix-blend-normal" />
          </div>
          <div className="relative z-10 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto w-full text-porcelain flex justify-between items-end">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-6 opacity-80">
                <span>{project.category}</span>
                <span className="hidden md:inline opacity-50">·</span>
                <span>{project.location}</span>
                <span className="hidden md:inline opacity-50">·</span>
                <span>{project.year}</span>
              </div>
              <h1 className="text-5xl md:text-[6vw] lg:text-[7vw] leading-[1.1] font-serif mb-6 tracking-tight text-porcelain/95">
                {project.title}
              </h1>
            </div>
            
            {/* Scroll Cue */}
            <div className="hidden md:flex flex-col items-center pb-6 border-l border-porcelain/20 pl-6">
              <span className="text-[10px] font-sans uppercase tracking-[0.3em] mb-4 opacity-50">Scroll</span>
              <div className="w-[1px] h-16 bg-porcelain/30 overflow-hidden rounded-full">
                <div className="w-full h-full bg-porcelain animate-[scroll_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Introduction */}
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-serif mb-8 md:mb-12">{project.title}</h2>
              <p className="text-lg md:text-xl font-sans text-ink/70 leading-relaxed max-w-lg">
                {project.concept}
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border-t border-ink/10 pt-8 flex flex-col space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-sans uppercase tracking-widest opacity-50 w-32">Client</span>
                  <span className="text-sm font-sans flex-1">{project.client}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-sans uppercase tracking-widest opacity-50 w-32">Location</span>
                  <span className="text-sm font-sans flex-1">{project.location}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-sans uppercase tracking-widest opacity-50 w-32">Area</span>
                  <span className="text-sm font-sans flex-1">{project.area}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-sans uppercase tracking-widest opacity-50 w-32">Scope</span>
                  <span className="text-sm font-sans flex-1">{project.scope}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative & Galleries */}
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-10 md:mb-16 lg:mb-24">
            {project.narrative.map((para: string, idx: number) => (
              <p key={idx} className="text-base font-sans text-ink/80 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Categorized Galleries */}
          {project.galleries && project.galleries.map((gallery: any, idx: number) => (
            <div key={idx} className="mb-32">
              <h3 className="text-3xl md:text-4xl font-serif mb-12 border-b border-ink/10 pb-6 opacity-90">{gallery.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {gallery.images.map((img: string, imgIdx: number) => {
                  // If odd number of images and this is the last one, span full width
                  const isFullWidth = gallery.images.length % 2 !== 0 && imgIdx === gallery.images.length - 1;
                  return (
                    <div 
                      key={imgIdx} 
                      className={`relative w-full overflow-hidden bg-stone ${isFullWidth ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`}
                    >
                      <ParallaxImage src={img} alt={`${gallery.name} view ${imgIdx + 1}`} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Material Palette */}
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 xl:px-18 bg-stone">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-2xl font-serif mb-8 md:mb-12 text-center">Material Palette</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {project.materials.map((mat: any, idx: number) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 relative">
                    <img src={mat.image} alt={mat.name} className="object-cover w-full h-full" />
                  </div>
                  <span className="text-xs font-sans uppercase tracking-widest opacity-60 text-center">{mat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Quote */}
        <section className="py-12 md:py-16 lg:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto text-center">
          <p className="text-2xl md:text-4xl font-serif leading-relaxed max-w-4xl mx-auto italic text-ink/80">
            “{project.quote}”
          </p>
          <span className="block mt-8 text-xs font-sans uppercase tracking-widest opacity-50">— {project.client}</span>
        </section>

        {/* Next Project */}
        <section className="relative min-h-[65vh] lg:min-h-[80vh] w-full pt-32 lg:pt-48 overflow-hidden group cursor-pointer bg-ink">
          <Link to={`/portfolio/${nextProject.id}`} className="block w-full h-full">
            <div className="absolute inset-0 z-0">
              <ParallaxImage
                src={nextProject.heroImage}
                alt={nextProject.title}
                speed={0.3}
                imageClassName="group-hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-ink/60 group-hover:bg-ink/70 transition-colors duration-1000" />
            </div>
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-porcelain">
              <span className="text-xs font-sans uppercase tracking-widest mb-6 opacity-70 group-hover:-translate-y-2 transition-transform duration-500">Next Project</span>
              <h2 className="text-5xl md:text-7xl font-serif flex items-center group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                {nextProject.title}
                <ArrowRight className="w-10 h-10 md:w-12 md:h-12 ml-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </h2>
            </div>
          </Link>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}

