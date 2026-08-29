import { Phone } from "lucide-react";
import { trackWhatsAppConversion, trackPhoneConversion } from "@/lib/tracking";

interface HeaderProps {
  currentRoute?: string;
  whatsappMessage?: string;
}

const Header = ({
  currentRoute = "/",
  whatsappMessage = "Olá! Vim pelo site da AR FRI e gostaria de um atendimento.",
}: HeaderProps) => {
  const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A141E]/92 backdrop-blur-[14px] border-b border-white/10 transition-all duration-200">
      <div className="container-max flex items-center justify-between h-20">
        {/* Brand / Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-[#1D74E8] transition-colors">
            AR FRI<span className="text-[#1D74E8]">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="/"
            className={`font-sans text-sm font-medium transition-colors ${
              currentRoute === "/" ? "text-white font-semibold" : "text-white/70 hover:text-white"
            }`}
          >
            Início
          </a>
          <a
            href="/conserto-ar-condicionado"
            className={`font-sans text-sm font-medium transition-colors ${
              currentRoute === "/conserto-ar-condicionado"
                ? "text-[#1D74E8] font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            Conserto
          </a>
          <a
            href="/instalacao-ar-condicionado"
            className={`font-sans text-sm font-medium transition-colors ${
              currentRoute === "/instalacao-ar-condicionado"
                ? "text-[#1D74E8] font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            Instalação
          </a>
          <a
            href="/limpeza-higienizacao-ar-condicionado"
            className={`font-sans text-sm font-medium transition-colors ${
              currentRoute === "/limpeza-higienizacao-ar-condicionado"
                ? "text-[#1D74E8] font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            Higienização
          </a>
        </nav>

        {/* Contact info & CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Clickable Mono Phone with Direct Conversion Tracking */}
          <a
            href="tel:+5519997871301"
            onClick={trackPhoneConversion}
            className="hidden sm:flex items-center gap-2.5 text-white/90 hover:text-white transition-colors group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] shadow-[0_0_0_3px_rgba(34,197,94,0.25)]" />
            <span className="font-mono text-sm font-medium text-white/90 group-hover:text-white">
              (19) 99787-1301
            </span>
          </a>

          {/* Primary WhatsApp CTA Button with Direct Conversion Tracking */}
          <a
            href={whatsappUrl}
            onClick={trackWhatsAppConversion}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#1eb354] text-[#062B14] font-sans font-bold text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded-md shadow-sm transition-all duration-150 active:scale-95"
          >
            <span className="w-2 h-2 rounded-full bg-[#062B14]" />
            <span>Pedir orçamento</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;