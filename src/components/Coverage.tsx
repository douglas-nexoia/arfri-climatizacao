import { MapPin } from "lucide-react";

const bairros = [
  "Centro (Indaiatuba)",
  "Jardim Morumbi",
  "Vila Suíça",
  "Cidade Nova",
  "Itaici",
  "Parque Ecológico",
  "Jardim Pau Preto",
  "Jardim Esplanada",
  "Jardim Bela Vista",
  "Jardim Tropical",
  "Salto (Centro & Bairros)",
  "Itu (Centro & Região)",
];

const Coverage = () => {
  const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent("Olá! Gostaria de saber se vocês atendem no meu bairro.")}`;

  return (
    <section id="onde" className="bg-[#0A141E] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Neighborhood Chips */}
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
              04 — Cobertura
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4 text-white">
              Atendemos o seu bairro
            </h2>
            <p className="font-sans text-base sm:text-[16.5px] text-white/60 leading-relaxed mb-8 max-w-[480px]">
              Indaiatuba, Salto e Itu. Técnicos em rota constante pela região para garantir agilidade e pronto atendimento no mesmo dia.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {bairros.map((bairro, idx) => (
                <span
                  key={idx}
                  className="font-sans text-xs sm:text-sm text-white/80 border border-white/15 bg-white/5 rounded px-3 py-1.5"
                >
                  {bairro}
                </span>
              ))}
              <span className="font-sans text-xs sm:text-sm text-[#1D74E8] border border-[#1D74E8]/60 bg-[#1D74E8]/10 rounded px-3 py-1.5 font-semibold">
                + 20 bairros
              </span>
            </div>

            {/* Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-semibold text-base text-white border-b-2 border-[#1D74E8] pb-1 hover:text-[#1D74E8] transition-colors"
            >
              <span>Consultar o meu bairro →</span>
            </a>
          </div>

          {/* Right Column: Embedded Map representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[420px] aspect-square rounded-md overflow-hidden bg-[#12212F] border border-white/10 relative p-6 flex flex-col justify-between">
              {/* Map Graphic overlay */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#1D74E8_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex items-center gap-2 text-white/80 font-heading font-semibold text-sm">
                <MapPin className="w-4 h-4 text-[#1D74E8]" />
                <span>Base em Indaiatuba / SP</span>
              </div>

              <div className="relative z-10 bg-[#0A141E]/90 backdrop-blur-md border border-white/15 rounded p-4">
                <div className="font-mono text-[11px] text-[#1D74E8] uppercase tracking-wider mb-1">
                  Raio de Atendimento
                </div>
                <div className="font-sans text-sm text-white font-medium">
                  Indaiatuba • Salto • Itu e Região
                </div>
                <div className="font-sans text-xs text-white/50 mt-1">
                  Chamados abertos até 15h atendidos no mesmo dia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
