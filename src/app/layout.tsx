import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://upmanworks.co.za/#business",
  name: site.name,
  url: "https://upmanworks.co.za",
  image: "https://upmanworks.co.za/logo.png",
  logo: "https://upmanworks.co.za/logo.png",
  telephone: site.phoneIntl,
  description:
    "Tree felling and artificial grass installation specialists based in Randburg, serving all of Gauteng.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Randburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Gauteng" },
    { "@type": "City", name: "Randburg" },
    { "@type": "City", name: "Johannesburg" },
    { "@type": "City", name: "Sandton" },
    { "@type": "City", name: "Roodepoort" },
    { "@type": "City", name: "Pretoria" },
  ],
  sameAs: [site.facebook],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tree Felling",
          areaServed: "Gauteng",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Artificial Grass Installation",
          areaServed: "Gauteng",
        },
      },
    ],
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upmanworks.co.za"),
  title: {
    default:
      "Upman Works — Tree Felling & Artificial Grass Installation in Gauteng",
    template: "%s | Upman Works",
  },
  description:
    "Upman Works — tree felling and artificial grass installation specialists based in Randburg, serving all of Gauteng. Safe, skilled, tidy work with free quotes.",
  applicationName: "Upman Works",
  authors: [{ name: "Upman Works" }],
  creator: "Upman Works",
  publisher: "Upman Works",
  keywords: [
    "tree felling",
    "tree felling Randburg",
    "tree felling Gauteng",
    "tree removal Johannesburg",
    "tree cutting Gauteng",
    "stump removal",
    "artificial grass installation",
    "artificial grass Randburg",
    "artificial grass Gauteng",
    "synthetic lawn installation",
    "astro turf installation",
    "Upman Works",
    "landscaping Gauteng",
  ],
  category: "Home Services",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://upmanworks.co.za",
    siteName: "Upman Works",
    title:
      "Upman Works — Tree Felling & Artificial Grass Installation in Gauteng",
    description:
      "Tree felling and artificial grass installation specialists in Randburg, serving all of Gauteng. Safe, skilled, tidy — free quotes.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Upman Works — Tree Felling & Artificial Grass Installation in Gauteng",
    description:
      "Tree felling and artificial grass installation specialists in Randburg, serving all of Gauteng.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
        <Analytics />
      </body>
    </html>
  );
}
