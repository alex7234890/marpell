"use client"

import { useEffect, useRef, useState } from "react"

const galleryItems = [
  {
    title: "Stampa Digitale",
    description: "Stampa su pelle crust con inchiostri ecologici ad acqua.",
    image: "/foto/gallery-1.jpg",
  },
  {
    title: "Pelli Lavorate",
    description: "Pelli lisce, scamosciate e con effetto rettile.",
    image: "/foto/gallery-2.jpg",
  },
  {
    title: "Cinture in Pelle",
    description: "Cinture artigianali in pelle stampata Made in Italy.",
    image: "/foto/gallery-3.jpg",
  },
  {
    title: "Campionature",
    description: "Prototipi e campionature per le grandi maison della moda.",
    image: "/foto/gallery-4.jpg",
  },
  {
    title: "Collezioni",
    description: "Collezioni prestigiose presentate attraverso mood board.",
    image: "/foto/gallery-5.jpg",
  },
  {
    title: "Laboratorio",
    description: "Il nostro laboratorio nel cuore della Toscana.",
    image: "/foto/gallery-6.jpg",
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="galleria" ref={ref} className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-border" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans font-medium">
              Galleria Foto
            </span>
            <div className="h-px w-16 bg-border" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            I nostri lavori
          </h2>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
            Dalla stampa digitale alle cinture artigianali: scopri l{"'"}eccellenza
            della lavorazione della pelle Made in Tuscany.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-sm cursor-pointer transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = "none"
                    e.target.parentElement.classList.add("flex", "items-center", "justify-center")
                    const placeholder = document.createElement("div")
                    placeholder.className = "text-center p-6"
                    placeholder.innerHTML = `<p class="font-serif text-lg text-muted-foreground">${item.title}</p><p class="text-xs text-muted-foreground/60 mt-2">Inserisci foto in /public/foto/</p>`
                    e.target.parentElement.appendChild(placeholder)
                  }}
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-hero/0 group-hover:bg-hero/60 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl font-bold text-hero-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.title}
                  </h3>
                  <p className="text-hero-foreground/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* Bottom Label always visible */}
              <div className="absolute bottom-0 left-0 right-0 bg-hero/80 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300 px-5 py-4">
                <h3 className="font-serif text-lg font-bold text-hero-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contatti"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-primary/90 transition-all duration-300"
          >
            Richiedi Campionature
          </a>
        </div>
      </div>
    </section>
  )
}
