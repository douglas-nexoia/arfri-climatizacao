import { ShieldCheck, Clock, CheckCircle2, Award, Zap, ThumbsUp, Wrench } from "lucide-react";
import acUnitImg from "@/assets/ac-unit.jpg";

const differentials = [
  {
    icon: Clock,
    title: "Atendimento no Mesmo Dia",
    description: "Priorizamos urgências em Indaiatuba, Salto e Itu para você e sua família não ficarem no calor.",
  },
  {
    icon: Wrench,
    title: "Tubulação 100% Cobre",
    description: "Utilizamos exclusivamente cobre de alta parede em nossas instalações. Zero tubos de alumínio frágeis.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia por Escrito",
    description: "Garantia de 90 dias em todos os serviços executados e peças substituídas com nota e transparência.",
  },
  {
    icon: Zap,
    title: "Economia na Conta de Luz",
    description: "Aparelhos regulados e higienizados consomem até 30% menos energia e rendem até 4ºC a mais.",
  },
  {
    icon: Award,
    title: "Técnicos Qualificados",
    description: "Profissionais experientes em tecnologia Inverter, Multi-Split, VRF e placas eletrônicas.",
  },
  {
    icon: ThumbsUp,
    title: "Ambiente Limpo e Protegido",
    description: "Utilizamos bolsa coletora profissional para higienização sem respingos ou sujeira na sua casa.",
  },
];

const Advantages = () => {
  return (
    <section id="diferenciais" className="section-padding bg-[#0A192F] relative overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full mb-4">
            Por Que a AR FRI?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Compromisso com a <span className="text-sky-400">Qualidade e Conforto</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Mais que um conserto ou instalação, garantimos a segurança e durabilidade do seu ar condicionado.
          </p>
        </div>

        {/* Highlight Banner / Card */}
        <div className="bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider bg-sky-500/10 px-3 py-1 rounded-full border border-sky-400/20 mb-4 inline-block">
                Padrão de Engenharia
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                Instalação e Manutenção Segura que Preserva o Seu Aparelho
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Na <strong>AR FRI Climatização</strong>, não fazemos atalhos. Toda instalação passa por teste de vácuo rigoroso e teste de pressão com nitrogênio. Em manutenções, usamos somente peças e fluidos refrigerantes homologados.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Vácuo abaixo de 500 microns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Gás refrigerante original</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Flanges sem risco de vazamento</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Atendimento com hora marcada</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl max-w-sm w-full aspect-video sm:aspect-square">
                <img
                  src={acUnitImg}
                  alt="Ar condicionado moderno climatizando ambiente"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6 Differential Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/80 hover:border-sky-400/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-sky-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
