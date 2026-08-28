import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { AlertCircle, Wrench, ShieldAlert, CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_CONSERTO = "Olá, preciso de conserto no meu ar condicionado (Ref: #conserto)";

const consertoFaqs = [
  {
    question: "O ar condicionado parou de gelar, o que pode ser?",
    answer: "Geralmente ocorre por vazamento de gás refrigerante, capacitor do compressor danificado, sujeira extrema na serpentina ou falha na placa eletrônica. Nosso técnico realiza o diagnóstico preciso no local e resolve na hora.",
  },
  {
    question: "Por que o ar condicionado fica pingando água dentro de casa?",
    answer: "O gotejamento interno acontece por entupimento na mangueira ou bandeja de dreno, sujeira acumulada ou desnível do aparelho. Fazemos a desobstrução e higienização rápida para eliminar o vazamento.",
  },
  {
    question: "Vocês atendem no mesmo dia em caso de emergência?",
    answer: "Sim! Priorizamos atendimentos de urgência em Indaiatuba, Salto e Itu para restabelecer a refrigeração do seu ambiente o mais rápido possível.",
  },
  {
    question: "Vocês fazem recarga de gás?",
    answer: "Sim, realizamos a localização e correção do ponto de vazamento, teste de estanqueidade com nitrogênio e recarga completa do fluido refrigerante original (R410A / R32 / R22) com balança de precisão.",
  },
  {
    question: "Qual a garantia do conserto?",
    answer: "Oferecemos 90 dias de garantia por escrito em todos os serviços realizados e peças substituídas.",
  },
];

const ConsertoArCondicionado = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Conserto de Ar Condicionado",
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

  const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(WHATSAPP_CONSERTO)}`;

  return (
    <>
      <Helmet>
        <title>Conserto de Ar Condicionado em Indaiatuba, Salto e Itu | AR FRI</title>
        <meta
          name="description"
          content="Ar condicionado não gela, pingando água ou com erro? Conserto e manutenção rápida em Indaiatuba, Salto e Itu com peças originais e garantia de 90 dias."
        />
        <meta
          name="keywords"
          content="conserto ar condicionado indaiatuba, manutencao ar condicionado salto, ar condicionado nao gela itu, ar condicionado pingando agua, carga de gas ar condicionado indaiatuba"
        />
        <link rel="canonical" href="https://arfri.com.br/conserto-ar-condicionado" />

        <meta property="og:title" content="Conserto de Ar Condicionado em Indaiatuba, Salto e Itu | AR FRI" />
        <meta property="og:description" content="Atendimento no mesmo dia para conserto de ar condicionado que não gela ou está com defeito." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#071324] text-white">
        <Header currentRoute="/conserto-ar-condicionado" whatsappMessage={WHATSAPP_CONSERTO} />
        
        <main>
          {/* Hero Section focused on Repair & Urgency */}
          <Hero
            badge="🚨 Atendimento de Urgência • Indaiatuba, Salto e Itu"
            title={
              <>
                Conserto e Manutenção de <br />
                <span className="text-sky-400">Ar Condicionado em Indaiatuba, Salto e Itu</span>
              </>
            }
            description="Seu ar condicionado parou de gelar, está pingando água ou exibindo código de erro? Nossos técnicos realizam o diagnóstico e conserto no mesmo dia com peças originais."
            whatsappMessage={WHATSAPP_CONSERTO}
            bulletPoints={[
              "Não gela ou esfria muito pouco",
              "Água pingando na parede ou no piso",
              "Compressor não liga ou fica desarmando",
              "Códigos de erro no painel e recarga de gás",
            ]}
          />

          {/* Dores & Problemas Frequentes Section */}
          <section className="py-16 bg-[#0A192F] border-b border-white/10">
            <div className="container-max px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full mb-3 inline-block">
                  Diagnóstico Especializado
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  Identificamos e Solucionamos o Defeito do Seu Aparelho
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center mb-4">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Ar Não Gela / Não Esfria</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Pode ser vazamento de gás refrigerante, capacitor com defeito, serpentina obstruída ou falha no compressor.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Água Pingando Dentro de Casa</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Entupimento na bandeja de dreno, mangueira danificada ou acúmulo de sujeira que transborda a água da condensação.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Códigos de Erro & Ruídos</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Display piscando (E1, E2, CH05, etc.) ou barulhos anormais na turbina e motor. Testamos sensores e placa na hora.
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
                  <span>Chamar Técnico para Conserto (Ref: #conserto)</span>
                </a>
              </div>
            </div>
          </section>

          <Brands />
          <Services focusedService="conserto" />
          <Advantages />
          <FAQ customFaqs={consertoFaqs} />
          <Contact defaultService="conserto" whatsappMessage={WHATSAPP_CONSERTO} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_CONSERTO} />
      </div>
    </>
  );
};

export default ConsertoArCondicionado;
