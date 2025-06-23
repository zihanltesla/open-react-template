import type { Metadata } from 'next'
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "AI Solution Konsult Sweden | Expert AI Consulting Services",
  description: "Leading AI consulting services in Sweden helping businesses implement cutting-edge AI solutions for workflow automation and digital transformation",
  keywords: ["AI consulting", "Sweden AI solutions", "workflow automation", "AI implementation"],
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "AI Solution Konsult Sweden | Expert AI Consulting Services",
    description: "Leading AI consulting services in Sweden helping businesses implement cutting-edge AI solutions",
    url: "https://yourdomain.com",
    siteName: "AI Solution Konsult Sweden",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solution Konsult Sweden | Expert AI Consulting Services",
    description: "Leading AI consulting services in Sweden helping businesses implement cutting-edge AI solutions",
    images: ["https://yourdomain.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AI Solution Konsult Sweden",
    "description": "Leading AI consulting services in Sweden",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/yourcompany",
      "https://twitter.com/yourcompany"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <PageIllustration />
        <Hero />
        <Workflows />
        {/* <Features />
        <Testimonials />
        <Cta /> */}
      </main>
    </>
  );
}