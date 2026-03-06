import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";

import iptvGuiaImg from "@/assets/blog/iptv-guia-completo.jpg";
import escolherServicoImg from "@/assets/blog/escolher-servico-iptv.jpg";
import futuroTvImg from "@/assets/blog/futuro-tv-streaming-2026.jpg";

const coverImages: Record<string, string> = {
  "o-que-e-iptv-guia-completo": iptvGuiaImg,
  "como-escolher-melhor-servico-iptv": escolherServicoImg,
  "futuro-da-tv-streaming-2026": futuroTvImg,
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const coverImage = coverImages[post.slug];

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Nova Stream IPTV</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://nova-stream-spot.lovable.app/blog/${post.slug}`} />
      </Helmet>

      <article className="py-20 bg-gradient-hero">
        <div className="container px-4 max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} de leitura
              </span>
            </div>
          </header>

          {/* Cover Image */}
          {coverImage && (
            <div className="rounded-2xl overflow-hidden mb-10">
              <img
                src={coverImage}
                alt={post.title}
                className="w-full h-auto object-cover aspect-video"
                loading="lazy"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12
            prose-headings:font-heading prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-table:text-muted-foreground
            prose-th:text-foreground prose-th:border-border
            prose-td:border-border
          ">
            {post.content.split("\n").map((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## "))
                return <h2 key={i}>{trimmed.replace("## ", "")}</h2>;
              if (trimmed.startsWith("### "))
                return <h3 key={i}>{trimmed.replace("### ", "")}</h3>;
              if (trimmed.startsWith("- "))
                return (
                  <li key={i} dangerouslySetInnerHTML={{ __html: formatBold(trimmed.replace("- ", "")) }} />
                );
              if (trimmed.startsWith("| ")) return null; // skip table rows for simplicity
              if (/^\d+\.\s/.test(trimmed))
                return (
                  <li key={i} dangerouslySetInnerHTML={{ __html: formatBold(trimmed.replace(/^\d+\.\s/, "")) }} />
                );
              return <p key={i} dangerouslySetInnerHTML={{ __html: formatBold(trimmed) }} />;
            })}
          </div>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              Gostou do conteúdo? Experimente grátis!
            </h2>
            <p className="text-muted-foreground mb-6">
              Teste o Nova Stream por 6 horas sem compromisso.
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              className="animate-pulse-glow"
              asChild
            >
              <a
                href="https://wa.me/5511916783168?text=Olá! Gostaria de fazer o teste grátis de 6 horas do IPTV Premium!"
                target="_blank"
                rel="noopener noreferrer"
              >
                QUERO MEU TESTE GRÁTIS
              </a>
            </Button>
          </div>

          {/* Related Posts */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="glass-card rounded-2xl p-5 group hover:border-primary/50 transition-all"
                >
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                    {rp.category}
                  </span>
                  <h3 className="font-heading text-base font-bold text-foreground mt-3 group-hover:text-primary transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {rp.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

function formatBold(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

export default BlogPost;
