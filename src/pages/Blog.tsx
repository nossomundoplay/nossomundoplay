import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    slug: "o-que-e-iptv-guia-completo",
    title: "O Que é IPTV? Guia Completo Para Iniciantes em 2024",
    excerpt: "Descubra o que é IPTV, como funciona essa tecnologia revolucionária e por que ela está transformando a forma como consumimos entretenimento.",
    category: "Guias",
    date: "15 Jan 2024",
    readTime: "8 min",
    featured: true,
  },
  {
    slug: "como-escolher-melhor-servico-iptv",
    title: "Como Escolher o Melhor Serviço de IPTV: 7 Critérios Essenciais",
    excerpt: "Aprenda a identificar um serviço de IPTV de qualidade. Dicas importantes sobre estabilidade, suporte, catálogo e muito mais.",
    category: "Dicas",
    date: "12 Jan 2024",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "configurar-iptv-smart-tv-samsung-lg",
    title: "Como Configurar IPTV na Smart TV Samsung e LG - Passo a Passo",
    excerpt: "Tutorial completo com imagens para instalar e configurar IPTV nas principais marcas de Smart TV do mercado.",
    category: "Tutoriais",
    date: "10 Jan 2024",
    readTime: "5 min",
    featured: false,
  },
  {
    slug: "iptv-vs-tv-cabo-comparativo",
    title: "IPTV vs TV a Cabo: Comparativo Completo de Custo-Benefício",
    excerpt: "Análise detalhada comparando preços, qualidade, variedade de conteúdo e praticidade entre IPTV e TV a cabo tradicional.",
    category: "Comparativos",
    date: "08 Jan 2024",
    readTime: "7 min",
    featured: false,
  },
  {
    slug: "melhores-aplicativos-iptv-2024",
    title: "Os 5 Melhores Aplicativos de IPTV em 2024",
    excerpt: "Conheça os aplicativos mais populares e confiáveis para assistir IPTV em qualquer dispositivo, com prós e contras de cada um.",
    category: "Aplicativos",
    date: "05 Jan 2024",
    readTime: "6 min",
    featured: false,
  },
  {
    slug: "velocidade-internet-iptv-4k",
    title: "Qual Velocidade de Internet Preciso Para IPTV em 4K?",
    excerpt: "Entenda os requisitos de conexão para cada qualidade de vídeo e aprenda a otimizar sua rede para uma melhor experiência.",
    category: "Técnico",
    date: "03 Jan 2024",
    readTime: "4 min",
    featured: false,
  },
  {
    slug: "resolver-problemas-travamento-iptv",
    title: "IPTV Travando? 10 Soluções Para Resolver o Problema",
    excerpt: "Guia prático com as principais causas de travamento em IPTV e como resolver cada uma delas de forma simples.",
    category: "Solução de Problemas",
    date: "01 Jan 2024",
    readTime: "5 min",
    featured: false,
  },
  {
    slug: "assistir-futebol-iptv",
    title: "Como Assistir Futebol ao Vivo com IPTV: Guia do Torcedor",
    excerpt: "Tudo sobre como acompanhar os principais campeonatos de futebol através do IPTV, com qualidade e sem atrasos.",
    category: "Esportes",
    date: "28 Dez 2023",
    readTime: "5 min",
    featured: false,
  },
];

const categories = ["Todos", "Guias", "Dicas", "Tutoriais", "Comparativos", "Técnico"];

const Blog = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <Layout>
      <Helmet>
        <title>Blog IPTV Premium | Dicas, Tutoriais e Notícias sobre Streaming</title>
        <meta name="description" content="Fique por dentro das últimas novidades sobre IPTV. Tutoriais de instalação, dicas de uso, comparativos e muito mais para aproveitar ao máximo seu streaming." />
        <link rel="canonical" href="https://nova-stream-spot.lovable.app/blog" />
      </Helmet>

      {/* Hero Section */}
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "Todos"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-primary/30" />
                  </div>
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
                  <Button variant="ghost" size="sm" className="text-primary p-0 hover:bg-transparent">
                    Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="glass-card rounded-2xl p-6 group hover:border-primary/50 transition-all"
              >
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
                  <Button variant="ghost" size="sm" className="text-primary p-0 hover:bg-transparent">
                    Ler <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar mais artigos
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
