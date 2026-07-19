import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";

const teamMembers = [
  { name: "Aarav Sharma", role: "Senior Architect", dept: "Design" },
  { name: "Meera Patel", role: "Project Manager", dept: "Coordination" },
  { name: "Kunal Singh", role: "Site Supervisor", dept: "Execution" },
  { name: "Neha Gupta", role: "Interior Stylist", dept: "Styling" },
  { name: "Vikram Desai", role: "3D Visualizer", dept: "Design" },
  { name: "Anjali Rao", role: "Procurement Lead", dept: "Operations" },
];

export default function Team() {
  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain">

        {/* Hero */}
        <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 lg:pt-48 pb-12 md:pb-24 overflow-hidden bg-ink mb-16">
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
              <p className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-6 opacity-80">Our Team</p>
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
        <section className="py-20 md:py-32 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto">
          {/* Founder 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-32">
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
              <p className="text-xs font-sans uppercase tracking-widest opacity-50 mb-8">Co-Founder & Principal Designer</p>

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
              <p className="text-xs font-sans uppercase tracking-widest opacity-50 mb-8">Co-Founder & Principal Designer</p>

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
        <section className="py-20 md:py-24 px-5 md:px-8 xl:px-18 bg-ink text-porcelain">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Many disciplines. One vision.</h2>
              <p className="text-sm font-sans uppercase tracking-widest opacity-60">Design · Execution · Coordination · Styling</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone mb-6">
                    {/* Placeholder for team portraits */}
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-serif text-ink/20 uppercase tracking-widest opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Hover Candid Image (using random abstract for now) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <ParallaxImage
                        src={`https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600&sig=${idx}`}
                        alt={member.name}
                        speed={0}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                    <div className="flex justify-between items-center text-xs font-sans text-ink/60 uppercase tracking-widest">
                      <span>{member.role}</span>
                      <span>{member.dept}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Culture */}
        <section className="py-20 md:py-32 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto text-ink text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-16 max-w-4xl mx-auto leading-relaxed">
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
