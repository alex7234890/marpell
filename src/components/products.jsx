"use client"

import { useEffect, useRef, useState } from "react"

const products = [
  {
    name: "Pellami Bovini",
    description: "Pelli bovine di prima scelta, ideali per calzature e pelletteria di alta gamma.",
    image: "/images/product-bovine.jpg",
  },
  {
    name: "Pellami Ovini",
    description: "Pelli ovine morbide e versatili, perfette per abbigliamento e accessori di lusso.",
    image: "/images/product-ovine.jpg",
  },
  {
    name: "Pellami Caprini",
    description: "Pelli caprine pregiate, dalla grana fine e resistenza eccezionale.",
    image: "/images/product-caprine.jpg",
  },
  {
    name: "Pellami Suini",
    description: "Pelli suine lavorate, ottime per foderami e produzioni su larga scala.",
    image: "/images/product-swine.jpg",
  },
]

export default function Products() {
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
    <section id="prodotti" ref={ref} className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-border" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans font-medium">
              I Nostri Prodotti
            </span>
            <div className="h-px w-16 bg-border" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Pellami per ogni esigenza
          </h2>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
            Trattiamo pelli di provenienza ovina, caprina, bovina e suina, selezionate
            dai migliori mercati produttori mondiali.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-sm cursor-pointer transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-hero/0 group-hover:bg-hero/60 transition-all duration-500 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl font-bold text-hero-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {product.name}
                  </h3>
                  <p className="text-hero-foreground/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
              {/* Bottom Label always visible */}
              <div className="absolute bottom-0 left-0 right-0 bg-hero/80 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300 px-5 py-4">
                <h3 className="font-serif text-lg font-bold text-hero-foreground">
                  {product.name}
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
            Richiedi il Catalogo Completo
          </a>
        </div>
      </div>
    </section>
  )
}
