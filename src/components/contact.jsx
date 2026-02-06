"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contatti" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans font-medium">
            Contatti
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Parliamo del vostro progetto
          </h2>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
            Contattateci per ricevere il catalogo prodotti, campionature o un preventivo personalizzato.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 flex flex-col gap-8 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-sm shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Sede</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tolentino (MC)<br />
                  62029 - Marche, Italia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-sm shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Telefono</h4>
                <a href="tel:+390733961533" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +39 0733 961533
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-sm shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:info@marpelsrl.it" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@marpelsrl.it
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-sm shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider mb-1">Orari</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lun - Ven: 8:30 - 18:00<br />
                  Sab - Dom: Chiuso
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-4 bg-secondary rounded-sm overflow-hidden h-48 lg:h-64">
              <iframe
                title="Mar.Pel SRL Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.5!2d13.28!3d43.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTolentino%2C+MC!5e0!3m2!1sit!2sit!4v1000000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-8 lg:p-10 flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Nome *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Mario Rossi"
                    className="px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Azienda
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Nome Azienda"
                    className="px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="mario@esempio.it"
                    className="px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Telefono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+39 333 1234567"
                    className="px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="interest" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Interesse
                </label>
                <select
                  id="interest"
                  className="px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="import">Import Pellami</option>
                  <option value="export">Export Pellami</option>
                  <option value="stock">Vendita Stock Pelli</option>
                  <option value="calzature">Pellami per Calzature</option>
                  <option value="catalogo">Richiesta Catalogo</option>
                  <option value="altro">Altro</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Descrivi le tue esigenze..."
                  className="px-4 py-3 bg-background border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 mt-2"
              >
                {submitted ? (
                  "Messaggio Inviato!"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Invia Messaggio
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
