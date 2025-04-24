"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RecursosReferencias() {
  const [activeTab, setActiveTab] = useState("estudios")

  // Datos para la sección de estudios
  const estudiosData = {
    investigaciones: [
      {
        autor: "Potenza et al.",
        año: "2019",
        titulo: "Neurobiología de la adicción al juego",
        hallazgos: "Similitudes en los circuitos cerebrales afectados entre adicciones a sustancias y al juego.",
      },
      {
        autor: "Hodgins et al.",
        año: "2020",
        titulo: "Eficacia de las intervenciones psicológicas para el juego patológico",
        hallazgos: "La terapia cognitivo-conductual muestra los mejores resultados a largo plazo.",
      },
      {
        autor: "Blaszczynski & Nower",
        año: "2018",
        titulo: "Modelo de caminos hacia el juego problemático",
        hallazgos: "Identificación de tres subtipos de jugadores patológicos con diferentes etiologías.",
      },
      {
        autor: "Gainsbury et al.",
        año: "2021",
        titulo: "Impacto del juego online en las tasas de ludopatía",
        hallazgos: "El juego online presenta características específicas que pueden aumentar el riesgo de adicción.",
      },
      {
        autor: "Chóliz & Saiz-Ruiz",
        año: "2022",
        titulo: "Efectividad de las políticas de juego responsable",
        hallazgos: "Las medidas regulatorias como límites de depósito y autoexclusión muestran eficacia moderada.",
      },
    ],
    estadisticas: {
      prevalencia: [
        { region: "Mundial", tasa: "Entre 0.1% y 5.8% de la población adulta" },
        { region: "Europa", tasa: "0.5% - 2% de prevalencia media" },
        { region: "Estados Unidos", tasa: "1% - 3% de la población adulta" },
        { region: "Asia", tasa: "Tasas más altas en países como Singapur (3.8%) y Hong Kong (4.4%)" },
        { region: "Latinoamérica", tasa: "Datos limitados, estimaciones entre 1.5% - 3%" },
      ],
      gruposRiesgo: [
        "Jóvenes adultos (18-25 años)",
        "Hombres (aunque la brecha de género se está reduciendo)",
        "Personas con antecedentes familiares de adicciones",
        "Individuos con trastornos de salud mental comórbidos",
        "Trabajadores de la industria del juego",
      ],
    },
  }

  // Datos para la sección de ligas de interés
  const references = [
    {
      title: "Ludopatía afecta a casi 4 millones de mexicanos",
      author: "UNAM Global",
      year: "s.f.",
      url: "https://unamglobal.unam.mx/global_revista/ludopatía-afecta-a-casi-4-millones-de-mexicanos/",
      type: "Artículo",
      description:
        "Artículo que analiza el impacto de la ludopatía en México, afectando a casi 4 millones de personas.",
    },
    {
      title: "JA México",
      author: "Junior Achievement México",
      year: "s.f.",
      url: "https://jamexico.org/",
      type: "Organización",
      description: "Organización que promueve la educación financiera y el emprendimiento entre jóvenes mexicanos.",
    },
    {
      title: "Tratamiento Ludopatía y Adicción al Juego",
      author: "Monte Fénix",
      year: "s.f.",
      url: "https://montefenix.org.mx/tratamiento-ludopatia-y-adiccion-al-juego/",
      type: "Centro de tratamiento",
      description: "Centro especializado en el tratamiento de la ludopatía y otras adicciones en México.",
    },
    {
      title: "Juego patológico en estudiantes universitarios de la Ciudad de México: prevalencia y factores asociados",
      author: "Jiménez-Mora, N. V., Ortiz-Jiménez, E., & Ortiz-León, J. A.",
      year: "2018",
      url: "https://www.scielo.org.mx/scielo.php?pid=S0185-33252018000400157&script=sci_arttext&tlng=es",
      type: "Estudio científico",
      description:
        "Investigación sobre la prevalencia del juego patológico entre estudiantes universitarios en la Ciudad de México.",
    },
    {
      title:
        "La ludopatía afecta la economía y la salud mental; en México, cerca de cuatro millones de personas la padecen",
      author: "Dirección General de Comunicación Social UNAM",
      year: "2025",
      url: "https://www.dgcs.unam.mx/boletin/bdboletin/2025_029.html",
      type: "Comunicado",
      description:
        "Comunicado oficial de la UNAM sobre el impacto de la ludopatía en la economía y salud mental de los mexicanos.",
    },
    {
      title: "Ludopatía, la compulsiva fantasía de ser rey",
      author: "García, E.",
      year: "2017",
      url: "https://oem.com.mx/elsoldemexico/mexico/ludopatia-la-compulsiva-fantasia-de-ser-rey-13112749",
      type: "Artículo periodístico",
      description: "Artículo que explora los aspectos psicológicos de la ludopatía y sus consecuencias.",
    },
    {
      title: "Ludopatía afecta la salud financiera de casi 4 millones de mexicanos",
      author: "Forbes Staff",
      year: "2023",
      url: "https://forbes.com.mx/ludopatia-afecta-la-salud-financiera-de-casi-4-millones-de-mexicanos/",
      type: "Artículo periodístico",
      description: "Análisis del impacto financiero de la ludopatía en la población mexicana.",
    },
    {
      title: "Ludopatía en México: qué es y cómo afecta",
      author: "Milenio Digital",
      year: "2023",
      url: "https://www.milenio.com/politica/comunidad/ludopatia-en-mexico-que-es-y-como-afecta",
      type: "Artículo periodístico",
      description: "Explicación detallada sobre la ludopatía y sus efectos en el contexto mexicano.",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#bf6671]/20 rounded-full flex items-center justify-center">
            <span className="text-xl">📚</span>
          </div>
          <h1 className="text-3xl font-bold">Recursos y Referencias</h1>
        </div>
        <div className="bg-[#bf6671]/10 px-4 py-1 rounded-full text-sm text-[#732232]">Investigación</div>
      </div>

      <p className="mb-6 text-lg text-left">
        Esta sección recopila investigaciones científicas, estadísticas y recursos sobre la ludopatía. Aquí encontrará
        tanto estudios académicos como enlaces a organizaciones y artículos que pueden ser útiles para comprender mejor
        este trastorno y buscar ayuda.
      </p>

      <Card className="mb-8 border-0 shadow-sm overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="bg-[#bf6671]/20 p-1">
            <TabsList className="bg-transparent w-full flex justify-start h-auto p-0 gap-1">
              <TabsTrigger
                value="estudios"
                className={`rounded-t-lg rounded-b-none px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-none ${
                  activeTab === "estudios" ? "bg-white" : "bg-[#bf6671]"
                }`}
              >
                Estudios e Investigaciones
              </TabsTrigger>
              <TabsTrigger
                value="ligas"
                className={`rounded-t-lg rounded-b-none px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-none ${
                  activeTab === "ligas" ? "bg-white" : "bg-[#bf6671]"
                }`}
              >
                Ligas de Interés
              </TabsTrigger>
              <TabsTrigger
                value="referencias"
                className={`rounded-t-lg rounded-b-none px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-none ${
                  activeTab === "referencias" ? "bg-white" : "bg-[#bf6671]"
                }`}
              >
                Referencias APA
              </TabsTrigger>
            </TabsList>
          </div>

          <CardContent className="p-6">
            {/* Contenido de Estudios e Investigaciones */}
            <TabsContent value="estudios" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-[#732232]">Investigaciones Recientes</h2>
                  <p className="mb-4 text-left">
                    Los estudios científicos han contribuido significativamente a la comprensión de la ludopatía como un
                    trastorno adictivo, revelando sus mecanismos neurobiológicos y psicológicos.
                  </p>

                  <div className="bg-[#bf6671]/20 rounded-lg p-6 mb-4 border border-[#bf6671] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
                    <p className="font-semibold mb-4 text-left">Estudios destacados sobre ludopatía:</p>

                    {estudiosData.investigaciones.map((estudio, index) => (
                      <p key={index} className="mb-2 text-left">
                        <strong>
                          {index + 1}. {estudio.autor} ({estudio.año}):
                        </strong>{" "}
                        "{estudio.titulo}"
                        <br />
                        <span className="text-sm">Hallazgos: {estudio.hallazgos}</span>
                      </p>
                    ))}
                  </div>

                  <p className="text-left">
                    Estos estudios han sido fundamentales para el desarrollo de estrategias de prevención y tratamiento
                    más efectivas, así como para informar políticas públicas relacionadas con la regulación del juego.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-[#732232]">Estadísticas Globales</h2>
                  <p className="mb-4 text-left">
                    Los datos epidemiológicos sobre la prevalencia de la ludopatía varían considerablemente entre
                    diferentes países y poblaciones, reflejando diferencias culturales, regulatorias y metodológicas.
                  </p>

                  <div className="bg-[#bf6671]/20 rounded-lg p-6 mb-4 border border-[#bf6671] transition-all duration-300 hover:bg-[#bf6671]/30 hover:shadow-md">
                    <p className="font-semibold mb-4 text-left">Prevalencia global de la ludopatía:</p>

                    <ul className="list-disc pl-5 space-y-2">
                      {estudiosData.estadisticas.prevalencia.map((item, index) => (
                        <li
                          key={index}
                          className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left"
                        >
                          <strong>{item.region}:</strong> {item.tasa}
                        </li>
                      ))}
                    </ul>

                    <p className="font-semibold mt-4 mb-2 text-left">Grupos de mayor riesgo:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {estudiosData.estadisticas.gruposRiesgo.map((grupo, index) => (
                        <li
                          key={index}
                          className="transition-all duration-300 hover:bg-[#bf6671]/10 hover:translate-x-1 rounded-md p-1 text-left"
                        >
                          {grupo}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-left">
                    Las tendencias actuales muestran un aumento de casos entre mujeres, adultos mayores y adolescentes,
                    así como una mayor incidencia en áreas con alta concentración de establecimientos de juego y en
                    regiones donde el juego online está ampliamente disponible.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Contenido de Ligas de Interés */}
            <TabsContent value="ligas" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[#732232]">Recursos y Enlaces Útiles</h2>
                <p className="mb-6 text-lg text-left">
                  A continuación, presentamos una selección de recursos y referencias sobre la ludopatía en México.
                  Estos enlaces pueden ser útiles para quienes buscan información, ayuda o desean profundizar en el
                  tema.
                </p>

                <div className="grid grid-cols-1 gap-4 mb-8">
                  {references.map((ref, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden transition-all duration-300 hover:bg-[#bf6671]/10 hover:shadow-lg"
                    >
                      <div className="border-l-4 border-[#994452]">
                        <CardHeader className="bg-[#bf6671]/10 pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{ref.title}</CardTitle>
                            <span className="text-xs px-2 py-1 bg-[#994452]/20 rounded-full text-[#732232]">
                              {ref.type}
                            </span>
                          </div>
                          <p className="text-sm text-[#732232]">
                            {ref.author} ({ref.year})
                          </p>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="mb-4 text-left">{ref.description}</p>
                          <Link
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#994452] hover:text-[#732232] font-medium"
                          >
                            Visitar recurso <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="p-4 bg-[#732232]/10 rounded-lg border border-[#732232]/20">
                  <p className="text-center text-[#732232] font-semibold">
                    Si usted o alguien que conoce está luchando con problemas relacionados con el juego, no dude en
                    buscar ayuda profesional a través de los recursos mencionados anteriormente.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Contenido de Referencias APA */}
            <TabsContent value="referencias" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[#732232]">Referencias en Formato APA</h2>
                <p className="mb-4 text-left">
                  A continuación se presentan las referencias bibliográficas utilizadas en este sitio, siguiendo el
                  formato APA 7ª edición:
                </p>

                <Card>
                  <CardHeader className="bg-[#994452]/10">
                    <CardTitle>Formato APA de las Referencias</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 list-none">
                      <li className="pl-8 indent-hanging text-left">
                        UNAM Global. (s.f.). Ludopatía afecta a casi 4 millones de mexicanos. Recuperado de{" "}
                        <Link
                          href="https://unamglobal.unam.mx/global_revista/ludopatía-afecta-a-casi-4-millones-de-mexicanos/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#994452] hover:underline break-all"
                        >
                          https://unamglobal.unam.mx/global_revista/ludopatía-afecta-a-casi-4-millones-de-mexicanos/
                        </Link>
                      </li>
                      <li className="pl-8 indent-hanging text-left">
                        Junior Achievement México. (s.f.). JA México. Recuperado de{" "}
                        <Link
                          href="https://jamexico.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#994452] hover:underline"
                        >
                          https://jamexico.org/
                        </Link>
                      </li>
                      <li className="pl-8 indent-hanging text-left">
                        Monte Fénix. (s.f.). Tratamiento Ludopatía y Adicción al Juego. Recuperado de{" "}
                        <Link
                          href="https://montefenix.org.mx/tratamiento-ludopatia-y-adiccion-al-juego/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#994452] hover:underline break-all"
                        >
                          https://montefenix.org.mx/tratamiento-ludopatia-y-adiccion-al-juego/
                        </Link>
                      </li>
                      <li className="pl-8 indent-hanging text-left">
                        Jiménez-Mora, N. V., Ortiz-Jiménez, E., & Ortiz-León, J. A. (2018). Juego patológico en
                        estudiantes universitarios de la Ciudad de México: prevalencia y factores asociados. Salud
                        Mental, 41(4), 157-165.{" "}
                        <Link
                          href="https://www.scielo.org.mx/scielo.php?pid=S0185-33252018000400157&script=sci_arttext&tlng=es"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#994452] hover:underline break-all"
                        >
                          https://www.scielo.org.mx/scielo.php?pid=S0185-33252018000400157&script=sci_arttext&tlng=es
                        </Link>
                      </li>
                      <li className="pl-8 indent-hanging text-left">
                        Dirección General de Comunicación Social UNAM. (2025, 13 de febrero). La ludopatía afecta la
                        economía y la salud mental; en México, cerca de cuatro millones de personas la padecen. UNAM
                        Noticias. Recuperado de{" "}
                        <Link
                          href="https://www.dgcs.unam.mx/boletin/bdboletin/2025_029.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#994452] hover:underline break-all"
                        >
                          https://www.dgcs.unam.mx/boletin/bdboletin/2025_029.html
                        </Link>
                      </li>
                      <li className="pl-8 indent-hanging text-left">
                        García, E. (2017, 13 de noviembre). Ludopatía, la compulsiva fantasía de ser rey. El Sol de
                        México. Recuperado de{" "}
                        <Link
                          href="https://oem.com.mx/elsoldemexico/mexico/ludopatia-la-compulsiva-fantasia-de-ser-rey-13112749"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#994452] hover:underline break-all"
                        >
                          https://oem.com.mx/elsoldemexico/mexico/ludopatia-la-compulsiva-fantasia-de-ser-rey-13112749
                        </Link>
                      </li>
                      <li className="pl-8 indent-hanging text-left">
                        Forbes Staff. (2023, 17 de febrero). Ludopatía afecta la salud financiera de casi 4 millones de
                        mexicanos. Forbes México. Recuperado de{" "}
                        <Link
                          href="https://forbes.com.mx/ludopatia-afecta-la-salud-financiera-de-casi-4-millones-de-mexicanos/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#994452] hover:underline break-all"
                        >
                          https://forbes.com.mx/ludopatia-afecta-la-salud-financiera-de-casi-4-millones-de-mexicanos/
                        </Link>
                      </li>
                      <li className="pl-8 indent-hanging text-left">
                        Milenio Digital. (2023, 17 de febrero). Ludopatía en México: qué es y cómo afecta. Milenio.
                        Recuperado de{" "}
                        <Link
                          href="https://www.milenio.com/politica/comunidad/ludopatia-en-mexico-que-es-y-como-afecta"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#994452] hover:underline break-all"
                        >
                          https://www.milenio.com/politica/comunidad/ludopatia-en-mexico-que-es-y-como-afecta
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </motion.div>
  )
}
