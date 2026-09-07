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
import { AlertTriangle, Droplets, Zap, Wrench, ArrowRight, Snowflake, ShieldCheck } from "lucide-react";
import { trackWhatsAppConversion } from "@/lib/tracking";

const commonProblems = [
  {
    icon: AlertTriangle,
    title: "Parte de baixo não gela ou congela alimentos",
    desc: "Em geladeiras Frost Free, o bloqueio do duto por gelo, queima do sensor de temperatura, falha na resistência de degelo ou damper travado impedem o fluxo de ar frio. Identificamos e trocamos a peça com defeito no local.",
    tags: ["Degelo Frost Free", "Resistência", "Damper", "Sensor"],
  },
  {
    icon: Zap,
    title: "Geladeira estalando, apitando ou motor desarmando",
    desc: "Geralmente provocado por desgaste no relé de partida, protetor térmico atuando por superaquecimento ou falha no compressor. Realizamos teste elétrico completo com amperímetro e componentes originais.",
    tags: ["Relé de partida", "Protetor térmico", "Motor", "Compressor"],
  },
  {
    icon: Droplets,
    title: "Água vazando embaixo ou dentro da gaveta de legumes",
    desc: "Dreno de degelo obstruído por biofilme ou resíduos, mangueira de escoamento fora de posição ou calha coletora trincada sobre o motor. Desobstrução imediata e teste de escoamento sem sujeira.",
    tags: ["Dreno entupido", "Calha coletora", "Sem vazamento", "Higienização"],
  },
  {
    icon: Snowflake,
    title: "Motor ligado sem parar mas não gela (Falta de gás)",
    desc: "A perda de rendimento contínua costuma indicar microvazamento de gás refrigerante. Realizamos teste de estanqueidade e recarga precisa com fluido R600a ou R134a dosado por balança digital.",
    tags: ["Carga de gás R600a/R134a", "Balança digital", "Teste de vazamento"],
  },
  {
    icon: Wrench,
    title: "Painel digital apagado ou piscando erro (Inverter)",
    desc: "Panes eletrônicas em placas de controle e potência, muito comuns após oscilações de energia elétrica na rede. Diagnóstico de sensores, chicotes e placas eletrônicas com instrumentação de ponta.",
    tags: ["Placa Inverter", "Painel digital", "Sensor de campo", "Eletrônica"],
  },
  {
    icon: ShieldCheck,
    title: "Freezer vertical ou horizontal sem congelar",
    desc: "Manutenção corretiva e preventiva para freezers residenciais e comerciais. Troca de termostato, gaxeta de vedação magnética, ventilador forçador e compressor de alto rendimento.",
    tags: ["Freezer comercial", "Termostato", "Gaxeta / Borracha", "Congelamento"],
  },
];

const refrigeratorFaqs = [
  {
    q: "O conserto da geladeira ou freezer é feito na minha casa?",
    a: "Sim! Mais de 95% dos serviços em refrigeradores e freezers são concluídos diretamente na sua residência ou comércio. Nossos técnicos levam peças de reposição e ferramental completo na van, evitando o risco de avarias no transporte.",
  },
  {
    q: "Vocês atendem geladeiras Inverter, French Door e Side by Side?",
    a: "Sim. Nossa equipe é qualificada e equipada com manômetros digitais e ferramentas específicas para sistemas Inverter multimarcas, além de modelos Duplex, Side by Side e French Door.",
  },
  {
    q: "Qual a garantia do conserto da geladeira?",
    a: "Oferecemos 90 dias de garantia por escrito na ordem de serviço, cobrindo todas as peças novas substituídas e a mão de obra técnica executada.",
  },
  {
    q: "O que fazer se a geladeira parou de gelar para não perder alimentos?",
    a: "Evite abrir as portas desnecessariamente para reter o ar frio residual e entre em contato imediatamente com nossa equipe técnica pelo WhatsApp para verificarmos o técnico em rota mais próximo da sua região.",
  },
  {
    q: "Vocês atendem quais cidades da região?",
    a: "Atendemos prontamente em todos os bairros e condomínios de Indaiatuba, Salto e Itu (SP).",
  },
];

