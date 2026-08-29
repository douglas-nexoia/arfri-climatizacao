import indaiatubaBg from "@/assets/indaiatuba-bg.jpg";
import tecnicoRecorte from "@/assets/tecnico-recorte.png";

interface HeroProps {
  badgeRegion?: string;
  badgeCredential?: string;
  title: React.ReactNode;
  description: string;
  whatsappMessage: string;
  imageSrc?: string;
  bgImageSrc?: string;
}

const Hero = ({
  badgeRegion = "Indaiatuba, Salto e Itu / SP",
  badgeCredential = "Chamados até 15h atendidos hoje",
  title,
  description,
  whatsappMessage,
  imageSrc = tecnicoRecorte,
  bgImageSrc = indaiatubaBg,
}: HeroProps) => {
  const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-[660px] flex items-center bg-[#0A141E] overflow-hidden">
      {/* 1. Full-bleed Background Image with subtle texture */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-40 filter brightness-90"
        style={{ backgroundImage: `url(${bgImageSrc})` }}
      />

      {/* 2. Directional Gradient (100deg) - Opaco à esquerda sobre o texto, transparente à direita */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A141E] via-[#0A141E]/95 sm:via-[#0A141E]/90 to-[#0A141E]/30 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A141E] via-transparent to-[#0A141E]/80 z-0" />

      {/* 3. Hero Content */}
      <div className="container-max w-full relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & CTAs (Max width 640px) */}
          <div className="lg:col-span-7 max-w-[640px]">
            {/* 2 Badges */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-md rounded-full px-3.5 py-1.5 text-xs font-sans font-medium text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D74E8]" />
                {badgeRegion}
              </span>
              <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-md rounded-full px-3.5 py-1.5 text-xs font-sans font-medium text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D74E8]" />
                {badgeCredential}
              </span>
            </div>

            {/* H1 in 2-3 lines with last line in accent color */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[56px] leading-[1.04] tracking-[-0.035em] text-white mb-6 text-balance">
              {title}
            </h1>

            {/* Subtitle (Max 2 lines) */}
            <p className="font-sans text-base sm:text-lg text-white/75 leading-relaxed mb-8 max-w-[520px]">
              {description}
            </p>

            {/* 2 CTAs */}
            <div className="flex flex-wrap gap-3.5 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22C55E] hover:bg-[#1eb354] text-[#062B14] font-sans font-bold text-base px-7 py-4 rounded-md shadow-md transition-transform duration-150 active:scale-95"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#062B14]" />
                <span>Chamar no WhatsApp</span>
              </a>
              <a
                href="tel:+5519997871301"
                className="inline-flex items-center gap-2 border border-white/25 hover:bg-white/5 text-white font-sans font-semibold text-base px-6 py-4 rounded-md transition-colors"
              >
                <span>Ligar agora</span>
              </a>
            </div>

            {/* 3 Verifiable Numerical Proofs */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
                  5,0<span className="text-[#1D74E8]">★</span>
                </div>
                <div className="font-sans text-xs text-white/55 mt-1">142 avaliações no Google</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
                  90 dias
                </div>
                <div className="font-sans text-xs text-white/55 mt-1">de garantia por escrito</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
                  Mesmo dia
                </div>
                <div className="font-sans text-xs text-white/55 mt-1">para chamados até 15h</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Cutout / Technician / AC Unit (Sujeito à direita) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[420px] flex justify-center">
              <img
                src={imageSrc}
                alt="Técnico de Ar Condicionado AR FRI"
                className="w-auto max-h-[480px] lg:max-h-[520px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
