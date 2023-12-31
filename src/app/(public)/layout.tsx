import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { twMerge } from '@/utils/tailwind'
import Header from '@/components/sections/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>Homepage | Nirnama</title>
        </head>
        <body className={twMerge(inter.className, "text-black")}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
