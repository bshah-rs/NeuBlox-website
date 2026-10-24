import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  useEffect(() => {
    const title = "Contact | NeuBlox";
    const description = "For general enquiries, get in touch with NeuBlox.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
  }, []);

  return (
    <Layout>
      <div className="bg-background min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <div className="mb-12 max-w-2xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#648494]">Contact</p>
            <h1 className="font-sans text-4xl font-light leading-tight tracking-[-.055em] text-[#17384b] md:text-6xl">We welcome a note.</h1>
            <p className="mt-5 text-lg leading-8 text-[#456677]">
              For general enquiries, you are welcome to get in touch.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_.7fr] md:items-start">
            <ContactForm />
            <div className="rounded-2xl border border-[#7897a5]/25 bg-white/60 p-7">
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#648494]">Email</h2>
              <p className="mt-4 text-sm leading-6 text-[#456677]">You can also reach the NeuBlox team directly.</p>
              <a href="mailto:contact@neublox.ai" className="mt-4 inline-flex text-sm font-medium text-[#17384b] underline decoration-[#8ca8b4] underline-offset-4 hover:decoration-[#17384b]">
                contact@neublox.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
