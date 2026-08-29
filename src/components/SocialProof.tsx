const reviews = [
  {
    initial: "G",
    name: "Gabriel Garcia",
    time: "há 2 meses",
    location: "Indaiatuba",
    text: "Excelente atendimento! O técnico Renato chegou no horário combinado, diagnosticou que o ar condicionado estava sem gás por conta de um vazamento na flange, fez a correção e recarga na hora. Preço justo e muito profissional.",
  },
  {
    initial: "V",
    name: "Valquíria Mello",
    time: "há 4 meses",
    location: "Itaici",
    text: "Fizeram a instalação de dois aparelhos inverter no meu apartamento. Serviço impecável, usaram tubulação 100% de cobre e fizeram o teste de vácuo direitinho. Não deixaram sujeira nenhuma na parede. Recomendo muito!",
  },
  {
    initial: "M",
    name: "Marcos Vinicius Silva",
    time: "há 1 mês",
    location: "Salto",
    text: "Meu ar começou a vazar água dentro do quarto no meio da noite. Chamei a AR FRI pela manhã e na hora do almoço o técnico já estava aqui e resolveu a desobstrução do dreno e fez a higienização completa. 10/10.",
  },
];

const SocialProof = () => {
  return (
    <section className="bg-[#F5F4F1] text-[#14212E] py-16 sm:py-24">
      <div className="container-max">
        {/* Header with Aggregated Google Score */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
              05 — Prova
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] text-[#14212E]">
              Avaliações reais do Google
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-white border border-[#E4E2DD] rounded-md px-5 py-3.5 shadow-sm">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#14212E] tracking-tight">
              4,6
            </div>
            <div>
              <div className="text-[#1D74E8] text-sm tracking-widest">
                ★★★★★
              </div>
              <div className="font-sans text-xs text-[#68737E] mt-1">
                Avaliações · Google
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E4E2DD] rounded-md p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EDEBE6] flex items-center justify-center font-heading font-bold text-base text-[#5A646E] shrink-0">
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-sm sm:text-[15px] text-[#14212E]">
                      {r.name}
                    </div>
                    <div className="font-sans text-xs text-[#8A9099]">
                      {r.time} · {r.location}
                    </div>
                  </div>
                </div>

                <div className="text-[#1D74E8] text-xs tracking-widest mb-3">
                  ★★★★★
                </div>

                <p className="font-sans text-sm sm:text-[15px] text-[#3E4A56] leading-relaxed">
                  "{r.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
