'use client'

import { useTheme } from '@/app/theme/ThemeProvider'
import Head from 'next/head'

export default function ExplorePage() {
  const { theme } = useTheme()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Featured Item 1",
        "description": "Explore our first featured content"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Featured Item 2",
        "description": "Explore our second featured content"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Featured Item 3",
        "description": "Explore our third featured content"
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Explore Our Content | Your Site Name</title>
        <meta name="description" content="Discover and explore our featured content and resources" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yoursite.com/explore" />
        <meta property="og:title" content="Explore Our Content | Your Site Name" />
        <meta property="og:description" content="Discover and explore our featured content and resources" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yoursite.com/explore" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="container mx-auto px-4 py-8" style={{
        backgroundColor: theme.background,
        color: theme.text,
        minHeight: 'calc(100vh - 64px)'
      }}>
        <header>
          <h1 className="text-4xl font-bold mb-6">Explore Our Content</h1>
        </header>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <article 
              key={item}
              className="p-6 rounded-lg"
              style={{
                backgroundColor: theme.muted,
                borderColor: theme.border
              }}
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <h2 className="text-2xl font-semibold mb-3" style={{ color: theme.primary }} itemProp="name">
                Featured Item {item}
              </h2>
              <p className="mb-4" itemProp="description">This is some sample content for the explore page.</p>
              <button 
                className="px-4 py-2 rounded-md"
                style={{
                  backgroundColor: theme.accent,
                  color: theme.text
                }}
                aria-label={`Learn more about featured item ${item}`}
              >
                Learn More
              </button>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}