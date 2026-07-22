import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";

const teamMembers = [
  { name: "Aarav Sharma", role: "Senior Architect", dept: "Design", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600", quote: "Architecture is the thoughtful making of space." },
  { name: "Meera Patel", role: "Project Manager", dept: "Coordination", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600", quote: "Great design lives in the flawless details." },
  { name: "Kunal Singh", role: "Site Supervisor", dept: "Execution", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600", quote: "Building the foundation for visionary ideas." },
  { name: "Neha Gupta", role: "Interior Stylist", dept: "Styling", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600", quote: "Styling is about telling a space's story." },
  { name: "Vikram Desai", role: "3D Visualizer", dept: "Design", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600", quote: "Translating imagination into visual reality." },
  { name: "Anjali Rao", role: "Procurement Lead", dept: "Operations", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600", quote: "Sourcing the world for unique elements." },
];

export default function Team() {
  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain">

        {/* Hero */}
        <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden bg-ink">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
              alt="The Team"
              speed={0.6}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20 mix-blend-normal" />
          </div>

          <div className="relative z-10 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto w-full text-porcelain flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-4xl">
              <p className="font-script text-3xl md:text-4xl mb-6 opacity-90 capitalize">Our Team</p>
              <h1 className="text-5xl md:text-[6vw] lg:text-[7vw] leading-[1.1] font-serif mb-6 tracking-tight text-porcelain/95">
                A collective of <br className="hidden md:block" />
                <span className="font-script text-[1.2em] font-normal lowercase pr-8 pb-4 -mb-4 pt-2 -mt-2 pl-4 -ml-4 inline-block opacity-90">creatives.</span>
              </h1>
              <p className="text-sm md:text-lg font-sans opacity-80 max-w-xl font-light tracking-wide mb-10 leading-relaxed">
                Designers, architects, and project managers working together to realise spaces of distinct character and uncompromising quality.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto">
          {/* Founder 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <ParallaxImage
                  src="https://instagram.fidr4-2.fna.fbcdn.net/v/t51.75761-15/465334374_18465987955021951_2517883566473005951_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzQ5MzI4NzM5NjAzMTM0NjA2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=I05rpi0c2JcQ7kNvwHLkern&_nc_oc=AdppeLXSz-ChNCt9LhTqeynyQAQLuWDNUlq2djnqt9Jp0MZI6qwZUqS3oX7jsPSvmakMKbJsnbjucNQT0sV-Sdh0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fidr4-2.fna&_nc_gid=0KUmO_vlWffmf9NGLgnODQ&_nc_ss=7a22e&oh=00_AQAwhcVn859_CGz9GKpT-ZMiwfOhdeBc39m76laMOdh3wQ&oe=6A61C932"
                  alt="Rashi Bothra"
                />
              </div>
              <p className="font-script text-5xl text-ink absolute -bottom-6 -right-6 lg:-right-12 z-10">Rashi Bothra</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center text-ink">
              <h2 className="text-3xl font-serif mb-2">Rashi Bothra</h2>
              <p className="font-serif text-xl md:text-xl opacity-80 mb-8 capitalize">Co-Founder & Principal Designer</p>

              <div className="text-base font-sans text-ink/80 leading-relaxed space-y-6">
                <p>
                  Rashi brings a refined eye for composition, detail and material relationships to the studio’s work. Her approach balances creative expression with the practical realities of how a space must function and endure.
                </p>
                <p>
                  She leads the conceptual direction of Azure’s high-end residential and hospitality projects, ensuring that every design decision serves the overarching narrative of the space.
                </p>
                <div className="pt-6 mt-6 border-t border-ink/10">
                  <p className="text-sm italic opacity-80">
                    “A beautiful space should never feel intimidating. It should feel like an elevated version of everyday life.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-6 flex flex-col justify-center text-ink order-2 lg:order-1">
              <h2 className="text-3xl font-serif mb-2">Ruchi Gehani</h2>
              <p className="font-serif text-xl md:text-xl opacity-80 mb-8 capitalize">Co-Founder & Principal Designer</p>

              <div className="text-base font-sans text-ink/80 leading-relaxed space-y-6 max-w-lg">
                <p>
                  Ruchi’s design perspective is grounded in spatial clarity, individuality and an intuitive understanding of the client. Her work explores how colour, texture, furniture and light can give each environment a distinct identity.
                </p>
                <p>
                  With a focus on spatial planning and bespoke execution, she ensures that the transition from architectural concept to lived-in reality is seamless and deeply considered.
                </p>
                <div className="pt-6 mt-6 border-t border-ink/10">
                  <p className="text-sm italic opacity-80">
                    “We aren’t just arranging furniture; we are organizing how people will experience their day.”
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 relative order-1 lg:order-2">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <ParallaxImage
                  src="https://scontent.cdninstagram.com/v/t51.82787-19/730171343_18599137177035062_689223283054491036_n.jpg?_nc_cat=104&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=0nPn9g4rXc0Q7kNvwGoZO03&_nc_oc=AdoPZLiUXhUyDAFmK1JkcB1CWiZoitgISizPfKO1oGviakPuXlXk1VVgDffkphfrpHxwtLnboJLWyauaKMIjZ-71&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=iXLCkYC8BIisOcLpEkhaZg&_nc_ss=7b6a8&oh=00_AQA072l_SsbHCVk5TqnbPTu86CdH4EKpaqKS4lkpf_5WCA&oe=6A61B56A"
                  alt="Ruchi Gehani"
                />
              </div>
              <p className="font-script text-5xl text-ink absolute -bottom-6 -left-6 lg:-left-12 z-10">Ruchi Gehani</p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 bg-ink text-porcelain">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12 md:mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Many disciplines. One vision.</h2>
              <p className="font-script text-2xl md:text-3xl opacity-80 capitalize">Design · Execution · Coordination · Styling</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {teamMembers.map((member, idx) => {
                const nameParts = member.name.split(' ');
                const firstName = nameParts.slice(0, -1).join(' ');
                const lastName = nameParts[nameParts.length - 1];

                return (
                  <div key={idx} className="cursor-pointer [perspective:1000px]">
                    <div className="group relative aspect-[3/4] w-full mb-6 shadow-lg hover:shadow-2xl transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

                      {/* Front Side */}
                      <div className="absolute inset-0 bg-bone overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                        <ParallaxImage
                          src={member.image}
                          alt={member.name}
                          speed={0.15}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90 mix-blend-multiply" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                          <h3 className="text-xl sm:text-2xl font-serif mb-2 text-porcelain">{member.name}</h3>
                          <p className="text-[10px] sm:text-xs font-sans text-porcelain/80 uppercase tracking-widest">{member.role}</p>
                        </div>
                        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] mix-blend-multiply pointer-events-none" />
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 bg-stone text-ink p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] shadow-inner">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 border border-ink/10 p-1 bg-porcelain">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full filter grayscale opacity-90" />
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl mb-1">{member.name}</h3>
                        <p className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-ink/50 mb-4 sm:mb-6">{member.role}</p>

                        <p className="font-sans text-xs sm:text-sm font-light italic leading-relaxed text-ink/80 mb-6 sm:mb-8 px-2 relative">
                          <span className="absolute -top-3 -left-2 text-3xl opacity-20 font-serif">"</span>
                          {member.quote}
                          <span className="absolute -bottom-4 -right-2 text-3xl opacity-20 font-serif">"</span>
                        </p>

                        <p className="font-script text-3xl text-ink/80 capitalize">{firstName}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Studio Culture */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto text-ink text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
            “Good design is rarely a <span className="font-script text-[1.2em] font-normal lowercase">solitary act.</span>”
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="aspect-square bg-bone overflow-hidden">
              <ParallaxImage src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600" alt="Culture 1" speed={0.1} />
            </div>
            <div className="aspect-square bg-bone overflow-hidden mt-8 md:mt-16">
              <ParallaxImage src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600" alt="Culture 2" speed={0.1} />
            </div>
            <div className="aspect-square bg-bone overflow-hidden mt-4 md:mt-8">
              <ParallaxImage src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600" alt="Culture 3" speed={0.1} />
            </div>
            <div className="aspect-square bg-bone overflow-hidden mt-12 md:mt-24">
              <ParallaxImage src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600" alt="Culture 4" speed={0.1} />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}
