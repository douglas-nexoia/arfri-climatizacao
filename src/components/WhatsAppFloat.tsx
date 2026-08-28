import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  whatsappMessage?: string;
}

const DEFAULT_MESSAGE = "Olá! Vim pelo site da AR FRI e gostaria de um atendimento.";

const WhatsAppFloat = ({ whatsappMessage = DEFAULT_MESSAGE }: WhatsAppFloatProps) => {
  const whatsappUrl = `https://wa.me/5519997871301?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] flex items-center justify-center text-white shadow-xl shadow-black/30 hover:scale-110 transition-transform duration-200"
      aria-label="Falar no WhatsApp com a AR FRI"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
    </a>
  );
};

export default WhatsAppFloat;
