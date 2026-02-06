"use client"

import { MapPin, Phone, Mail } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Concept", href: "#concept" },
  { label: "Galleria", href: "#galleria" },
  { label: "Contatti", href: "#contatti" },
]

const serviceLinks = [
  "Stampa Digitale su Pelle",
  "Campionature e Prototipi",
  "Cinture in Pelle",
  "Stile e Progettazione",
  "Pelletteria",
]

export default function Footer() {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm overflow-hidden bg-hero-foreground/10 flex items-center justify-center">
                <img
                  src="/foto/logo.png"
                  alt="Marpell SRL Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none"
                    e.target.parentElement.innerHTML = '<span class="font-serif text-lg font-bold text-primary">M</span>'
                  }}
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-hero-foreground">
                Marpell
              </span>
            </div>
            <p className="text-hero-foreground/60 text-sm leading-relaxed mb-6">
              Eccellenza nella stampa digitale su pelle e lavorazione pellami.
              Stile italiano, ricerca tecnologica e sapere artigiano nel cuore della Toscana.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-hero-foreground/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                Via dell{"'"}Acero, 17 - 56022 Castelfranco di Sotto (PI)
              </div>
              <a href="tel:+39057147567" className="flex items-center gap-2 text-hero-foreground/60 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                (+39) 0571.47567
              </a>
              <a href="mailto:info@marpellsrl.it" className="flex items-center gap-2 text-hero-foreground/60 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                info@marpellsrl.it
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-hero-foreground mb-6">
              Navigazione
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-hero-foreground/60 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-hero-foreground mb-6">
              Servizi
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-hero-foreground/60 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-hero-foreground mb-6">
              Informazioni
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-hero-foreground/40 text-xs uppercase tracking-wider">Orari</span>
                <p className="text-hero-foreground/60 text-sm mt-1">
                  Lun - Ven: 8:30 - 18:00
                </p>
              </div>
              <div>
                <span className="text-hero-foreground/40 text-xs uppercase tracking-wider">Sede Operativa</span>
                <p className="text-hero-foreground/60 text-sm mt-1">
                  Castelfranco di Sotto (PI)<br />Toscana, Italia
                </p>
              </div>
              <div>
                <span className="text-hero-foreground/40 text-xs uppercase tracking-wider">Settori</span>
                <p className="text-hero-foreground/60 text-sm mt-1">
                  Pelletteria, Calzatura<br />Arredamento, Abbigliamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-hero-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-hero-foreground/40 text-xs">
            &copy; {new Date().getFullYear()} Marpell SRL. Tutti i diritti riservati.
          </p>
          <p className="text-hero-foreground/30 text-xs">
            Made with passion in Toscana, Italia
          </p>
        </div>
      </div>
    </footer>
  )
}
