import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts, categories } from "@/data/blogPosts";

import iptvGuiaImg from "@/assets/blog/iptv-guia-completo.jpg";
import escolherServicoImg from "@/assets/blog/escolher-servico-iptv.jpg";
import futuroTvImg from "@/assets/blog/futuro-tv-streaming-2026.jpg";

const coverImages: Record<string, string> = {
  "o-que-e-iptv-guia-completo": iptvGuiaImg,
  "como-escolher-melhor-servico-iptv": escolherServicoImg,
  "futuro-da-tv-streaming-2026": futuroTvImg,
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPosts = filtered.filter((post) => post.featured);
  const regularPosts = filtered.filter((post) => !post.featured);

  return (
    <Layout>
      <Helmet>
        <title>Blog IPTV Premium | Dicas, Tutoriais e Notícias sobre Streaming</title>
        <meta name="description" content="Fique por dentro das últimas novidades sobre IPTV. Tutoriais de instalação, dicas de uso, comparativos e muito mais para aproveitar ao máximo seu streaming." />
        <link rel="canonical" href="https://nova-stream-spot.lovable.app/blog" />
      </Helmet>

      <section className="py-20 bg-gradient-hero">
        <div className="container px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog <span className="text-gradient-primary">IPTV Premium</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Dicas, tutoriais e novidades sobre o mundo do streaming e IPTV
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === activeCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {featuredPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.slug}>
                  <article className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all h-full">
                    <div className="aspect-video relative overflow-hidden">
                      {coverImages[post.slug] ? (
                        <img
                          src={coverImages[post.slug]}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-primary/30" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                        Ler mais <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {/* Regular Posts Grid */}
          {regularPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.slug}>
                  <article className="glass-card rounded-2xl p-6 group hover:border-primary/50 transition-all h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                        Ler <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              Nenhum artigo encontrado nesta categoria.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Receba Novidades por <span className="text-gradient-primary">E-mail</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Assine nossa newsletter e receba dicas exclusivas, tutoriais e promoções diretamente no seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none text-foreground"
              />
              <Button variant="whatsapp">Assinar</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
