"use client"

import { useEffect, useRef, useState } from "react"

function AnimatedNumber({ target, suffix = "", inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { number: 30, suffix: "+", label: "Anni di Esperienza" },
  { number: 4, suffix: "", label: "Tipologie di Pellami" },
  { number: 500, suffix: "+", label: "Clienti Serviti" },
  { number: 20, suffix: "+", label: "Paesi Raggiunti" },
]

export default function Stats() {
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
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 bg-hero text-hero-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} inView={inView} />
              </span>
              <div className="mt-3 h-px w-12 bg-hero-foreground/20 mx-auto" />
              <p className="mt-3 text-hero-foreground/70 text-xs sm:text-sm uppercase tracking-[0.15em] font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
