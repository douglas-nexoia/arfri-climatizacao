import { MapPin, Phone, Mail, Clock, MessageCircle, Shield } from "lucide-react";
import arfriLogo from "@/assets/arfri-logo.svg";

const WHATSAPP_LINK = "https://wa.me/5519997871301?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20AR%20FRI%20e%20gostaria%20de%20um%20atendimento.";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const cities = ["Indaiatuba / SP", "Salto / SP", "Itu / SP", "Campinas e Região"];

  return (
    <footer className="bg-[#050D18] text-white border-t border-white/10 pt-16 pb-12">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="inline-block">
              <img src={arfriLogo} alt="AR FRI Climatização" className="h-11 w-auto" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialistas em conserto, instalação e higienização de ar condicionado residencial e comercial em Indaiatuba, Salto e Itu.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 bg-sky-500/10 px-3 py-1.5 rounded-lg w-fit border border-sky-400/20">
              <Shield className="w-4 h-4 text-sky-400" />
              <span>Garantia de 90 dias com peças originais</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-sky-400 mb-4">Páginas do Site</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="/" className="hover:text-sky-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="/conserto-ar-condicionado" className="hover:text-sky-400 transition-colors">Conserto e Manutenção</a>
              </li>
              <li>
                <a href="/instalacao-ar-condicionado" className="hover:text-sky-400 transition-colors">Instalação Split & Inverter</a>
              </li>
              <li>
                <a href="/limpeza-higienizacao-ar-condicionado" className="hover:text-sky-400 transition-colors">Higienização e Limpeza</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-sky-400 mb-4">Cidades Atendidas</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {cities.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-sky-400 mb-4">Atendimento</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 font-bold hover:underline"
                >
                  (19) 99787-1301 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-300 text-xs">Renatotortorelli95@gmail.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Indaiatuba – Salto – Itu / SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Seg a Sáb: 08h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} AR FRI Climatização e Ar Condicionado. Todos os direitos reservados.</p>
          <p>Indaiatuba, Salto e Itu / SP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;