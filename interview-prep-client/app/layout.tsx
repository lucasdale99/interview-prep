import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interview Prep',
  description: 'Creating an interview prep Next.js app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className + " xs:flex xs:flex-col"}>
        <nav className="flex md:justify-start md:mx-24 my-8 px-3">
            <Link className="flex mx-2 py-2 px-4 rounded-md bg-violet-500 hover:bg-violet-400" href="/">Home</Link>
            <Link className="flex mx-2 py-2 px-4 rounded-md bg-violet-500 hover:bg-violet-400" href='/ddd'>DDD</Link>
            <Link className="flex mx-2 py-2 px-4 rounded-md bg-violet-500 hover:bg-violet-400" href='/redux'>Redux</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
