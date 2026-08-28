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
      className="relative min-h-[92vh] flex items-center bg-[#071324] overflow-hidden pt-28 pb-16 md:py-32"
    >
      {/* 1. Background City Landscape Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 filter brightness-90 transition-transform duration-1000"
        style={{ backgroundImage: `url(${bgImageSrc})` }}
      />

      {/* 2. Deep Navy & Ice Blue Cinematic Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#071324]/92 to-[#071324]/75 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-[#071324]/80 z-0" />
      
      {/* Ambient Lighting / Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="container-max w-full relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-105 animate-pulse-glow text-center"
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

          {/* Right Foreground Card (City + Technician Layered Effect) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500/40 via-blue-600/30 to-sky-400/20 rounded-3xl blur-xl" />
              
              {/* Glassmorphic Card Container */}
              <div className="relative rounded-3xl p-2.5 bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] bg-slate-950">
                  <img
                    src={imageSrc}
                    alt="Técnico Especialista em Ar Condicionado AR FRI"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-transparent opacity-85" />
                  
                  {/* Floating Trust Card on Top */}
                  <div className="absolute bottom-4 inset-x-4 bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3.5 shadow-2xl">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-xs font-bold uppercase tracking-wider">Atendimento Local Confiável</h4>
                      <p className="text-slate-300 text-xs">Indaiatuba • Salto • Itu / SP</p>
                    </div>
                  </div>
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
