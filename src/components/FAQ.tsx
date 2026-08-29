import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Qual é o prazo de garantia do serviço?",
    a: "Noventa dias contados a partir da conclusão do serviço, entregues por escrito na ordem de serviço da AR FRI. Cobre as peças substituídas e a mão de obra técnica.",
  },
  {
    q: "Como funciona o orçamento e a visita?",
    a: "O técnico avalia o ar condicionado na sua residência ou empresa, identifica a causa da falha (pressão de gás, elétrica ou mecânica) e explica o procedimento necessário. Nada é feito sem sua autorização.",
  },
  {
    q: "Qual a agilidade e disponibilidade de atendimento na minha região?",
    a: "Contamos com técnicos em rota constante em Indaiatuba, Salto e Itu. Ao nos chamar no WhatsApp, verificamos a rota do dia para providenciar o atendimento mais ágil possível com você.",
  },
  {
    q: "Quais marcas de ar condicionado vocês atendem?",
    a: "Daikin, Fujitsu, LG, Samsung, Midea, Gree, Carrier, Elgin, Springer e Consul, entre outras. Trabalhamos exclusivamente com peças e componentes de padrão original.",
  },
  {
    q: "Trabalham com aparelhos de tecnologia Inverter?",
    a: "Sim. Nossos técnicos possuem treinamento específico para diagnósticos de placas eletrônicas inverter, sensores e compressores de frequência variável.",
  },
  {
    q: "A limpeza e higienização suja a parede ou o piso?",
    a: "Não. Utilizamos uma bolsa coletora impermeável profissional que isola o aparelho na parede, canalizando toda a água e os resíduos diretamente para o reservatório.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#0A141E] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Title & Text */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
              06 — Dúvidas
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
              As perguntas<br />que sempre chegam
            </h2>
            <p className="font-sans text-base text-white/55 leading-relaxed max-w-[360px]">
              Não achou sua dúvida? Manda uma mensagem no WhatsApp que a nossa equipe responde em minutos.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  onClick={() => toggle(i)}
                  className="border-b border-white/10 py-5 sm:py-6 cursor-pointer select-none group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-white group-hover:text-[#1D74E8] transition-colors">
                      {faq.q}
                    </h3>
                    <span className="font-heading text-2xl font-light text-[#1D74E8] leading-none shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {isOpen && (
                    <p className="font-sans text-sm sm:text-[15.5px] text-white/65 leading-relaxed mt-3.5 max-w-[620px]">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
