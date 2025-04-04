"use client"
import { useState, useEffect, useRef } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, HelpCircle, CheckCircle } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Card, CardContent } from "./ui/card"
import { Label } from "./ui/label"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formStatus, setFormStatus] = useState(null) // null, 'sending', 'success'
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus("sending")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus(null)
        e.target.reset()
      }, 3000)
    }, 1500)
  }

  const faqs = [
    {
      question: "¿Cómo puedo agendar una prueba de manejo?",
      answer:
        "Puedes agendar una prueba de manejo llamando a nuestro número de contacto, completando el formulario en esta página o visitando directamente nuestra sucursal.",
    },
    {
      question: "¿Ofrecen garantía en los vehículos usados?",
      answer:
        "Sí, todos nuestros vehículos usados incluyen una garantía de 3 meses o 5,000 km, lo que ocurra primero. Además, ofrecemos opciones de garantía extendida.",
    },
    {
      question: "¿Cuáles son los requisitos para el financiamiento?",
      answer:
        "Los requisitos básicos incluyen identificación oficial, comprobante de domicilio, comprobante de ingresos y buen historial crediticio. Consulta con nuestros asesores para más detalles.",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Estamos para Ayudarte
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">Contáctanos</h2>
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-700 text-center max-w-2xl mx-auto font-semibold">
              Estamos aquí para responder todas tus preguntas y ayudarte a encontrar el vehículo perfecto para ti
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="rounded-xl overflow-hidden shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Envíanos un mensaje</h3>
                </div>

                {formStatus === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">¡Mensaje enviado con éxito!</h4>
                    <p className="text-green-700">Nos pondremos en contacto contigo a la brevedad.</p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input
                          id="name"
                          placeholder="Tu nombre"
                          required
                          className="border-gray-300 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          className="border-gray-300 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Tu número de teléfono"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto</Label>
                      <Select>
                        <SelectTrigger className="border-gray-300 focus:border-blue-500">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="compra">Información de compra</SelectItem>
                          <SelectItem value="venta">Vender mi vehículo</SelectItem>
                          <SelectItem value="financiamiento">Opciones de financiamiento</SelectItem>
                          <SelectItem value="servicio">Servicio técnico</SelectItem>
                          <SelectItem value="prueba">Agendar prueba de manejo</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="¿En qué podemos ayudarte?"
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      className={`w-full rounded-full flex items-center justify-center gap-2 py-6 ${
                        formStatus === "sending" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      disabled={formStatus === "sending"}
                    >
                      {formStatus === "sending" ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Enviar Mensaje</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div
              className={`transition-all duration-1000 delay-500 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="rounded-xl overflow-hidden shadow-lg border-0 mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Información de Contacto</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-lg">Teléfono</p>
                        <p className="text-gray-600 mb-1">Ventas: +1 (555) 123-4567</p>
                        <p className="text-gray-600">Servicio: +1 (555) 765-4321</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-lg">Email</p>
                        <p className="text-gray-600 mb-1">Ventas: ventas@favereautos.com</p>
                        <p className="text-gray-600">Atención al cliente: info@favereautos.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-lg">Dirección</p>
                        <p className="text-gray-600">
                          Av. Principal #123
                          <br />
                          Ciudad, Estado 12345
                        </p>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block"
                        >
                          Ver en Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-all duration-1000 delay-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="rounded-xl overflow-hidden shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Horario de Atención</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Lunes - Viernes</span>
                      <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Sábado</span>
                      <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                        10:00 AM - 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Domingo</span>
                      <span className="bg-red-50 text-red-800 px-3 py-1 rounded-full text-sm">Cerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          className={`mt-12 transition-all duration-1000 delay-900 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-200 h-80 rounded-xl overflow-hidden shadow-lg">
            {/* Here you would typically embed a Google Map */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                <p>Mapa de ubicación</p>
                <p className="text-sm text-gray-400">Aquí se mostraría el mapa de Google Maps</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-blue-800">Preguntas Frecuentes</h3>
            <p className="text-gray-600 mt-2">Respuestas a las consultas más comunes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="rounded-xl overflow-hidden shadow-md border-0 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3 mt-1">
                      <HelpCircle className="h-4 w-4 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-lg">{faq.question}</h4>
                  </div>
                  <p className="text-gray-600 pl-10">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

