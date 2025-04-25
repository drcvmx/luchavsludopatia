"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, School, User, Calendar } from "lucide-react"

export default function Contact() {
  const contactInfo = {
    name: "Ayuda a Personas con Ludopatía",
    position: "Servicio de Ayuda Profesional",
    organization: "Ayuda a Personas con Ludopatía",
    address: "Versalles 49, Piso 2, Col. Juárez, Alcaldía Cuauhtémoc Ciudad de México, C.P 06600",
    email: "atnjugadores@segob.gob.mx",
    mobile: "900 123 456",
    website: "luchavsludopatia.vercel.app",
    hours: "Lunes a Viernes: 9:00 - 20:00",
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-center mb-8 text-[#994452]">Contacto y Ayuda</h1>
        <p className="text-xl text-center mb-12 text-[#732232]">Recursos para personas con problemas de ludopatía</p>

        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-[#994452] to-[#732232] h-32"></div>
            <div className="px-6 -mt-16 pb-6">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarFallback className="text-2xl bg-[#bf6671]/20 text-[#732232]">
                  {contactInfo.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="mt-4">
                <h2 className="text-2xl font-bold">{contactInfo.name}</h2>
                <p className="text-[#732232]">{contactInfo.organization}</p>
                <Badge className="mt-2 bg-[#994452]">{contactInfo.position}</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-3 text-[#994452]" />
                    <div>
                      <p className="text-sm text-[#732232]">Organización</p>
                      <p className="text-left">{contactInfo.organization}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-[#994452]" />
                    <div>
                      <p className="text-sm text-[#732232]">Horario de Atención</p>
                      <p className="text-left">{contactInfo.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <School className="h-5 w-5 mr-3 text-[#994452]" />
                    <div>
                      <p className="text-sm text-[#732232]">Sitio Web</p>
                      <a
                        href={`https://${contactInfo.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#994452] hover:underline text-left"
                      >
                        {contactInfo.website}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-[#994452]" />
                    <div>
                      <p className="text-sm text-[#732232]">Dirección</p>
                      <p className="text-left">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#994452]" />
                    <div>
                      <p className="text-sm text-[#732232]">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-[#994452] hover:underline text-left">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#994452]" />
                    <div>
                      <p className="text-sm text-[#732232]">Teléfono</p>
                      <a href={`tel:${contactInfo.mobile}`} className="text-[#994452] hover:underline text-left">
                        {contactInfo.mobile}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
