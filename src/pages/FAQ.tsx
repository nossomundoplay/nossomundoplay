import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, HelpCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqCategories = [
  {
    category: "Sobre o Serviço",
    questions: [
      {
        question: "O que é IPTV e como funciona?",
        answer: "IPTV (Internet Protocol Television) é uma tecnologia que transmite canais de TV e conteúdo de vídeo através da internet. Diferente da TV a cabo tradicional, você acessa todo o conteúdo através de um aplicativo instalado no seu dispositivo. Basta ter uma boa conexão de internet para assistir canais ao vivo, filmes e séries quando e onde quiser.",
      },
      {
        question: "Qual a diferença entre IPTV e streaming comum?",
        answer: "O IPTV oferece uma experiência mais completa, combinando canais de TV ao vivo (como na TV a cabo) com uma biblioteca de filmes e séries sob demanda (como Netflix). Você tem o melhor dos dois mundos em um único serviço, com preço muito mais acessível.",
      },
      {
        question: "O conteúdo é atualizado com frequência?",
        answer: "Sim! Nossa equipe trabalha diariamente para manter o catálogo sempre atualizado. Novos filmes e séries são adicionados frequentemente, muitas vezes antes de outras plataformas. Os canais ao vivo funcionam em tempo real, assim como na TV tradicional.",
      },
    ],
  },
  {
    category: "Teste Grátis e Pagamentos",
    questions: [
      {
        question: "Como funciona o teste grátis de 6 horas?",
        answer: "O teste grátis é muito simples: você entra em contato pelo WhatsApp, nossa equipe envia os dados de acesso em até 5 minutos, e você tem 6 horas completas para explorar todo o conteúdo. Não pedimos cartão de crédito e não há compromisso de assinatura.",
      },
      {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Aceitamos PIX (com desconto especial), cartão de crédito (parcelamento disponível) e boleto bancário. Após a confirmação do pagamento, seu acesso é liberado automaticamente em poucos minutos.",
      },
      {
        question: "Posso cancelar quando quiser?",
        answer: "Sim! Não trabalhamos com fidelidade ou multas. Você pode cancelar sua assinatura a qualquer momento sem burocracia, basta nos avisar pelo WhatsApp. Seu acesso continuará funcionando até o fim do período pago.",
      },
    ],
  },
  {
    category: "Instalação e Dispositivos",
    questions: [
      {
        question: "Preciso de uma internet muito rápida?",
        answer: "Não necessariamente! Nosso serviço é otimizado para funcionar bem a partir de 10 Mbps para qualidade HD. Para aproveitar conteúdo em 4K, recomendamos 25 Mbps ou mais. A maioria das conexões residenciais atuais são mais do que suficientes.",
      },
      {
        question: "Em quais dispositivos posso assistir?",
        answer: "Nosso serviço é compatível com Smart TVs (Samsung, LG, TCL, etc.), celulares e tablets (Android e iOS), computadores (Windows e Mac), TV Box, Amazon Fire Stick e praticamente qualquer dispositivo que suporte aplicativos IPTV.",
      },
      {
        question: "Em quantos dispositivos posso assistir ao mesmo tempo?",
        answer: "Todos os nossos planos permitem até 3 conexões simultâneas. Isso significa que três pessoas da família podem assistir conteúdos diferentes ao mesmo tempo, em dispositivos diferentes.",
      },
      {
        question: "A instalação é difícil?",
        answer: "Não! O processo é muito simples e enviamos um guia passo a passo com imagens. Além disso, nossa equipe de suporte pode fazer a instalação remotamente se você preferir. Em média, todo o processo leva menos de 5 minutos.",
      },
    ],
  },
  {
    category: "Qualidade e Suporte",
    questions: [
      {
        question: "O serviço trava ou cai?",
        answer: "Nossos servidores são premium e distribuídos em múltiplos data centers ao redor do mundo. Temos equipe técnica 24 horas monitorando a infraestrutura. Nossa taxa de uptime é superior a 99,9%, o que significa que é muito raro ter qualquer problema.",
      },
      {
        question: "Vocês oferecem suporte técnico?",
        answer: "Sim! Temos uma equipe de suporte humanizado disponível 24 horas por dia, 7 dias por semana, via WhatsApp. Seja para instalação, dúvidas ou qualquer problema técnico, estamos sempre prontos para ajudar.",
      },
      {
        question: "E se eu tiver problemas com algum canal?",
        answer: "Basta nos avisar pelo WhatsApp que nossa equipe técnica resolve rapidamente. Trabalhamos com múltiplas fontes de conteúdo, então sempre temos alternativas disponíveis para garantir que você não fique sem assistir.",
      },
    ],
  },
  {
    category: "Segurança e Privacidade",
    questions: [
      {
        question: "É seguro usar IPTV?",
        answer: "Nosso serviço utiliza conexões criptografadas e não coletamos dados sensíveis. Milhares de clientes utilizam diariamente sem nenhum problema. Sua privacidade e segurança são nossas prioridades.",
      },
      {
        question: "Meus dados estão protegidos?",
        answer: "Sim! Seguimos as melhores práticas de segurança da informação. Não compartilhamos seus dados com terceiros e todos os pagamentos são processados por gateways seguros e certificados.",
      },
    ],
  },
];

const FAQ = () => {
  const whatsappLink = "https://wa.me/5511916783168?text=Olá! Tenho uma dúvida sobre o serviço de IPTV.";

  return (
    <Layout>
      <Helmet>
        <title>Perguntas Frequentes sobre IPTV | FAQ - IPTV Premium</title>
        <meta name="description" content="Tire todas as suas dúvidas sobre nosso serviço de IPTV. Saiba como funciona, formas de pagamento, dispositivos compatíveis, teste grátis e muito mais." />
        <link rel="canonical" href="https://nova-stream-spot.lovable.app/faq" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Perguntas <span className="text-gradient-primary">Frequentes</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nosso serviço
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="max-w-3xl mx-auto space-y-8">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`cat-${catIndex}-item-${index}`}
                      className="glass-card rounded-xl px-6 border-border/50 data-[state=open]:border-primary/50"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Não encontrou o que procurava? Nossa equipe está pronta para ajudar!
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Suporte
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
