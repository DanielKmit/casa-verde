import type { Metadata } from "next";
import { DM_Serif_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa Verde — Authentic Spanish Cuisine Since 1965",
  description:
    "Experience the warmth of three generations of Spanish cooking in the heart of Seville. Tapas, paella, and the finest wines of Andalucía.",
  openGraph: {
    title: "Casa Verde — Authentic Spanish Cuisine Since 1965",
    description:
      "Experience the warmth of three generations of Spanish cooking in the heart of Seville.",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=630&fit=crop&q=80", width: 1200, height: 630, alt: "Casa Verde Restaurant" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Casa Verde",
  description: "Authentic Spanish cuisine since 1965. Three generations of cooking in the heart of Seville.",
  url: "https://casa-verde.vercel.app",
  telephone: "+34 954 22 33 44",
  email: "hola@casaverde.es",
  servesCuisine: "Spanish",
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Sierpes, 42",
    addressLocality: "Seville",
    postalCode: "41004",
    addressCountry: "ES",
  },
  geo: { "@type": "GeoCoordinates", latitude: 37.3886, longitude: -5.9953 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "13:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "13:00", closes: "00:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "13:00", closes: "22:00" },
  ],
  foundingDate: "1965",
  acceptsReservations: true,
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection", name: "Tapas",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Patatas Bravas", description: "Crispy potatoes with smoky paprika aioli", offers: { "@type": "Offer", price: "7", priceCurrency: "EUR" } },
          { "@type": "MenuItem", name: "Gambas al Ajillo", description: "Sizzling prawns in garlic and olive oil", offers: { "@type": "Offer", price: "12", priceCurrency: "EUR" } },
          { "@type": "MenuItem", name: "Jamón Ibérico", description: "Hand-carved acorn-fed Ibérico ham aged 36 months", offers: { "@type": "Offer", price: "18", priceCurrency: "EUR" } },
        ],
      },
      {
        "@type": "MenuSection", name: "Mains",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Paella Valenciana", description: "Saffron rice with rabbit, chicken, and rosemary", offers: { "@type": "Offer", price: "28", priceCurrency: "EUR" } },
          { "@type": "MenuItem", name: "Rabo de Toro", description: "Slow-braised oxtail in red wine", offers: { "@type": "Offer", price: "24", priceCurrency: "EUR" } },
        ],
      },
      {
        "@type": "MenuSection", name: "Desserts",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Crema Catalana", description: "Classic custard with caramelized sugar", offers: { "@type": "Offer", price: "8", priceCurrency: "EUR" } },
          { "@type": "MenuItem", name: "Churros con Chocolate", description: "Freshly fried churros with dark chocolate", offers: { "@type": "Offer", price: "7", priceCurrency: "EUR" } },
        ],
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${workSans.variable}`}>
      <body className="font-body bg-linen text-neutral-800 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
