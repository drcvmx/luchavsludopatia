"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function TiposJugadores() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#bf6671]/20 rounded-full flex items-center justify-center">
            <Users className="h-5 w-5 text-[#732232]" />
          </div>
          <h1 className="text-3xl font-bold">Tipos de Jugadores: Una Mirada en el Contexto Mexicano</h1>
        </div>
        <div className="bg-[#bf6671]/10 px-4 py-1 rounded-full text-sm text-[#732232]">Clasificación</div>
      </div>

      <p className="mb-6 text-lg text-left">
        Las siguientes definiciones buscan ofrecer una comprensión de los diferentes patrones de comportamiento en
        relación con el juego de azar. Es importante recordar que estas categorías no siempre son estáticas y una
        persona puede transitar entre ellas. Si usted o alguien que conoce identifica patrones problemáticos, buscar
        apoyo profesional es fundamental.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="h-full transition-all duration-300 hover:bg-[#bf6671]/10 hover:shadow-lg">
          <CardHeader className="bg-[#994452]/10">
            <CardTitle className="flex items-center">
              <span className="bg-[#bf6671]/20 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-[#732232]">
                1
              </span>
              El Jugador Social
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-left">
              Este tipo de jugador participa en el juego por diversión y dentro de límites económicos seguros. En
              México, esta podría ser la persona que participa en sorteos ocasionales, juega a la lotería con amigos
              para celebrar, o realiza pequeñas apuestas en eventos deportivos como parte de la convivencia social.
            </p>
            <p className="mt-4 text-left">
              No existen datos precisos sobre el porcentaje de la población mexicana que se considera exclusivamente
              jugadora social, pero es probable que represente la mayoría de quienes participan en juegos de azar.
            </p>
            <div className="mt-4 p-3 bg-[#bf6671]/10 rounded-md">
              <p className="font-semibold text-[#732232] text-left">Punto clave:</p>
              <p className="text-left">
                El juego social, realizado de forma responsable, no suele generar consecuencias negativas.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full transition-all duration-300 hover:bg-[#bf6671]/10 hover:shadow-lg">
          <CardHeader className="bg-[#994452]/10">
            <CardTitle className="flex items-center">
              <span className="bg-[#bf6671]/20 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-[#732232]">
                2
              </span>
              El Jugador Profesional
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-left">
              Si bien existen personas que intentan ganarse la vida a través del juego, en México, la figura del jugador
              profesional es probablemente menos común y se asocia principalmente a ciertos nichos como el póker o
              algunos deportes.
            </p>
            <p className="mt-4 text-left">
              Es crucial diferenciar esta categoría del jugador patológico que también busca ganar dinero, pero de
              manera compulsiva y sin estrategias racionales.
            </p>
            <div className="mt-4 p-3 bg-[#bf6671]/10 rounded-md">
              <p className="font-semibold text-[#732232] text-left">Punto clave:</p>
              <p className="text-left">
                No se dispone de datos específicos sobre el número de jugadores profesionales en México, pero es
                importante señalar que requiere habilidades especializadas y una gestión emocional considerable.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="h-full transition-all duration-300 hover:bg-[#bf6671]/10 hover:shadow-lg">
          <CardHeader className="bg-[#994452]/10">
            <CardTitle className="flex items-center">
              <span className="bg-[#bf6671]/20 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-[#732232]">
                3
              </span>
              El Jugador Problema
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-left">
              Este es un punto crucial donde el juego comienza a tener consecuencias negativas. En México, estudios han
              revelado que un porcentaje significativo de personas que participan en juegos de azar experimentan
              problemas relacionados con el juego, como gastar más de lo previsto, pedir dinero prestado para jugar o
              sentir culpa después de jugar.
            </p>
            <p className="mt-4 text-left">
              Por ejemplo, encuestas nacionales de adicciones podrían ofrecer datos sobre la prevalencia de indicadores
              de juego problemático en la población mexicana.
            </p>
            <div className="mt-4 p-3 bg-[#bf6671]/10 rounded-md">
              <p className="font-semibold text-[#732232] text-left">Punto clave:</p>
              <p className="text-left">
                El jugador problema aún puede detener su progresión hacia la patología con la intervención adecuada.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full transition-all duration-300 hover:bg-[#bf6671]/10 hover:shadow-lg">
          <CardHeader className="bg-[#994452]/10">
            <CardTitle className="flex items-center">
              <span className="bg-[#bf6671]/20 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-[#732232]">
                4
              </span>
              El Jugador Patológico (Ludópata)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-left">
              La ludopatía es reconocida como un trastorno adictivo. Investigaciones en México han buscado determinar la
              prevalencia de la ludopatía, encontrando porcentajes que, aunque pueden variar según la metodología y la
              población estudiada, señalan la existencia de un número considerable de personas afectadas.
            </p>
            <p className="mt-4 text-left">
              Estos estudios a menudo utilizan instrumentos de detección estandarizados para identificar los criterios
              diagnósticos de la ludopatía, como la pérdida de control, la necesidad de apostar cantidades crecientes,
              la irritabilidad al intentar dejar de jugar, y las consecuencias negativas en diversas áreas de la vida.
            </p>
            <div className="mt-4 p-3 bg-[#bf6671]/10 rounded-md">
              <p className="font-semibold text-[#732232] text-left">Punto clave:</p>
              <p className="text-left">
                En México, existen grupos de apoyo y centros de tratamiento especializados en la ludopatía.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-[#732232]/10 rounded-lg border border-[#732232]/20">
        <p className="text-center text-[#732232] font-semibold">
          Es importante recordar que estas categorías no son estáticas y una persona puede moverse entre ellas. La
          detección temprana y la intervención adecuada son fundamentales para prevenir la progresión hacia formas más
          graves de juego problemático.
        </p>
      </div>
    </motion.div>
  )
}
