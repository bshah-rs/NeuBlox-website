import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout";
import { blogPosts } from "@/data/blog";
import { ArrowLeft } from "lucide-react";
import { marked } from "marked";

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | NeuBlox Insights`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", post.excerpt);
      }
      
      // Parse markdown asynchronously (marked can be sync but good practice if using extensions)
      Promise.resolve(marked.parse(post.content)).then((html) => {
        setHtmlContent(html as string);
      });
    }
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Insight not found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for does not exist.</p>
            <Link href="/insights">
              <span className="text-primary hover:underline flex items-center justify-center">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
              </span>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="bg-background min-h-screen pt-32 pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Link href="/insights">
            <span className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors cursor-pointer">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
            </span>
          </Link>
          
          <header className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <time className="text-sm text-muted-foreground">{post.date}</time>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-foreground leading-[1.2]">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                N
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{post.author}</span>
              </div>
            </div>
          </header>

          <div 
            className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-p:leading-relaxed prose-p:text-foreground/80 max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <hr className="my-16 border-border" />
          
          <div className="bg-card border rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Building the future of Physical AI?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We are quietly building infrastructure to scale intelligent machines. Let's connect.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center h-10 px-6 font-medium text-primary-foreground bg-primary rounded-md shadow-sm hover:bg-primary/90 transition-colors cursor-pointer">
                Get in touch
              </span>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
