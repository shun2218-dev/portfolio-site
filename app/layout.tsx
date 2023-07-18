import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

const siteName = 'Portfolio Site'
const description = 'Here is a portfolio site created using Next.js.'
const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title: siteName,
  description: 'Portfolio Site Collection',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '',
    creator: '',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <head>
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script data-project-id="EQGJ0NHInxlvlN9tWDd1FXolzpxSIUNbceA57XQK" src="https://snippet.meticulous.ai/v1/meticulous.js" />
        </head>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
