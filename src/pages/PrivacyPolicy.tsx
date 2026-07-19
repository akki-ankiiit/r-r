import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <Header theme="dark" />
      <main className="min-h-screen bg-porcelain pt-32 pb-24 text-ink">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 tracking-tight">Privacy Policy</h1>
          <div className="space-y-6 font-sans text-sm md:text-base leading-relaxed opacity-80">
            <p>
              At Azure Interiors, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.
            </p>
            <h2 className="text-2xl font-serif mt-12 mb-4">Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, or when you contact us via our enquiry forms.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us, and may include your name, email address, phone number, and project details.
            </p>
            <h2 className="text-2xl font-serif mt-12 mb-4">How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes, primarily to respond to your inquiries and offer our interior design services. We do not sell, rent, or share your personal information with third parties for their promotional purposes.
            </p>
            <h2 className="text-2xl font-serif mt-12 mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at hello@azureinteriors.com or by post to:
              <br /><br />
              Azure Interiors<br />
              123 Design Avenue,<br />
              Civil Lines, Raipur,<br />
              Chhattisgarh 492001, India
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
