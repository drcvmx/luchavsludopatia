import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Sidebar from "@/components/sidebar"
import Footer from "@/components/footer"

// Configurar la fuente Open Sans
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Ludopatía | Información y Recursos",
  description: "Portal informativo sobre ludopatía, factores de riesgo, prevención y tratamiento",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={openSans.className}>
        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <div className="container mx-auto py-8 px-4 flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1 relative">
                <div className="sticky top-20">
                  <Sidebar />
                </div>
              </div>
              <div className="md:col-span-3">{children}</div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
