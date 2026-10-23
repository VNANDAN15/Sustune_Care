import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND_INFO } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sustunecare.com"),
  title: "Sustune Care | Institutional Asset Stewardship & Family Care for Global Indians",
  description:
    "Sustune Care provides an institutional shield for non-resident Indians. Protect your multi-generational real estate assets and secure empathetic, proxy family healthcare in Hyderabad & Bengaluru with 100% SLA compliance.",
  keywords: [
    "Sustune Care",
    "NRI Property Management",
    "NRI Elder Care",
    "Aegis Property Stewardship",
    "Sparsh Family Care",
    "Hyderabad NRI Services",
    "Bengaluru Property Management",
    "Elder Care Companions India",
    "FEMA Rental Remittance",
  ],
  authors: [{ name: "Sustune Care Private Limited" }],
  creator: "Sustune Care Private Limited",
  publisher: "Sustune Care Private Limited",
  alternates: {
    canonical: "https://www.sustunecare.com",
  },
  icons: {
    icon: [
      { url: "/brand/favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/sustune_icon_favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/brand/favicon_192x192.png",
  },
  openGraph: {
    title: "Sustune Care | Protected Care · Sustained Dignity",
    description:
      "Bridging the anxiety of distance for Global Indians. Institutional property stewardship and proxy family healthcare in Hyderabad & Bengaluru.",
    url: "https://www.sustunecare.com",
    siteName: "Sustune Care",
    images: [
      {
        url: "/videos/posters/sustune-care-launch-poster.jpg",
        width: 720,
        height: 1280,
        alt: "Sustune Care Assurance — Protected Care. Sustained Dignity.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustune Care | Institutional Asset Stewardship & Family Care",
    description:
      "Bridging the anxiety of distance for Global Indians. Institutional property stewardship and proxy family healthcare in India.",
    images: ["/videos/posters/sustune-care-launch-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0D3B66",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-800">
        {/* Accessible Skip-To-Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-brand-marine focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
