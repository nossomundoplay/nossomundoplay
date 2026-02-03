import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é IPTV e como funciona?",
    answer: "IPTV é uma tecnologia que transmite canais de TV e conteúdo de vídeo pela internet. Você recebe um aplicativo e login para acessar todo o conteúdo em qualquer dispositivo conectado à internet. É simples, prático e você assiste onde quiser."
  },
  {
    question: "Preciso de uma internet muito rápida?",
    answer: "Não! Nosso serviço é otimizado para funcionar bem a partir de 10MB de internet. Para qualidade 4K, recomendamos 25MB ou mais. A maioria das conexões residenciais atuais são mais do que suficientes."
  },
  {
    question: "Em quantos dispositivos posso assistir?",
    answer: "Com qualquer plano, você pode assistir em até 3 dispositivos simultaneamente. Isso significa que toda a família pode assistir ao mesmo tempo em aparelhos diferentes."
  },
  {
    question: "Como funciona o teste grátis de 6 horas?",
    answer: "É muito simples! Você entra em contato pelo WhatsApp, enviamos os dados de acesso em até 5 minutos, e você tem 6 horas completas para testar todo o conteúdo sem pagar nada. Sem cartão, sem compromisso."
  },
  {
    question: "O serviço trava ou cai?",
    answer: "Nossos servidores são premium e distribuídos em múltiplos data centers. Temos equipe técnica 24 horas monitorando. A taxa de uptime é superior a 99,9%. É muito raro ter qualquer problema."
  },
  {
    question: "Como é feito o pagamento?",
    answer: "Aceitamos PIX (com desconto), cartão de crédito e boleto. O pagamento é simples e seguro. Após confirmação, seu acesso é liberado automaticamente em poucos minutos."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Não temos fidelidade nem multas. Você pode cancelar a qualquer momento sem burocracia. Basta nos avisar pelo WhatsApp."
  },
  {
    question: "O conteúdo é atualizado com frequência?",
    answer: "Sim! Filmes e séries são atualizados diariamente. Lançamentos chegam muito rápido, muitas vezes antes de outras plataformas. Nossa equipe trabalha constantemente para manter o catálogo sempre atualizado."
  },
  {
    question: "É seguro usar IPTV?",
    answer: "Nosso serviço usa conexões criptografadas e não coletamos dados sensíveis. Milhares de clientes usam diariamente sem nenhum problema. Sua privacidade é nossa prioridade."
  },
  {
    question: "Vocês oferecem suporte técnico?",
    answer: "Sim! Temos suporte humanizado 24 horas por dia, 7 dias por semana via WhatsApp. Nossa equipe está sempre pronta para ajudar com instalação, dúvidas ou qualquer problema técnico."
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas <span className="text-gradient-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire todas as suas dúvidas antes de começar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-border/50 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
