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
import tecnicoImg from "@/assets/tecnico-recorte.png";

const ConsertoArCondicionado = () => {
  const WHATSAPP_CONSERTO = "Olá, preciso de conserto no meu ar condicionado (Ref: #conserto)";

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
        <title>Conserto e Manutenção de Ar Condicionado em Indaiatuba, Salto e Itu | AR FRI</title>
        <meta
          name="description"
          content="Conserto de ar condicionado que não gela, pinga água ou desarma compressor em Indaiatuba, Salto e Itu. Diagnóstico rápido, peças originais e 90 dias de garantia."
        />
        <meta
          name="keywords"
          content="conserto ar condicionado indaiatuba, manutencao ar condicionado salto, tecnico ar condicionado itu, recarga gas split"
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
            badgeRegion="Indaiatuba, Salto e Itu / SP"
            badgeCredential="Atendimento de Emergência Hoje"
            imageSrc={tecnicoImg}
            title={
              <>
                Conserto de Ar Condicionado em<br />
                <span className="text-[#1D74E8]">Indaiatuba, Salto e Itu</span>
              </>
            }
            description="Não gela, está pingando água ou exibindo código de erro? Realizamos o diagnóstico no local e conserto no mesmo dia com peças originais e 90 dias de garantia por escrito."
            whatsappMessage={WHATSAPP_CONSERTO}
          />

          <Brands />
          <HowItWorks />
          <Guarantee />
          <Coverage />
          <SocialProof />
          <FAQ />
          <Contact whatsappMessage={WHATSAPP_CONSERTO} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_CONSERTO} />
      </div>
    </>
  );
};

export default ConsertoArCondicionado;
