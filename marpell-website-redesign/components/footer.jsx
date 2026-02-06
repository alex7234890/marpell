import { MapPin, Phone, Mail } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Prodotti", href: "#prodotti" },
  { label: "Contatti", href: "#contatti" },
]

const serviceLinks = [
  "Import Pellami",
  "Export Pellami",
  "Vendita Stock Pelli",
  "Pellami per Calzature",
  "Semilavorati",
]

export default function Footer() {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight text-hero-foreground">
                Mar.Pel
              </span>
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-hero-foreground/60 mt-1">
                SRL
              </span>
            </div>
            <p className="text-hero-foreground/60 text-sm leading-relaxed mb-6">
              Leader in Italia nell{"'"}import e export di pellami pregiati.
              Oltre 30 anni di esperienza al servizio della qualita Made in Italy.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-hero-foreground/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Tolentino (MC), 62029, Italia
              </div>
              <a href="tel:+390733961533" className="flex items-center gap-2 text-hero-foreground/60 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +39 0733 961533
              </a>
              <a href="mailto:info@marpelsrl.it" className="flex items-center gap-2 text-hero-foreground/60 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@marpelsrl.it
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
                <span className="text-hero-foreground/40 text-xs uppercase tracking-wider">P.IVA</span>
                <p className="text-hero-foreground/60 text-sm mt-1">01234567890</p>
              </div>
              <div>
                <span className="text-hero-foreground/40 text-xs uppercase tracking-wider">Orari</span>
                <p className="text-hero-foreground/60 text-sm mt-1">
                  Lun - Ven: 8:30 - 18:00
                </p>
              </div>
              <div>
                <span className="text-hero-foreground/40 text-xs uppercase tracking-wider">Sede Operativa</span>
                <p className="text-hero-foreground/60 text-sm mt-1">
                  Tolentino, Macerata<br />Marche, Italia
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
            &copy; {new Date().getFullYear()} Mar.Pel SRL. Tutti i diritti riservati.
          </p>
          <p className="text-hero-foreground/30 text-xs">
            Made with passion in Tolentino, Italia
          </p>
        </div>
      </div>
    </footer>
  )
}
