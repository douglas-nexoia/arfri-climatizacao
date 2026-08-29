import technicianImg from "@/assets/technician-hero.jpg";

const guarantees = [
  {
    value: "90 dias",
    text: "Garantia por escrito na ordem de serviço, cobrindo peça trocada e mão de obra.",
  },
  {
    value: "Originais",
    text: "Peças de fábrica e fluidos certificados. Você é informado de tudo antes da troca.",
  },
  {
    value: "Sem troca cega",
    text: "O técnico mede a pressão, mostra o teste e explica a falha antes de substituir qualquer item.",
  },
  {
    value: "Identificado",
    text: "Profissional uniformizado, com ordem de serviço em nome da AR FRI e ferramental adequado.",
  },
];

const Guarantee = () => {
  return (
    <section id="garantia" className="bg-[#F5F4F1] text-[#14212E] py-16 sm:py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Guarantees List */}
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
              03 — Garantia
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4 text-[#14212E]">
              Nada é trocado<br />sem você entender.
            </h2>
            <p className="font-sans text-base sm:text-[16.5px] text-[#68737E] leading-relaxed mb-8 max-w-[500px]">
              O técnico mostra a medição, explica o que falhou e só depois realiza o serviço. Você recebe tudo documentado na ordem de serviço, com garantia por escrito.
            </p>

            {/* List Table */}
            <div className="grid gap-[1px] bg-[#E4E2DD] border border-[#E4E2DD] rounded-md overflow-hidden">
              {guarantees.map((g, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                >
                  <div className="font-heading font-bold text-lg sm:text-xl text-[#1D74E8] tracking-tight sm:min-w-[130px] shrink-0">
                    {g.value}
                  </div>
                  <div className="font-sans text-sm sm:text-[15px] text-[#5A646E] leading-relaxed">
                    {g.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo 4:5 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="aspect-[4/5] w-full max-w-[420px] rounded-md overflow-hidden relative bg-[#EDEBE6] shadow-sm border border-[#E4E2DD]">
              <img
                src={technicianImg}
                alt="Técnico especialista AR FRI em atendimento"
                className="w-full h-full object-cover filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="font-mono text-xs text-white/90 leading-relaxed drop-shadow">
                  Técnico qualificado AR FRI<br />
                  <span className="text-white/60">Atendimento em domicílio e empresas</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
