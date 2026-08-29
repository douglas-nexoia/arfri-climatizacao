import { MapPin } from "lucide-react";
import { trackWhatsAppConversion } from "@/lib/tracking";

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
              Indaiatuba, Salto e Itu. Técnicos em rota constante pela região para garantir agilidade e atendimento de qualidade.
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
              onClick={trackWhatsAppConversion}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans font-semibold text-base text-white border-b-2 border-[#1D74E8] pb-1 hover:text-[#1D74E8] transition-colors"
            >
              <span>Consultar o meu bairro →</span>
            </a>
          </div>

          {/* Right Column: Real Embedded Google Map of Indaiatuba & Region */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[440px] aspect-square rounded-md overflow-hidden bg-[#12212F] border border-white/15 relative shadow-xl">
              {/* Real Google Maps Embed with Dark Night Theme filter */}
              <iframe
                title="Mapa de Atendimento AR FRI - Indaiatuba, Salto e Itu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117498.41162397759!2d-47.30138980839845!3d-23.109015099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b417e296317b%3A0xa1dfb5c92c813be8!2sIndaiatuba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Base Card on Top */}
              <div className="absolute top-4 left-4 right-4 bg-[#0A141E]/92 backdrop-blur-md border border-white/15 rounded p-3 flex items-center justify-between pointer-events-none shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_0_3px_rgba(34,197,94,0.25)]" />
                  <div>
                    <div className="font-heading font-semibold text-xs text-white">
                      Base em Indaiatuba / SP
                    </div>
                    <div className="font-sans text-[11px] text-white/60">
                      Rotas diárias em Indaiatuba, Salto e Itu
                    </div>
                  </div>
                </div>
                <MapPin className="w-4 h-4 text-[#1D74E8] shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