const ConsertoGeladeira = () => {
  const WHATSAPP_GELADEIRA = "Olá, preciso de conserto na minha geladeira / freezer (Ref: #geladeira)";
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conserto de Geladeiras e Freezers",
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
        <title>Conserto de Geladeiras e Freezers em Indaiatuba, Salto e Itu | AR FRI</title>
        <meta
          name="description"
          content="Conserto de geladeiras Frost Free, Duplex, Inverter e Freezers que não gelam ou vazam água em Indaiatuba, Salto e Itu. Diagnóstico no local, peças originais e 90 dias de garantia."
        />
        <meta
          name="keywords"
          content="conserto geladeira indaiatuba, manutencao freezer salto, tecnico geladeira itu, conserto frost free duplex inverter"
        />
        <link rel="canonical" href="https://www.arfriclimatizacao.com.br/conserto-geladeira" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0A141E] text-white">
        <Header currentRoute="/conserto-geladeira" whatsappMessage={WHATSAPP_GELADEIRA} />

        <main>
          {/* Hero Section for Refrigerators */}
          <Hero
            badgeRegion="Indaiatuba, Salto e Itu"
            badgeCredential="Técnicos em Rota na Região"
            title={
              <>
                Conserto de Geladeiras e Freezers em<br />
                <span className="text-[#1D74E8]">Indaiatuba, Salto e Itu</span>
              </>
            }
            description="Não gela a parte de baixo, está vazando água, apitando ou motor desarmando? Diagnóstico preciso no local com peças originais e 90 dias de garantia por escrito."
            whatsappMessage={WHATSAPP_GELADEIRA}
          />

          <Brands />

          {/* Dedicated Section: Sintomas Mais Frequentes */}
          <section className="bg-[#F5F4F1] text-[#14212E] py-16 sm:py-24">
            <div className="container-max">
              <div className="max-w-[640px] mb-12">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
                  01 — Diagnóstico Especializado
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                  Qual é o defeito da sua geladeira ou freezer?
                </h2>
                <p className="font-sans text-base text-[#68737E]">
                  Diagnosticamos a causa exata para restabelecer a temperatura ideal dos seus alimentos sem perda de tempo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commonProblems.map((p, idx) => {
                  const Icon = p.icon;
                  const waRefUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(`Olá! Minha geladeira/freezer está com o seguinte problema: ${p.title} (Ref: #geladeira)`)}`;

                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#E4E2DD] rounded-md p-6 sm:p-7 flex flex-col justify-between hover:border-[#14212E] transition-colors shadow-sm"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-md bg-[#F2F0EC] flex items-center justify-center text-[#1D74E8] mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-[#14212E] mb-2.5 leading-snug">
                          {p.title}
                        </h3>
                        <p className="font-sans text-sm text-[#68737E] leading-relaxed mb-4">
                          {p.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {p.tags.map((t, i) => (
                            <span key={i} className="font-sans text-xs text-[#5A646E] bg-[#F2F0EC] rounded px-2 py-0.5">
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
                        <span>Pedir conserto deste problema</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <HowItWorks />

          <Guarantee
            serviceImage="/images/servico-conserto-geladeira.webp"
            imageAlt="Conserto de Geladeiras Frost Free e Inverter em Indaiatuba, Salto e Itu"
            caption="Diagnóstico no local com peças originais e 90 dias de garantia por escrito."
          />

          <Coverage />

          <SocialProof />

          {/* Specialized FAQ for Refrigerators */}
          <section className="bg-[#0A141E] text-white py-16 sm:py-24 border-t border-white/10">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-5">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
                    06 — Dúvidas Frequentes
                  </div>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                    Dúvidas sobre geladeiras e freezers
                  </h2>
                  <p className="font-sans text-base text-white/55 leading-relaxed">
                    Entenda como funciona nosso agendamento, atendimento em domicílio e garantia.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  {refrigeratorFaqs.map((faq, i) => {
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

          <Contact whatsappMessage={WHATSAPP_GELADEIRA} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_GELADEIRA} />
      </div>
    </>
  );
};

export default ConsertoGeladeira;
