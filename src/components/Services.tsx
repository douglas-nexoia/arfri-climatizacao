import { ArrowRight, Wrench, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  {
    id: "conserto",
    kicker: "01 — Emergência & Manutenção",
    title: "Conserto de Ar Condicionado",
    route: "/conserto-ar-condicionado",
    whatsappRef: "Olá, preciso de conserto no meu ar condicionado (Ref: #conserto)",
    icon: Wrench,
    slotText: "manutenção corretiva · diagnóstico no local",
    desc: "Não gela, pinga água na parede, compressor desarma ou exibe código de erro no display. Diagnóstico preciso e conserto no mesmo dia com peças originais.",
    tags: ["Não gela", "Carga de gás", "Placa Inverter", "Compressor"],
  },
  {
    id: "instalacao",
    kicker: "02 — Padrão de Fábrica",
    title: "Instalação Split & Inverter",
    route: "/instalacao-ar-condicionado",
    whatsappRef: "Olá, gostaria de um orçamento para instalação de ar (Ref: #instalacao)",
    icon: ShieldCheck,
    slotText: "tubulação 100% cobre · vácuo digital",
    desc: "Instalação residencial e comercial preservando a garantia do fabricante. Tubulação 100% em cobre, fixação nivelada e teste de estanqueidade.",
    tags: ["100% Cobre", "Vácuo digital", "Suporte reforçado", "Multi-Split"],
  },
  {
    id: "limpeza",
    kicker: "03 — Saúde & Eficiência",
    title: "Higienização & Limpeza",
    route: "/limpeza-higienizacao-ar-condicionado",
    whatsappRef: "Olá, gostaria de agendar a limpeza do meu ar (Ref: #limpeza)",
    icon: Sparkles,
    slotText: "bolsa coletora · bactericida biodegradável",
    desc: "Elimina 99,9% de fungos, ácaros, bactérias e mau cheiro. Limpeza técnica profunda com bolsa coletora sem respingos na sua parede ou piso.",
    tags: ["Bolsa coletora", "Anti-fungos", "Sem sujeira", "Economia de energia"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="bg-[#F5F4F1] text-[#14212E] py-16 sm:py-24">
      <div className="container-max">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-[600px]">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
              01 — Serviços
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] text-[#14212E]">
              O que a gente conserta e instala
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-[16.5px] text-[#68737E] max-w-[360px] leading-relaxed">
            Três especialidades com atendimento técnico ágil em Indaiatuba, Salto e Itu.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => {
            const waUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(s.whatsappRef)}`;
            const Icon = s.icon;

            return (
              <div
                key={s.id}
                className="bg-white border border-[#E4E2DD] rounded-md overflow-hidden flex flex-col justify-between hover:border-[#14212E] transition-colors"
              >
                {/* Technical Graphic Header (Template Canônico - sem renders falsos) */}
                <div 
                  className="h-40 bg-[#EDEBE6] p-6 flex flex-col justify-between border-b border-[#E4E2DD]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(58deg, rgba(20,33,46,.045) 0 2px, transparent 2px 13px)'
                  }}
                >
                  <div className="w-10 h-10 rounded-md bg-white border border-[#E4E2DD] flex items-center justify-center text-[#1D74E8]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10.5px] tracking-wide text-[#68737E] uppercase">
                    {s.slotText}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#9AA2AC] mb-2">
                      {s.kicker}
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#14212E] tracking-tight mb-3">
                      {s.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-[15px] text-[#68737E] leading-relaxed mb-5">
                      {s.desc}
                    </p>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {s.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="font-sans text-xs text-[#5A646E] bg-[#F2F0EC] rounded px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#E4E2DD] flex items-center justify-between">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-semibold text-sm sm:text-[15px] text-[#1D74E8] hover:text-[#1560c2] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Chamar no WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <a
                      href={s.route}
                      className="font-mono text-xs text-[#68737E] hover:text-[#14212E] underline transition-colors"
                    >
                      Página dedicada
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
