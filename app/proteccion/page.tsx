"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function FactoresProteccion() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#bf6671]/20 rounded-full flex items-center justify-center">
            <Shield className="h-5 w-5 text-[#732232]" />
          </div>
          <h1 className="text-3xl font-bold">Factores de Protección contra la Ludopatía</h1>
        </div>
        <div className="bg-[#bf6671]/10 px-4 py-1 rounded-full text-sm text-[#732232]">Prevención</div>
      </div>

      <p className="mb-6 text-lg text-left">
        Identificar y fortalecer los factores de protección es fundamental para la prevención y el tratamiento de la
        ludopatía. Estos factores actúan como barreras o recursos que ayudan a las personas a resistir la influencia de
        los factores de riesgo.
      </p>

      <Card className="mb-6">
        <CardHeader className="bg-[#994452]/10">
          <CardTitle>1. Factores Individuales</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Habilidades de afrontamiento saludables:</strong> La capacidad de
              manejar el estrés, la ansiedad y otras emociones negativas de manera adaptativa (a través de ejercicio,
              técnicas de relajación, hobbies, etc.) puede reducir la necesidad de recurrir al juego como una forma de
              escape o alivio.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Alta autoestima:</strong> Una autoimagen positiva y un sentido de valía
              personal pueden hacer que las personas sean menos susceptibles a la búsqueda de validación a través del
              juego.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Buena capacidad de resolución de problemas:</strong> La habilidad para
              identificar problemas, evaluar opciones y tomar decisiones efectivas puede ayudar a las personas a manejar
              situaciones difíciles sin recurrir al juego como una solución.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Creencias racionales sobre el juego:</strong> Comprender la naturaleza
              aleatoria del juego y evitar las ilusiones de control disminuye la probabilidad de desarrollar patrones de
              juego problemáticos.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Participación en actividades no relacionadas con el juego:</strong>{" "}
              Involucrarse en hobbies, deportes, actividades culturales, voluntariado o pasar tiempo con amigos y
              familiares que no juegan proporciona alternativas saludables para el ocio y reduce la probabilidad de que
              el juego se convierta en la principal fuente de entretenimiento o socialización.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="bg-[#994452]/10">
          <CardTitle>2. Factores Sociales</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Red de apoyo social sólida (familia, amigos):</strong> Contar con
              relaciones significativas y de apoyo puede proporcionar un amortiguador contra el estrés y la soledad,
              reduciendo la vulnerabilidad al juego problemático.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Relaciones saludables:</strong> Las relaciones basadas en la confianza,
              la comunicación abierta y el respeto mutuo pueden proporcionar un entorno de apoyo y aliento que dificulta
              el desarrollo de comportamientos adictivos.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Participación en actividades comunitarias:</strong> Involucrarse en la
              comunidad puede fomentar un sentido de pertenencia y propósito, ofreciendo alternativas al juego y
              fortaleciendo los lazos sociales.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Normas sociales que desalientan el juego problemático:</strong> Una
              cultura que reconoce los riesgos del juego y promueve actitudes responsables hacia él puede influir en el
              comportamiento individual.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="bg-[#994452]/10">
          <CardTitle>3. Factores Económicos</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ul className="space-y-4">
            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Estabilidad económica:</strong> Tener un empleo estable y suficientes
              recursos financieros reduce la necesidad de buscar soluciones económicas rápidas a través del juego y
              disminuye el estrés financiero que puede desencadenar o exacerbar el comportamiento de juego problemático.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Acceso a recursos financieros:</strong> Contar con ahorros, seguros o
              la capacidad de obtener ayuda financiera en momentos de necesidad puede prevenir que las personas recurran
              al juego como una solución a problemas económicos.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong className="text-[#732232]">Oportunidades de empleo:</strong> Tener acceso a oportunidades
              laborales significativas proporciona un sentido de propósito y estabilidad, disminuyendo la probabilidad
              de recurrir al juego como una forma de llenar el tiempo o buscar satisfacción.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 p-6 bg-[#bf6671]/20 rounded-lg border border-[#bf6671] text-center">
        <h3 className="text-xl font-semibold mb-3 text-[#732232]">Fortaleciendo la Resiliencia</h3>
        <p className="text-left">
          El fortalecimiento de estos factores de protección no solo ayuda a prevenir la ludopatía, sino que también
          contribuye al bienestar general y a la calidad de vida. Las estrategias de prevención más efectivas son
          aquellas que combinan el abordaje de los factores de riesgo con el fortalecimiento de los factores de
          protección.
        </p>
      </div>
    </motion.div>
  )
}
