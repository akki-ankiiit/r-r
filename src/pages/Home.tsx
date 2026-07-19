import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";
import SplitText from "@/components/SplitText";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain">

        {/* Section 1: Fresh Editorial Hero */}
        <section className="relative min-h-screen w-full flex flex-col justify-end pt-32 lg:pt-48 pb-12 md:pb-24 overflow-hidden bg-ink">
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
                <Link to="/portfolio" className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] border-b border-porcelain/30 pb-2 hover:border-porcelain transition-colors flex items-center group">
                  Explore Projects <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end text-right border-l border-porcelain/20 pl-6 pb-2">
              <p className="text-[10px] font-sans uppercase tracking-[0.3em] opacity-50 mb-2">Based In</p>
              <p className="text-sm font-sans opacity-90">Raipur, India</p>
            </div>
          </div>
        </section>

        {/* Section 2: Glassmorphic Intro & Typography Mix */}
        <section className="relative py-20 md:py-48 px-5 md:px-8 xl:px-18 overflow-hidden bg-stone">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&q=80" alt="Texture" className="w-full h-full object-cover opacity-20 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-sm">
                <ParallaxImage
                  src="https://azureinteriors.in/wp-content/uploads/2022/11/Ahujas-residential-project-by-Azure-Interiors-13.jpeg"
                  alt="Living Space"
                  speed={0.2}
                />
                <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
              </div>
              {/* Floating Glass Card */}
              <div className="absolute -bottom-12 -right-12 lg:-right-24 backdrop-blur-xl bg-porcelain/80 border border-white/40 p-10 shadow-2xl max-w-sm">
                <p className="font-script text-4xl mb-4 text-ink">Since 2013</p>
                <p className="font-sans text-sm leading-relaxed text-ink/80">
                  Founded by interior designers Rashi Bothra and Ruchi Gehani, Azure Interiors creates spaces that feel unmistakably personal.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 mt-24 lg:mt-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-12 text-ink">
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
              <Link to="/about" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest border-b border-ink/30 pb-1 mt-12 hover:border-ink transition-colors font-sans font-medium">
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Selected Projects with Gradients & Shadows */}
        <section className="py-32 px-5 md:px-8 xl:px-18 bg-porcelain text-ink relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone to-transparent" />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
              <div>
                <p className="text-sm font-sans uppercase tracking-[0.2em] opacity-50 mb-4">Selected Spaces</p>
                <h2 className="text-5xl md:text-6xl font-serif mb-4 flex items-center">
                  A study in <span className="font-script text-7xl font-normal mx-4 -mb-2">light & material</span>
                </h2>
              </div>
              <Link to="/portfolio" className="hidden md:flex items-center space-x-2 text-sm uppercase tracking-widest border-b border-ink pb-1 hover:opacity-60 transition-opacity">
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {[
                { title: "Zeqon — Luxury in Land", category: "Commercial", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80", link: "/portfolio/zeqon" },
                { title: "Aggarwal Residence", category: "Residential", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80", link: "/portfolio/aggarwal-residence" },
              ].map((project, idx) => (
                <Link to={project.link} key={idx} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden shadow-xl mb-6">
                    <ParallaxImage
                      src={project.image}
                      alt={project.title}
                      className="transform group-hover:scale-110 transition-transform duration-[1.5s]"
                    />
                    {/* Inner Shadow / Vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                  </div>
                  <div className="flex justify-between items-end px-2">
                    <div>
                      <h3 className="text-3xl font-serif mb-2 group-hover:text-ink/70 transition-colors">{project.title}</h3>
                      <p className="text-sm font-sans opacity-60 uppercase tracking-widest">{project.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center md:hidden">
              <Link to="/portfolio" className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest border-b border-ink pb-1 hover:opacity-60 transition-opacity">
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Philosophy / Quote Section */}
        <section className="relative py-24 md:py-48 px-5 md:px-8 xl:px-18 bg-aubergine text-porcelain overflow-hidden shadow-inner">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
            <ParallaxImage src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80" alt="Texture" />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <span className="font-script text-6xl md:text-8xl block mb-8 text-brass drop-shadow-lg">"</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.3] mb-12 drop-shadow-xl">
              Good design is rarely a solitary act. It is a dialogue between <span className="font-script text-[1.3em] font-normal lowercase tracking-wide text-porcelain">vision, craft & living.</span>
            </h2>
            <p className="text-sm font-sans uppercase tracking-[0.2em] opacity-60">
              — The Studio Philosophy
            </p>
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="py-32 bg-stone text-ink text-center px-5">
          <p className="text-sm font-sans uppercase tracking-[0.2em] opacity-50 mb-6">Begin Your Journey</p>
          <h2 className="text-5xl md:text-7xl font-serif mb-12">
            Ready to shape your <span className="font-script text-[1.2em] font-normal lowercase">space?</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-ink text-porcelain px-10 py-5 text-sm font-sans uppercase tracking-widest hover:bg-ink/80 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 rounded-sm group"
          >
            Contact the Studio <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
