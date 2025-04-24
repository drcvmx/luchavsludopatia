"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertCircle, HelpCircle } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function TestLudopatia() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    "¿Alguna vez en su vida ha apostado o jugado cantidades excesivas de dinero?",
    "¿Le preocupa su conducta de apuesta o de juego?",
    "¿Siente una necesidad urgente o impulsiva de apostar o jugar?",
    "¿Ha tenido que aumentar la cantidad de dinero apostado o el tiempo dedicado al juego para sentir la misma emoción que antes?",
    "¿Ha experimentado problemas en su vida personal, familiar, laboral o económica debido a su forma de jugar?",
    "¿Ha intentado reducir o dejar de apostar o jugar sin éxito?",
  ]

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setAnswers({
      ...answers,
      [questionIndex]: value,
    })
  }

  const handleSubmit = () => {
    setShowResults(true)
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  const resetTest = () => {
    setAnswers({})
    setShowResults(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const countYesAnswers = () => {
    return Object.values(answers).filter((answer) => answer === "si").length
  }

  const getResultMessage = () => {
    const yesCount = countYesAnswers()

    if (yesCount === 0) {
      return {
        icon: <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />,
        title: "Sin indicadores de riesgo",
        message:
          "Sus respuestas no indican comportamientos de riesgo relacionados con el juego. Recuerde que el juego debe ser siempre una actividad recreativa y controlada.",
        color: "bg-green-50 border-green-200",
      }
    } else if (yesCount <= 2) {
      return {
        icon: <HelpCircle className="h-12 w-12 text-amber-500 mb-4" />,
        title: "Riesgo bajo a moderado",
        message:
          "Sus respuestas indican algunos comportamientos que podrían representar un riesgo bajo a moderado. Le recomendamos estar atento a su relación con el juego y establecer límites claros.",
        color: "bg-amber-50 border-amber-200",
      }
    } else {
      return {
        icon: <AlertCircle className="h-12 w-12 text-[#732232] mb-4" />,
        title: "Riesgo significativo",
        message:
          "Sus respuestas sugieren comportamientos de riesgo significativo relacionados con el juego. Le recomendamos buscar orientación profesional para evaluar su situación con mayor profundidad.",
        color: "bg-[#bf6671]/20 border-[#732232]",
      }
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#bf6671]/20 rounded-full flex items-center justify-center">
            <span className="text-xl">📋</span>
          </div>
          <h1 className="text-3xl font-bold">Test de Ludopatía</h1>
        </div>
        <div className="bg-[#bf6671]/10 px-4 py-1 rounded-full text-sm text-[#732232]">Autoevaluación</div>
      </div>

      <Card className="mb-8">
        <CardHeader className="bg-[#994452]/10">
          <CardTitle>Síntomas de la Ludopatía</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4 text-left">
            Los principales síntomas que pueden indicar un problema de ludopatía son los siguientes. Si usted identifica
            varios de estos en su comportamiento o en el de alguien que conoce, es importante buscar información y apoyo
            profesional.
          </p>

          <ul className="space-y-4 mt-6">
            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong>Necesidad de jugar cantidades cada vez más grandes de dinero</strong> para lograr el grado de
              excitación deseado. Este es un síntoma de tolerancia, similar a lo que ocurre con otras adicciones.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong>Inquietud o irritabilidad cuando se intenta interrumpir o detener el juego.</strong> Esta
              manifestación de abstinencia emocional puede ser muy intensa.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong>Fracaso repetido de los esfuerzos para controlar, interrumpir o detener el juego.</strong>{" "}
              Preocupación por el juego cuando no se lleva a cabo (por ejemplo, planificar cómo jugar de nuevo o pensar
              en cómo conseguir dinero para hacerlo).
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong>Sentimientos de angustia, culpabilidad, ansiedad o depresión,</strong> lo que incita a desear
              jugar de nuevo. El juego se utiliza como una forma de afrontamiento maladaptativo para estas emociones
              negativas, creando un ciclo vicioso.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong>Mentir para ocultar el grado de su implicación en el juego.</strong> El secreto y la negación son
              mecanismos de defensa comunes en las adicciones.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong>
                Se ponen en riesgo o se pierden relaciones interpersonales significativas, trabajo y oportunidades
              </strong>{" "}
              educativas o profesionales por el juego.
            </li>

            <li className="bg-[#bf6671]/10 p-4 rounded-lg border-l-4 border-[#994452] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
              <strong>Confiar en que los demás le proporcionarán dinero</strong> que alivie la desesperada situación
              financiera causada por el juego.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader className="bg-[#994452]/10">
          <CardTitle>Consecuencias Sociales y Económicas de la Ludopatía en México</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-4 text-left">
            La ludopatía tiene repercusiones importantes en la vida de quienes la padecen y en su entorno. En México, se
            ha observado que las personas con problemas de juego a menudo enfrentan:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Endeudamiento significativo:</strong> La acumulación de deudas por pérdidas en el juego puede
              llevar a graves problemas financieros, afectando la estabilidad económica personal y familiar.
            </li>
            <li>
              <strong>Conflictos y rupturas familiares:</strong> La tensión generada por el juego puede deteriorar las
              relaciones familiares, generando discusiones, desconfianza y, en casos extremos, la separación.
            </li>
            <li>
              <strong>Pérdida de empleo y oportunidades laborales:</strong> El deterioro del rendimiento laboral y la
              falta de concentración pueden resultar en la pérdida del empleo, afectando la capacidad de la persona para
              sostenerse económicamente.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader className="bg-[#994452]/10">
          <CardTitle>Cuestionario de Autoevaluación</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="mb-6 text-left">
            Las siguientes preguntas pueden ayudarle a evaluar si su manera de jugar podría ser problemática. Responda
            con honestidad.
          </p>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <div
                key={index}
                className="p-4 bg-[#bf6671]/10 rounded-lg transition-all duration-300 hover:bg-[#bf6671]/20 hover:shadow-md"
              >
                <p className="mb-3 font-medium">{question}</p>
                <RadioGroup
                  value={answers[index] || ""}
                  onValueChange={(value) => handleAnswerChange(index, value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="si" id={`q${index}-yes`} />
                    <Label htmlFor={`q${index}-yes`}>Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id={`q${index}-no`} />
                    <Label htmlFor={`q${index}-no`}>No</Label>
                  </div>
                </RadioGroup>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pt-4">
          <Button
            onClick={handleSubmit}
            className="bg-[#994452] hover:bg-[#732232]"
            disabled={Object.keys(answers).length < questions.length}
          >
            Ver Resultados
          </Button>
        </CardFooter>
      </Card>

      {showResults && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className={`mb-8 border ${getResultMessage().color}`}>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              {getResultMessage().icon}
              <h3 className="text-xl font-bold mb-2">{getResultMessage().title}</h3>
              <p className="mb-6 text-left">{getResultMessage().message}</p>

              <div className="bg-white p-4 rounded-lg w-full max-w-md border border-gray-200">
                <p className="font-semibold mb-2">Recomendaciones adicionales:</p>
                <ul className="text-left list-disc pl-5 space-y-1">
                  <li>Si ha respondido "Sí" a una o más preguntas, considere buscar orientación profesional.</li>
                  <li>Recuerde que el reconocimiento del problema es el primer paso hacia la recuperación.</li>
                  <li>En la sección de "Ligas de Interés", encontrará recursos que pueden ayudarle.</li>
                </ul>
              </div>

              <Button onClick={resetTest} variant="outline" className="mt-6">
                Reiniciar Cuestionario
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <div className="mt-8 p-6 bg-[#732232]/10 rounded-lg border border-[#732232]/20">
        <p className="text-center text-[#732232] font-semibold">
          Este cuestionario es solo una herramienta de autoevaluación y no sustituye el diagnóstico profesional. Si
          tiene preocupaciones sobre su relación con el juego, le recomendamos buscar ayuda especializada.
        </p>
      </div>
    </motion.div>
  )
}
