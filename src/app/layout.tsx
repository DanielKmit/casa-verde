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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${workSans.variable}`}>
      <body className="font-body bg-linen text-neutral-800 antialiased">
        {children}
      </body>
    </html>
  );
}
