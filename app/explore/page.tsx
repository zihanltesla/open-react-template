'use client'

import { useTheme } from '@/app/theme/ThemeProvider'

export default function ExplorePage() {
  const { theme } = useTheme()

  return (
    <div className="container mx-auto px-4 py-8" style={{
      backgroundColor: theme.background,
      color: theme.text,
      minHeight: 'calc(100vh - 64px)'
    }}>
      <h1 className="text-4xl font-bold mb-6">Explore Our Content</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div 
            key={item}
            className="p-6 rounded-lg"
            style={{
              backgroundColor: theme.muted,
              borderColor: theme.border
            }}
          >
            <h2 className="text-2xl font-semibold mb-3" style={{ color: theme.primary }}>
              Featured Item {item}
            </h2>
            <p className="mb-4">This is some sample content for the explore page.</p>
            <button 
              className="px-4 py-2 rounded-md"
              style={{
                backgroundColor: theme.accent,
                color: theme.text
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
