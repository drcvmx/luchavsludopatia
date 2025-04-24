"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Estudios() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#bf6671]/20 rounded-full flex items-center justify-center">
            <span className="text-xl">📚</span>
          </div>
          <h1 className="text-3xl font-bold">Estudios Acerca del Tema</h1>
        </div>
        <div className="bg-[#bf6671]/10 px-4 py-1 rounded-full text-sm text-[#732232]">Investigación</div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Investigaciones Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-left">
            Los estudios científicos han contribuido significativamente a la comprensión de la ludopatía como un
            trastorno adictivo, revelando sus mecanismos neurobiológicos y psicológicos.
          </p>

          <div className="bg-[#bf6671]/20 rounded-lg p-6 mb-4 border border-[#bf6671] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
            <p className="font-semibold mb-4 text-left">Estudios destacados sobre ludopatía:</p>

            <p className="mb-2 text-left">
              <strong>1. Potenza et al. (2019):</strong> "Neurobiología de la adicción al juego"
              <br />
              <span className="text-sm">
                Hallazgos: Similitudes en los circuitos cerebrales afectados entre adicciones a sustancias y al juego.
              </span>
            </p>

            <p className="mb-2 text-left">
              <strong>2. Hodgins et al. (2020):</strong> "Eficacia de las intervenciones psicológicas para el juego
              patológico"
              <br />
              <span className="text-sm">
                Hallazgos: La terapia cognitivo-conductual muestra los mejores resultados a largo plazo.
              </span>
            </p>

            <p className="mb-2 text-left">
              <strong>3. Blaszczynski & Nower (2018):</strong> "Modelo de caminos hacia el juego problemático"
              <br />
              <span className="text-sm">
                Hallazgos: Identificación de tres subtipos de jugadores patológicos con diferentes etiologías.
              </span>
            </p>

            <p className="mb-2 text-left">
              <strong>4. Gainsbury et al. (2021):</strong> "Impacto del juego online en las tasas de ludopatía"
              <br />
              <span className="text-sm">
                Hallazgos: El juego online presenta características específicas que pueden aumentar el riesgo de
                adicción.
              </span>
            </p>

            <p className="text-left">
              <strong>5. Chóliz & Saiz-Ruiz (2022):</strong> "Efectividad de las políticas de juego responsable"
              <br />
              <span className="text-sm">
                Hallazgos: Las medidas regulatorias como límites de depósito y autoexclusión muestran eficacia moderada.
              </span>
            </p>
          </div>

          <p className="text-left">
            Estos estudios han sido fundamentales para el desarrollo de estrategias de prevención y tratamiento más
            efectivas, así como para informar políticas públicas relacionadas con la regulación del juego.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Estadísticas Globales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-left">
            Los datos epidemiológicos sobre la prevalencia de la ludopatía varían considerablemente entre diferentes
            países y poblaciones, reflejando diferencias culturales, regulatorias y metodológicas.
          </p>

          <div className="bg-[#bf6671]/20 rounded-lg p-6 mb-4 border border-[#bf6671] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
            <p className="font-semibold mb-4 text-left">Prevalencia global de la ludopatía:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Prevalencia mundial:</strong> Entre 0.1% y 5.8% de la población adulta
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Europa:</strong> 0.5% - 2% de prevalencia media
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Estados Unidos:</strong> 1% - 3% de la población adulta
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Asia:</strong> Tasas más altas en países como Singapur (3.8%) y Hong Kong (4.4%)
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Latinoamérica:</strong> Datos limitados, estimaciones entre 1.5% - 3%
              </li>
            </ul>

            <p className="font-semibold mt-4 mb-2 text-left">Grupos de mayor riesgo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                Jóvenes adultos (18-25 años)
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                Hombres (aunque la brecha de género se está reduciendo)
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                Personas con antecedentes familiares de adicciones
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                Individuos con trastornos de salud mental comórbidos
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left">
                Trabajadores de la industria del juego
              </li>
            </ul>
          </div>

          <p className="text-left">
            Las tendencias actuales muestran un aumento de casos entre mujeres, adultos mayores y adolescentes, así como
            una mayor incidencia en áreas con alta concentración de establecimientos de juego y en regiones donde el
            juego online está ampliamente disponible.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
