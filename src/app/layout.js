import "./globals.css";
import Footer from "@/components/ui/Footer";
import Providers from "./providers";
import RollingIcons from "@/components/ui/RollingIcons";
import AnimateEnter from "@/components/ui/AnimateEnter";
import Script from "next/script";

export const metadata = {
  title: { default: "Aarav Mehta" },
  creator: "Aarav Mehta",
  publisher: "Aarav Mehta",
  description:
    "I'm Aarav Mehta, a fullstack student developer from India.",
  keywords: [
    "AaravMehta",
    "Aarav",
    "MehtaAarav",
    "aaravm.me",
  ],
  authors: [{ name: "Aarav Mehta", url: "https://itzaarav.netlify.app/" }],
  openGraph: {
    title: "Aarav Mehta",
    description:
      "I'm Aarav Mehta, a fullstack student developer from India.",
    url: "https://itzaarav.netlify.app/",
    siteName: "Aarav Mehta",
    images: [
      {
        url: "./og.png",
        width: 1200,
        height: 678,
        alt: "",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarav Mehta",
    description:
      "I'm Aarav Mehta, a fullstack student developer from India.",
    siteId: "aaravmehta",
    creator: "aaravmehta",
    creatorId: "aaravmehta",
    images: {
      url: "./og.png",
      alt: "",
    },
  },

  alternates: {
    canonical: "https://itzaarav.netlify.app/",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d3c56799-22aa-4622-b0d5-b686d3adf197"
        />
      </head>
      <link rel="shortcut icon" href="/images/profile.jpg" />
      <body className="bg-white dark:bg-slate-950">
        <Providers>
          <AnimateEnter>
            <>
              <nav className="fixed bottom-4 left-2 z-50 sm:left-4 md:left-6">
                <RollingIcons />
              </nav>
              {children}
              <Footer />
            </>
          </AnimateEnter>
        </Providers>
      </body>
    </html>
  );
}
