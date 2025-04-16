"use client"
import { useState, useEffect, useRef } from "react"
import {
  Car,
  CreditCard,
  Check,
  ArrowRight,
  Award,
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
      title: "Compra y Venta Comercial",
      description:
        "Adquiere el auto de tus sueños o vende el tuyo con las mejores condiciones del mercado. Nuestro equipo de asesores te guiará en todo el proceso.",
      features: [],
      highlight: "Más de 50 vehículos disponibles",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverIconBg: "group-hover:bg-blue-200",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Financiamiento",
      description:
        "Opciones de financiamiento flexibles adaptadas a tus necesidades y posibilidades. Trabajamos con múltiples entidades financieras para ofrecerte la mejor tasa.",
      features: [],
      highlight: "Financiamos hasta el 100% del valor",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      hoverIconBg: "group-hover:bg-yellow-200",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Asesoría Comercial",
      description:
        "Ofrecemos orientación experta y personalizada para ayudar a personas y pequeños empresarios a tomar decisiones informadas sobre la gestión de sus recursos económicos.",
      features: [],
      highlight: "Optimizamos las finanzas de nuestros clientes",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hoverIconBg: "group-hover:bg-green-200",
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
                        <ul className="list-disc pl-5 space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600">
                              {feature}
                            </li>
                          ))}
                        </ul>
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
                Tenemos el compromiso pleno de brindarte la mejor experiencia en la compra y venta de automóviles,
                acompañándote en cada paso, desde la decisión hasta la transacción final.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Gracias a un esfuerzo constante por mejorar, estamos seguros de que tu sueño de adquirir un nuevo
                automóvil estará en las mejores manos. Queremos ser tu aliado automotriz de por vida y estamos
                sinceramente comprometidos con ese objetivo.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Te invitamos a unirte a nosotros en la transformación del proceso de compra y venta de automóviles en
                nuestra región. Tu opinión y experiencia son fundamentales para nuestro crecimiento y evolución.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <ThumbsUp className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">¡Gracias por confiar en nosotros!</span>
                </div>
                <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-full">
                  <Trophy className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-800 font-medium">Soluciones automotrices</span>
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
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-800">Nuestros Valores</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {[
                  {
                    icon: <Shield className="h-10 w-10" />,
                    title: "Orientación al cliente",
                    description: "Nos enfocamos en entender y satisfacer las necesidades de cada cliente",
                  },
                  {
                    icon: <Star className="h-10 w-10" />,
                    title: "Responsabilidad",
                    description: "Cumplimos con nuestros compromisos y asumimos las consecuencias de nuestras acciones",
                  },
                  {
                    icon: <Users className="h-10 w-10" />,
                    title: "Compromiso",
                    description: "Nos dedicamos completamente a ofrecer el mejor servicio posible",
                  },
                  {
                    icon: <Award className="h-10 w-10" />,
                    title: "Excelencia",
                    description: "Buscamos constantemente superar las expectativas y mejorar nuestros procesos",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center hover:-translate-y-1 border border-gray-50"
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-4 text-blue-800">Nuestro Compromiso</h4>
                  <p className="text-gray-700">
                    En Favereautos tenemos un compromiso continuo con la excelencia y la satisfacción del cliente.
                    Buscamos superar sus expectativas, construyendo relaciones sólidas y duraderas, al ir más allá de lo
                    esperado, no solo generamos experiencias positivas, sino que también se fomenta la lealtad del
                    cliente y crecimiento positivo.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-4 text-yellow-800">Nuestra Visión</h4>
                  <p className="text-gray-700">
                    El objetivo de Favereautos es convertirse en la organización líder en ofrecer la mejor experiencia
                    en el mercado automotriz, enfocados en la experiencia del cliente, la innovación y la mejora
                    continua, trabajamos para alcanzar nuestro objetivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
