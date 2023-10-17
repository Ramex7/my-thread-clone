import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '@clerk/themes'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <title>Talks</title>
        <link rel='icon' href='/logo.svg' sizes='any' />
        <body
          className={`${inter.className} bg-dark-1 flex justify-center pt-32`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
