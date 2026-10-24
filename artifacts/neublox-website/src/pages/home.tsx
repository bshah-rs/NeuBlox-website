import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { ContactForm } from "@/components/contact-form";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const title = "NeuBlox | A company in stealth";
    const description = "NeuBlox is an independent company choosing to keep its work private for now. For general enquiries, get in touch.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
  }, []);

  return (
    <Layout>
      <section id="top" className="relative isolate flex min-h-[760px] items-end overflow-hidden md:min-h-[880px]">
        <img
          src="/images/neublox-stealth-background.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#eaf3f8]/55 via-transparent to-[#eaf3f8]/90" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#eef5f8]/35 via-transparent to-transparent" />
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 pt-36 md:px-12 md:pb-24">
          <div className="max-w-[760px] animate-[arrive_.9s_ease-out_both]">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#557b8d]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#35576a]">A company in stealth</p>
            </div>
            <h1 className="font-sans text-[clamp(3.4rem,9vw,8rem)] font-light leading-[.91] tracking-[-.075em] text-[#15384d]">
              Quietly<br />taking shape.
            </h1>
            <p className="mt-8 max-w-[470px] text-base leading-7 text-[#36586a] md:mt-10 md:text-lg md:leading-8">
              NeuBlox is an independent company choosing to keep its work private for now.
            </p>
            <a href="#contact" className="group mt-9 inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#17384b] md:mt-12">
              A note to our team
              <span className="grid h-10 w-10 place-items-center rounded-full border border-[#527487]/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowDownRight size={17} strokeWidth={1.5} />
              </span>
            </a>
          </div>
          <div className="mt-16 flex items-center justify-between border-t border-[#527487]/25 pt-4 text-[9px] uppercase tracking-[0.23em] text-[#547384] md:mt-24">
            <span>NeuBlox</span>
            <span>Private by design</span>
          </div>
        </div>
        <div className="absolute right-6 top-[43%] hidden -translate-y-1/2 [writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.3em] text-[#567788]/75 md:block">
          A considered beginning
        </div>
      </section>

      <section id="presence" className="relative overflow-hidden bg-[#eaf2f6]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-[.78fr_1.22fr] md:gap-24 md:px-12 md:py-36">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#648494]">A brief introduction</p>
            <h2 className="mt-7 max-w-[430px] font-sans text-4xl font-light leading-[1.05] tracking-[-.055em] text-[#17384b] md:text-6xl">
              Present, by choice. Private, by design.
            </h2>
          </div>
          <div className="flex flex-col justify-end md:pb-1">
            <p className="max-w-[570px] text-lg leading-8 text-[#456677] md:text-[21px] md:leading-9">
              Our public presence is intentionally simple while we keep our work private. Thank you for taking the time to learn about NeuBlox.
            </p>
            <div className="mt-12 grid max-w-[570px] grid-cols-2 border-y border-[#7897a5]/35 py-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#718f9d]">Public presence</p>
                <p className="mt-2 text-sm text-[#294c60]">A quiet introduction</p>
              </div>
              <div className="border-l border-[#7897a5]/35 pl-5 md:pl-8">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#718f9d]">More to come</p>
                <p className="mt-2 text-sm text-[#294c60]">When the time is right</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#8eacb8]/25 md:h-[440px] md:w-[440px]" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full border border-[#8eacb8]/20 md:h-[440px] md:w-[440px]" />
      </section>

      <section id="contact" className="relative bg-[#173b50] text-[#edf5f7] scroll-mt-8">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-[.78fr_1.22fr] md:items-start md:px-12 md:py-28">
          <div className="md:sticky md:top-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a9c5d0]">Contact</p>
            <h2 className="mt-6 max-w-[560px] font-sans text-4xl font-light leading-[1.02] tracking-[-.055em] md:text-6xl">
              We welcome a note.
            </h2>
            <p className="mt-6 max-w-[420px] text-base leading-7 text-[#c1d4dc]">
              For general enquiries, you are welcome to get in touch.
            </p>
            <a href="mailto:contact@neublox.ai" className="group mt-8 inline-flex items-center gap-3 border-b border-[#a5c1cc]/55 pb-2 text-sm text-[#edf5f7] transition-colors hover:border-[#edf5f7]">
              contact@neublox.ai
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
