import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Head from 'next/head';

import Header from "@/components/ui/header";
import { ThemeProvider } from "@/app/theme/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: {
    default: "AI Solution Konsult | Sweden", 
    template: "%s | AI Solution Konsult"
  },
  description: "Leading AI consulting firm in Sweden specializing in enterprise AI solutions",
  keywords: ["AI consulting", "enterprise AI", "Sweden AI solutions", "artificial intelligence"],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AI Solution Konsult | Sweden",
    description: "Leading AI consulting firm in Sweden specializing in enterprise AI solutions",
    url: "https://aisolutionkonsult.com",
    siteName: "AI Solution Konsult",
    images: [
      {
        url: "https://aisolutionkonsult.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Solution Konsult - Enterprise AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solution Konsult | Sweden",
    description: "Leading AI consulting firm in Sweden specializing in enterprise AI solutions",
    images: ["https://aisolutionkonsult.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://aisolutionkonsult.com",
  },
  metadataBase: new URL("https://aisolutionkonsult.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AI Solution Konsult",
    "description": "Leading AI consulting firm in Sweden specializing in enterprise AI solutions",
    "url": "https://aisolutionkonsult.com",
    "logo": "https://aisolutionkonsult.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Sweden"
    }
  };

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body className={`${inter.variable} ${nacelle.variable} font-inter antialiased bg-[var(--background)] text-[var(--text)]`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
              <Header />
              <main>
                {children}
              </main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
