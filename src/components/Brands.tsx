const Brands = () => {
  const brands = [
    "Daikin",
    "Fujitsu",
    "LG",
    "Samsung",
    "Midea",
    "Gree",
    "Carrier",
    "Elgin",
    "Springer",
  ];

  return (
    <section className="bg-[#0A141E] border-t border-b border-white/10 py-6">
      <div className="container-max flex flex-wrap items-center gap-6 sm:gap-10">
        <div className="font-mono text-[11px] tracking-[0.18em] text-white/40 uppercase leading-snug shrink-0">
          Marcas que<br />atendemos
        </div>
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-heading font-semibold text-base sm:text-lg text-white/40 tracking-tight">
          {brands.map((brand, i) => (
            <span key={i} className="hover:text-white/70 transition-colors">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
