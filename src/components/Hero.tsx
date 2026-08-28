import { MessageCircle, CheckCircle2, ShieldCheck, Clock, Snowflake } from "lucide-react";
import defaultHeroImg from "@/assets/technician-hero.jpg";

interface HeroProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  whatsappMessage: string;
  bulletPoints?: string[];
  imageSrc?: string;
}

const Hero = ({
  badge = "Especialistas em Ar Condicionado • Indaiatuba, Salto e Itu",
  title,
  description,
  whatsappMessage,
  bulletPoints = [
    "Atendimento no mesmo dia",
    "Técnicos especializados e uniformizados",
    "Garantia de 90 dias com peças originais",
  ],
  imageSrc = defaultHeroImg,
}: HeroProps) => {
  const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center bg-[#071324] overflow-hidden pt-28 pb-16 md:py-32"
    >
      {/* Background Gradients & Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#071324] to-[#071324] z-0" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max w-full relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-left">
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/30 text-sky-300 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 animate-fade-in-up">
              <Snowflake className="w-4 h-4 text-sky-400 animate-spin-slow" />
              <span>{badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight animate-fade-in-up animation-delay-100">
              {title}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
              {description}
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-3.5 mb-10 animate-fade-in-up animation-delay-300">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2.5 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-green-500/25 transition-all duration-300 hover:scale-105 animate-pulse-glow text-center"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <span>Solicitar no WhatsApp</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-200 text-sm sm:text-base text-center"
              >
                <span>(19) 99787-1301</span>
              </a>
            </div>
          </div>

          {/* Right Image / Trust Card Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/30 via-blue-600/20 to-transparent rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5]">
                <img
                  src={imageSrc}
                  alt="Técnico Especialista em Ar Condicionado AR FRI"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-transparent opacity-80" />
                
                {/* Floating Trust Badge */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex items-center gap-3 shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-wider">Atendimento de Confiança</h4>
                    <p className="text-slate-300 text-xs">Visita rápida em Indaiatuba, Salto e Itu</p>
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
