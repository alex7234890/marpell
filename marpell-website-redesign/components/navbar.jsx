"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Prodotti", href: "#prodotti" },
  { label: "Contatti", href: "#contatti" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span
            className={`font-serif text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-hero-foreground"
            }`}
          >
            Mar.Pel
          </span>
          <span
            className={`text-xs font-sans uppercase tracking-[0.2em] mt-1 transition-colors duration-500 ${
              scrolled ? "text-muted-foreground" : "text-hero-foreground/70"
            }`}
          >
            SRL
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-foreground" : "text-hero-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:+390733961533"
          className={`hidden lg:flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-sm border transition-all duration-300 ${
            scrolled
              ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              : "border-hero-foreground/40 text-hero-foreground hover:bg-hero-foreground/10"
          }`}
        >
          <Phone className="w-4 h-4" />
          Chiamaci
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-foreground" : "text-hero-foreground"
          }`}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-lg border-t border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-foreground text-base font-medium uppercase tracking-[0.1em] py-2 border-b border-border/50 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+390733961533"
            className="flex items-center justify-center gap-2 text-sm font-medium px-5 py-3 rounded-sm bg-primary text-primary-foreground mt-2"
          >
            <Phone className="w-4 h-4" />
            Chiamaci Ora
          </a>
        </div>
      </div>
    </header>
  )
}
