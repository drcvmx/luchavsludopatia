"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-6 border-t border-[#bf6671]/20 bg-[#5e1333] text-white">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} - El juego compulsivo es una adicción. Si necesitas ayuda, no estás solo/a.</p>
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-white hover:bg-white/10"
        >
          <ArrowUp className="h-4 w-4" />
          Volver arriba
        </Button>
      </div>
    </footer>
  )
}
