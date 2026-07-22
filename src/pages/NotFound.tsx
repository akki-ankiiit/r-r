import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-stone flex flex-col justify-center items-center pt-24 pb-16 md:pt-32 md:pb-16 md:pb-24 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-6 opacity-60 block">Error 404</span>
          
          <h1 className="text-6xl md:text-[8vw] leading-[1.1] font-serif mb-8 tracking-tight text-ink">
            Page not <span className="font-script text-[1.2em] font-normal lowercase pr-8 pb-4 -mb-4 pt-2 -mt-2 pl-4 -ml-4 inline-block opacity-90">found.</span>
          </h1>
          
          <p className="text-sm md:text-base font-sans text-ink/70 leading-relaxed mb-12 max-w-lg mx-auto">
            The space you are looking for seems to have been moved or doesn't exist. Let's guide you back to our carefully curated interiors.
          </p>
          
          <Link 
            to="/" 
            className="inline-block border border-ink/20 px-8 py-4 text-xs font-sans uppercase tracking-widest hover:bg-ink hover:text-stone transition-all duration-300"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
