import { MessageCircle, CheckCircle2, ShieldCheck, MapPin, Snowflake, Clock } from "lucide-react";
import defaultHeroImg from "@/assets/technician-hero.jpg";
import indaiatubaBg from "@/assets/indaiatuba-bg.jpg";

interface HeroProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  whatsappMessage: string;
  bulletPoints?: string[];
  imageSrc?: string;
  bgImageSrc?: string;
}

const Hero = ({
  badge = "Atendimento Especializado em Indaiatuba, Salto e Itu",
  title,
  description,
  whatsappMessage,
  bulletPoints = [
    "Atendimento rápido no mesmo dia",
    "Tubulação 100% de cobre e vácuo profissional",
    "Garantia de 90 dias com peças originais",
  ],
  imageSrc = defaultHeroImg,
  bgImageSrc = indaiatubaBg,
}: HeroProps) => {
  const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center bg-[#071324] overflow-hidden pt-28 pb-16 md:py-24"
    >
      {/* 1. Background City Landscape Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 filter brightness-[0.80] transition-transform duration-1000"
        style={{ backgroundImage: `url(${bgImageSrc})` }}
      />

      {/* 2. Deep Navy & Ice Blue Cinematic Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#071324]/92 to-[#071324]/80 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-[#071324]/85 z-0" />
      
      {/* Ambient Lighting / Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="container-max w-full relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-left">
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/40 backdrop-blur-md text-sky-200 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-sky-500/10">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight drop-shadow-md">
              {title}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed drop-shadow">
              {description}
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-3.5 mb-10">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2.5 text-white/95 text-sm font-medium bg-slate-900/60 backdrop-blur-sm border border-white/10 px-3.5 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons (Clean, solid WhatsApp green - NO frantic blinking) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-black/30 transition-all duration-200 hover:scale-105 text-center"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>Solicitar no WhatsApp</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 border border-white/25 backdrop-blur-md text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-200 text-sm sm:text-base text-center"
              >
                <span>(19) 99787-1301</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sem moldura (Recorte do Instalador integrado diretamente ao fundo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Ambient Cyan / Blue Glow behind the technician cutout */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl pointer-events-none transform scale-90" />

            <div className="relative z-10 w-full max-w-sm lg:max-w-md flex flex-col items-center">
              {/* Recorte / Imagem sem moldura com fade suave na base */}
              <div className="relative w-full overflow-hidden">
                <img
                  src={imageSrc}
                  alt="Técnico Instalador de Ar Condicionado AR FRI"
                  className="w-full h-auto max-h-[460px] lg:max-h-[500px] object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Soft gradient fade on bottom to merge seamlessly */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#071324] via-[#071324]/50 to-transparent pointer-events-none" />
              </div>

              {/* Floating Trust Card overlapping */}
              <div className="mt-[-16px] z-20 w-[92%] bg-[#071324]/95 border border-sky-400/30 rounded-2xl p-3.5 flex items-center gap-3.5 shadow-2xl backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider">Atendimento Especializado</h4>
                  <p className="text-slate-300 text-xs">Indaiatuba • Salto • Itu / SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
