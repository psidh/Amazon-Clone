import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const amazon_ember = localFont({
  src: './Amazon Ember.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amazon',
  description: 'Amazon Clone using Next.js | Created by P Sidharth',
  applicationName: 'Amazon Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={amazon_ember.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
