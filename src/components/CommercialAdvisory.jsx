"use client"
import { useState, useEffect, useRef } from "react"
import {
  TrendingUp,
  LineChart,
  PiggyBank,
  BarChart4,
  GraduationCap,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export default function CommercialAdvisory() {
  const [isVisible, setIsVisible] = useState(false) // Iniciar como false para que la animación sea visible
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

            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-100 mb-6 overflow-x-auto">
              <h4 className="font-bold text-lg mb-4 flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-green-600 flex-shrink-0" />
                <span className="text-sm sm:text-base">Nuestro enfoque</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "Confianza",
                  "Confidencialidad",
                  "Excelencia profesional",
                  "Personalización",
                  "Resultados medibles",
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

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
                src="/favareautos/placeholder.svg?height=300&width=600&text=Asesoría+Comercial"
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
                <Button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base">
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
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base">
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
      </div>
    </section>
  )
}
