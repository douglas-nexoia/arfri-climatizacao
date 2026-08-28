import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ShieldCheck, Wind, CheckCircle2, Award, Zap, MessageCircle } from "lucide-react";

const WHATSAPP_INSTALACAO = "Olá, gostaria de um orçamento para instalação de ar (Ref: #instalacao)";

const instalacaoFaqs = [
  {
    question: "Por que vocês utilizam tubulação 100% de cobre na instalação?",
    answer: "O cobre suporta as altas pressões de trabalho dos compressores Inverter (gases R410A e R32) sem trincar ou vazar, além de ter durabilidade muito superior ao alumínio. Todas as grandes marcas exigem cobre para conceder a garantia de fábrica.",
  },
  {
    question: "O que é o teste de vácuo e por que ele é obrigatório?",
    answer: "O vácuo com bomba e vacuômetro digital remove todo o ar e a umidade de dentro da tubulação antes de liberar o gás. Sem o vácuo correto (< 500 microns), a umidade reage com o óleo do compressor e queima o motor em poucos meses.",
  },
  {
    question: "Vocês instalam aparelhos novos comprados na internet?",
    answer: "Sim! Instalamos aparelhos novos ou seminovos de qualquer marca e capacidade (9.000 a 60.000 BTUs), emitindo comprovante de instalação padrão fabricante.",
  },
  {
    question: "O que está incluso no serviço de instalação padrão?",
    answer: "Fixação da evaporadora e condensadora, furação de parede para passagem de tubos, tubulação de cobre isolada termicamente, cabeamento elétrico PP, teste de vácuo, teste de estanqueidade e teste de rendimento térmico.",
  },
  {
    question: "Vocês atendem quais cidades?",
    answer: "Atendemos residências, apartamentos, comércios e empresas em Indaiatuba, Salto e Itu / SP.",
  },
];

const InstalacaoArCondicionado = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Instalação de Ar Condicionado",
    "provider": {
      "@type": "HVACBusiness",
      "name": "AR FRI Climatização",
      "telephone": "+55-19-99787-1301",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indaiatuba",
        "addressRegion": "SP",
        "addressCountry": "BR"
      }
    },
    "areaServed": ["Indaiatuba", "Salto", "Itu"]
  };

  const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(WHATSAPP_INSTALACAO)}`;

  return (
    <>
      <Helmet>
        <title>Instalação de Ar Condicionado Split e Inverter em Indaiatuba, Salto e Itu | AR FRI</title>
        <meta
          name="description"
          content="Instalação profissional de ar condicionado Split e Inverter em Indaiatuba, Salto e Itu. Tubulação 100% de cobre, processo de vácuo e garantia do fabricante preservada."
        />
        <meta
          name="keywords"
          content="instalacao ar condicionado indaiatuba, instalador ar condicionado salto, instalacao split inverter itu, tubulacao cobre ar condicionado"
        />
        <link rel="canonical" href="https://arfri.com.br/instalacao-ar-condicionado" />

        <meta property="og:title" content="Instalação de Ar Condicionado Split e Inverter | AR FRI" />
        <meta property="og:description" content="Instalação técnica com tubulação de cobre e vácuo profissional. Peça seu orçamento!" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#071324] text-white">
        <Header currentRoute="/instalacao-ar-condicionado" whatsappMessage={WHATSAPP_INSTALACAO} />
        
        <main>
          {/* Hero Section focused on Installation Quality */}
          <Hero
            badge="🛠️ Padrão dos Fabricantes • Indaiatuba, Salto e Itu"
            title={
              <>
                Instalação Especializada de <br />
                <span className="text-sky-400">Ar Condicionado Split e Inverter</span>
              </>
            }
            description="Comprou ar condicionado ou está em reforma? Garanta a máxima eficiência e a garantia total do seu aparelho com nossa instalação técnica em 100% cobre e processo de vácuo rigoroso."
            whatsappMessage={WHATSAPP_INSTALACAO}
            bulletPoints={[
              "Tubulação 100% de cobre (zero alumínio)",
              "Processo de vácuo com vacuômetro digital",
              "Garantia de fábrica preservada",
              "Instalação limpa, segura e com suporte reforçado",
            ]}
          />

          {/* Destaque Técnico da Instalação */}
          <section className="py-16 bg-[#0A192F] border-b border-white/10">
            <div className="container-max px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full mb-3 inline-block">
                  Engenharia e Cuidado
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  Por Que Nossa Instalação é a Mais Segura Para Seu Ar?
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">100% Tubulação de Cobre</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Não usamos tubos de alumínio. O cobre puro garante condução térmica ideal e vida útil de décadas sem microvazamentos.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Vácuo e Estanqueidade</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Desidratação com bomba de alto vácuo e medição eletrônica para eliminar 100% da umidade que queima compressores.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Acabamento Impecável</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Furação precisa com recolhimento de pó, fixação robusta dos suportes e isolamento térmico blindado contra condensação.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-green-500/25 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Pedir Orçamento de Instalação (Ref: #instalacao)</span>
                </a>
              </div>
            </div>
          </section>

          <Brands />
          <Services focusedService="instalacao" />
          <Advantages />
          <SocialProof />
          <FAQ customFaqs={instalacaoFaqs} />
          <Contact defaultService="instalacao" whatsappMessage={WHATSAPP_INSTALACAO} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_INSTALACAO} />
      </div>
    </>
  );
};

export default InstalacaoArCondicionado;
