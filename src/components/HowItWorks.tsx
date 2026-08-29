const steps = [
  {
    n: "01",
    title: "Você manda o problema",
    desc: "Uma mensagem no WhatsApp com o aparelho e o que está acontecendo. Foto ou vídeo ajuda.",
  },
  {
    n: "02",
    title: "Agendamento ágil",
    desc: "Combinamos o melhor período e encaixe na rota do dia direto pelo WhatsApp.",
  },
  {
    n: "03",
    title: "Diagnóstico no local",
    desc: "O técnico avalia a pressão, elétrica e tubulação, explicando o defeito. Você decide ali.",
  },
  {
    n: "04",
    title: "Serviço com garantia",
    desc: "Peças originais, teste de vácuo profissional e 90 dias de garantia por escrito.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como" className="bg-[#0A141E] text-white py-16 sm:py-24">
      <div className="container-max">
        {/* Section Header */}
        <div className="max-w-[600px] mb-14">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
            02 — Como funciona
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
            Do WhatsApp ao conserto,<br />em quatro passos
          </h2>
          <p className="font-sans text-base sm:text-[16.5px] text-white/60">
            Você sabe as condições antes de autorizar. Sempre.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/15">
          {steps.map((step, i) => (
            <div
              key={i}
              className="py-8 px-6 sm:px-7 border-l border-white/10 relative first:border-l-0 sm:first:border-l-0 lg:first:border-l-0"
            >
              {/* Dot marker on top line */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#1D74E8]" />
              
              <div className="font-mono font-medium text-xs text-[#1D74E8] mb-4">
                {step.n}
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight mb-2.5">
                {step.title}
              </h3>
              <p className="font-sans text-sm sm:text-[14.5px] text-white/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
