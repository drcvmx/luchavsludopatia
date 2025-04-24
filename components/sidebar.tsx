"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { name: "Ludopatía", path: "/" },
    { name: "Factores de Protección", path: "/proteccion" },
    { name: "Factores de Riesgo", path: "/riesgo" },
    { name: "Tipos de Jugadores", path: "/jugadores" },
    { name: "Test de Ludopatía", path: "/test" },
    { name: "Ligas de Interés", path: "/recursos" },
    { name: "Contacto", path: "/contact" },
  ]

  return (
    <div className="bg-[#bf6671]/10 p-4 rounded-lg shadow-sm border border-[#bf6671]/20">
      <h2 className="text-xl font-semibold text-center mb-4 text-[#732232]">Ludopatía</h2>
      <div className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-3 py-2 text-sm rounded-md transition-all duration-300 ${
              pathname === item.path ? "bg-[#5e1333] text-white" : "text-[#732232] hover:bg-[#bf6671]/20"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
