"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

const stats = [
  { number: 4, suffix: "", label: "Settori Serviti" },
  { number: 100, suffix: "%", label: "Inchiostri Ecologici" },
  { number: 50, suffix: "+", label: "Collezioni Realizzate" },
  { number: 1000, suffix: "+", label: "Clienti Soddisfatti" },
]

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 bg-hero text-hero-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    separator="."
                    suffix={stat.suffix}
                  />
                ) : (
                  <>0{stat.suffix}</>
                )}
              </span>
              <motion.div
                className="mt-3 h-px bg-hero-foreground/20 mx-auto"
                initial={{ width: 0 }}
                animate={inView ? { width: 48 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              />
              <p className="mt-3 text-hero-foreground/70 text-xs sm:text-sm uppercase tracking-[0.15em] font-sans">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
