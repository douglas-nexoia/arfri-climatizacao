import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import Guarantee from "@/components/Guarantee";
import Coverage from "@/components/Coverage";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Sparkles, ShieldCheck, HeartPulse, Zap, ArrowRight } from "lucide-react";
import { trackWhatsAppConversion } from "@/lib/tracking";

const cleaningSteps = [
  {
    icon: Sparkles,
    title: "Bolsa Coletora Impermeável",
    desc: "Aparelho totalmente envelopado durante a lavagem. Toda a água suja e a química são canalizadas diretamente para o reservatório, sem respingos na sua parede.",
    tags: ["Zero sujeira", "Paredes limpas", "Bolsa profissional"],
  },
  {
    icon: ShieldCheck,
    title: "Bactericida Biodegradável",
    desc: "Aplicação de produto homologado pela ANVISA que elimina 99,9% de ácaros, fungos e bactérias incrustadas na serpentina, eliminando o cheiro de mofo.",
    tags: ["Homologado ANVISA", "Sem cheiro forte", "Anti-alérgico"],
  },
  {
    icon: HeartPulse,
    title: "Lavagem de Turbina & Filtros",
    desc: "Remoção e lavagem sob pressão da carcaça frontal, filtros de ar e do rotor da turbina, desobstruindo a passagem de ar e restaurando o fluxo original.",
    tags: ["Filtros limpos", "Turbina lavada", "Ar puro"],
  },
  {
    icon: Zap,
    title: "Até 30% de Economia de Energia",
    desc: "Com as serpentinas desobstruídas, a troca de calor ocorre de forma muito mais rápida, fazendo o compressor trabalhar menos e reduzindo a conta de luz.",
    tags: ["Economia de luz", "Menos esforço", "Mais vida útil"],
  },
];

const cleaningFaqs = [
  {
    q: "De quanto em quanto tempo devo fazer a higienização do ar?",
    a: "Em residências (quartos e salas), recomendamos a cada 6 a 12 meses. Em escritórios, clínicas e comércios com fluxo contínuo de pessoas, o ideal é realizar a cada 3 a 6 meses.",
  },
  {
    q: "A limpeza suja a parede, cortinas ou o piso?",
    a: "Não. Utilizamos uma bolsa coletora profissional com vedação elástica que cobre 100% da evaporadora. Toda a água da lavagem pressurizada escorre diretamente para o galão de descarte.",
  },
  {
    q: "Por que o ar condicionado começa a cheirar mofo ou vinagre?",
    a: "O ambiente úmido e escuro da serpentina é o habitat perfeito para a proliferação de colônias de fungos e bactérias. A higienização com bactericida elimina essa colônia e neutraliza o odor.",
  },
  {
    q: "A higienização inclui a limpeza da unidade externa (condensadora)?",
    a: "Sim. Realizamos a remoção de poeira e resíduos na condensadora externa para garantir que a ventilação e a dissipação de calor funcionem com eficiência máxima.",
  },
];

const LimpezaHigienizacao = () => {
  const WHATSAPP_LIMPEZA = "Olá, gostaria de agendar a limpeza do meu ar (Ref: #limpeza)";
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Higienização e Limpeza de Ar Condicionado",
    "provider": {
      "@type": "HVACBusiness",
      "name": "AR FRI Climatização",
      "telephone": "+5519997871301",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indaiatuba",
        "addressRegion": "SP",
        "addressCountry": "BR"
      }
    },
    "areaServed": ["Indaiatuba", "Salto", "Itu"]
  };

  return (
    <>
      <Helmet>
        <title>Higienização de Ar Condicionado em Indaiatuba, Salto e Itu | AR FRI</title>
        <meta
          name="description"
          content="Higienização profunda de ar condicionado em Indaiatuba, Salto e Itu. Elimina 99,9% de fungos e bactérias com bactericida biodegradável e bolsa coletora sem sujeira."
        />
        <meta
          name="keywords"
          content="limpeza ar condicionado indaiatuba, higienizacao ar condicionado salto, limpeza split itu, bactericida ar condicionado"
        />
        <link rel="canonical" href="https://arfri.com.br/limpeza-higienizacao-ar-condicionado" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0A141E] text-white">
        <Header currentRoute="/limpeza-higienizacao-ar-condicionado" whatsappMessage={WHATSAPP_LIMPEZA} />

        <main>
          {/* Hero Section for Cleaning */}
          <Hero
            badgeRegion="Indaiatuba, Salto e Itu"
            badgeCredential="Saúde & Eficiência Energética"
            title={
              <>
                Higienização e Limpeza de<br />
                <span className="text-[#1D74E8]">Ar Condicionado</span>
              </>
            }
            description="Livre sua família e colaboradores de ácaros, bactérias e mau cheiro. Higienização profunda com bolsa coletora e bactericida biodegradável sem respingos na sua parede."
            whatsappMessage={WHATSAPP_LIMPEZA}
          />

          <Brands />

          {/* Dedicated Section: Benefícios da Higienização */}
          <section className="bg-[#F5F4F1] text-[#14212E] py-16 sm:py-24">
            <div className="container-max">
              <div className="max-w-[640px] mb-12">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
                  01 — Saúde & Performance
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                  O que está incluso na higienização?
                </h2>
                <p className="font-sans text-base text-[#68737E]">
                  Processo técnico minucioso que limpa as partes internas onde os filtros comuns não alcançam.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cleaningSteps.map((item, idx) => {
                  const Icon = item.icon;
                  const waRefUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(`Olá! Gostaria de agendar a higienização do meu ar condicionado (Ref: #limpeza)`)}`;

                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#E4E2DD] rounded-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#14212E] transition-colors"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-md bg-[#F2F0EC] flex items-center justify-center text-[#1D74E8] mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-[#14212E] mb-2.5">
                          {item.title}
                        </h3>
                        <p className="font-sans text-sm text-[#68737E] leading-relaxed mb-4">
                          {item.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.tags.map((t, i) => (
                            <span key={i} className="font-sans text-xs text-[#5A646E] bg-[#F2F0EC] rounded px-2.5 py-1">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={waRefUrl}
                        onClick={trackWhatsAppConversion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-[#1D74E8] hover:text-[#1560c2] pt-4 border-t border-[#E4E2DD]"
                      >
                        <span>Agendar higienização</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <HowItWorks />
          <Guarantee />
          <Coverage />
          <SocialProof />

          {/* Specialized FAQ for Cleaning */}
          <section className="bg-[#0A141E] text-white py-16 sm:py-24 border-t border-white/10">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-5">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
                    06 — Dúvidas de Higienização
                  </div>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                    Perguntas frequentes
                  </h2>
                  <p className="font-sans text-base text-white/55 leading-relaxed">
                    Saiba mais sobre a frequência ideal, produtos utilizados e cuidados de saúde.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  {cleaningFaqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={i}
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="border-b border-white/10 py-5 sm:py-6 cursor-pointer select-none group"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-heading font-semibold text-base sm:text-lg text-white group-hover:text-[#1D74E8] transition-colors">
                            {faq.q}
                          </h3>
                          <span className="font-heading text-2xl font-light text-[#1D74E8] leading-none shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>
                        {isOpen && (
                          <p className="font-sans text-sm sm:text-[15.5px] text-white/65 leading-relaxed mt-3.5 max-w-[620px]">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <Contact whatsappMessage={WHATSAPP_LIMPEZA} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_LIMPEZA} />
      </div>
    </>
  );
};

export default LimpezaHigienizacao;
