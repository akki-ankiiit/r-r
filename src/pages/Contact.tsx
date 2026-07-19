"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";
import { ArrowRight, Check, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

const projectTypes = ["Residential", "Hospitality", "Commercial", "Retail", "Farm House", "Furniture", "Consultation", "Other"];
const budgetRanges = ["Under ₹50L", "₹50L - ₹1Cr", "₹1Cr - ₹3Cr", "₹3Cr - ₹5Cr", "₹5Cr+"];

export default function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dummy form state
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", city: "",
    projectType: "", location: "", area: "", stage: "", startDate: "", budget: "",
    description: "", aspirations: "", services: "", hearAbout: "", consent: false
  });

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain pb-24">
        {/* Hero */}
        <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 lg:pt-48 pb-12 md:pb-24 overflow-hidden bg-ink mb-16">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
              alt="Contact the Studio"
              speed={0.6}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20 mix-blend-normal" />
          </div>

          <div className="relative z-10 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto w-full text-porcelain flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-4xl">
              <p className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] mb-6 opacity-80">Contact</p>
              <h1 className="text-5xl md:text-[6vw] lg:text-[7vw] leading-[1.1] font-serif mb-6 tracking-tight text-porcelain/95">
                Let’s create something <span className="font-script text-[1.2em] font-normal lowercase pr-8 pb-4 -mb-4 pt-2 -mt-2 pl-4 -ml-4 inline-block opacity-90">amazing.</span>
              </h1>
              <p className="text-sm md:text-lg font-sans opacity-80 max-w-xl font-light tracking-wide mb-10 leading-relaxed">
                Tell us about your space, your aspirations and where you are in the journey. Our studio will get in touch to understand the project in more detail.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[1024px] mx-auto px-5 md:px-8 xl:px-12">

          {/* Top: Enquiry Form */}
          <div className="mb-24">
            <div className="bg-bone p-8 md:p-12 h-full rounded-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16"
                  >
                    <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive mb-2">
                      <Check className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-serif text-ink">Thank you.</h2>
                    <p className="text-sm font-sans text-ink/70 max-w-sm">
                      Your space has a story waiting to unfold. Our studio will be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center justify-between mb-10">
                      <h2 className="text-xl font-serif text-ink">Project Enquiry</h2>
                      <span className="text-xs font-sans uppercase tracking-widest text-ink/50">Step {step} of 4</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Step 1 */}
                      {step === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                          <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-ink/60 mb-6">About You</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            <input type="text" placeholder="Full Name *" required className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40" />
                            <input type="email" placeholder="Email Address *" required className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40" />
                            <input type="tel" placeholder="Phone Number *" required className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40" />
                            <input type="text" placeholder="City *" required className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40" />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2 */}
                      {step === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                          <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-ink/60 mb-6">About the Project</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {projectTypes.map(type => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => setFormData({ ...formData, projectType: type })}
                                className={cn(
                                  "py-3 px-4 text-xs font-sans uppercase tracking-widest border transition-all text-left leading-snug",
                                  formData.projectType === type
                                    ? "border-ink bg-ink text-porcelain"
                                    : "border-ink/20 text-ink hover:border-ink/50"
                                )}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3 */}
                      {step === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                          <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-ink/60 mb-6">Project Details</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            <input type="text" placeholder="Project Location *" className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40" />
                            <input type="text" placeholder="Approximate Area (sq.ft)" className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40" />
                            <select className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors appearance-none">
                              <option value="">Current Project Stage</option>
                              <option value="planning">Just Planning</option>
                              <option value="civil_ready">Civil Work Ready</option>
                              <option value="renovation">Renovation</option>
                            </select>
                            <input type="text" placeholder="Expected Start Date" className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40" />
                          </div>
                          <div className="mt-10">
                            <p className="text-xs font-sans uppercase tracking-[0.15em] text-ink/60 mb-6">Estimated Budget Range</p>
                            <div className="flex flex-wrap gap-3">
                              {budgetRanges.map(range => (
                                <button
                                  key={range}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, budget: range })}
                                  className={cn(
                                    "py-2 px-5 text-xs font-sans tracking-wide border transition-all rounded-full",
                                    formData.budget === range
                                      ? "border-ink bg-ink text-porcelain"
                                      : "border-ink/20 text-ink hover:border-ink/50"
                                  )}
                                >
                                  {range}
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 4 */}
                      {step === 4 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                          <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-ink/60 mb-6">Tell Us More</h3>
                          <textarea placeholder="Project description and design aspirations..." rows={3} className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40 resize-none" />
                          <input type="text" placeholder="How did you hear about Azure?" className="w-full bg-transparent border-b border-ink/20 py-2 text-sm font-sans text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink/40" />

                          <label className="flex items-start space-x-4 mt-8 cursor-pointer group">
                            <div className="w-4 h-4 border border-ink/30 flex items-center justify-center mt-0.5 group-hover:border-ink transition-colors">
                              {formData.consent && <Check className="w-3 h-3 text-ink" />}
                            </div>
                            <input type="checkbox" className="hidden" checked={formData.consent} onChange={() => setFormData({ ...formData, consent: !formData.consent })} />
                            <span className="text-xs font-sans text-ink/70 leading-relaxed max-w-sm">
                              I agree to the privacy policy and consent to being contacted regarding this enquiry.
                            </span>
                          </label>
                        </motion.div>
                      )}

                      {/* Navigation */}
                      <div className="relative flex items-center justify-between pt-8 mt-10 border-t border-ink/10">
                        {step > 1 ? (
                          <button type="button" onClick={handlePrev} className="text-xs font-sans uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
                            Back
                          </button>
                        ) : (
                          <div />
                        )}

                        {step < 4 ? (
                          <button type="button" onClick={handleNext} className="flex items-center space-x-3 text-xs font-sans uppercase tracking-widest text-ink hover:opacity-70 transition-opacity ml-auto z-10 bg-bone">
                            <span>Next Step</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <button type="submit" disabled={!formData.consent} className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-porcelain bg-ink px-6 py-3 hover:bg-ink/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ml-auto z-10">
                            <span>Share Project</span>
                          </button>
                        )}
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom: Contact Info & Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Map */}
            <div className="w-full h-[300px] md:h-[400px] bg-bone rounded-sm overflow-hidden order-2 md:order-1">
              <iframe
                src="https://maps.google.com/maps?q=21.243509976975417,81.65601036675933&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-[1.1] opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>

            {/* Right: Info */}
            <div className="flex flex-col space-y-12 text-sm font-sans text-ink order-1 md:order-2">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium uppercase tracking-wider mb-3 opacity-50">Studio</h3>
                  <a
                    href="https://maps.app.goo.gl/dueZ7FzaVaBYnYtKA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-relaxed hover:opacity-70 transition-opacity block"
                  >
                    State Guest House, Shankar Nagar Rd, next to TruEyes Opticals Store, opp. Pahuna, Civil Lines,<br />Raipur, Chhattisgarh 492001
                  </a>
                </div>
                <div>
                  <h3 className="font-medium uppercase tracking-wider mb-3 opacity-50">Business Hours</h3>
                  <p className="leading-relaxed">Monday — Friday<br />10:00 AM — 6:30 PM</p>
                </div>
              </div>

              <div className="pt-10 border-t border-ink/10">
                <h3 className="font-medium uppercase tracking-wider mb-6 opacity-50">Prefer a conversation?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <a href="tel:+919876543210" className="flex items-center space-x-3 text-ink hover:opacity-70 transition-opacity">
                    <Phone className="w-4 h-4" /> <span>+91 98765 43210</span>
                  </a>
                  <a href="mailto:hello@azureinteriors.com" className="flex items-center space-x-3 text-ink hover:opacity-70 transition-opacity">
                    <Mail className="w-4 h-4" /> <span>Email Us</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-ink hover:opacity-70 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.3.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.426.248-.705.248-1.31.173-1.433-.074-.134-.272-.21-.57-.36z" /><path d="M22 12c0 5.523-4.477 10-10 10-1.724 0-3.345-.438-4.757-1.2L2 22l1.24-5.263A9.957 9.957 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10z" /></svg> <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
