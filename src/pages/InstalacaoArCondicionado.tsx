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
import { ShieldCheck, Wind, Gauge, Award, ArrowRight } from "lucide-react";

const installStandards = [
  {
    icon: ShieldCheck,
    title: "Tubulação 100% em Cobre",
    desc: "Nunca utilizamos tubos de alumínio. O cobre puro garante altíssima durabilidade térmica, suporta a pressão do gás R410A/R32 e evita microvazamentos precoces.",
    tags: ["100% Cobre", "Zero Alumínio", "Alta Pressão"],
  },
  {
    icon: Gauge,
    title: "Processo de Vácuo Digital",
    desc: "Desidratação e remoção completa de umidade e ar da tubulação através de bomba de vácuo e vacuômetro eletrônico. Essencial para a vida útil do compressor.",
    tags: ["Bomba de vácuo", "Vacuômetro", "Compressor protegido"],
  },
  {
    icon: Wind,
    title: "Fixação e Suporte Antivibração",
    desc: "Fixação nivelada da evaporadora e suportes reforçados com calços de borracha na condensadora para eliminar ruídos, trepidações e vibrações na parede.",
    tags: ["Coxim de borracha", "Nivelamento", "Sem ruído"],
  },
  {
    icon: Award,
    title: "Garantia de Fábrica Preservada",
    desc: "Instalação em conformidade estrita com o manual dos fabricantes (Daikin, Fujitsu, LG, Samsung, Midea, Gree, etc.), assegurando a garantia de fábrica do aparelho.",
    tags: ["Padrão de fábrica", "Multi-Split", "Inverter"],
  },
];

const installFaqs = [
  {
    q: "Por que a tubulação de cobre é obrigatória na instalação?",
    a: "O cobre possui alta resistência à fadiga térmica e mecânica, além de vedação perfeita nas flanges de alta pressão dos aparelhos modernos. Tubos de alumínio costumam apresentar vazamentos em menos de 1 ano.",
  },
  {
    q: "O que é o teste de vácuo e por que ele é indispensável?",
    a: "O processo de vácuo retira toda a umidade e os gases não-condensáveis da tubulação antes de liberar o gás refrigerante. A umidade residual reage com o óleo do compressor, oxidando o motor e queimando o aparelho.",
  },
  {
    q: "A instalação inclui a furação da parede e o suporte externo?",
    a: "Sim. A furação da alvenaria, passagem da linha frigorífica, fiação de comando e fixação do suporte reforçado da unidade condensadora externa fazem parte do nosso pacote padrão de instalação.",
  },
  {
    q: "Qual a garantia da mão de obra de instalação?",
    a: "Oferecemos 90 dias de garantia por escrito na ordem de serviço da AR FRI cobrindo toda a instalação, além de preservar a garantia original do fabricante do equipamento.",
  },
];

const InstalacaoArCondicionado = () => {
  const WHATSAPP_INSTALACAO = "Olá, gostaria de um orçamento para instalação de ar (Ref: #instalacao)";
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Instalação de Ar Condicionado Split e Inverter",
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
        <title>Instalação de Ar Condicionado em Indaiatuba, Salto e Itu | AR FRI</title>
        <meta
          name="description"
          content="Instalação profissional de ar condicionado Split e Inverter em Indaiatuba, Salto e Itu. Tubulação 100% cobre, teste de vácuo digital e garantia de fábrica preservada."
        />
        <meta
          name="keywords"
          content="instalacao ar condicionado indaiatuba, instalador split salto, instalacao ar inverter itu, tubulacao cobre ar condicionado"
        />
        <link rel="canonical" href="https://arfri.com.br/instalacao-ar-condicionado" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0A141E] text-white">
        <Header currentRoute="/instalacao-ar-condicionado" whatsappMessage={WHATSAPP_INSTALACAO} />

        <main>
          {/* Hero Section for Installation */}
          <Hero
            badgeRegion="Indaiatuba, Salto e Itu"
            badgeCredential="Padrão dos Fabricantes"
            title={
              <>
                Instalação Especializada de<br />
                <span className="text-[#1D74E8]">Split e Inverter</span>
              </>
            }
            description="Comprou ar condicionado ou está em reforma? Garanta a máxima eficiência e a garantia total do fabricante com instalação técnica em 100% cobre e processo rigoroso de vácuo."
            whatsappMessage={WHATSAPP_INSTALACAO}
          />

          <Brands />

          {/* Dedicated Section: Padrão Técnico de Instalação */}
          <section className="bg-[#F5F4F1] text-[#14212E] py-16 sm:py-24">
            <div className="container-max">
              <div className="max-w-[640px] mb-12">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
                  01 — Padrão de Engenharia
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                  Por que nossa instalação dura mais?
                </h2>
                <p className="font-sans text-base text-[#68737E]">
                  Não economizamos em materiais. Seguimos à risca as recomendações técnicas dos fabricantes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {installStandards.map((item, idx) => {
                  const Icon = item.icon;
                  const waRefUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para instalação de ar condicionado (Ref: #instalacao)`)}`;

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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-[#1D74E8] hover:text-[#1560c2] pt-4 border-t border-[#E4E2DD]"
                      >
                        <span>Pedir orçamento de instalação</span>
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

          {/* Specialized FAQ for Installation */}
          <section className="bg-[#0A141E] text-white py-16 sm:py-24 border-t border-white/10">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-5">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
                    06 — Dúvidas de Instalação
                  </div>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                    Perguntas frequentes
                  </h2>
                  <p className="font-sans text-base text-white/55 leading-relaxed">
                    Tudo sobre materiais, procedimentos e preservação da garantia do fabricante.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  {installFaqs.map((faq, i) => {
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

          <Contact whatsappMessage={WHATSAPP_INSTALACAO} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_INSTALACAO} />
      </div>
    </>
  );
};

export default InstalacaoArCondicionado;
