import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";
import SplitText from "@/components/SplitText";
import Testimonials from "@/components/Testimonials";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";

const selectedProjects = [
  { title: "The Artisan's Loft", category: "A study in raw materials and refined elegance.", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80", link: "/portfolio/artisan-loft" },
  { title: "Horizon Estate", category: "Blending the boundaries between architecture and nature.", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80", link: "/portfolio/horizon-estate" },
  { title: "Lumina Retail", category: "An immersive commercial environment.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80", link: "/portfolio/lumina-retail" },
  { title: "The Monochrome House", category: "Minimalism achieved through dramatic contrast.", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80", link: "/portfolio/monochrome-house" },
  { title: "Oasis Pavilion", category: "A sanctuary of peace in the bustling city.", image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&q=80", link: "/portfolio/oasis-pavilion" },
];

function AnimatedNumber({ value, label }: { value: number; label: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(v).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-5xl md:text-7xl font-serif text-ink mb-4 flex items-center justify-center">
        <span ref={nodeRef}>0</span>
        <span className="text-4xl md:text-5xl ml-1 text-ink/70">+</span>
      </div>
      <p className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-ink/60">
        {label}
      </p>
    </div>
  );
}

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const [activePhilosophyBg, setActivePhilosophyBg] = useState(0);

  const philosophyImages = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
  ];

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % selectedProjects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + selectedProjects.length) % selectedProjects.length);

  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain">

        {/* Section 1: Fresh Editorial Hero */}
        <section className="relative min-h-screen w-full flex flex-col justify-end pt-24 lg:pt-40 pb-10 md:pb-16 lg:pb-16 md:pb-24 overflow-hidden bg-ink">
          <div className="absolute inset-0 z-0">
            {/* I've used a placeholder that closely resembles the uploaded modern house. You can change this src to "/images/hero.jpg" once you drop the file into the public/images folder */}
            <ParallaxImage
              src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Interior Architecture"
              speed={0.6}
              priority
            />
            {/* Proper overlay so fonts are visible properly */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/10 mix-blend-normal" />
          </div>

          <div className="relative z-10 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto w-full text-porcelain flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl md:text-[7vw] lg:text-[8vw] leading-[1.1] font-serif mb-6 tracking-tight text-porcelain/95">
                Architecture <br className="hidden md:block" />
                <span className="font-script text-[1.2em] font-normal pb-4 -mb-4 pt-2 -mt-2 pr-8 pl-4 -ml-4 inline-block opacity-90">redefined.</span>
              </h1>
              <p className="text-sm md:text-lg font-sans opacity-80 max-w-xl font-light tracking-wide mb-10 leading-relaxed">
                We craft spaces that transcend utility—merging bespoke design, structural integrity, and personal expression.
              </p>

              <div className="flex items-center space-x-8">
                <Link to="/portfolio" className="inline-flex items-center justify-center bg-porcelain text-ink px-8 py-4 text-xs md:text-sm font-sans uppercase tracking-[0.15em] hover:bg-white hover:scale-[1.02] transition-all duration-300 group">
                  Explore Projects <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end text-right border-l border-porcelain/20 pl-6 pb-2">
              <p className="font-script text-3xl opacity-80 mb-2 capitalize">Based In</p>
              <p className="text-sm font-sans opacity-90">Raipur, India</p>
            </div>
          </div>
        </section>

        {/* Section 2: Glassmorphic Intro & Typography Mix */}
        <section className="relative py-12 md:py-16 lg:py-24 px-5 md:px-8 xl:px-18 overflow-hidden bg-stone">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1690743300187-51d68146adf7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Texture" className="w-full h-full object-cover opacity-20 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            <div className="lg:col-span-4 lg:col-start-2 relative max-w-md mx-auto lg:max-w-none w-full">
              <div className="aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-sm">
                <ParallaxImage
                  src="https://azureinteriors.in/wp-content/uploads/2022/11/Ahujas-residential-project-by-Azure-Interiors-13.jpeg"
                  alt="Living Space"
                  speed={0.2}
                />
                <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
              </div>
              {/* Floating Glass Card */}
              <div className="absolute -bottom-10 -right-6 lg:-right-20 backdrop-blur-xl bg-porcelain/80 border border-white/40 p-8 shadow-2xl max-w-[280px]">
                <p className="font-script text-3xl mb-3 text-ink">Since 2013</p>
                <p className="font-sans text-xs leading-relaxed text-ink/80">
                  Founded by interior designers Rashi Bothra and Ruchi Gehani, Azure Interiors creates spaces that feel unmistakably personal.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-7 mt-24 lg:mt-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-8 md:mb-12 text-ink">
                <SplitText text="We do not decorate spaces." />
                <SplitText text="We shape how they are experienced." delay={0.2} />
              </h2>
              <div className="text-base font-sans text-ink/70 leading-relaxed space-y-6">
                <p>
                  Every project begins with an understanding of the people, rituals and aspirations that will inhabit it. We believe a room should be an extension of those who live in it.
                </p>
                <p>
                  From luxury residences and hotels to immersive retail environments, our studio brings together creative direction, technical expertise, and meticulous execution.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center justify-center bg-ink text-porcelain px-8 py-4 mt-12 text-xs md:text-sm font-sans uppercase tracking-[0.15em] hover:bg-ink/80 hover:scale-[1.02] transition-all duration-300 group">
                Learn More About Us <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Centered Immersive Slider (5 Cards, Single Viewport) */}
        <section className="flex flex-col justify-center min-h-screen bg-porcelain text-ink relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone to-transparent z-0" />
          
          {/* Ambient Glowing Orbs */}
          <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/10 blur-[120px] mix-blend-multiply pointer-events-none z-0" />
          <div className="absolute top-[40%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-amber-600/10 blur-[120px] mix-blend-multiply pointer-events-none z-0" />
          
          <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 md:px-8 xl:px-18 flex flex-col items-center text-center">
            
            {/* Spinning Sticker */}
            <motion.div 
              className="absolute top-0 right-5 md:top-10 md:right-10 z-20 pointer-events-none opacity-60 mix-blend-multiply hidden md:block"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              <svg width="140" height="140" viewBox="0 0 140 140">
                <defs>
                  <path id="textPath" d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                </defs>
                <text className="text-[11.5px] font-sans uppercase tracking-[0.27em] fill-ink font-medium">
                  <textPath href="#textPath" startOffset="0%">
                    Award Winning Design • Est. 2013 •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            
            {/* Centered Typography */}
            <div className="mb-4 md:mb-6">
              <p className="font-script text-3xl md:text-4xl opacity-90 mb-2 text-ink/80 capitalize">Our Portfolio</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
                Spaces that tell a <span className="font-script text-[1.4em] font-normal mx-1 -mb-2 inline-block">story.</span>
              </h2>
            </div>

            {/* Coverflow Image Slider */}
            <div className="relative w-full max-w-[100vw] h-[45vh] md:h-[50vh] lg:h-[55vh] flex items-center justify-center perspective-[1200px] mt-4 md:mt-8 overflow-hidden">
              
              {selectedProjects.map((project, idx) => {
                const diff = (idx - currentProject + selectedProjects.length) % selectedProjects.length;
                
                let position = "hidden";
                if (diff === 0) position = "center";
                else if (diff === 1) position = "right1";
                else if (diff === 2) position = "right2";
                else if (diff === selectedProjects.length - 1) position = "left1";
                else if (diff === selectedProjects.length - 2) position = "left2";

                const variants = {
                  center: { x: "0%", scale: 1, zIndex: 30, opacity: 1, rotateY: 0, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px 15px rgba(255,255,255,0.2)" },
                  right1: { x: "40%", scale: 0.8, zIndex: 20, opacity: 0.6, rotateY: -12, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 0 0 rgba(255,255,255,0)" },
                  right2: { x: "70%", scale: 0.6, zIndex: 10, opacity: 0.3, rotateY: -20, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 0 0 rgba(255,255,255,0)" },
                  left1: { x: "-40%", scale: 0.8, zIndex: 20, opacity: 0.6, rotateY: 12, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 0 0 rgba(255,255,255,0)" },
                  left2: { x: "-70%", scale: 0.6, zIndex: 10, opacity: 0.3, rotateY: 20, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3), 0 0 0 0 rgba(255,255,255,0)" },
                  hidden: { x: "0%", scale: 0.4, zIndex: 0, opacity: 0, rotateY: 0, boxShadow: "0 0 0 0 rgba(0,0,0,0)" },
                };

                return (
                  <motion.div
                    key={project.title}
                    initial={false}
                    animate={variants[position as keyof typeof variants]}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute w-[60vw] sm:w-[45vw] md:w-[32vw] lg:w-[24vw] aspect-[4/5] shadow-2xl overflow-hidden cursor-pointer bg-stone rounded-sm"
                    onClick={() => setCurrentProject(idx)}
                  >
                    <ParallaxImage src={project.image} alt={project.title} speed={0} />
                    
                    {/* Dark overlay for side cards */}
                    <motion.div 
                      className="absolute inset-0 bg-ink pointer-events-none mix-blend-multiply"
                      initial={false}
                      animate={{ opacity: position === "center" ? 0.1 : 0.6 }}
                      transition={{ duration: 0.7 }}
                    />
                    
                    {/* Text overlays only visible when center */}
                    <motion.div 
                      className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 z-20 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none"
                      initial={false}
                      animate={{ opacity: position === "center" ? 1 : 0, y: position === "center" ? 0 : 20 }}
                      transition={{ duration: 0.7 }}
                    >
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-serif mb-2 text-porcelain">{project.title}</h3>
                      <p className="text-[10px] md:text-xs font-sans opacity-80 text-porcelain tracking-widest uppercase">{project.category}</p>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Navigation Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 md:left-8 md:right-8 flex justify-between z-40 pointer-events-none">
                <button 
                  onClick={prevProject} 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-porcelain/90 backdrop-blur-sm text-ink hover:bg-ink hover:text-porcelain transition-all duration-300 shadow-xl pointer-events-auto rounded-full"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextProject} 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-porcelain/90 backdrop-blur-sm text-ink hover:bg-ink hover:text-porcelain transition-all duration-300 shadow-xl pointer-events-auto rounded-full"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* View All Button */}
            <div className="mt-8 md:mt-10">
              <Link to="/portfolio" className="inline-flex items-center justify-center bg-ink text-porcelain px-10 py-5 text-sm font-sans tracking-[0.15em] hover:bg-ink/85 hover:scale-[1.02] transition-all duration-300 group">
                View All Projects <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
            
          </div>
        </section>

        {/* Section 4: Philosophy / Interactive Crossfade Section */}
        <section className="relative min-h-[65vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden bg-ink py-12 md:py-20 lg:py-32">
          
          {/* Background Images Crossfade */}
          {philosophyImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activePhilosophyBg === idx ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={img} alt="Philosophy background" className="w-full h-full object-cover scale-105" />
            </div>
          ))}
          
          {/* Dark Overlay to make text pop */}
          <div className="absolute inset-0 bg-ink/70 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent pointer-events-none" />
          
          <div className="max-w-[1440px] w-full mx-auto px-5 md:px-8 xl:px-18 relative z-10 flex flex-col items-center text-center">
            
            <p className="font-script text-3xl md:text-4xl text-porcelain mb-8 md:mb-12 lg:mb-16 capitalize">
              — The Studio Philosophy
            </p>
            
            <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8 w-full group">
              
              {/* Line 1 */}
              <div 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight transition-all duration-700 hover:scale-[1.02] cursor-pointer ${activePhilosophyBg === 0 ? 'text-porcelain' : 'text-porcelain/30'}`}
                onMouseEnter={() => setActivePhilosophyBg(0)}
              >
                Good design is rarely a solitary act.
              </div>
              
              {/* Line 2 */}
              <div 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight transition-all duration-700 hover:scale-[1.02] cursor-pointer ${activePhilosophyBg === 1 ? 'text-porcelain' : 'text-porcelain/30'}`}
                onMouseEnter={() => setActivePhilosophyBg(1)}
              >
                It is a dialogue between
              </div>
              
              {/* Line 3 */}
              <div 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight transition-all duration-700 hover:scale-[1.02] cursor-pointer ${activePhilosophyBg === 2 ? 'text-porcelain' : 'text-porcelain/30'}`}
                onMouseEnter={() => setActivePhilosophyBg(2)}
              >
                <span className="font-script text-[1.4em] font-normal lowercase tracking-wide -mt-2 inline-block">vision, craft & living.</span>
              </div>
              
            </div>
            
          </div>
        </section>

        {/* Section 5: Animated Stats Section */}
        <section className="py-12 md:py-20 bg-porcelain relative z-10">
          <div className="max-w-[1440px] w-full mx-auto px-5 md:px-8 xl:px-18">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-ink/10 py-10 md:py-16">
              <AnimatedNumber value={150} label="Projects Completed" />
              <AnimatedNumber value={15} label="Years Experience" />
              <AnimatedNumber value={25} label="Design Awards" />
              <AnimatedNumber value={120} label="Happy Clients" />
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials Layout from Image Reference */}
        <Testimonials />

      </main>
      <Footer />
    </PageTransition>
  );
}
