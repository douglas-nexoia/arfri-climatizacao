import React from 'react';
import acUnitImg from "@/assets/ac-unit.jpg";

interface GuaranteeProps {
  serviceImage?: string;
  imageAlt?: string;
  caption?: string;
}

const guarantees = [
  {
    value: "90 dias",
    text: "Garantia por escrito na ordem de serviço, cobrindo peça trocada e mão de obra técnica.",
  },
  {
    value: "Originais",
    text: "Peças de fábrica e fluidos certificados. Você é informado de tudo antes de qualquer troca.",
  },
  {
    value: "Sem troca cega",
    text: "O técnico mede a pressão, mostra o teste e explica a falha antes de substituir qualquer item.",
  },
  {
    value: "Identificado",
    text: "Profissional qualificado, com ordem de serviço em nome da AR FRI e ferramental adequado.",
  },
];

const Guarantee: React.FC<GuaranteeProps> = ({
  serviceImage,
  imageAlt = "Ar condicionado moderno com instalação técnica AR FRI",
  caption = "Tubulação 100% cobre e teste de estanqueidade",
}) => {
  const displayImage = serviceImage || acUnitImg;

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

          {/* Right Column: High quality AC Unit Photo (No fake stock people) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="aspect-[4/5] w-full max-w-[420px] rounded-2xl overflow-hidden relative bg-[#EDEBE6] shadow-md border border-[#E4E2DD] group">
              <img
                src={displayImage}
                alt={imageAlt}
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="font-mono text-[10px] font-bold text-white bg-[#1D74E8] px-2.5 py-1 rounded-full uppercase shadow-md inline-block mb-2">
                    Garantia 90 Dias
                  </span>
                  <p className="font-mono text-xs text-white/95 leading-relaxed drop-shadow">
                    Padrão técnico AR FRI<br />
                    <span className="text-white/75">{caption}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
