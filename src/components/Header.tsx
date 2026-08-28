import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, MapPin } from "lucide-react";
import arfriLogo from "@/assets/arfri-logo.svg";

interface HeaderProps {
  currentRoute?: string;
  whatsappMessage?: string;
}

const DEFAULT_WHATSAPP_LINK = "https://wa.me/5519997871301?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AR%20FRI%20e%20gostaria%20de%20um%20atendimento.";

const Header = ({ currentRoute = "/", whatsappMessage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = whatsappMessage
    ? `https://wa.me/5519997871301?text=${encodeURIComponent(whatsappMessage)}`
    : DEFAULT_WHATSAPP_LINK;

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Conserto", href: "/conserto-ar-condicionado" },
    { label: "Instalação", href: "/instalacao-ar-condicionado" },
    { label: "Higienização", href: "/limpeza-higienizacao-ar-condicionado" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A192F]/95 backdrop-blur-md shadow-lg py-2.5 border-b border-white/10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={arfriLogo}
              alt="AR FRI Climatização e Ar Condicionado"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
            />
          </a>

          {/* Location Badge (Desktop) */}
          <div className="hidden lg:flex items-center gap-1.5 bg-sky-500/15 border border-sky-400/30 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Indaiatuba • Salto • Itu</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = currentRoute === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-sky-400 ${
                    isActive ? "text-sky-400 font-bold" : "text-white/85"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/20 transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0A192F] border border-white/15 rounded-2xl p-4 mt-3 shadow-2xl animate-fade-in space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 bg-sky-500/10 p-2.5 rounded-xl mb-2">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Atendemos Indaiatuba, Salto e Itu / SP</span>
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/90 hover:text-sky-400 hover:bg-white/5 font-medium py-2.5 px-3 rounded-lg text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md mt-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;