import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Secbar from '../components/Secbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amazon',
  description: 'Amazon Clone using Next.js | Created by P Sidharth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div>
          <Navbar />
          <Secbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
        </body>
    </html>
  )
}
