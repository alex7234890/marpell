export default function MarqueeStrip() {
  const items = [
    "STAMPA DIGITALE SU PELLE",
    "INCHIOSTRI ECOLOGICI AD ACQUA",
    "PELLI CRUST",
    "PELLI LISCE",
    "PELLI SCAMOSCIATE",
    "PELLI RETTILI",
    "CINTURE IN PELLE",
    "PELLETTERIA",
    "CALZATURE",
    "ARREDAMENTO",
    "MADE IN ITALY",
    "STILE ITALIANO",
  ]

  const repeated = [...items, ...items]

  return (
    <section className="bg-primary overflow-hidden py-4">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-primary-foreground font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-medium px-6 sm:px-10">
              {item}
            </span>
            <span className="text-primary-foreground/40 text-lg">&#9670;</span>
          </span>
        ))}
      </div>
    </section>
  )
}
