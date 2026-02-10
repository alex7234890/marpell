"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [sending, setSending] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  async function onSubmit(data) {
    setSending(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSending(false)
    toast.success("Messaggio inviato con successo! Vi ricontatteremo al pi\u00f9 presto.", {
      duration: 5000,
      style: {
        background: "hsl(20, 18%, 14%)",
        color: "hsl(30, 25%, 96%)",
        borderRadius: "2px",
      },
    })
    reset()
  }

  const inputClasses = (hasError) =>
    `px-4 py-3 bg-background border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors duration-300 ${
      hasError ? "border-red-400 focus:border-red-500" : "border-border focus:border-primary"
    }`

  return (
    <section id="contatti" ref={ref} className="py-24 lg:py-32 bg-background">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans font-medium">
            Contatti
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Parliamo del vostro progetto
          </h2>
          <p className="mt-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
            Contattateci per campionature, prototipi, mood board o un preventivo personalizzato.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              {
                icon: MapPin,
                title: "Sede",
                content: (
                  <>
                    Via dell{"'"}Acero, 17<br />
                    56022 Castelfranco di Sotto (PI)<br />
                    Toscana, Italia
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Telefono",
                content: (
                  <a href="tel:+39057147567" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    (+39) 0571.47567
                  </a>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <a href="mailto:info@marpellsrl.it" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    info@marpellsrl.it
                  </a>
                ),
              },
              {
                icon: Clock,
                title: "Orari",
                content: (
                  <>
                    Lun - Ven: 8:30 - 18:00<br />
                    Sab - Dom: Chiuso
                  </>
                ),
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-sm shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Google Maps */}
            <motion.div
              className="mt-4 bg-secondary rounded-sm overflow-hidden h-48 lg:h-64"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <iframe
                title="Marpell SRL - Castelfranco di Sotto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.8!2d10.74!3d43.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCastelfranco+di+Sotto!5e0!3m2!1sit!2sit!4v1000000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card border border-border rounded-sm p-8 lg:p-10 flex flex-col gap-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Nome *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Mario Rossi"
                    className={inputClasses(errors.name)}
                    {...register("name", { required: "Il nome \u00e8 obbligatorio" })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs">{errors.name.message}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Azienda
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Nome Azienda"
                    className={inputClasses(false)}
                    {...register("company")}
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
                    placeholder="mario@esempio.it"
                    className={inputClasses(errors.email)}
                    {...register("email", {
                      required: "L'email \u00e8 obbligatoria",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Inserisci un'email valida",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email.message}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Telefono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+39 333 1234567"
                    className={inputClasses(false)}
                    {...register("phone")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="interest" className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Interesse
                </label>
                <select
                  id="interest"
                  className={inputClasses(false)}
                  {...register("interest")}
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="stampa">Stampa Digitale su Pelle</option>
                  <option value="campionature">Campionature e Prototipi</option>
                  <option value="cinture">Cinture in Pelle</option>
                  <option value="design">Stile e Progettazione</option>
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
                  rows={5}
                  placeholder="Descrivi le tue esigenze..."
                  className={`${inputClasses(errors.message)} resize-none`}
                  {...register("message", { required: "Il messaggio \u00e8 obbligatorio" })}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs">{errors.message.message}</span>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-[0.15em] font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 mt-2 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Invio in corso...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Invia Messaggio
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
