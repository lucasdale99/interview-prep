import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './globalComponents/Navbar';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interview Prep',
  description: 'Creating an interview prep Next.js app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rocket.svg"></link>
      </head>
      <body className={inter.className + " min-h-screen"}>
        <Navbar/>
        <div className="mx-4 md:justify-start md:mx-48">
          {children}
        </div>
      </body>
    </html>
  )
}
