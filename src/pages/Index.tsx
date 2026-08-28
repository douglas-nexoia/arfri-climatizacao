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

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "AR FRI Climatização e Ar Condicionado",
    "description": "Assistência técnica especializada em conserto, instalação e higienização de ar condicionado em Indaiatuba, Salto e Itu / SP.",
    "telephone": "+55-19-99787-1301",
    "email": "Renatotortorelli95@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indaiatuba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "url": "https://arfri.com.br",
    "priceRange": "$$",
    "areaServed": ["Indaiatuba", "Salto", "Itu", "Campinas"]
  };

  return (
    <>
      <Helmet>
        <title>AR FRI Climatização | Conserto, Instalação e Limpeza de Ar Condicionado em Indaiatuba, Salto e Itu</title>
        <meta
          name="description"
          content="Especialistas em ar condicionado em Indaiatuba, Salto e Itu. Conserto no mesmo dia, instalação com tubulação de cobre e higienização profunda. Peça seu orçamento!"
        />
        <meta
          name="keywords"
          content="ar condicionado indaiatuba, conserto ar condicionado indaiatuba, instalacao ar condicionado salto, limpeza ar condicionado itu, ar fri climatizacao"
        />
        <meta name="author" content="AR FRI Climatização" />
        <link rel="canonical" href="https://arfri.com.br" />

        <meta property="og:title" content="AR FRI Climatização | Especialistas em Ar Condicionado em Indaiatuba" />
        <meta property="og:description" content="Conserto, instalação e limpeza de ar condicionado com garantia e atendimento rápido." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#071324] text-white">
        <Header currentRoute="/" />
        <main>
          <Hero
            badge="Atendimento Especializado em Indaiatuba, Salto e Itu"
            title={
              <>
                Seu Ar Condicionado em <br />
                <span className="text-sky-400">Perfeitas Condições Hoje.</span>
              </>
            }
            description="Assistência técnica especializada em conserto, instalação padrão fabricante e higienização profunda de ar condicionado residencial e comercial."
            whatsappMessage="Olá! Vim pelo site da AR FRI e gostaria de um orçamento."
            bulletPoints={[
              "Conserto rápido no mesmo dia",
              "Instalação 100% em tubulação de cobre",
              "Higienização com bactericida e bolsa coletora",
              "Garantia de 90 dias com peças originais",
            ]}
          />
          <Brands />
          <Services focusedService="all" />
          <Advantages />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Index;