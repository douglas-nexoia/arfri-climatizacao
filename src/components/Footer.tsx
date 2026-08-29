const Footer = () => {
  return (
    <footer className="bg-[#0A141E] border-t border-white/10 pt-14 pb-8 text-white">
      <div className="container-max">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Column 1: Company Description */}
          <div>
            <a href="/" className="inline-flex items-baseline gap-0.5 font-heading font-extrabold text-2xl tracking-tight text-white mb-4">
              <span>AR FRI</span>
              <span className="text-[#1D74E8]">.</span>
            </a>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-[280px]">
              Assistência técnica, instalação especializada e higienização de ar condicionado em Indaiatuba, Salto e Itu.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-white/40 mb-4">
              Serviços
            </div>
            <div className="grid gap-2.5 font-sans text-sm">
              <a href="/conserto-ar-condicionado" className="text-white/70 hover:text-white transition-colors">
                Conserto de ar condicionado
              </a>
              <a href="/instalacao-ar-condicionado" className="text-white/70 hover:text-white transition-colors">
                Instalação Split & Inverter
              </a>
              <a href="/limpeza-higienizacao-ar-condicionado" className="text-white/70 hover:text-white transition-colors">
                Higienização e limpeza
              </a>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-white/40 mb-4">
              Empresa
            </div>
            <div className="grid gap-2.5 font-sans text-sm">
              <a href="/#como" className="text-white/70 hover:text-white transition-colors">
                Como funciona
              </a>
              <a href="/#onde" className="text-white/70 hover:text-white transition-colors">
                Onde atendemos
              </a>
              <a href="/#garantia" className="text-white/70 hover:text-white transition-colors">
                Garantia e transparência
              </a>
            </div>
          </div>

          {/* Column 4: Direct Contacts */}
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-white/40 mb-4">
              Contato
            </div>
            <div className="grid gap-2.5 font-sans text-sm text-white/70">
              <span className="font-mono text-white">(19) 99787-1301</span>
              <span>Seg a sáb, 8h às 18h</span>
              <span>Indaiatuba • Salto • Itu / SP</span>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-white/40">
          <span>© {new Date().getFullYear()} AR FRI Climatização. Todos os direitos reservados.</span>
          <span className="font-mono text-[11px] tracking-wider text-white/30 uppercase">
            PADRÃO DE ALTA CONVERSÃO
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;