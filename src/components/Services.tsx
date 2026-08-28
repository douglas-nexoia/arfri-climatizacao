import { Wrench, Shield, Sparkles, ArrowRight, CheckCircle2, MessageCircle, AlertCircle, Wind } from "lucide-react";

interface ServicesProps {
  focusedService?: "conserto" | "instalacao" | "limpeza" | "all";
}

const servicesData = [
  {
    id: "conserto",
    route: "/conserto-ar-condicionado",
    icon: Wrench,
    badge: "Urgência & Reparos",
    title: "Conserto e Manutenção Corretiva",
    description:
      "Seu ar condicionado parou de gelar, está pingando água ou apresentando código de erro? Realizamos o diagnóstico no mesmo dia.",
    whatsappTag: "#conserto",
    whatsappText: "Olá, preciso de conserto no meu ar condicionado (Ref: #conserto)",
    features: [
      "Ar condicionado não gela ou parou de refrigerar",
      "Vazamento e água pingando na parede/piso",
      "Compressor não liga ou desarmando disjuntor",
      "Códigos de erro no display (E1, CH05, etc.)",
      "Carga de gás refrigerante ecológico (R410A / R32)",
      "Troca de capacitores, placas inverter e sensores",
    ],
  },
  {
    id: "instalacao",
    route: "/instalacao-ar-condicionado",
    icon: Wind,
    badge: "Padrão de Fábrica",
    title: "Instalação Especializada Split & Inverter",
    description:
      "Instalação profissional seguindo rigorosamente as exigências dos fabricantes para preservar a sua garantia de fábrica.",
    whatsappTag: "#instalacao",
    whatsappText: "Olá, gostaria de um orçamento para instalação de ar (Ref: #instalacao)",
    features: [
      "Tubulação 100% de cobre de alta espessura",
      "Processo de vácuo com vacuômetro digital (< 500 microns)",
      "Flanges de alta precisão (evita vazamentos futuros)",
      "Instalação elétrica segura e suporte reforçado",
      "Atendimento para modelos Split, Hi-Wall, Cassete e Multi-Split",
      "Preservação integral da garantia do fabricante",
    ],
  },
  {
    id: "limpeza",
    route: "/limpeza-higienizacao-ar-condicionado",
    icon: Sparkles,
    badge: "Saúde & Economia",
    title: "Higienização e Limpeza Profunda",
    description:
      "Limpeza profunda com bactericida biodegradável e bolsa coletora. Ar puro para sua família e até 30% de economia de energia.",
    whatsappTag: "#limpeza",
    whatsappText: "Olá, gostaria de agendar a limpeza do meu ar (Ref: #limpeza)",
    features: [
      "Eliminação de 99,9% de fungos, ácaros e bactérias",
      "Aplicação com bolsa coletora sem respingos na sua parede",
      "Limpeza completa da turbina, bandeja de dreno e serpentina",
      "Fim do mau cheiro e prevenção de crises respiratórias",
      "Restauração do fluxo de ar e aumento da eficiência em até 4ºC",
      "Redução imediata no consumo de energia elétrica",
    ],
  },
];

const Services = ({ focusedService = "all" }: ServicesProps) => {
  return (
    <section id="servicos" className="section-padding bg-[#071324] relative">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full mb-4">
            Nossos Serviços Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Soluções Completas em <span className="text-sky-400">Climatização</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Atendimento residencial e comercial com pontualidade, peças originais e garantia por escrito em Indaiatuba, Salto e Itu.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service) => {
            const isHighlight = focusedService === service.id;
            const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(service.whatsappText)}`;

            return (
              <div
                key={service.id}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                  isHighlight
                    ? "bg-slate-800/90 border-2 border-sky-400 shadow-2xl shadow-sky-500/20 -translate-y-1"
                    : "bg-slate-900/80 border border-white/10 hover:border-sky-400/50 hover:bg-slate-800/60 shadow-xl"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-sky-400" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-400/20">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-green-500/20 transition-all duration-200 hover:scale-[1.02] text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Falar no WhatsApp ({service.whatsappTag})</span>
                  </a>

                  {focusedService === "all" && (
                    <a
                      href={service.route}
                      className="w-full flex items-center justify-center gap-2 text-sky-400 hover:text-sky-300 font-semibold py-2 text-xs transition-colors"
                    >
                      <span>Ver detalhes desta página</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
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
