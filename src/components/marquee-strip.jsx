"use client"

const itemsRow1 = [
  "STAMPA DIGITALE SU PELLE",
  "INCHIOSTRI ECOLOGICI AD ACQUA",
  "PELLI CRUST",
  "PELLI LISCE",
  "PELLI SCAMOSCIATE",
  "PELLI RETTILI",
]

const itemsRow2 = [
  "CINTURE IN PELLE",
  "PELLETTERIA",
  "CALZATURE",
  "ARREDAMENTO",
  "MADE IN ITALY",
  "STILE ITALIANO",
]

export default function MarqueeStrip() {
  const repeatedRow1 = [...itemsRow1, ...itemsRow1]
  const repeatedRow2 = [...itemsRow2, ...itemsRow2]

  return (
    <section className="bg-primary overflow-hidden py-5 flex flex-col gap-2 group">
      {/* Row 1 - scrolls left */}
      <div className="animate-marquee flex items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
        {repeatedRow1.map((item, i) => (
          <span key={`r1-${i}`} className="flex items-center">
            <span className="text-primary-foreground font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-medium px-6 sm:px-10">
              {item}
            </span>
            <span className="text-primary-foreground/40 text-lg">&#9670;</span>
          </span>
        ))}
      </div>
      {/* Row 2 - scrolls right */}
      <div className="animate-marquee-reverse flex items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
        {repeatedRow2.map((item, i) => (
          <span key={`r2-${i}`} className="flex items-center">
            <span className="text-primary-foreground/80 font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-medium px-6 sm:px-10">
              {item}
            </span>
            <span className="text-primary-foreground/30 text-lg">&#9670;</span>
          </span>
        ))}
      </div>
    </section>
  )
}
