"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Search } from "lucide-react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const categories = [
  { key: "tutti", label: "Tutti" },
  { key: "stampa", label: "Stampa Digitale" },
  { key: "pelli", label: "Pelli Lavorate" },
  { key: "cinture", label: "Cinture" },
  { key: "altro", label: "Altro" },
]

const galleryItems = [
  {
    title: "Stampa Digitale",
    description: "Stampa su pelle crust con inchiostri ecologici ad acqua.",
    image: "/foto/gallery-1.jpg",
    category: "stampa",
  },
  {
    title: "Pelli Lavorate",
    description: "Pelli lisce, scamosciate e con effetto rettile.",
    image: "/foto/gallery-2.jpg",
    category: "pelli",
  },
  {
    title: "Cinture in Pelle",
    description: "Cinture artigianali in pelle stampata Made in Italy.",
    image: "/foto/gallery-3.jpg",
    category: "cinture",
  },
  {
    title: "Campionature",
    description: "Prototipi e campionature per le grandi maison della moda.",
    image: "/foto/gallery-4.jpg",
    category: "altro",
  },
  {
    title: "Collezioni",
    description: "Collezioni prestigiose presentate attraverso mood board.",
    image: "/foto/gallery-5.jpg",
    category: "stampa",
  },
  {
    title: "Laboratorio",
    description: "Il nostro laboratorio nel cuore della Toscana.",
    image: "/foto/gallery-6.jpg",
    category: "altro",
  },
]

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeFilter, setActiveFilter] = useState("tutti")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredItems =
    activeFilter === "tutti"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  const lightboxSlides = filteredItems.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
  }))

  function openLightbox(index) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="galleria" ref={ref} className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
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
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeFilter === cat.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                onClick={() => openLightbox(i)}
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
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-hero/0 group-hover:bg-hero/70 transition-all duration-500 flex flex-col items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 text-center">
                    <Search className="w-8 h-8 text-hero-foreground mx-auto mb-3" />
                    <h3 className="font-serif text-xl font-bold text-hero-foreground">
                      {item.title}
                    </h3>
                    <p className="text-hero-foreground/80 text-sm mt-2 max-w-[200px] leading-relaxed">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#contatti"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            Richiedi Campionature
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </section>
  )
}
