import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";

export default function About() {
  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain">

        {/* Hero */}
        <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 lg:pt-48 pb-12 md:pb-24 overflow-hidden bg-ink mb-16">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=2000"
              alt="The Studio"
              speed={0.6}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20 mix-blend-normal" />
          </div>

          <div className="relative z-10 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto w-full text-porcelain flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-4xl">
              <p className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-6 opacity-80">The Studio</p>
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
        <section className="py-20 md:py-32 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-4 md:col-start-2">
            <h2 className="text-3xl font-serif mb-8 text-ink">Our Story</h2>
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
        <section className="py-20 md:py-24 px-5 md:px-8 xl:px-18 bg-stone">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-serif mb-16 text-ink">Studio Timeline</h2>
            <div className="space-y-12 border-l border-ink/20 pl-6 md:pl-10 ml-2 md:ml-4">
              {[
                { year: "2013", title: "Azure Interiors founded", desc: "Established in Raipur with a focus on bespoke design." },
                { year: "Early years", title: "Residential and boutique projects", desc: "Developing a refined approach to personal living spaces." },
                { year: "Growth", title: "Expansion into hospitality and retail", desc: "Taking on larger commercial and experience-led environments." },
                { year: "Major projects", title: "Clarks Inn Suites, Zeqon", desc: "Landmark commissions across Chhattisgarh." },
                { year: "Present", title: "Integrated design and turnkey solutions", desc: "A comprehensive studio offering architecture, interiors, and bespoke furniture." }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 bg-ink rounded-full" />
                  <span className="text-xs font-sans uppercase tracking-widest text-ink/50 block mb-2">{item.year}</span>
                  <h3 className="text-xl font-serif text-ink mb-2">{item.title}</h3>
                  <p className="text-sm font-sans text-ink/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 md:py-32 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-12 text-ink max-w-4xl mx-auto leading-[1.2]">
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
        <section className="py-20 md:py-24 px-5 md:px-8 xl:px-18 bg-ink text-porcelain">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-serif mb-16">Our Process</h2>
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
        <section className="py-20 md:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <ParallaxImage
                  src="https://azureinteriors.in/wp-content/uploads/2022/10/WhatsApp-Image-2022-06-03-at-4.13.26-PM.jpeg"
                  alt="Values detail"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif mb-12 text-ink">Studio Values</h2>
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

        {/* Closing Quote */}
        <section className="py-24 md:py-32 px-5 text-center bg-stone">
          <h2 className="text-3xl md:text-5xl font-serif text-ink max-w-4xl mx-auto leading-relaxed">
            “The best spaces do not simply look complete.<br />
            They feel <span className="font-script text-[1.2em] font-normal lowercase">inevitable.</span>”
          </h2>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}
