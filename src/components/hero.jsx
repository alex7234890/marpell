"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, MapPin } from "lucide-react"

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/images/hero-leather.jpg"
          alt="Stampa digitale su pelle - Marpell SRL"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-hero/70" />
      </motion.div>

      {/* Decorative Line */}
      <motion.div
        className="absolute top-0 left-1/2 w-px bg-hero-foreground/20 -translate-x-1/2"
        initial={{ height: 0 }}
        animate={{ height: 96 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Tagline */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            className="h-px bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <span className="text-primary font-sans text-xs uppercase tracking-[0.35em] font-medium">
            Castelfranco di Sotto, Toscana
          </span>
          <motion.div
            className="h-px bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-hero-foreground leading-[1.05] tracking-tight text-balance"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Stampa digitale su pelle, eccellenza toscana
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-hero-foreground/75 font-sans text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Ricerca tecnologica, stile italiano e sapere artigiano.
          Dalla pelle crust al prodotto finito, con inchiostri ecologici ad acqua.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a
            href="#concept"
            className="px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            Scopri il Nostro Concept
          </a>
          <a
            href="#contatti"
            className="px-8 py-4 border border-hero-foreground/30 text-hero-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-hero-foreground/10 hover:scale-105 transition-all duration-300"
          >
            Contattaci
          </a>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-2 text-hero-foreground/50 text-xs uppercase tracking-[0.2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <MapPin className="w-3.5 h-3.5" />
          Castelfranco di Sotto (PI) - Toscana, Italia
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <span className="text-hero-foreground/40 text-[10px] uppercase tracking-[0.3em]">Scorri</span>
        <ArrowDown className="w-4 h-4 text-hero-foreground/40 animate-bounce" />
      </motion.div>
    </section>
  )
}
