import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "StockSense - Learn stocks. Grow smarter. Grow richer.",
  description:
    "StockSense makes learning the stock market simple, fun, and practical through daily bite-sized modules connected to real market events.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden">{children}</body>
    </html>
  )
}
