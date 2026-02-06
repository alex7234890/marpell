import "./globals.css";

export const metadata = {
  title: "Marpell SRL - Stampa Digitale su Pelle | Castelfranco di Sotto, Toscana",
  description:
    "Marpell SRL - Eccellenza nella stampa digitale su pelle e lavorazione pellami. Stile italiano, ricerca tecnologica e sapere artigiano nel cuore della Toscana.",
  keywords:
    "stampa digitale pelle, pellami stampati, cinture pelle, pelletteria, calzature, Made in Italy, Toscana, Castelfranco di Sotto",
};

export const viewport = {
  themeColor: "#8B5E34",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
