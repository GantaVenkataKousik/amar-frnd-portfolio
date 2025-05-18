import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Amarnath | AWS Solutions Architect",
  description: "AWS Certified Solutions Architect with 13+ years of experience in cloud infrastructure and DevOps",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-gradient-to-b from-slate-950 to-slate-900 text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
