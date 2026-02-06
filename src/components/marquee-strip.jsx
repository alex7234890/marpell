export default function MarqueeStrip() {
  const items = [
    "IMPORT PELLAMI",
    "EXPORT PELLAMI",
    "STOCK PELLI",
    "PELLAMI PER CALZATURE",
    "MADE IN ITALY",
    "PELLI BOVINE",
    "PELLI OVINE",
    "PELLI CAPRINE",
    "PELLI SUINE",
    "SEMILAVORATI",
    "DAL 1990",
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
