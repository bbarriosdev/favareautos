"use client"
import { useState, useEffect, useRef } from "react"
import {
  Car,
  CreditCard,
  Wrench,
  Check,
  ArrowRight,
  Award,
  Clock,
  Shield,
  Star,
  Users,
  TrendingUp,
  ThumbsUp,
  Trophy,
} from "lucide-react"
import { Card, CardContent } from "./ui/card"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const sectionRef = useRef(null)
  const aboutRef = useRef(null)

  useEffect(() => {
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      },
    )

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      },
    )

    if (sectionRef.current) {
      servicesObserver.observe(sectionRef.current)
    }

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current)
    }

    return () => {
      if (sectionRef.current) {
        servicesObserver.unobserve(sectionRef.current)
      }
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current)
      }
    }
  }, [])

  const services = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Compra y Venta",
      description:
        "Adquiere el auto de tus sueños o vende el tuyo con las mejores condiciones del mercado. Nuestro equipo de asesores te guiará en todo el proceso.",
      features: [
        "Amplio inventario de vehículos nacionales e importados",
        "Tasación gratuita y justa de tu auto actual",
        "Trámites de transferencia y documentación incluidos",
        "Garantía de satisfacción con devolución asegurada",
      ],
      highlight: "Más de 500 vehículos disponibles",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverIconBg: "group-hover:bg-blue-200",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Financiamiento",
      description:
        "Opciones de financiamiento flexibles adaptadas a tus necesidades y posibilidades. Trabajamos con múltiples entidades financieras para ofrecerte la mejor tasa.",
      features: [
        "Tasas preferenciales desde 0.79% mensual",
        "Aprobación rápida en menos de 24 horas",
        "Sin entrada en modelos seleccionados",
        "Plazos de hasta 72 meses con cuotas accesibles",
      ],
      highlight: "Financiamos hasta el 100% del valor",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      hoverIconBg: "group-hover:bg-yellow-200",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Servicio Técnico",
      description:
        "Mantenimiento y reparación con técnicos especializados y repuestos originales. Contamos con la última tecnología en diagnóstico automotriz.",
      features: [
        "Diagnóstico computarizado con equipos de última generación",
        "Mantenimiento preventivo con planes personalizados",
        "Reparaciones garantizadas por escrito",
        "Servicio de grúa incluido las 24 horas",
      ],
      highlight: "Técnicos certificados por las marcas",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hoverIconBg: "group-hover:bg-green-200",
    },
  ]

  const benefits = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Garantía Extendida",
      description: "Todos nuestros vehículos incluyen garantía extendida opcional",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Calidad Certificada",
      description: "Rigurosa inspección de 150 puntos en todos nuestros vehículos",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Atención Personalizada",
      description: "Asesores dedicados para acompañarte en todo el proceso",
    },
  ]

  const trustIcons = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Seguridad Garantizada",
      description: "Todos nuestros procesos cumplen con los más altos estándares de seguridad",
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "Excelencia en Servicio",
      description: "Reconocidos por nuestra atención al cliente y servicio post-venta",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Equipo Profesional",
      description: "Personal capacitado y con amplia experiencia en el sector automotriz",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Crecimiento Constante",
      description: "Mejoramos continuamente para ofrecerte el mejor servicio",
    },
  ]

  return (
    <>
      {/* Nuestros Servicios Section */}
      <section ref={sectionRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-col items-center mb-12">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Soluciones Completas
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">Nuestros Servicios</h2>
                <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
                <p className="text-gray-700 text-center max-w-2xl mx-auto font-semibold">
                  Ofrecemos soluciones completas para tu vehículo con la calidad y confianza que mereces. En FAVEREAUTOS
                  encontrarás todo lo que necesitas en un solo lugar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <Card className="rounded-xl overflow-hidden border border-gray-100 h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div
                        className={`${service.iconBg} p-3 rounded-full inline-block mb-4 group-hover:scale-110 transform transition-transform duration-300 ${service.hoverIconBg}`}
                      >
                        <div className={service.iconColor}>{service.icon}</div>
                      </div>
                      <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors">
                        {service.description}
                      </p>

                      <div className="bg-gray-50 p-3 rounded-lg mb-6 group-hover:bg-blue-50 transition-colors">
                        <p className="text-blue-800 font-medium text-sm flex items-center">
                          <span className="bg-blue-100 p-1 rounded-full mr-2">
                            <Check className="h-3 w-3 text-blue-600" />
                          </span>
                          {service.highlight}
                        </p>
                      </div>

                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="bg-gray-100 p-1 rounded-full mr-2 mt-0.5 group-hover:bg-blue-100 transition-colors">
                              <Check className="h-3 w-3 text-gray-600 group-hover:text-blue-600 transition-colors" />
                            </div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#"
                        className="text-blue-600 text-sm font-medium flex items-center group-hover:text-yellow-500 transition-colors mt-auto"
                      >
                        Más información
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div
              className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <div className="text-blue-600">{benefit.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre FAVEREAUTOS Section */}
      <section id="about" ref={aboutRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div
            className={`transition-all duration-1000 transform ${
              isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col items-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Nuestra Historia
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">Sobre FAVEREAUTOS</h2>
              <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 transform ${
                isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex justify-center mb-8">
                <img src="/logo.jpeg" alt="FAVEREAUTOS Automotora" className="h-24 w-auto" />
              </div>

              <p className="text-gray-700 mb-6 text-lg">
                Con más de 15 años de experiencia en el mercado automotriz, FAVEREAUTOS se ha consolidado como una de
                las automotoras más confiables del país. Ofrecemos una amplia gama de vehículos nuevos y usados de las
                mejores marcas, con garantía y financiamiento a tu medida.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Nuestro compromiso es brindarte la mejor experiencia de compra, con asesoramiento personalizado y un
                servicio postventa de calidad. En FAVEREAUTOS encontrarás el vehículo que se adapta a tus necesidades y
                presupuesto.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <ThumbsUp className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">Más de 5,000 clientes satisfechos</span>
                </div>
                <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
                  <Trophy className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-800 font-medium">Premio al Mejor Servicio 2024</span>
                </div>
              </div>
            </div>

            <div
              className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl transition-all duration-1000 delay-500 transform ${
                isAboutVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="FAVEREAUTOS showroom"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div
            className={`mt-16 transition-all duration-1000 delay-700 transform ${
              isAboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-800">¿Por qué elegirnos?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustIcons.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center hover:-translate-y-1"
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="bg-blue-100 p-4 rounded-full inline-flex justify-center items-center mb-4 text-blue-600">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

