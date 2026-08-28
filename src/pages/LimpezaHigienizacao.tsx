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
import { Sparkles, ShieldCheck, Zap, HeartPulse, CheckCircle2, MessageCircle, Wind } from "lucide-react";

const WHATSAPP_LIMPEZA = "Olá, gostaria de agendar a limpeza do meu ar (Ref: #limpeza)";

const limpezaFaqs = [
  {
    question: "A limpeza de ar condicionado faz sujeira na parede ou móveis?",
    answer: "Não! Utilizamos uma bolsa coletora impermeável com dreno direto para balde. Toda a água suja e os produtos químicos saem de forma isolada, mantendo suas paredes, chão e móveis 100% limpos e secos.",
  },
  {
    question: "Quais são os benefícios de fazer a higienização profunda?",
    answer: "Eliminação imediata de ácaros, fungos e bactérias causadores de rinite e alergias, eliminação de mau cheiro, aumento do fluxo de ar, rendimento térmico até 4ºC mais potente e economia de até 30% na conta de luz.",
  },
  {
    question: "Quais produtos são utilizados na higienização?",
    answer: "Utilizamos desincrustantes e bactericidas profissionais biodegradáveis aprovados pelos órgãos de saúde, seguros para humanos e pets, com ação desinfetante de longa duração.",
  },
  {
    question: "A higienização limpa a unidade externa (condensadora) também?",
    answer: "Sim! Na higienização completa, limpamos tanto a evaporadora (unidade interna: turbina, serpentina, bandeja de dreno e filtros) quanto a condensadora (unidade externa) para permitir a troca de calor ideal.",
  },
  {
    question: "Qual a frequência ideal recomendada para higienizar o ar?",
    answer: "Para uso residencial, a cada 6 meses. Para pessoas com rinite/alergias, crianças ou idosos, a cada 3 a 6 meses. Para comércios e clínicas, a cada 1 a 3 meses.",
  },
];

const LimpezaHigienizacao = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Higienização e Limpeza de Ar Condicionado",
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

  const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(WHATSAPP_LIMPEZA)}`;

  return (
    <>
      <Helmet>
        <title>Higienização e Limpeza de Ar Condicionado em Indaiatuba, Salto e Itu | AR FRI</title>
        <meta
          name="description"
          content="Higienização profunda e limpeza de ar condicionado em Indaiatuba, Salto e Itu. Elimine fungos, ácaros e bactérias sem sujeira na parede. Reduza a conta de luz!"
        />
        <meta
          name="keywords"
          content="limpeza ar condicionado indaiatuba, higienizacao ar condicionado salto, limpeza ar condicionado itu, eliminar fungos ar condicionado, bolsa coletora ar condicionado"
        />
        <link rel="canonical" href="https://arfri.com.br/limpeza-higienizacao-ar-condicionado" />

        <meta property="og:title" content="Higienização e Limpeza Profunda de Ar Condicionado | AR FRI" />
        <meta property="og:description" content="Ar puro, sem ácaros e com economia de energia. Agende a higienização pelo WhatsApp!" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#071324] text-white">
        <Header currentRoute="/limpeza-higienizacao-ar-condicionado" whatsappMessage={WHATSAPP_LIMPEZA} />
        
        <main>
          {/* Hero Section focused on Health & Energy Savings */}
          <Hero
            badge="🍃 Saúde, Ar Puro & Economia de Energia"
            title={
              <>
                Higienização e Limpeza Profunda de <br />
                <span className="text-sky-400">Ar Condicionado em Indaiatuba, Salto e Itu</span>
              </>
            }
            description="Livre sua família e colaboradores de fungos, ácaros, bactérias e mau cheiro. Higienização técnica com bactericida biodegradável e bolsa coletora sem sujeira na sua parede."
            whatsappMessage={WHATSAPP_LIMPEZA}
            bulletPoints={[
              "Elimina 99,9% de ácaros, fungos e bactérias",
              "Bolsa coletora profissional (zero respingos)",
              "Redução de até 30% no consumo de luz",
              "Aumento no rendimento térmico em até 4ºC",
            ]}
          />

          {/* Destaque de Saúde e Benefícios */}
          <section className="py-16 bg-[#0A192F] border-b border-white/10">
            <div className="container-max px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-3.5 py-1.5 rounded-full mb-3 inline-block">
                  Respire um Ar Mais Limpo
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  Benefícios Diretos da Limpeza e Higienização Técnica
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Proteção Contra Alergias</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Elimina colônias de fungos e bactérias na serpentina e turbina que disparam rinite, crises alérgicas e problemas respiratórios.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Economia na Conta de Energia</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Com a serpentina desobstruída, o motor atinge a temperatura desejada muito mais rápido e sem forçar o compressor.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Fim do Mau Cheiro & Ruídos</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Higienização profunda na bandeja de dreno e turbina, eliminando o odor desagradável e restabelecendo o fluxo de ar silencioso.
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
                  <span>Agendar Limpeza do Ar Condicionado (Ref: #limpeza)</span>
                </a>
              </div>
            </div>
          </section>

          <Brands />
          <Services focusedService="limpeza" />
          <Advantages />
          <SocialProof />
          <FAQ customFaqs={limpezaFaqs} />
          <Contact defaultService="limpeza" whatsappMessage={WHATSAPP_LIMPEZA} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_LIMPEZA} />
      </div>
    </>
  );
};

export default LimpezaHigienizacao;
