"use client"
import { useState, useEffect, useRef } from "react"
import {
  TrendingUp,
  LineChart,
  PiggyBank,
  BarChart4,
  GraduationCap,
  ArrowRight,
  User,
  Phone,
  Mail,
  FileText,
  X,
  Check,
  Briefcase,
  Calendar,
  DollarSign,
} from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function CommercialAdvisory() {
  const [isVisible, setIsVisible] = useState(false) // Iniciar como false para que la animación sea visible
  const [showForm, setShowForm] = useState(false)
  const [formStatus, setFormStatus] = useState(null) // null, 'sending', 'success'
  const sectionRef = useRef(null)

  useEffect(() => {
    // Asegurarnos de que los elementos estén inicialmente ocultos
    setIsVisible(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento entra en el viewport, hacerlo visible
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Detectar cuando al menos 10% del elemento es visible
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

  const advisoryAreas = [
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Diagnóstico financiero",
      description:
        "Análisis detallado de la situación financiera actual para identificar fortalezas y áreas de mejora.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Planificación financiera",
      description:
        "Desarrollo de estrategias personalizadas para alcanzar objetivos financieros a corto, mediano y largo plazo.",
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Gestión de presupuesto",
      description: "Creación y seguimiento de presupuestos efectivos para optimizar ingresos y controlar gastos.",
    },
    {
      icon: <BarChart4 className="h-8 w-8" />,
      title: "Asesoría en inversiones",
      description:
        "Orientación sobre oportunidades de inversión adaptadas al perfil de riesgo y objetivos del cliente.",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educación financiera",
      description:
        "Capacitación y recursos para mejorar la comprensión y manejo de las finanzas personales o empresariales.",
    },
  ]

  const benefits = [
    "Toma de decisiones financieras más informadas",
    "Optimización de recursos económicos",
    "Reducción de riesgos financieros",
    "Planificación estratégica personalizada",
    "Acompañamiento continuo y seguimiento de resultados",
    "Confidencialidad absoluta en el manejo de información",
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`transition-all duration-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Soluciones Financieras
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">Asesoría Comercial</h2>
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-700 text-center max-w-2xl mx-auto font-semibold">
              Ofrecemos orientación experta y personalizada para ayudar a personas y pequeños empresarios a tomar
              decisiones informadas sobre la gestión de sus recursos económicos.
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div
            className={`transition-all duration-500 delay-200 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Optimizamos sus finanzas</h3>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Nuestro objetivo es optimizar las finanzas de nuestros clientes a través de un análisis integral de su
              situación actual y la planificación estratégica a corto, mediano y largo plazo.
            </p>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Entendemos que cada persona y cada negocio tienen necesidades únicas, por lo que nuestro enfoque está
              basado en la confianza, la confidencialidad y la excelencia profesional, adaptándonos a las necesidades
              específicas de cada cliente.
            </p>

            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg overflow-x-auto">
              <h4 className="font-bold text-lg mb-4 text-blue-800 text-sm sm:text-base">
                Beneficios de nuestra asesoría
              </h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`transition-all duration-500 delay-300 transform ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden shadow-lg mb-8">
              <img
                src="/placeholder.svg?height=300&width=600&text=Asesoría+Comercial"
                alt="Asesoría Comercial"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100">
              <h4 className="font-bold text-lg mb-4 text-center text-sm sm:text-base">¿Cómo podemos ayudarte?</h4>
              <p className="text-gray-700 mb-6 text-center text-sm sm:text-base">
                Agenda una consulta inicial gratuita para evaluar tu situación financiera y discutir cómo podemos
                ayudarte a alcanzar tus objetivos.
              </p>
              <div className="flex justify-center">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
                  onClick={() => setShowForm(true)}
                >
                  Solicitar asesoría
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Areas of work */}
        <div
          className={`transition-all duration-500 delay-400 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-800">Áreas de trabajo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryAreas.map((area, index) => (
              <div
                key={index}
                className={`transition-all duration-500 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <Card className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                      <div className="text-green-600">{area.icon}</div>
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-sm sm:text-xl">{area.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{area.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 transition-all duration-500 delay-800 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="bg-blue-800 rounded-xl p-4 sm:p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Listo para optimizar tus finanzas?</h3>
            <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Nuestros asesores están listos para ayudarte a tomar el control de tu situación financiera y alcanzar tus
              objetivos económicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
                onClick={() => setShowForm(true)}
              >
                Solicitar una consulta
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
              >
                Conocer más servicios
              </Button>
            </div>
          </div>
        </div>

        {/* Formulario de Asesoría Comercial */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Briefcase className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Solicitud de Asesoría Comercial</h3>
                  </div>
                  <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {formStatus === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Check className="h-12 w-12 text-green-500" />
                    </div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">¡Solicitud enviada con éxito!</h4>
                    <p className="text-green-700 mb-4">
                      Hemos recibido tu solicitud de asesoría comercial. Un asesor especializado se pondrá en contacto
                      contigo en las próximas 24 horas para agendar tu consulta.
                    </p>
                    <Button
                      variant="outline"
                      className="border-green-500 text-green-600 hover:bg-green-50 mt-4"
                      onClick={() => setShowForm(false)}
                    >
                      Cerrar
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-gray-600 mb-4">
                      Complete el siguiente formulario y uno de nuestros asesores comerciales se pondrá en contacto
                      contigo para brindarte una asesoría personalizada que te ayude a optimizar tus finanzas.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo</Label>
                        <div className="relative">
                          <User
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <Input id="name" placeholder="Tu nombre" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <div className="relative">
                          <Phone
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <Input id="phone" placeholder="Tu teléfono" className="pl-10" required />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input id="email" type="email" placeholder="tu@email.com" className="pl-10" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="advisory-type">Área de asesoría de interés</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diagnostico">Diagnóstico financiero</SelectItem>
                          <SelectItem value="planificacion">Planificación financiera</SelectItem>
                          <SelectItem value="presupuesto">Gestión de presupuesto</SelectItem>
                          <SelectItem value="inversiones">Asesoría en inversiones</SelectItem>
                          <SelectItem value="educacion">Educación financiera</SelectItem>
                          <SelectItem value="general">Asesoría general</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="client-type">Tipo de cliente</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal">Personal</SelectItem>
                            <SelectItem value="pyme">Pequeña empresa</SelectItem>
                            <SelectItem value="mediana">Mediana empresa</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferred-date">Fecha preferida para consulta</Label>
                        <div className="relative">
                          <Calendar
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <Input id="preferred-date" type="date" className="pl-10" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="financial-situation">Situación financiera actual (opcional)</Label>
                      <div className="relative">
                        <DollarSign
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="estable">Estable, buscando optimización</SelectItem>
                            <SelectItem value="crecimiento">En crecimiento, buscando expandir</SelectItem>
                            <SelectItem value="dificultades">Con algunas dificultades</SelectItem>
                            <SelectItem value="crisis">En situación crítica</SelectItem>
                            <SelectItem value="prefiero-no-decir">Prefiero no especificar</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comments">Describe brevemente tu situación y objetivos</Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                        <Textarea
                          id="comments"
                          placeholder="Cuéntanos sobre tu situación actual y qué esperas lograr con nuestra asesoría"
                          className="pl-10 min-h-[100px]"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                        Cancelar
                      </Button>
                      <Button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700"
                        disabled={formStatus === "sending"}
                      >
                        {formStatus === "sending" ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            Solicitar asesoría <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
