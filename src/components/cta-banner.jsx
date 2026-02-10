"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function CtaBanner() {
  const sectionRef = useRef(null)
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/images/cta-leather-bg.jpg"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-hero/80" />
      </motion.div>

      <div ref={ref}>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-hero-foreground leading-tight text-balance">
            Un{"'"}idea pu&ograve; diventare realt&agrave;
          </h2>
          <p className="mt-6 text-hero-foreground/70 text-base lg:text-lg leading-relaxed max-w-xl mx-auto">
            Richiedeteci campionature, prototipi o mood board personalizzati.
            Metteremo la nostra creativit&agrave; e competenza al vostro servizio.
          </p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contatti"
              className="px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              Richiedi Informazioni
            </a>
            <a
              href="tel:+39057147567"
              className="px-8 py-4 border border-hero-foreground/30 text-hero-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-hero-foreground/10 hover:scale-105 transition-all duration-300"
            >
              +39 0571 47567
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
