import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mr. Fish Comics',
  description: 'Mr. Fish Lee is on a journey to serve up the best indie comics, comic book media, and an art community for comic book lovers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
