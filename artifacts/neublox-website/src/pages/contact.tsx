import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | NeuBlox";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get in touch with the NeuBlox team. We are selectively engaging with investors, partners, and ecosystem collaborators.");
    }
  }, []);

  return (
    <Layout>
      <div className="bg-background min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Stay in touch with NeuBlox.</h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                We are currently operating in stealth and selectively engaging with investors, partners, and ecosystem collaborators.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              <ContactForm />
              
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="font-semibold text-lg mb-2">Direct Inquiries</h3>
                <p className="text-foreground/70 mb-4">
                  For time-sensitive matters, you can also reach our team directly via email.
                </p>
                <a href="mailto:contact@neublox.ai" className="text-primary font-medium hover:underline inline-flex items-center">
                  contact@neublox.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
