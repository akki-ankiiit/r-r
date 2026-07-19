import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function TermsOfService() {
  return (
    <PageTransition>
      <Header theme="dark" />
      <main className="min-h-screen bg-porcelain pt-32 pb-24 text-ink">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 tracking-tight">Terms of Service</h1>
          <div className="space-y-6 font-sans text-sm md:text-base leading-relaxed opacity-80">
            <p>
              Welcome to Azure Interiors. These Terms of Service outline the rules and regulations for the use of our website and services.
            </p>
            <h2 className="text-2xl font-serif mt-12 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Azure Interiors's website if you do not accept all of the terms and conditions stated on this page.
            </p>
            <h2 className="text-2xl font-serif mt-12 mb-4">Our Services</h2>
            <p>
              Azure Interiors provides bespoke interior design and architecture consultation. The materials and information on this website are for general informational purposes only and do not constitute professional advice or a formal agreement.
            </p>
            <h2 className="text-2xl font-serif mt-12 mb-4">Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, Azure Interiors and/or its licensors own the intellectual property rights for all material on this website, including photographs, designs, and written content. All intellectual property rights are reserved. You may view and/or print pages for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <h2 className="text-2xl font-serif mt-12 mb-4">Modifications</h2>
            <p>
              We reserve the right to revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
