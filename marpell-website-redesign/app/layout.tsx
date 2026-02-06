import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Mar.Pel SRL - Import Export Pellami | Dal 1990 a Tolentino',
  description: 'Mar.Pel SRL - Leader in Italia nell\'import e export di pellami pregiati. Oltre 30 anni di esperienza nella compravendita di pelli bovine, ovine, caprine e suine. Tolentino, Marche.',
  keywords: 'pellami, pelle, import, export, stock pelli, calzature, Made in Italy, Tolentino, Marche',
}

export const viewport = {
  themeColor: '#8B5E34',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
