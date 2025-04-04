"use client"
import { useState, useEffect, useRef } from "react"
import VehicleCard from "./VehicleCard"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"

export default function FeaturedVehicles({ navigateTo }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Sample vehicle data - in a real app, this would come from an API or props
  const vehicles = [
    {
      id: 1,
      name: "Volkswagen Golf",
      year: "2021",
      price: "$19,800",
      image: "/gold.jpg?height=200&width=300",
      fuelType: "Gasolina",
      mileage: "25,000 km",
      condition: "Usado",
      transmission: "Manual",
      engine: "1.4L Turbo",
      color: "Blanco",
      bodyType: "Hatchback",
      features: ["Bluetooth", "Cámara de retroceso", "Sensores de estacionamiento"],
      location: "Sede Central",
    },
    {
      id: 2,
      name: "Toyota Corolla",
      year: "2023",
      price: "$22,500",
      image: "/favareautos/corrolla.jpg?height=200&width=300",
      fuelType: "Gasolina",
      mileage: "0 km",
      condition: "Nuevo",
      transmission: "Automático",
      engine: "2.0L",
      color: "Plateado",
      bodyType: "Sedán",
      features: ["Apple CarPlay", "Android Auto", "Asientos de cuero"],
      location: "Sede Norte",
    },
    {
      id: 3,
      name: "Honda Civic",
      year: "2022",
      price: "$21,700",
      image: "/favareautos/civic.jpg?height=200&width=300",
      fuelType: "Gasolina",
      mileage: "10,000 km",
      condition: "Usado",
      transmission: "Automático",
      engine: "1.5L Turbo",
      color: "Azul",
      bodyType: "Sedán",
      features: ["Techo solar", "Sistema de navegación", "Llantas de aleación"],
      location: "Sede Central",
    },
    {
      id: 4,
      name: "Ford Explorer",
      year: "2021",
      price: "$32,900",
      image: "/favareautos/ford.jpg?height=200&width=300",
      fuelType: "Gasolina",
      mileage: "15,000 km",
      condition: "Usado",
      transmission: "Automático",
      engine: "3.0L V6",
      color: "Negro",
      bodyType: "SUV",
      features: ["Tercera fila de asientos", "Tracción 4x4", "Sistema de sonido premium"],
      location: "Sede Sur",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether the element is intersecting
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // 20% of the element is visible
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

  // Manejar clic en un vehículo para ver detalles
  const handleVehicleClick = (vehicle) => {
    navigateTo("vehicle-detail", vehicle)
  }

  return (
    <section
      id="vehicles"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #EBF4FF, #F0F7FF)",
      }}
    >
      <div className="container mx-auto px-4 relative">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Nuestra Selección
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">Vehículos Destacados</h2>
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-700 text-center max-w-2xl mx-auto font-semibold">
              Descubre nuestra selección de vehículos premium con las mejores condiciones del mercado
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {vehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className={`transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } cursor-pointer`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
                onClick={() => handleVehicleClick(vehicle)}
              >
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-1000 delay-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-medium group"
              onClick={() => navigateTo("vehicles")}
            >
              Ver Todos los Vehículos
              <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-24 -right-16 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-3xl"></div>
    </section>
  )
}

