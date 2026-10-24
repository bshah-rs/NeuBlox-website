import "./_group.css";
import { useEffect } from "react";
import { Layout } from "./_shared/CurrentLayout";
import { Button } from "@/components/ui/button";
import { MockContactForm as ContactForm } from "./_shared/MockContactForm";
import { blogPosts } from "./_shared/blog";
import { ArrowRight, ChevronRight, Cpu, Network, Cpu as RobotIcon } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "NeuBlox | Physical AI Infrastructure";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "NeuBlox is a stealth company building next-generation infrastructure for Physical AI.");
    }
  }, []);

  const latestPosts = blogPosts.slice(0, 3);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Subtle geometric background grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-50 blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-6 uppercase border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Stealth
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Building infrastructure <br className="hidden md:block"/> for Physical AI.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl leading-relaxed">
              NeuBlox is a stealth company working at the intersection of AI, robotics, and real-world intelligent systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" onClick={scrollToContact} className="text-base h-14 px-8 shadow-sm">
                Stay in Touch
              </Button>
              <a href="#insights">
                <Button size="lg" variant="outline" className="text-base h-14 px-8 border-primary/20 hover:bg-primary/5">
                  Read Insights <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
            
            <p className="text-sm text-foreground/50 max-w-lg border-l-2 border-primary/30 pl-4 py-1 italic">
              We are currently sharing limited public information while engaging selectively with investors, partners, and ecosystem collaborators.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Physical AI Section */}
      <section className="py-24 bg-card border-y border-border/40 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Physical AI is entering the real world.</h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              The next wave of AI will not live only in text, images, and software workflows. It will move into machines that perceive, reason, adapt, and act in dynamic physical environments. <strong className="text-foreground font-semibold">NeuBlox is focused on the infrastructure layer required to make that transition practical, scalable, and real-time.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 3. What we are exploring */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">What we are exploring</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-background border border-border/60 hover:border-primary/30 p-8 rounded-2xl transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-world intelligence</h3>
              <p className="text-foreground/70 leading-relaxed">
                Systems that connect perception, decision-making, and action in physical environments.
              </p>
            </div>
            
            <div className="group bg-background border border-border/60 hover:border-primary/30 p-8 rounded-2xl transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Efficient AI infrastructure</h3>
              <p className="text-foreground/70 leading-relaxed">
                Architectures that can support responsive, low-latency intelligence beyond traditional cloud-centric AI.
              </p>
            </div>
            
            <div className="group bg-background border border-border/60 hover:border-primary/30 p-8 rounded-2xl transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RobotIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Robotics ecosystem enablement</h3>
              <p className="text-foreground/70 leading-relaxed">
                Tools and platforms that help accelerate the path from simulation, training, and validation to deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why now */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract background motif */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,100 M100,0 L0,100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why now.</h2>
            </div>
            <div>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed border-l-4 border-primary-foreground/30 pl-6 py-2">
                Foundation models are expanding from digital reasoning into physical-world interaction. At the same time, robotics, simulation, edge compute, and AI infrastructure are converging. This creates a new opportunity to rethink the compute and software stack for intelligent machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Insights */}
      <section id="insights" className="py-32 bg-background relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Insights</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <a href="#insights">
              <span className="hidden md:flex items-center text-primary font-medium hover:underline cursor-pointer group">
                View all insights <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {latestPosts.map((post) => (
              <a key={post.slug} href="#insights">
                <div className="group h-full flex flex-col bg-card border border-border/60 hover:border-primary/40 rounded-2xl overflow-hidden transition-all hover:shadow-lg cursor-pointer">
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <time className="text-sm text-muted-foreground">{post.date}</time>
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-8 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                      Read more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="md:hidden mt-8 text-center">
            <a href="#insights">
              <Button variant="outline" className="w-full">
                View all insights
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 6. Contact */}
      <section id="contact" className="py-32 bg-card border-t border-border/40 scroll-mt-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay in touch with NeuBlox.</h2>
              <p className="text-lg text-foreground/70">
                NeuBlox is currently in stealth. If you are an investor, robotics partner, AI infrastructure company, or builder interested in Physical AI, we would be glad to connect.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
