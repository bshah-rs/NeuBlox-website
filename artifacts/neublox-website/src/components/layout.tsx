import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#f4f8fb] font-sans text-[#17384b] selection:bg-[#b9dce9] selection:text-[#17384b]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-7">
          <a href="/" aria-label="NeuBlox home" className="relative z-50">
            <img src="/neublox-logo.png" alt="NeuBlox" className="h-16 w-auto object-contain md:h-20" />
          </a>
          <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.22em] text-[#35576a] md:flex">
            <a className="transition-colors hover:text-[#102d3e]" href="/#presence">Our presence</a>
            <a className="transition-colors hover:text-[#102d3e]" href="/#contact">Contact</a>
          </nav>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="site-menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="relative z-50 rounded-full border border-[#8ba5b2]/40 bg-white/35 p-2.5 text-[#17384b] backdrop-blur-md md:hidden"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav id="site-menu" className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-9 bg-[#edf4f7]/95 text-sm uppercase tracking-[0.22em] backdrop-blur-xl md:hidden">
            <a href="/#presence" onClick={closeMenu}>Our presence</a>
            <a href="/#contact" onClick={closeMenu}>Contact</a>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-[#173b50] text-[#a9c1ca]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-white/15 px-6 py-6 text-[9px] uppercase tracking-[0.22em] md:flex-row md:items-center md:justify-between md:px-12">
          <span>© {new Date().getFullYear()} NeuBlox</span>
          <a href="mailto:contact@neublox.ai" className="transition-colors hover:text-white">General enquiries</a>
        </div>
      </footer>
    </div>
  );
}
