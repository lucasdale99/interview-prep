import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '../components/Navbar';
import { SessionProvider } from "next-auth/react"
import { ReactNode } from 'react';
import { Session } from 'next-auth';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interview Prep',
  description: 'Creating an interview prep Next.js app',
}

interface IRootLayoutProps {
  session: Session | null | undefined,
  children: ReactNode;
}

export default function RootLayout({session, children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/rocket.svg"></link>
      </head>
      <body className={inter.className + " min-h-screen"}>
        <SessionProvider session={session}>
          <Navbar />
          <div className="mx-4 md:justify-start md:mx-48">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
