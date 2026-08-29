import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Guarantee from "@/components/Guarantee";
import Coverage from "@/components/Coverage";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  const WHATSAPP_HOME = "Olá! Vim pelo site da AR FRI e gostaria de um atendimento.";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "AR FRI Climatização e Ar Condicionado",
    "image": "https://arfri.com.br/favicon.svg",
    "telephone": "+5519997871301",
    "email": "Renatotortorelli95@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indaiatuba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "areaServed": ["Indaiatuba", "Salto", "Itu"],
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <title>AR FRI Climatização | Conserto, Instalação e Limpeza de Ar Condicionado em Indaiatuba, Salto e Itu</title>
        <meta
          name="description"
          content="Assistência técnica especializada em ar condicionado em Indaiatuba, Salto e Itu. Atendimento ágil com técnicos em rota, instalação em 100% cobre e 90 dias de garantia por escrito."
        />
        <meta
          name="keywords"
          content="ar condicionado indaiatuba, conserto ar condicionado salto, instalacao ar condicionado itu, manutencao split inverter indaiatuba"
        />
        <link rel="canonical" href="https://arfri.com.br/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#0A141E] text-white">
        <Header currentRoute="/" whatsappMessage={WHATSAPP_HOME} />

        <main>
          {/* Hero Section */}
          <Hero
            badgeRegion="Indaiatuba, Salto e Itu"
            badgeCredential="Técnicos em Rota na Região"
            title={
              <>
                Seu ar condicionado parou hoje.<br />
                <span className="text-[#1D74E8]">A gente resolve para você.</span>
              </>
            }
            description="Conserto, instalação e higienização de ar condicionado residencial e comercial. Diagnóstico preciso no local, peças originais e 90 dias de garantia por escrito."
            whatsappMessage={WHATSAPP_HOME}
          />

          {/* Brands */}
          <Brands />

          {/* 01 - Services */}
          <Services />

          {/* 02 - How it Works */}
          <HowItWorks />

          {/* 03 - Guarantee */}
          <Guarantee />

          {/* 04 - Coverage */}
          <Coverage />

          {/* 05 - Social Proof */}
          <SocialProof />

          {/* 06 - FAQ */}
          <FAQ />

          {/* 07 - Contact */}
          <Contact whatsappMessage={WHATSAPP_HOME} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_HOME} />
      </div>
    </>
  );
};

export default Index;