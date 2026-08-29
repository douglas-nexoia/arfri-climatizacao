import { MessageCircle } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-[#0A141E]/95 backdrop-blur-md border-b border-white/10">
      <div className="container-max py-3.5 min-h-[74px] flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="/" className="flex items-baseline gap-1 font-heading font-extrabold text-2xl tracking-tight text-white hover:opacity-90 transition-opacity">
          <span>AR FRI</span>
          <span className="text-[#1D74E8]">.</span>
          <span className="font-mono font-medium text-[10px] tracking-[0.22em] text-white/50 ml-2 self-center uppercase">
            CLIMATIZAÇÃO
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-sans text-sm font-medium text-white/75">
          <a href="/#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="/#como" className="hover:text-white transition-colors">Como funciona</a>
          <a href="/#onde" className="hover:text-white transition-colors">Onde atendemos</a>
          <a href="/#garantia" className="hover:text-white transition-colors">Garantia</a>
          <a href="/#contato" className="hover:text-white transition-colors">Contato</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 sm:gap-6 ml-auto md:ml-0">
          <a
            href="tel:+5519997871301"
            className="flex items-center gap-2 font-mono text-xs sm:text-[13.5px] text-white hover:text-white/80 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_0_3px_rgba(34,197,94,0.25)]" />
            <span>(19) 99787-1301</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#1D74E8] hover:bg-[#1560c2] text-white font-sans font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-md transition-colors shadow-sm"
          >
            Pedir orçamento
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;