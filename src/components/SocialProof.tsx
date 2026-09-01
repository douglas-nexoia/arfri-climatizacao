import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  initial: string;
  name: string;
  time: string;
  location: string;
  text: string;
}

const realReviews: Review[] = [
  {
    initial: "N",
    name: "Nilce Tortorelli",
    time: "há 9 meses",
    location: "Indaiatuba",
    text: "Excelente desempenho! Gostei muito do trabalho realizado e recomendo a todos que precisarem de uma indicação de um profissional competente!",
  },
  {
    initial: "M",
    name: "Marcos Rezende Marquinho",
    time: "há 3 meses",
    location: "Indaiatuba",
    text: "Serviços ficou muito bom gostei muito",
  },
  {
    initial: "K",
    name: "Kevyn Melo",
    time: "há 8 meses",
    location: "Indaiatuba e Região",
    text: "Serviço ficou ótimo gostei muito",
  },
  {
    initial: "D",
    name: "Davi Vinicius",
    time: "há 8 meses",
    location: "Indaiatuba e Região",
    text: "O serviço ficou muito bom excelente",
  },
];

const SocialProof = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = realReviews.length;

  // Auto-advance carousel on mobile every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

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
                142 avaliações · Google
              </div>
            </div>
          </div>
        </div>

        {/* 1. DESKTOP VIEW (md and up): Clean 4-card grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {realReviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E4E2DD] rounded-md p-6 flex flex-col justify-between hover:border-[#14212E] transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#EDEBE6] flex items-center justify-center font-heading font-bold text-base text-[#1D74E8] shrink-0">
                    {r.initial}
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-sm text-[#14212E] leading-tight">
                      {r.name}
                    </div>
                    <div className="font-sans text-xs text-[#8A9099] mt-0.5">
                      {r.time}
                    </div>
                  </div>
                </div>

                <div className="text-[#1D74E8] text-xs tracking-widest mb-3">
                  ★★★★★
                </div>

                <p className="font-sans text-sm text-[#3E4A56] leading-relaxed">
                  "{r.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2. MOBILE VIEW (< md): Smooth Carousel showing 1 card at a time with auto-play and touch controls */}
        <div
          className="md:hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-md">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {realReviews.map((r, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-1">
                  <div className="bg-white border border-[#E4E2DD] rounded-md p-6 shadow-sm min-h-[220px] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#EDEBE6] flex items-center justify-center font-heading font-bold text-base text-[#1D74E8] shrink-0">
                          {r.initial}
                        </div>
                        <div>
                          <div className="font-sans font-semibold text-sm sm:text-base text-[#14212E]">
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

                      <p className="font-sans text-sm sm:text-base text-[#3E4A56] leading-relaxed">
                        "{r.text}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation & Dots */}
          <div className="flex items-center justify-between mt-5 px-2">
            <button
              onClick={prevSlide}
              aria-label="Avaliação anterior"
              className="w-9 h-9 rounded-full bg-white border border-[#E4E2DD] flex items-center justify-center text-[#14212E] active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {realReviews.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Ir para avaliação ${dotIdx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    activeIndex === dotIdx
                      ? "w-6 h-2 bg-[#1D74E8]"
                      : "w-2 h-2 bg-[#E4E2DD]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Próxima avaliação"
              className="w-9 h-9 rounded-full bg-white border border-[#E4E2DD] flex items-center justify-center text-[#14212E] active:scale-95 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
