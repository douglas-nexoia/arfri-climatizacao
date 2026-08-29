import { useState } from "react";

interface ContactProps {
  whatsappMessage?: string;
}

const Contact = ({
  whatsappMessage = "Olá! Vim pelo site da AR FRI e gostaria de solicitar um atendimento.",
}: ContactProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${name || "Cliente"} (${phone || "Não informado"}) e gostaria de um atendimento para meu ar condicionado.`;
    window.open(`https://wa.me/5519997871301?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const directWhatsAppUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="bg-[#F5F4F1] text-[#14212E] py-16 sm:py-24">
      <div className="container-max">
        {/* Dark Container Box #0A141E */}
        <div className="bg-[#0A141E] rounded-xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Direct WhatsApp & Info */}
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#1D74E8] mb-3">
              07 — Contato
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.03em] text-white mb-4">
              Descreve o problema.<br />A gente responde em minutos.
            </h2>
            <p className="font-sans text-base text-white/60 leading-relaxed mb-8 max-w-[460px]">
              Segunda a sábado, 8h às 18h. Atendimento ágil com técnicos em rota diária em Indaiatuba, Salto e Itu.
            </p>

            {/* Big Green WhatsApp Button */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#22C55E] hover:bg-[#1eb354] text-[#062B14] font-sans font-bold text-base sm:text-lg px-8 py-4 rounded-md shadow-lg transition-transform active:scale-95"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#062B14]" />
              <span>Chamar no WhatsApp</span>
            </a>

            {/* Direct Phone and Email */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mt-10 pt-7 border-t border-white/10">
              <div>
                <div className="font-sans text-xs text-white/45 mb-1">Telefone / WhatsApp</div>
                <div className="font-mono text-sm sm:text-base text-white font-medium">
                  (19) 99787-1301
                </div>
              </div>
              <div>
                <div className="font-sans text-xs text-white/45 mb-1">E-mail</div>
                <div className="font-sans text-sm sm:text-base text-white font-medium">
                  Renatotortorelli95@gmail.com
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2-field form */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-md p-6 sm:p-8">
            <div className="font-heading font-bold text-xl text-white mb-1.5">
              Prefere que a gente ligue?
            </div>
            <p className="font-sans text-xs sm:text-sm text-white/55 mb-6">
              Dois campos, nada além disso. Retornamos no seu WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="grid gap-3.5">
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/5 border border-white/15 rounded-md px-4 py-3.5 text-sm text-white font-sans placeholder:text-white/40 focus:outline-none focus:border-[#1D74E8] transition-colors"
              />
              <input
                type="tel"
                placeholder="WhatsApp com DDD"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-white/5 border border-white/15 rounded-md px-4 py-3.5 text-sm text-white font-sans placeholder:text-white/40 focus:outline-none focus:border-[#1D74E8] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#1D74E8] hover:bg-[#1560c2] text-white font-sans font-semibold text-sm sm:text-base py-3.5 rounded-md transition-colors shadow-sm mt-1"
              >
                Pedir retorno
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;