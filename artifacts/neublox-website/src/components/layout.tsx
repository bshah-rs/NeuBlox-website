import { Link, useLocation } from "wouter";
import { siteConfig } from "@/config/site";
import { ReactNode, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for sticky nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 relative">
            {/* Fallback to text if image fails is handled by standard img alt, but we'll provide a nice textual fallback block via CSS/error handling if needed. For now, pure img is fine. */}
            <img 
              src="/neublox-logo.png" 
              alt="NeuBlox Logo" 
              className="h-22 w-auto object-contain"
              onError={(e) => {
                // If the logo fails to load, replace with styled text wordmark
                e.currentTarget.style.display = 'none';
                const span = document.createElement('span');
                span.className = 'font-bold tracking-tight text-xl text-primary';
                span.innerText = 'NeuBlox';
                e.currentTarget.parentNode?.appendChild(span);
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/">
              <span className={`transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-foreground/80"}`}>
                Home
              </span>
            </Link>
            <Link href="/insights">
              <span className={`transition-colors hover:text-primary ${location.startsWith("/insights") ? "text-primary" : "text-foreground/80"}`}>
                Insights
              </span>
            </Link>
            <Link href="/contact">
              <span className={`transition-colors hover:text-primary ${location === "/contact" ? "text-primary" : "text-foreground/80"}`}>
                Contact
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center animate-in fade-in duration-200 md:hidden">
          <nav className="flex flex-col items-center gap-8 text-2xl font-medium">
            <Link href="/">
              <span className={location === "/" ? "text-primary" : "text-foreground"}>Home</span>
            </Link>
            <Link href="/insights">
              <span className={location.startsWith("/insights") ? "text-primary" : "text-foreground"}>Insights</span>
            </Link>
            <Link href="/contact">
              <span className={location === "/contact" ? "text-primary" : "text-foreground"}>Contact</span>
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-foreground text-background py-16 border-t border-border/10">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-white">NeuBlox</h2>
            <p className="text-white/60 max-w-xs text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <h3 className="font-semibold text-white/80 mb-2 tracking-wide uppercase text-xs">Platform</h3>
            <Link href="/insights">
              <span className="text-white/60 hover:text-white transition-colors cursor-pointer">Insights</span>
            </Link>
            <Link href="/contact">
              <span className="text-white/60 hover:text-white transition-colors cursor-pointer">Contact</span>
            </Link>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <h3 className="font-semibold text-white/80 mb-2 tracking-wide uppercase text-xs">Legal</h3>
            <span className="text-white/60">Privacy Policy</span>
            <span className="text-white/60">Terms of Service</span>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} {siteConfig.name} All rights reserved.</p>
          <p className="mt-2 md:mt-0">Confidential & Proprietary</p>
        </div>
      </footer>
    </div>
  );
}
