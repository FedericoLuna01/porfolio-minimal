import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar/main-nav'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Federico Luna',
  description: 'Federico Luna - Fullstack Developer.',
  icons: '/favicon.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} grid grid-rows-[auto,1fr,auto] min-h-screen px-4 md:px-0`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
