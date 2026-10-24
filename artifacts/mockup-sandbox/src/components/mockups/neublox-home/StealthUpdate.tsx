import "./_group.css";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const contactEmail = "contact@neublox.ai";

export function StealthUpdate() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#f4f8fb] text-[#17384b] selection:bg-[#b9dce9] selection:text-[#17384b]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <a href="#top" aria-label="NeuBlox home" onClick={closeMenu} className="relative z-50">
            <img src="/__mockup/images/neublox-logo.png" alt="NeuBlox" className="h-9 w-auto object-contain md:h-11" />
          </a>
          <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.22em] text-[#35576a] md:flex">
            <a className="transition-colors hover:text-[#102d3e]" href="#presence">Our presence</a>
            <a className="transition-colors hover:text-[#102d3e]" href="#contact">Contact</a>
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-50 rounded-full border border-[#8ba5b2]/40 bg-white/35 p-2.5 text-[#17384b] backdrop-blur-md md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-9 bg-[#edf4f7]/95 text-sm uppercase tracking-[0.22em] backdrop-blur-xl md:hidden">
          <a href="#presence" onClick={closeMenu}>Our presence</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      )}

      <section id="top" className="relative isolate flex min-h-[760px] items-end md:min-h-[880px]">
        <img
          src="/__mockup/images/neublox-stealth-background.jpg"
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
            <h1 className="font-['DM_Sans'] text-[clamp(3.4rem,9vw,8rem)] font-light leading-[.91] tracking-[-.075em] text-[#15384d]">
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
            <h2 className="mt-7 max-w-[430px] font-['DM_Sans'] text-4xl font-light leading-[1.05] tracking-[-.055em] text-[#17384b] md:text-6xl">
              Present, by choice. Private, by design.
            </h2>
          </div>
          <div className="flex flex-col justify-end md:pb-1">
            <p className="max-w-[570px] text-lg leading-8 text-[#456677] md:text-[21px] md:leading-9">
              We believe a company can be present without saying more than it should. NeuBlox is building thoughtfully, and keeping this space simple while we do.
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

      <section id="contact" className="relative bg-[#173b50] text-[#edf5f7]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:px-12 md:py-28">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a9c5d0]">Contact</p>
            <h2 className="mt-6 max-w-[660px] font-['DM_Sans'] text-4xl font-light leading-[1.02] tracking-[-.055em] md:text-7xl">
              We welcome a note.
            </h2>
            <p className="mt-6 max-w-[420px] text-base leading-7 text-[#c1d4dc]">
              For general enquiries, you are welcome to get in touch.
            </p>
          </div>
          <a
            href={`mailto:${contactEmail}`}
            className="group inline-flex w-fit items-center gap-5 border-b border-[#a5c1cc]/55 pb-3 text-sm text-[#edf5f7] transition-colors hover:border-[#edf5f7]"
          >
            {contactEmail}
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
        <footer className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-white/15 px-6 py-6 text-[9px] uppercase tracking-[0.22em] text-[#a9c1ca] md:flex-row md:items-center md:justify-between md:px-12">
          <span>© {new Date().getFullYear()} NeuBlox</span>
          <span>A considered public presence</span>
        </footer>
      </section>
      <style>{`
        @keyframes arrive {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </main>
  );
}

export default StealthUpdate;
