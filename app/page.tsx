"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const [activeTab, setActiveTab] = useState("que-es")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const topics = [
    {
      id: "que-es",
      title: "¿Qué es la Ludopatía?",
      content: (
        <>
          <p className="mb-6 text-lg text-left">
            La ludopatía, o juego patológico, es un trastorno reconocido por la Organización Mundial de la Salud (OMS)
            caracterizado por la incapacidad de resistir el impulso de jugar a pesar de las consecuencias negativas que
            esto conlleva. En México, se estima que aproximadamente 3.9 millones de personas padecen ludopatía, lo que
            subraya la magnitud del problema en el país (Dirección General de Comunicación Social UNAM, 2025; Forbes
            Staff, 2023). Este trastorno genera una dependencia emocional al juego, llevando a una pérdida de control e
            interfiriendo con la vida cotidiana.
          </p>

          <div className="bg-[#bf6671]/20 rounded-lg p-6 relative mb-6 border border-[#bf6671] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
            <p className="mb-4 font-semibold text-left">Características Principales:</p>
            <p className="mb-4 text-left">
              La ludopatía se manifiesta a través de una serie de comportamientos problemáticos, que en el contexto
              mexicano se han documentado en estudios y relatos de personas afectadas:
            </p>

            <ul className="list-none space-y-2">
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Preocupación excesiva por el juego:</strong> Pensamientos constantes sobre el juego y cómo
                obtener dinero para seguir jugando.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Necesidad de aumentar la apuesta:</strong> Se requiere jugar cantidades crecientes de dinero
                para alcanzar el nivel de excitación deseado. Estudios cualitativos en México han revelado cómo las
                apuestas pequeñas dejan de ser suficientes para generar la misma emoción.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Intentos fallidos de control:</strong> Esfuerzos repetidos e infructuosos por controlar, reducir
                o detener el juego.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Irritabilidad al reducir el juego:</strong> Se experimenta inquietud o irritabilidad al intentar
                disminuir o cesar la actividad de juego. Investigaciones en poblaciones mexicanas con adicciones han
                documentado esta abstinencia emocional.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Uso del juego como escape:</strong> Se recurre al juego como una manera de evadir problemas o
                aliviar sentimientos negativos como la angustia, la culpa, la ansiedad o la depresión. En México, la
                alta comorbilidad entre ludopatía y trastornos del estado de ánimo y ansiedad ha sido destacada.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>"Caza" de pérdidas:</strong> Se intenta recuperar el dinero perdido apostando más.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Mentiras:</strong> Se recurre a la deshonestidad para ocultar la extensión de la implicación en
                el juego. En México, el ocultamiento de deudas y la minimización del tiempo y dinero gastado son
                frecuentes.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Riesgo de pérdidas significativas:</strong> Se ponen en peligro o se pierden relaciones
                importantes, el empleo o las oportunidades educativas y profesionales. Estudios en México han
                documentado el impacto negativo en la estabilidad familiar y laboral.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>Dependencia económica:</strong> Se confía en que otros proporcionen dinero para aliviar las
                deudas generadas por el juego. En el contexto mexicano, las familias a menudo intentan ayudar
                económicamente, lo que puede retrasar la búsqueda de ayuda profesional.
              </li>
            </ul>

            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 h-8 w-8 bg-white/80 hover:bg-white"
              onClick={() =>
                copyToClipboard(
                  'Características Principales de la Ludopatía:\n\n- Preocupación excesiva por el juego: Pensamientos constantes sobre el juego y cómo obtener dinero para seguir jugando.\n- Necesidad de aumentar la apuesta: Se requiere jugar cantidades crecientes de dinero para alcanzar el nivel de excitación deseado.\n- Intentos fallidos de control: Esfuerzos repetidos e infructuosos por controlar, reducir o detener el juego.\n- Irritabilidad al reducir el juego: Se experimenta inquietud o irritabilidad al intentar disminuir o cesar la actividad de juego.\n- Uso del juego como escape: Se recurre al juego como una manera de evadir problemas o aliviar sentimientos negativos.\n- "Caza" de pérdidas: Se intenta recuperar el dinero perdido apostando más.\n- Mentiras: Se recurre a la deshonestidad para ocultar la extensión de la implicación en el juego.\n- Riesgo de pérdidas significativas: Se ponen en peligro relaciones importantes, el empleo o las oportunidades educativas y profesionales.\n- Dependencia económica: Se confía en que otros proporcionen dinero para aliviar las deudas generadas por el juego.',
                )
              }
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy text</span>
            </Button>
          </div>

          <div className="bg-[#994452]/10 p-5 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3 text-[#732232] text-left">
              Riesgos en la Familia y Datos en México:
            </h3>
            <p className="text-left">
              La ludopatía tiene un impacto devastador en la dinámica familiar. En México, se ha observado que la
              adicción al juego genera conflictos, discusiones, distanciamiento y una profunda erosión de la confianza
              entre los miembros de la familia (Milenio Digital, 2023; García, 2017). Los problemas financieros
              derivados del juego a menudo llevan a deudas familiares significativas y a un ambiente de estrés
              constante. Además, los familiares pueden desarrollar sentimientos de frustración, impotencia y vergüenza,
              e incluso incurrir en comportamientos de "rescate" que perpetúan el ciclo de la adicción. La desatención
              de responsabilidades familiares y la priorización del juego sobre las necesidades del hogar son
              consecuencias comunes reportadas en el contexto mexicano.
            </p>
          </div>

          <p className="text-left">
            Es crucial buscar ayuda profesional si se identifican signos de ludopatía. En México, instituciones como
            Monte Fénix ofrecen tratamiento especializado (Monte Fénix, s.f.). La detección temprana y la intervención
            adecuada son fundamentales para la recuperación y para mitigar los graves impactos en la vida del individuo
            y su familia.
          </p>
        </>
      ),
    },
    {
      id: "historia",
      title: "Historia y Evolución",
      content: (
        <>
          <p className="mb-6 text-lg text-left">
            El juego ha sido una actividad presente en la historia de México, desde juegos prehispánicos hasta las
            loterías coloniales y los casinos modernos. Sin embargo, la comprensión de sus efectos negativos y su
            potencial adictivo ha evolucionado significativamente, especialmente en las últimas décadas.
          </p>

          <div className="bg-[#bf6671]/20 rounded-lg p-6 relative mb-6 border border-[#bf6671] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
            <p className="mb-4 font-semibold text-left">Evolución histórica de la ludopatía:</p>

            <ul className="list-none space-y-3">
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>1980:</strong> El juego patológico es reconocido oficialmente como trastorno mental en el
                DSM-III.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>1992:</strong> La OMS incluye la ludopatía en su Clasificación Internacional de Enfermedades
                (CIE-10).
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>2013:</strong> En el DSM-5, el juego patológico se reclasifica de "trastorno del control de
                impulsos" a "trastornos relacionados con sustancias y trastornos adictivos".
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                <strong>2018:</strong> La OMS confirma en el CIE-11 la ludopatía como una adicción comportamental.
              </li>
            </ul>

            <p className="mt-4 mb-2 font-semibold text-left">Factores que han contribuido a su aumento en México:</p>
            <ul className="list-none space-y-2">
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                Legalización y expansión de los juegos de azar en diversas formas.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                Creciente accesibilidad a través de plataformas en línea disponibles las 24 horas del día, los 7 días de
                la semana.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                Normalización social del juego en ciertos contextos.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                Publicidad agresiva de casas de apuestas y casinos.
              </li>
              <li className="transition-all duration-300 hover:bg-[#bf6671]/30 hover:translate-x-1 rounded-md p-1 text-left">
                Nuevas modalidades de juego, como las apuestas deportivas en línea, que han ganado popularidad en
                México.
              </li>
            </ul>

            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 h-8 w-8 bg-white/80 hover:bg-white"
              onClick={() =>
                copyToClipboard(
                  'Evolución histórica de la ludopatía:\n\n1980: El juego patológico es reconocido oficialmente como trastorno mental en el DSM-III.\n\n1992: La OMS incluye la ludopatía en su Clasificación Internacional de Enfermedades (CIE-10).\n\n2013: En el DSM-5, el juego patológico se reclasifica de "trastorno del control de impulsos" a "trastornos relacionados con sustancias y trastornos adictivos".\n\n2018: La OMS confirma en el CIE-11 la ludopatía como una adicción comportamental.\n\nFactores que han contribuido a su aumento en México:\n- Legalización y expansión de los juegos de azar en diversas formas.\n- Creciente accesibilidad a través de plataformas en línea disponibles las 24 horas del día, los 7 días de la semana.\n- Normalización social del juego en ciertos contextos.\n- Publicidad agresiva de casas de apuestas y casinos.\n- Nuevas modalidades de juego, como las apuestas deportivas en línea, que han ganado popularidad en México.',
                )
              }
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy text</span>
            </Button>
          </div>

          <p className="mb-6 text-left">
            A lo largo de la historia, el juego ha sido una actividad presente en prácticamente todas las culturas. Sin
            embargo, la comprensión de sus efectos negativos y su potencial adictivo ha evolucionado significativamente,
            especialmente en las últimas décadas. En México, esta evolución ha llevado a un mayor reconocimiento de la
            ludopatía como un problema de salud pública que requiere atención y recursos.
          </p>

          <p className="text-left">
            El cambio más significativo en la conceptualización de la ludopatía fue su reclasificación en el DSM-5 como
            un trastorno adictivo, reconociendo las similitudes neurobiológicas y comportamentales con las adicciones a
            sustancias. Esta nueva clasificación ha permitido mejorar los enfoques terapéuticos y la comprensión social
            del trastorno, impulsando la necesidad de servicios de tratamiento y prevención más accesibles en México
            (Monte Fénix, s.f.).
          </p>
        </>
      ),
    },
  ]

  const currentTopicIndex = topics.findIndex((t) => t.id === activeTab)
  const prevTopic = topics[currentTopicIndex - 1]
  const nextTopic = topics[currentTopicIndex + 1]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#bf6671]/20 rounded-full flex items-center justify-center">
            <span className="text-xl">🎲</span>
          </div>
          <h1 className="text-3xl font-bold">Ludopatía</h1>
        </div>
        <div className="bg-[#bf6671]/10 px-4 py-1 rounded-full text-sm text-[#732232]">Introducción</div>
      </div>

      <Card className="mb-8 border-0 shadow-sm overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="bg-[#bf6671]/20 p-1">
            <TabsList className="bg-transparent w-full flex justify-start h-auto p-0 gap-1">
              {topics.map((topic) => (
                <TabsTrigger
                  key={topic.id}
                  value={topic.id}
                  className={`rounded-t-lg rounded-b-none px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-none ${
                    activeTab === topic.id ? "bg-white" : "bg-[#bf6671]"
                  }`}
                >
                  {topic.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <CardContent className="p-6">
            {topics.map((topic) => (
              <TabsContent
                key={topic.id}
                value={topic.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                {topic.content}
              </TabsContent>
            ))}
          </CardContent>
        </Tabs>
      </Card>

      <div className="flex justify-between mt-8">
        {prevTopic ? (
          <Link
            href={`#${prevTopic.id}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab(prevTopic.id)
            }}
            className="flex items-center text-[#994452] hover:text-[#732232]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Tema anterior</span>
          </Link>
        ) : (
          <div></div>
        )}

        {nextTopic ? (
          <Link
            href={`#${nextTopic.id}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab(nextTopic.id)
            }}
            className="flex items-center text-[#994452] hover:text-[#732232]"
          >
            <span>Siguiente tema</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  )
}
