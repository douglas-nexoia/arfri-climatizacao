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

const LimpezaHigienizacao = () => {
  const WHATSAPP_LIMPEZA = "Olá, gostaria de agendar a limpeza do meu ar (Ref: #limpeza)";

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
        <title>Higienização e Limpeza de Ar Condicionado em Indaiatuba, Salto e Itu | AR FRI</title>
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
          <HowItWorks />
          <Guarantee />
          <Coverage />
          <SocialProof />
          <FAQ />
          <Contact whatsappMessage={WHATSAPP_LIMPEZA} />
        </main>

        <Footer />
        <WhatsAppFloat whatsappMessage={WHATSAPP_LIMPEZA} />
      </div>
    </>
  );
};

export default LimpezaHigienizacao;
