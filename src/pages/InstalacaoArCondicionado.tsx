import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import Guarantee from "@/components/Guarantee";
import Coverage from "@/components/Coverage";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const InstalacaoArCondicionado = () => {
  const WHATSAPP_INSTALACAO = "Olá, gostaria de um orçamento para instalação de ar (Ref: #instalacao)";

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
        <title>Instalação de Ar Condicionado Split e Inverter em Indaiatuba, Salto e Itu | AR FRI</title>
        <meta
          name="description"
          content="Instalação profissional de ar condicionado Split e Inverter em Indaiatuba, Salto e Itu. Tubulação 100% cobre, teste de vácuo e garantia do fabricante preservada."
        />
        <meta
          name="keywords"
          content="instalacao ar condicionado indaiatuba, instalador ar condicionado salto, instalacao split inverter itu, tubulacao cobre ar condicionado"
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
            description="Comprou ar condicionado ou está em reforma? Garanta a máxima eficiência e a garantia total do fabricante com instalação em 100% cobre e processo rigoroso de vácuo."
            whatsappMessage={WHATSAPP_INSTALACAO}
          />

          <Brands />
          <HowItWorks />
          <Guarantee />
          <Coverage />
          <SocialProof />
          <FAQ />
          <Contact whatsappMessage={WHATSAPP_INSTALACAO} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_INSTALACAO} />
      </div>
    </>
  );
};

export default InstalacaoArCondicionado;
