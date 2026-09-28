import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://design-4life.cz"),
  title: {
    default: "Design 4 Life | Interiérový design, čalounictví & bytové dekorace",
    template: "%s | Design 4 Life",
  },
  description:
    "Proměňte svůj interiér v harmonický domov. Čalounictví, záclony, závěsy, rolety, tapety a bytové doplňky na míru – Praha, Kladno a okolí.",
  keywords: [
    "interiérový design",
    "čalounictví",
    "záclony",
    "závěsy",
    "rolety",
    "žaluzie",
    "tapety",
    "bytové dekorace",
    "feng šuej",
    "Praha",
    "Kladno",
  ],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://design-4life.cz",
    siteName: "Design 4 Life",
    title: "Design 4 Life | Interiérový design & bytové dekorace",
    description:
      "Čalounictví, záclony, rolety, tapety a dekorace. Tvoříme prostory, ve kterých se cítíte doma.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4E9D0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="bg-linen font-sans text-slate-700 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-warm-md"
        >
          Přejít na obsah
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}