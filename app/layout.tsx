import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { CursorProvider } from '@/components/AnimatedCursor'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Kwality Walls - Premium Ice Cream Experience",
  description: 'Discover our signature flavors, create your perfect mix, and experience the joy of premium ice cream.',
  keywords: 'ice cream, premium, flavors, mix and match, sustainable, artisanal',
  authors: [{ name: "Kwality Walls" }],
  creator: "Kwality Walls",
  publisher: "Kwality Walls",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kwality Walls - Premium Ice Cream Experience",
    description: 'Discover our signature flavors, create your perfect mix, and experience the joy of premium ice cream.',
    url: 'http://localhost:3000',
    siteName: "Kwality Walls",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Kwality Wall's - Premium Ice Cream",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kwality Walls - Premium Ice Cream Experience",
    description: 'Discover our signature flavors, create your perfect mix, and experience the joy of premium ice cream.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#E51E2A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ErrorBoundary>
          <CursorProvider>
            <SmoothScrollProvider>
              {children}
              <PerformanceMonitor />
            </SmoothScrollProvider>
          </CursorProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
