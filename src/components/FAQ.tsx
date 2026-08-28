import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  customFaqs?: Array<{ question: string; answer: string }>;
}

const defaultFaqs = [
  {
    question: "Vocês atendem quais cidades da região?",
    answer: "Atendemos com rapidez em Indaiatuba, Salto e Itu / SP, além de municípios vizinhos da Região Metropolitana de Campinas.",
  },
  {
    question: "O conserto do ar condicionado é feito na minha casa?",
    answer: "Sim! Mais de 95% dos problemas (como falta de gás, vazamento de água, capacitor queimado, sensor ou placa) são solucionados no próprio local na mesma visita.",
  },
  {
    question: "Por que a instalação com tubulação de cobre é superior?",
    answer: "A tubulação 100% de cobre suporta a alta pressão dos gases modernos (R410A e R32), não oxida facilmente e previne microvazamentos, além de ser a única exigida pelas grandes marcas para manter a garantia de fábrica.",
  },
  {
    question: "De quanto em quanto tempo devo fazer a higienização do ar condicionado?",
    answer: "Para residências, o recomendado é a cada 6 meses (ou 1 ano com pouco uso). Para comércios, escritórios e consultórios, o recomendado é trimestral ou semestral para cumprir as normas de saúde e manter o ar livre de fungos e bactérias.",
  },
  {
    question: "Qual o prazo de garantia dos serviços prestados?",
    answer: "Oferecemos 90 dias de garantia por escrito em todos os serviços executados e peças originais substituídas pela AR FRI Climatização.",
  },
  {
    question: "Vocês atendem aparelhos Inverter e Multi-Split?",
    answer: "Sim! Somos especialistas em tecnologia Inverter (LG Dual Inverter, Samsung WindFree, Daikin, Midea, Fujitsu e outras), com instrumental para teste eletrônico de placas e sensores.",
  },
];

const FAQ = ({ customFaqs = defaultFaqs }: FAQProps) => {
  return (
    <section id="faq" className="section-padding bg-[#071324] relative">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full mb-4">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Perguntas <span className="text-sky-400">Frequentes</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Tudo o que você precisa saber sobre manutenção, instalação e limpeza de ar condicionado.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {customFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-900/80 border border-white/10 rounded-2xl px-6 data-[state=open]:border-sky-400/50 data-[state=open]:bg-slate-900 transition-all duration-300 shadow-md"
              >
                <AccordionTrigger className="text-left font-bold text-white hover:text-sky-400 py-5 hover:no-underline text-base sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 pb-5 leading-relaxed text-sm sm:text-base">
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

export default FAQ;
