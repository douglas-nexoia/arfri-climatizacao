import { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock, Mail, Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ContactProps {
  defaultService?: string;
  whatsappMessage?: string;
}

const Contact = ({
  defaultService = "conserto",
  whatsappMessage = "Olá! Vim pelo site da AR FRI e gostaria de solicitar um atendimento.",
}: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Indaiatuba",
    service: defaultService,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refTag =
      formData.service === "conserto"
        ? "#conserto"
        : formData.service === "instalacao"
        ? "#instalacao"
        : "#limpeza";

    const fullMessage = `Olá! Meu nome é ${formData.name}, moro em ${formData.city}. Preciso de atendimento para ${formData.service}. ${formData.message ? `Detalhes: ${formData.message}` : ""} (Ref: ${refTag})`;

    const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para o WhatsApp...",
      description: "Você será atendido pela equipe técnica da AR FRI.",
    });

    setFormData({ name: "", phone: "", city: "Indaiatuba", service: defaultService, message: "" });
    setIsSubmitting(false);
  };

  const directWhatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="section-padding bg-[#0A192F] relative">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-400 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-sky-500/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Solicite Seu <span className="text-sky-400">Orçamento Rápido</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Atendimento imediato pelo WhatsApp ou preencha o formulário para agendar sua visita.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Informações de Atendimento</h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">WhatsApp / Telefone</h4>
                  <a
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 font-bold hover:underline text-lg block"
                  >
                    (19) 99787-1301
                  </a>
                  <span className="text-slate-400 text-xs">Resposta rápida com o técnico</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Região Atendida</h4>
                  <p className="text-slate-200 text-sm font-medium">
                    Indaiatuba, Salto e Itu / SP
                  </p>
                  <span className="text-slate-400 text-xs">Atendimento em domicílio e empresas</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">E-mail de Contato</h4>
                  <p className="text-slate-300 text-sm">Renatotortorelli95@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold">Horário de Funcionamento</h4>
                  <p className="text-slate-300 text-sm">Segunda a Sábado: 08h às 18h</p>
                </div>
              </div>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-500/20 transition-all duration-200 hover:scale-[1.02] text-base text-center mt-4"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Chamar no WhatsApp Direto</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Envie Sua Mensagem</h3>
              <p className="text-slate-400 text-sm mb-6">
                Preencha os campos abaixo para abrir uma conversa direta com nossos especialistas.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-800 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(19) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-800 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Sua Cidade *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-800 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    >
                      <option value="Indaiatuba">Indaiatuba</option>
                      <option value="Salto">Salto</option>
                      <option value="Itu">Itu</option>
                      <option value="Campinas">Campinas / Outra</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Serviço Desejado *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-800 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    >
                      <option value="conserto">Conserto / Não Gela / Pingando</option>
                      <option value="instalacao">Instalação de Ar Novo / Usado</option>
                      <option value="limpeza">Higienização e Limpeza Profunda</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Detalhes do Aparelho ou Defeito (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Split LG 12.000 BTUs parou de gelar após queda de luz..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-800 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold py-4 px-6 rounded-2xl shadow-lg shadow-sky-500/25 transition-all duration-200 hover:scale-[1.01] text-base disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? "Enviando..." : "Enviar Orçamento pelo WhatsApp"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;