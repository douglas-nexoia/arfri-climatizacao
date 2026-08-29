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
import { AlertTriangle, Droplets, Zap, Wrench, ArrowRight } from "lucide-react";

const commonProblems = [
  {
    icon: AlertTriangle,
    title: "Não gela ou esfria muito pouco",
    desc: "Geralmente causado por vazamento na flange, falta de gás refrigerante ou sujeira pesada na serpentina. Fazemos o teste de estanqueidade e recarga na pressão correta.",
    tags: ["Carga de gás", "Vazamento", "Serpentina"],
  },
  {
    icon: Droplets,
    title: "Água pingando na parede ou no chão",
    desc: "Dreno obstruído por limo, mangueira de escoamento desnivelada ou falta de vedação na bandeja. Desobstruímos e higienizamos todo o circuito de dreno.",
    tags: ["Dreno entupido", "Bandeja", "Sem respingos"],
  },
  {
    icon: Zap,
    title: "Compressor não liga ou fica desarmando",
    desc: "Falha no capacitor de partida, sensor de temperatura com defeito ou superaquecimento da unidade externa. Teste elétrico e substituição de componentes originais.",
    tags: ["Capacitor", "Sensores", "Elétrica"],
  },
  {
    icon: Wrench,
    title: "Códigos de erro no painel ou luz piscando",
    desc: "Falha de comunicação entre as unidades, erro de rotação no motor ventilador ou pane na placa eletrônica Inverter. Diagnóstico eletrônico com instrumentação.",
    tags: ["Placa Inverter", "Código de erro", "Motor"],
  },
];

const repairFaqs = [
  {
    q: "O conserto do ar condicionado é feito na minha casa ou empresa?",
    a: "Na grande maioria dos casos (mais de 95%), todo o serviço é realizado diretamente no local. Nossos técnicos contam com ferramental completo e peças de reposição na van.",
  },
  {
    q: "O que acontece se o ar estiver sem gás refrigerante?",
    a: "O gás não se 'gasta' com o tempo; se faltou gás, existe um ponto de vazamento (geralmente nas conexões de porca e flange). Nós localizamos o vazamento, corrigimos e só depois realizamos a recarga com balança digital.",
  },
  {
    q: "Vocês consertam placas eletrônicas de ar Inverter?",
    a: "Sim. Nossos técnicos são capacitados para diagnosticar sensores, pontes retificadoras e componentes de potência em placas de todas as principais marcas inverter.",
  },
  {
    q: "Qual a garantia do conserto?",
    a: "90 dias de garantia por escrito na ordem de serviço, cobrindo tanto as peças substituídas quanto a mão de obra técnica executada.",
  },
];

const ConsertoArCondicionado = () => {
  const WHATSAPP_CONSERTO = "Olá, preciso de conserto no meu ar condicionado (Ref: #conserto)";
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conserto e Manutenção de Ar Condicionado",
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
        <title>Conserto de Ar Condicionado em Indaiatuba, Salto e Itu | AR FRI</title>
        <meta
          name="description"
          content="Conserto de ar condicionado que não gela, pinga água ou desarma em Indaiatuba, Salto e Itu. Diagnóstico preciso no local, peças originais e 90 dias de garantia."
        />
        <meta
          name="keywords"
          content="conserto ar condicionado indaiatuba, manutencao split salto, tecnico ar condicionado itu, recarga gas r410a"
        />
        <link rel="canonical" href="https://arfri.com.br/conserto-ar-condicionado" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0A141E] text-white">
        <Header currentRoute="/conserto-ar-condicionado" whatsappMessage={WHATSAPP_CONSERTO} />

        <main>
          {/* Hero Section for Repair */}
          <Hero
            badgeRegion="Indaiatuba, Salto e Itu"
            badgeCredential="Técnicos em Rota na Região"
            title={
              <>
                Conserto de Ar Condicionado em<br />
                <span className="text-[#1D74E8]">Indaiatuba, Salto e Itu</span>
              </>
            }
            description="Não gela, está pingando água ou exibindo código de erro no painel? Realizamos o diagnóstico no local com peças originais e 90 dias de garantia por escrito."
            whatsappMessage={WHATSAPP_CONSERTO}
          />

          <Brands />

          {/* Dedicated Section: Sintomas Mais Frequentes */}
          <section className="bg-[#F5F4F1] text-[#14212E] py-16 sm:py-24">
            <div className="container-max">
              <div className="max-w-[640px] mb-12">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
                  01 — Diagnóstico
                </div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                  Qual é o defeito do seu ar condicionado?
                </h2>
                <p className="font-sans text-base text-[#68737E]">
                  Identificamos a causa raiz da falha para evitar que o problema volte a acontecer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commonProblems.map((p, idx) => {
                  const Icon = p.icon;
                  const waRefUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(`Olá! Meu ar condicionado está com o seguinte problema: ${p.title} (Ref: #conserto)`)}`;

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
                          {p.title}
                        </h3>
                        <p className="font-sans text-sm text-[#68737E] leading-relaxed mb-4">
                          {p.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {p.tags.map((t, i) => (
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
          <Guarantee />
          <Coverage />
          <SocialProof />

          {/* Specialized FAQ for Repair */}
          <section className="bg-[#0A141E] text-white py-16 sm:py-24 border-t border-white/10">
            <div className="container-max">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-5">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
                    06 — Dúvidas de Conserto
                  </div>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] mb-4">
                    Dúvidas sobre manutenção
                  </h2>
                  <p className="font-sans text-base text-white/55 leading-relaxed">
                    Veja como funciona nosso processo de visita e reparo técnico no local.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  {repairFaqs.map((faq, i) => {
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

          <Contact whatsappMessage={WHATSAPP_CONSERTO} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_CONSERTO} />
      </div>
    </>
  );
};

export default ConsertoArCondicionado;
