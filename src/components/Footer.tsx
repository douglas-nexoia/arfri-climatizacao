import { trackPhoneConversion } from "@/lib/tracking";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A141E] text-white/60 py-16 border-t border-white/10 font-sans text-sm">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div>
            <span className="font-heading font-bold text-xl text-white block mb-3">
              AR FRI<span className="text-[#1D74E8]">.</span>
            </span>
            <p className="text-white/60 leading-relaxed text-sm max-w-[260px] mb-4">
              Assistência técnica e climatização residencial e comercial. Conserto, instalação e higienização de ar condicionado em Indaiatuba, Salto e Itu.
            </p>
            <div className="font-mono text-xs text-[#1D74E8]">
              90 dias de garantia por escrito
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <div className="font-heading font-semibold text-white text-base mb-4">
              Serviços
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="/conserto-ar-condicionado" className="hover:text-white transition-colors">
                  Conserto & Manutenção
                </a>
              </li>
              <li>
                <a href="/instalacao-ar-condicionado" className="hover:text-white transition-colors">
                  Instalação Split & Inverter
                </a>
              </li>
              <li>
                <a href="/limpeza-higienizacao-ar-condicionado" className="hover:text-white transition-colors">
                  Higienização & Limpeza
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Região Atendida */}
          <div>
            <div className="font-heading font-semibold text-white text-base mb-4">
              Região de Atendimento
            </div>
            <ul className="space-y-1.5 text-xs text-white/50">
              <li>Indaiatuba (Centro e todos os bairros)</li>
              <li>Salto (Centro, Nações, etc.)</li>
              <li>Itu (Centro, Novo Itu, etc.)</li>
              <li>Condomínios residenciais e comerciais</li>
            </ul>
          </div>

          {/* Col 4: Contato Direto */}
          <div>
            <div className="font-heading font-semibold text-white text-base mb-4">
              Atendimento Direto
            </div>
            <div className="space-y-2">
              <a
                href="tel:+5519997871301"
                onClick={trackPhoneConversion}
                className="font-mono text-sm text-white hover:text-[#1D74E8] block transition-colors"
              >
                (19) 99787-1301
              </a>
              <div className="text-xs text-white/50">
                Segunda a Sábado — 8h às 18h
              </div>
              <div className="text-xs text-white/50">
                Renatotortorelli95@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            © {currentYear} AR FRI Climatização. Todos os direitos reservados.
          </div>
          <div>
            Indaiatuba • Salto • Itu / SP
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;