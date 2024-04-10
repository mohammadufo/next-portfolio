import { Inter } from 'next/font/google'
import './globals.css'
import TransitionProvider from '@/components/transitionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    title: 'Muhammad UFO',
    template: 'Muhammad UFO',
    absolute: 'Muhammad UFO',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Muhammad UFO`,
    description: 'Muhammad UFO portfolio page',
    images: 'https://avatars.githubusercontent.com/u/90573543?v=4',
  },
  metadataBase: new URL('https://muhammadufo.liara.run'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  icons: {},
  description: 'Muhammad UFO portfolio page',
  keywords:
    'muhammad ufo, muhammadufo, muhammadufo frontend, muhammad zanganeh, محمد زنگنه, محمد زنگنه برنامه نویس, mohammad zanganeh, mohammmad zanganeh nodejs',
  applicationName: 'muhammad ufo',
  classification: 'muhammad ufo',
  openGraph: {
    siteName: 'muhammad ufo',
    description: 'Muhammad UFO portfolio page',
    type: 'website',
    url: '/',
  },
  other: {
    url: 'https://muhammadufo.liara.run',
    owner: 'muhammad ufo',
    summary: 'muhammad ufo portfolio app',
    subject: 'portfolio',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  )
}
