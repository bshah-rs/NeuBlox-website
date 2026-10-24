import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { blogPosts, formatBlogDate } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";

export default function Insights() {
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    document.title = "Insights | NeuBlox";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Insights and perspectives on Physical AI, Robotics, and Infrastructure from NeuBlox.");
    }
  }, []);

  const categories = ["All", "Physical AI", "Robotics", "AI Infrastructure", "Edge Intelligence", "Simulation", "Real-Time Systems"];

  const filteredPosts = filter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <Layout>
      <div className="bg-background min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Insights & Perspectives</h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Exploring the technical, architectural, and strategic shifts required to bring intelligence to the physical world.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 pb-8 border-b border-border/50">
            <div className="flex items-center text-sm font-medium text-muted-foreground mr-4">
              <Filter className="w-4 h-4 mr-2" /> Filter by topic:
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    filter === cat 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/insights/${post.slug}`}>
                  <div className="group h-full flex flex-col bg-card border border-border/60 hover:border-primary/40 rounded-2xl overflow-hidden transition-all hover:shadow-lg cursor-pointer">
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <time className="text-sm text-muted-foreground" dateTime={post.date}>{formatBlogDate(post.date)}</time>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-8 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                        Read full article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border border-dashed rounded-xl bg-card">
              <h3 className="text-xl font-semibold mb-2">No insights found</h3>
              <p className="text-muted-foreground mb-6">We haven't published any articles in this category yet.</p>
              <Button variant="outline" onClick={() => setFilter("All")}>
                View all insights
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
