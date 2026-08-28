import { Star, CheckCircle, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rodrigo Almeida",
    location: "Indaiatuba / SP",
    service: "Conserto de Ar Condicionado",
    rating: 5,
    text: "Meu split da sala parou de gelar no auge do calor. O Renato veio no mesmo dia, identificou o vazamento de gás, corrigiu e recarregou. Aparelho gelando como novo! Super honesto e ágil.",
    date: "Avaliação verificada no Google",
  },
  {
    name: "Mariana Souza",
    location: "Salto / SP",
    service: "Instalação Split Inverter",
    rating: 5,
    text: "Fiz a instalação de dois aparelhos LG Dual Inverter. Trabalho impecável, tubulação 100% de cobre, vácuo com equipamento digital e acabamento perfeito. Super recomendo a AR FRI!",
    date: "Avaliação verificada no Google",
  },
  {
    name: "Carlos Eduardo Ferraz",
    location: "Itu / SP",
    service: "Higienização Completa",
    rating: 5,
    text: "Excelente atendimento! Fizeram a higienização com bolsa coletora, não caiu uma gota d'água na minha parede ou no piso. Acabou o cheiro ruim e o ar ficou bem mais forte. Nota 10.",
    date: "Avaliação verificada no Google",
  },
  {
    name: "Patrícia Mendes",
    location: "Indaiatuba / SP",
    service: "Manutenção Preventiva",
    rating: 5,
    text: "Profissionais pontuais, uniformizados e muito educados. Explicaram tudo o que precisava ser feito com clareza e preço justo. Com certeza virou minha assistência de confiança.",
    date: "Avaliação verificada no Google",
  },
];

const SocialProof = () => {
  return (
    <section className="section-padding bg-[#050D18] relative border-t border-white/10">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-white/15 px-4 py-2 rounded-full mb-4 shadow-lg">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white text-xs sm:text-sm font-bold">5.0 / 5.0 no Google</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            O Que Nossos Clientes <span className="text-sky-400">Dizem</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            A satisfação dos nossos clientes em Indaiatuba, Salto e Itu é a nossa maior garantia.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-400/40 hover:bg-slate-900 transition-all duration-300 shadow-lg relative group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <span className="text-slate-400 text-xs">{item.location}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
