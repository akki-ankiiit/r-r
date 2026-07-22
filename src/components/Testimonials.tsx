import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Emily Thompson",
    role: "Homeowner",
    headline: "Working with them was a complete game-changer for our daily routine.",
    text: "Their team delivered practical automation solutions tailored to our specific needs. The interface is clean and intuitive, making it super easy to control my lights, thermostat, and security system from one place.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    houseImage1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    houseImage2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    tags: ["Smart Home", "Automation", "Lighting"]
  },
  {
    name: "Jason Miller",
    role: "Property Investor",
    headline: "Azure transformed our bare apartment into a warm, inviting home.",
    text: "Their attention to detail and understanding of materials is unmatched. It feels effortlessly premium without losing the warmth of a real home, which has significantly increased the property value.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    houseImage1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    houseImage2: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
    tags: ["Interior Design", "Renovation", "Styling"]
  },
  {
    name: "Olivia Bennett",
    role: "Creative Director",
    headline: "The bespoke furniture they designed for our living room is absolutely stunning.",
    text: "It fits the space perfectly and is incredibly comfortable. We get compliments on it every single time we host guests. The craftsmanship is truly exceptional.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    houseImage1: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80",
    houseImage2: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
    tags: ["Bespoke Furniture", "Craftsmanship", "Living Space"]
  },
  {
    name: "Marcus Chen",
    role: "Restaurateur",
    headline: "Working with Azure was a seamless experience from start to finish.",
    text: "They handled everything with incredible professionalism and taste. They truly understand how to marry functionality with pure aesthetics in a commercial setting.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    houseImage1: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&q=80",
    houseImage2: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    tags: ["Commercial", "Aesthetics", "Space Planning"]
  },
  {
    name: "Sarah Jenkins",
    role: "Boutique Owner",
    headline: "The lighting design they implemented completely changed the atmosphere.",
    text: "It feels so much more premium now. The way they manipulate shadows is just masterful, making our products stand out brilliantly to our customers.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    houseImage1: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    houseImage2: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
    tags: ["Lighting Design", "Retail", "Atmosphere"]
  },
  {
    name: "David Wright",
    role: "Architect",
    headline: "A masterclass in modern minimalism. They balance form and function perfectly.",
    text: "They know exactly how to design without making a space feel cold. The entire process was incredibly collaborative and inspiring from an architectural standpoint.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    houseImage1: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80",
    houseImage2: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    tags: ["Architecture", "Minimalism", "Consultation"]
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Inline CSS to hide scrollbar while keeping functionality
  const hideScrollbarStyle = `
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;

  return (
    <section className="relative w-full py-16 md:py-20 flex flex-col justify-center bg-[#FDFBF7] font-sans overflow-hidden">
      <style>{hideScrollbarStyle}</style>

      {/* Title & Navigation Header */}
      <div className="mb-6 px-4 md:px-12 relative z-20 flex flex-col md:flex-row md:items-end justify-between max-w-[1400px] w-full mx-auto gap-6">
        <div>
          <p className="font-script text-3xl md:text-4xl opacity-90 text-ink/80 capitalize leading-none mb-0">What they say</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-none mt-1">
            Voices that inspire <span className="font-script text-[1.4em] font-normal mx-1 -mb-2 inline-block">us.</span>
          </h2>
        </div>

        {/* Navigation Arrows (Desktop Top Right) */}
        <div className="hidden md:flex gap-4">
          <button onClick={scrollLeft} className="w-12 h-12 bg-white border border-ink/10 rounded-full flex items-center justify-center text-ink hover:bg-stone transition-all shadow-sm">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollRight} className="w-12 h-12 bg-white border border-ink/10 rounded-full flex items-center justify-center text-ink hover:bg-stone transition-all shadow-sm">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div className="w-full relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 md:px-12 pb-8 pt-2"
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[90vw] md:w-[600px] lg:w-[680px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-5 md:p-6 flex flex-col md:flex-row gap-6 md:gap-8 border border-ink/5 relative"
            >
              {/* Left: Redesigned Premium Media Block */}
              <div className="w-full md:w-[40%] relative shrink-0">
                {/* Main Video Thumbnail */}
                <div className="w-full h-48 md:h-full md:min-h-[240px] rounded-2xl overflow-hidden bg-stone relative group cursor-pointer shadow-md">
                  <img src={t.houseImage1} alt="Video Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-ink border-b-[5px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>

                {/* Floating pill */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md rounded-full py-1.5 px-3 flex items-center gap-2 shadow-sm z-10">
                  <div className="flex -space-x-1.5">
                    <img className="w-5 h-5 rounded-full border-2 border-white object-cover" src={testimonials[0].image} alt="User" />
                    <img className="w-5 h-5 rounded-full border-2 border-white object-cover" src={testimonials[1].image} alt="User" />
                    <img className="w-5 h-5 rounded-full border-2 border-white object-cover" src={testimonials[2].image} alt="User" />
                  </div>
                  <span className="text-[9px] font-semibold text-ink">150+ Clients</span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-[60%] flex flex-col py-2 md:py-4 md:pl-4">
                <div className="flex gap-1 text-[#F5C518] mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" />
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-normal text-ink leading-[1.3] mb-4 tracking-tight">
                  {t.headline}
                </h3>

                <p className="text-[13px] md:text-sm text-ink/60 leading-relaxed mb-6 font-light line-clamp-4">
                  {t.text}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={t.image} alt={t.name} className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover shadow-sm border border-ink/5" />
                    <div>
                      <p className="text-xs font-semibold text-ink">{t.name}</p>
                      <p className="text-[10px] text-ink/60 mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag, i) => (
                      <span key={i} className="bg-[#F6F6F6] px-3 py-1.5 rounded-full text-[9px] md:text-[10px] text-ink/70 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </section>
  );
}
