import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Award, Users, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Maria Waldenora Pereira",
    time: "9 meses atrás",
    text: "Desde o primeiro contato, fui prontamente atendida e orientada pela moça do outro lado da linha que providenciou tudo para que o conserto da máquina fosse feito. Parabéns aos técnicos, sempre muito atenciosos.",
    rating: 5,
  },
  {
    name: "João Saraiva",
    time: "10 meses atrás",
    text: "A experiência foi bem satisfatória, desde o primeiro contato com a atendente até a visita e execução do serviço solicitado. Profissionais educados e focados em atender da melhor forma minha solicitação!",
    rating: 5,
  },
  {
    name: "Erineuda Soares",
    time: "10 meses atrás",
    text: "Equipe super competente! São todos muito atenciosos, respeitosos e eficientes. Eu super indico. Nossa família é cliente de muito tempo e estamos muito satisfeitos. Parabéns pela eficiência e competência!",
    rating: 5,
  },
  {
    name: "Marta Constantino",
    time: "7 meses atrás",
    text: "Atendimento rápido e o profissional muito simpático e atento ao trabalho.",
    rating: 5,
  },
  {
    name: "Pamela Batista",
    time: "10 meses atrás",
    text: "O melhor do segmento! Preço justo e serviço bem feito. E com garantia.",
    rating: 5,
  },
];

const brands = [
  "Brastemp",
  "Electrolux",
  "Consul",
  "Philco",
  "Midea",
  "Samsung",
  "Continental",
  "Bosch",
];

const stats = [
  { icon: Users, value: "1000+", label: "Clientes Atendidos" },
  { icon: ThumbsUp, value: "98%", label: "Satisfação" },
  { icon: Award, value: "20+", label: "Anos de Experiência" },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-max">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card-elevated p-4 sm:p-8 text-center">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <stat.icon className="w-5 h-5 sm:w-7 sm:h-7 text-accent" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes <span className="text-accent">Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 1000 clientes satisfeitos em Fortaleza e região metropolitana
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-background p-8 sm:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="text-xl sm:text-2xl text-foreground font-medium mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 bg-background rounded-full shadow-card flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 bg-background rounded-full shadow-card flex items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent w-8" : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Brand Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Marcas que atendemos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-muted-foreground/60 font-semibold text-lg hover:text-primary transition-colors duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
            <Award className="w-6 h-6 text-accent" />
            <span className="font-medium text-foreground">Técnicos com mais de 20 anos de experiência</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
