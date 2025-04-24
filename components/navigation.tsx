"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navigation() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [{ name: "Contacto", path: "/contact" }]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#5e1333]">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">Ludopatía</span>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-2">
          {!isMobile && (
            <nav>
              <ul className="flex gap-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center px-4 py-2 rounded-md text-white ${
                        pathname === item.path ? "bg-white/20" : "hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {isMobile && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>

              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-14 left-0 right-0 bg-[#5e1333] border-t border-white/10 z-50"
                >
                  <nav className="container py-4">
                    <ul className="space-y-2">
                      {navItems.map((item) => (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            className={`flex items-center px-4 py-2 rounded-md text-white ${
                              pathname === item.path ? "bg-white/20" : "hover:bg-white/10"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  )
}
