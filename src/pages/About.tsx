import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  { year: "2013", title: "Azure Interiors founded", desc: "Established in Raipur with a focus on bespoke residential design, bringing a fresh perspective to interior architecture.", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" },
  { year: "Early years", title: "Residential & boutique", desc: "Developing a refined approach to personal living spaces, prioritizing natural light, material honesty, and comfort.", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" },
  { year: "Growth", title: "Hospitality & retail", desc: "Taking on larger commercial and experience-led environments, translating the studio's intimate residential feel into public spaces.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80" },
  { year: "Major projects", title: "Landmark commissions", desc: "Executing high-profile projects like Clarks Inn Suites and Zeqon, establishing Azure as a leading design force in Chhattisgarh.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" },
  { year: "Present", title: "Integrated solutions", desc: "A comprehensive studio offering full-scale architecture, interior design, and bespoke furniture development under one roof.", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" }
];

function TimelineSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-ink text-porcelain border-y border-porcelain/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 xl:px-18">
        
        <div className="flex items-center space-x-6 mb-16 md:mb-24">
          <span className="w-16 h-[1px] bg-porcelain/30" />
          <p className="font-script text-3xl md:text-4xl text-porcelain/80 capitalize">
            Our Evolution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* Left: Sticky Image Gallery */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-32 aspect-[3/4] w-full overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                  src={timelineData[activeIdx].image}
                  alt={timelineData[activeIdx].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-ink/10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>

          {/* Right: Timeline Items */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {timelineData.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="group py-12 md:py-16 border-b border-porcelain/10 last:border-b-0 cursor-pointer flex flex-col"
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  <span className={`text-sm font-sans uppercase tracking-[0.2em] transition-colors duration-500 mb-6 ${isActive ? 'text-porcelain' : 'text-porcelain/40'}`}>
                    {item.year}
                  </span>
                  
                  <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif transition-colors duration-500 mb-6 ${isActive ? 'text-porcelain' : 'text-porcelain/30'}`}>
                    {item.title}
                  </h3>

                  {/* Mobile Image (hidden on desktop) */}
                  <div className={`lg:hidden w-full aspect-[4/3] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  <p className={`text-lg md:text-xl font-sans leading-relaxed transition-all duration-500 max-w-xl overflow-hidden ${isActive ? 'text-porcelain/70 max-h-[200px] opacity-100' : 'text-porcelain/0 max-h-0 opacity-0'}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain">

        {/* Hero */}
        <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden bg-ink">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="The Studio"
              speed={0.6}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40 mix-blend-normal" />
          </div>

          <div className="relative z-10 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto w-full text-porcelain flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-4xl">
              <p className="font-script text-3xl md:text-4xl mb-6 opacity-90 capitalize">The Studio</p>
              <h1 className="text-5xl md:text-[6vw] lg:text-[7vw] leading-[1.1] font-serif mb-6 tracking-tight text-porcelain/95">
                Design that begins <br className="hidden md:block" />
                with <span className="font-script text-[1.2em] font-normal lowercase pr-8 pb-4 -mb-4 pt-2 -mt-2 pl-4 -ml-4 inline-block opacity-90">understanding.</span>
              </h1>
              <p className="text-sm md:text-lg font-sans opacity-80 max-w-xl font-light tracking-wide mb-10 leading-relaxed">
                Azure Interiors is a Raipur-based interior architecture and design studio creating deeply personal spaces through thoughtful planning, material sensitivity and meticulous execution.
              </p>
            </div>
          </div>
        </section>

        {/* Studio Story */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4 md:col-start-2">
            <h2 className="text-3xl font-serif mb-8 md:mb-12 text-ink">Our Story</h2>
            <div className="relative aspect-[3/4] w-full overflow-hidden mb-8">
              <ParallaxImage
                src="https://instagram.fidr4-1.fna.fbcdn.net/v/t39.30808-6/362695965_18376689751021951_6720133227472749155_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzE2MDk2MTQxODQwNTA0NDQ5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=S_53JgoS9FkQ7kNvwEjxAEd&_nc_oc=Adr4Zh2hZb4xEE21CfMpKduxbgIqYwwznqgOj7a9Ce9VC94UORQP39zBkoXHQGGQu-0ABCFksqApoNRwXaafsxSL&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fidr4-1.fna&_nc_gid=70je8i6sCA1-KulinilPjA&_nc_ss=7a22e&oh=00_AQClPKPEE07OhI3dBsSurvDhRqaJ_UAY2j3tZeadebrmbQ&oe=6A61B670"
                alt="Studio detail"
              />
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-7 text-base font-sans text-ink/80 leading-relaxed space-y-6">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
              Azure Interiors was founded in 2013 by interior designers and friends Rashi Bothra and Ruchi Gehani, with the ambition to make the process of designing a space more personal, collaborative and meaningful.
            </p>
            <p>
              For the studio, an interior is never a composition of isolated objects. It is a carefully resolved relationship between architecture, movement, light, material, furniture and the lives unfolding within it.
            </p>
            <p>
              Over the years, Azure has developed a diverse body of work spanning luxury residences, hospitality destinations, immersive experience centres, concept retail spaces and bespoke furniture. Every commission is approached without a predetermined style. Instead, the design evolves from the client’s identity, the character of the site and the possibilities of the brief.
            </p>
            <p>
              From early concepts and spatial planning to furniture development, finish selection and turnkey execution, Azure brings every layer of a project together with clarity, technical expertise and an exacting eye for detail.
            </p>

            <div className="pt-8">
              <p className="font-script text-4xl text-ink">Rashi & Ruchi</p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <TimelineSection />

        {/* Philosophy */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 md:mb-12 text-ink max-w-4xl mx-auto leading-[1.2]">
            Our idea of luxury is <span className="font-script text-[1.2em] font-normal lowercase">personal.</span>
          </h2>
          <p className="text-base md:text-lg font-sans text-ink/70 max-w-2xl mx-auto leading-relaxed mb-16">
            Luxury is not defined by excess. It is found in proportion, comfort, craftsmanship, intuitive function and the feeling that a space belongs entirely to the person using it.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-sans uppercase tracking-widest text-ink/50">
            <span>Proportion</span>
            <span>·</span>
            <span>Comfort</span>
            <span>·</span>
            <span>Craft</span>
            <span>·</span>
            <span>Character</span>
            <span>·</span>
            <span>Longevity</span>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 bg-ink text-porcelain">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-serif mb-8 md:mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {[
                { title: "Listen", desc: "Understand the people, context, aspirations and practical needs." },
                { title: "Discover", desc: "Study the site, architecture, light, movement and material possibilities." },
                { title: "Define", desc: "Develop the spatial direction, visual language and functional framework." },
                { title: "Detail", desc: "Resolve materials, lighting, furniture, finishes and custom elements." },
                { title: "Realise", desc: "Coordinate execution, vendors, quality and site progress." },
                { title: "Refine", desc: "Style, review and perfect the final experience." }
              ].map((step, idx) => (
                <div key={idx} className="border-t border-porcelain/20 pt-6">
                  <span className="text-xs font-sans uppercase tracking-widest opacity-50 block mb-4">0{idx + 1}</span>
                  <h3 className="text-2xl font-serif mb-3">{step.title}</h3>
                  <p className="text-sm font-sans opacity-70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Values detail"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif mb-8 md:mb-12 text-ink">Studio Values</h2>
              <ul className="space-y-6">
                {[
                  "Individuality over imitation",
                  "Restraint over excess",
                  "Longevity over trends",
                  "Detail with purpose",
                  "Collaboration with clarity"
                ].map((val, idx) => (
                  <li key={idx} className="flex items-center text-lg md:text-xl font-serif text-ink">
                    <span className="w-8 h-[1px] bg-ink/20 mr-6" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}
