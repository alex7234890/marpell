import "./globals.css";

export const metadata = {
  title: "Mar.Pel SRL - Import Export Pellami | Dal 1990 a Tolentino",
  description:
    "Mar.Pel SRL - Leader in Italia nell'import e export di pellami pregiati. Oltre 30 anni di esperienza nella compravendita di pelli bovine, ovine, caprine e suine. Tolentino, Marche.",
  keywords:
    "pellami, pelle, import, export, stock pelli, calzature, Made in Italy, Tolentino, Marche",
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
