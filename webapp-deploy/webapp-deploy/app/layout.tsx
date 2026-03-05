import type { Metadata } from 'next'
import './styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'vegAluna – Kochkurse, Catering & Ernährungsberatung | Liechtenstein',
  description: 'Vegane Kochkurse, Event-Catering und Ernährungsberatung – auf Anfrage buchbar in Liechtenstein und der Region.',
  openGraph: { title: 'vegAluna – happy food, happy life', locale: 'de_LI' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
