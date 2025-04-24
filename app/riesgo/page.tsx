"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FactoresRiesgo() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#bf6671]/20 rounded-full flex items-center justify-center">
            <span className="text-xl">⚠️</span>
          </div>
          <h1 className="text-3xl font-bold">Factores de Riesgo de la Ludopatía</h1>
        </div>
        <div className="bg-[#bf6671]/10 px-4 py-1 rounded-full text-sm text-[#732232]">Prevención</div>
      </div>

      <p className="mb-6 text-lg text-left">
        Es crucial comprender los diversos factores que pueden aumentar la vulnerabilidad de una persona a desarrollar
        un problema de juego. A continuación, exploramos algunos de estos factores, con énfasis en estudios y datos
        relevantes para el contexto mexicano:
      </p>

      <Card className="mb-6">
        <CardHeader className="bg-[#994452]/10">
          <CardTitle>1. Factores Individuales</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Historial familiar de adicciones:</strong> La predisposición genética y
              el aprendizaje de conductas en el entorno familiar pueden jugar un papel importante. Aunque estudios
              específicos en México sobre la herencia de la ludopatía pueden ser limitados, investigaciones sobre otras
              adicciones sugieren una correlación familiar.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">
                Problemas de salud mental preexistentes (depresión, ansiedad, TDAH):
              </strong>{" "}
              Existe una comorbilidad significativa entre la ludopatía y trastornos del estado de ánimo, ansiedad y el
              Trastorno por Déficit de Atención e Hiperactividad. Personas que luchan con estas condiciones pueden
              recurrir al juego como una forma de escape o regulación emocional.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Impulsividad y búsqueda de emociones intensas:</strong> Individuos con
              alta impulsividad y una necesidad de experimentar emociones fuertes pueden ser más propensos a
              involucrarse en comportamientos de juego riesgosos.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Baja autoestima:</strong> El juego puede ofrecer una sensación temporal
              de logro o valía, lo que puede ser especialmente atractivo para personas con baja autoestima.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">
                Creencias erróneas sobre el juego (ilusión de control, supersticiones):
              </strong>{" "}
              Pensamientos irracionales como creer que se puede influir en el azar o que existen "estrategias" para
              ganar pueden alimentar el comportamiento de juego problemático.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-[#994452]/10">
          <CardTitle>2. Factores Socioeconómicos</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Nivel socioeconómico bajo y desempleo:</strong> La vulnerabilidad
              económica puede llevar a algunas personas a ver el juego como una vía rápida para solucionar sus problemas
              financieros, a pesar de las escasas probabilidades.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Deudas:</strong> Las deudas pueden actuar como un desencadenante o una
              consecuencia del juego problemático, creando un ciclo vicioso.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">
                Fácil acceso al juego (casinos, juegos en línea, apuestas deportivas):
              </strong>{" "}
              La proliferación de establecimientos de juego físicos y la creciente accesibilidad a plataformas en línea
              facilitan la participación en actividades de juego.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Publicidad y normalización del juego en la sociedad:</strong> La
              publicidad constante y la representación del juego como una actividad socialmente aceptable pueden
              minimizar la percepción de sus riesgos.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="bg-[#994452]/10">
          <CardTitle>3. Factores Ambientales</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Presión de grupo:</strong> La influencia de amigos o familiares que
              juegan puede normalizar el comportamiento y alentar la participación.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Exposición temprana al juego:</strong> Haber estado expuesto al juego
              durante la infancia o la adolescencia puede aumentar la probabilidad de desarrollar problemas en la edad
              adulta.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Falta de actividades alternativas saludables:</strong> La ausencia de
              opciones de ocio y entretenimiento saludables puede llevar a las personas a recurrir al juego como una
              forma de llenar el tiempo libre o buscar emoción.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Entornos con alta disponibilidad de juegos de azar:</strong> Vivir en
              áreas con una alta concentración de casinos o establecimientos de juego puede aumentar la exposición y,
              por lo tanto, el riesgo.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 p-4 bg-[#732232]/10 rounded-lg border border-[#732232]/20">
        <p className="text-[#732232] font-semibold text-center">
          Reconocer estos factores de riesgo es el primer paso para prevenir el desarrollo de la ludopatía y para
          identificar a las personas que podrían necesitar apoyo adicional.
        </p>
      </div>
    </motion.div>
  )
}
