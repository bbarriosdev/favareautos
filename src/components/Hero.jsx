"use client"
import { useState, useEffect } from "react"
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Encuentra tu vehículo ideal en FAVEREAUTOS",
      description: "Ofrecemos la mejor selección de vehículos nuevos y usados con financiamiento a tu medida",
      image: "/porche.jpg?height=500&width=1920",
    },
    {
      title: "Invierte en calidad y confianza",
      description: "Todos nuestros vehículos pasan por rigurosas inspecciones para garantizar tu seguridad",
      image: "/placeholder.svg?height=500&width=1920&text=Slide+2",
    },
    {
      title: "Financiamiento a tu medida",
      description: "Opciones flexibles adaptadas a tus necesidades y posibilidades",
      image: "/placeholder.svg?height=500&width=1920&text=Slide+3",
    },
  ]

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative h-[500px] bg-gray-900 flex items-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 z-0">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="object-cover opacity-50 w-full h-full"
            />
          </div>
          <div className="container mx-auto px-4 z-10 relative h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white">
                {slide.title}
              </h1>
              <p className="text-xl mb-10 text-white">{slide.description}</p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="#vehicles"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                >
                  Ver Vehículos
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-400/50"
                >
                  <Phone className="h-5 w-5" />
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

