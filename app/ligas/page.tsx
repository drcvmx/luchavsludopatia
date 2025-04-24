"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function LigasInteres() {
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
            <ExternalLink className="h-5 w-5 text-[#732232]" />
          </div>
          <h1 className="text-3xl font-bold">Ligas de Interés de Ludopatía</h1>
        </div>
        <div className="bg-[#bf6671]/10 px-4 py-1 rounded-full text-sm text-[#732232]">Referencias</div>
      </div>

      <p className="mb-6 text-lg text-left">
        A continuación, presentamos una selección de recursos y referencias sobre la ludopatía en México. Estos enlaces
        pueden ser útiles para quienes buscan información, ayuda o desean profundizar en el tema.
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
                  <span className="text-xs px-2 py-1 bg-[#994452]/20 rounded-full text-[#732232]">{ref.type}</span>
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
              Jiménez-Mora, N. V., Ortiz-Jiménez, E., & Ortiz-León, J. A. (2018). Juego patológico en estudiantes
              universitarios de la Ciudad de México: prevalencia y factores asociados. Salud Mental, 41(4), 157-165.{" "}
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
              Dirección General de Comunicación Social UNAM. (2025, 13 de febrero). La ludopatía afecta la economía y la
              salud mental; en México, cerca de cuatro millones de personas la padecen. UNAM Noticias. Recuperado de{" "}
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
              García, E. (2017, 13 de noviembre). Ludopatía, la compulsiva fantasía de ser rey. El Sol de México.
              Recuperado de{" "}
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
              Forbes Staff. (2023, 17 de febrero). Ludopatía afecta la salud financiera de casi 4 millones de mexicanos.
              Forbes México. Recuperado de{" "}
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
              Milenio Digital. (2023, 17 de febrero). Ludopatía en México: qué es y cómo afecta. Milenio. Recuperado de{" "}
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

      <div className="mt-8 p-6 bg-[#732232]/10 rounded-lg border border-[#732232]/20">
        <p className="text-center text-[#732232] font-semibold">
          Si usted o alguien que conoce está luchando con problemas relacionados con el juego, no dude en buscar ayuda
          profesional a través de los recursos mencionados anteriormente.
        </p>
      </div>
    </motion.div>
  )
}
