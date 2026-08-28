const brands = [
  "Daikin",
  "Fujitsu",
  "LG Inverter",
  "Samsung WindFree",
  "Midea",
  "Gree",
  "Carrier",
  "Elgin",
  "Springer",
  "Electrolux",
  "Consul",
  "Hitachi",
];

const Brands = () => {
  return (
    <section className="py-10 bg-[#050D18] border-y border-white/10">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Especialistas em Todas as Principais Marcas (Split, Inverter, Hi-Wall, Cassete e Piso Teto)
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {brands.map((brand) => (
            <span
              key={brand}
              className="bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl hover:bg-white/10 hover:border-sky-400/40 hover:text-sky-300 transition-all duration-200"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
