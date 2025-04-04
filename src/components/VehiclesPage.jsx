"use client"
import { useState, useEffect } from "react"
import VehicleFilters from "./VehicleFilters"
import VehicleGrid from "./VehicleGrid"
import VehicleSorter from "./VehicleSorter"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"

// Datos de muestra - En una aplicación real, estos vendrían de una API o base de datos
const vehiclesData = [
  {
    id: 1,
    name: "Volkswagen Golf",
    year: 2021,
    price: 19800,
    image: "/gold.jpg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 25000,
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
    year: 2023,
    price: 22500,
    image: "/corrolla.jpg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 0,
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
    year: 2022,
    price: 21700,
    image: "/civic.jpg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 10000,
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
    year: 2021,
    price: 32900,
    image: "/ford.jpg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 15000,
    condition: "Usado",
    transmission: "Automático",
    engine: "3.0L V6",
    color: "Negro",
    bodyType: "SUV",
    features: ["Tercera fila de asientos", "Tracción 4x4", "Sistema de sonido premium"],
    location: "Sede Sur",
  },
  {
    id: 5,
    name: "Mazda CX-5",
    year: 2023,
    price: 28500,
    image: "/placeholder.svg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 0,
    condition: "Nuevo",
    transmission: "Automático",
    engine: "2.5L",
    color: "Rojo",
    bodyType: "SUV",
    features: ["Faros LED", "Monitor de punto ciego", "Arranque por botón"],
    location: "Sede Norte",
  },
  {
    id: 6,
    name: "Chevrolet Silverado",
    year: 2022,
    price: 41200,
    image: "/placeholder.svg?height=200&width=300",
    fuelType: "Diésel",
    mileage: 5000,
    condition: "Usado",
    transmission: "Automático",
    engine: "5.3L V8",
    color: "Gris",
    bodyType: "Camioneta",
    features: ["Caja larga", "Capacidad de remolque", "Asistente de estacionamiento"],
    location: "Sede Sur",
  },
  {
    id: 7,
    name: "Nissan Sentra",
    year: 2023,
    price: 19500,
    image: "/placeholder.svg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 0,
    condition: "Nuevo",
    transmission: "CVT",
    engine: "1.8L",
    color: "Blanco",
    bodyType: "Sedán",
    features: ["Economía de combustible", "Pantalla táctil", "Cámara de retroceso"],
    location: "Sede Central",
  },
  {
    id: 8,
    name: "Hyundai Tucson",
    year: 2022,
    price: 26700,
    image: "/placeholder.svg?height=200&width=300",
    fuelType: "Híbrido",
    mileage: 8000,
    condition: "Usado",
    transmission: "Automático",
    engine: "1.6L Turbo + Eléctrico",
    color: "Verde",
    bodyType: "SUV",
    features: ["Modo eléctrico", "Carga inalámbrica", "Asistente de conducción"],
    location: "Sede Norte",
  },
  {
    id: 9,
    name: "Kia Sportage",
    year: 2023,
    price: 25900,
    image: "/placeholder.svg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 0,
    condition: "Nuevo",
    transmission: "Automático",
    engine: "2.0L",
    color: "Negro",
    bodyType: "SUV",
    features: ["Garantía de 7 años", "Pantalla panorámica", "Asientos calefactables"],
    location: "Sede Sur",
  },
  {
    id: 10,
    name: "BMW Serie 3",
    year: 2021,
    price: 45800,
    image: "/placeholder.svg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 12000,
    condition: "Usado",
    transmission: "Automático",
    engine: "2.0L Turbo",
    color: "Azul",
    bodyType: "Sedán",
    features: ["Asientos de cuero", "Sistema de navegación", "Techo panorámico"],
    location: "Sede Central",
  },
  {
    id: 11,
    name: "Mercedes-Benz GLC",
    year: 2022,
    price: 52300,
    image: "/placeholder.svg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 8500,
    condition: "Usado",
    transmission: "Automático",
    engine: "2.0L Turbo",
    color: "Plateado",
    bodyType: "SUV",
    features: ["Paquete AMG", "Sonido Burmester", "Asistente de aparcamiento"],
    location: "Sede Norte",
  },
  {
    id: 12,
    name: "Audi A4",
    year: 2023,
    price: 48900,
    image: "/placeholder.svg?height=200&width=300",
    fuelType: "Gasolina",
    mileage: 0,
    condition: "Nuevo",
    transmission: "Automático",
    engine: "2.0L TFSI",
    color: "Negro",
    bodyType: "Sedán",
    features: ["Audi Virtual Cockpit", "Quattro", "Faros Matrix LED"],
    location: "Sede Central",
  },
]

export default function VehiclesPage({ navigateTo }) {
  const [vehicles, setVehicles] = useState(vehiclesData)
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState({
    brand: [],
    model: [],
    condition: [],
    bodyType: [],
    transmission: [],
    fuelType: [],
    priceRange: { min: 0, max: 100000 },
    yearRange: { min: 2000, max: 2023 },
  })
  const [sortOption, setSortOption] = useState("featured")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const vehiclesPerPage = 6

  // Aplicar filtros y búsqueda
  useEffect(() => {
    let result = [...vehicles]

    // Aplicar búsqueda
    if (searchTerm) {
      result = result.filter(
        (vehicle) =>
          vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vehicle.bodyType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          vehicle.transmission.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Aplicar filtro de marca
    if (activeFilters.brand.length > 0) {
      result = result.filter((vehicle) => {
        // Extraer la marca del nombre del vehículo (asumiendo formato "Marca Modelo")
        const vehicleBrand = vehicle.name.split(" ")[0]
        return activeFilters.brand.includes(vehicleBrand)
      })
    }

    // Aplicar filtro de modelo
    if (activeFilters.model.length > 0) {
      result = result.filter((vehicle) => {
        // Verificar si alguno de los modelos seleccionados está en el nombre del vehículo
        return activeFilters.model.some((model) => vehicle.name.includes(model))
      })
    }

    // Aplicar filtros existentes
    if (activeFilters.condition.length > 0) {
      result = result.filter((vehicle) => activeFilters.condition.includes(vehicle.condition))
    }

    if (activeFilters.bodyType.length > 0) {
      result = result.filter((vehicle) => activeFilters.bodyType.includes(vehicle.bodyType))
    }

    if (activeFilters.transmission.length > 0) {
      result = result.filter((vehicle) => activeFilters.transmission.includes(vehicle.transmission))
    }

    if (activeFilters.fuelType.length > 0) {
      result = result.filter((vehicle) => activeFilters.fuelType.includes(vehicle.fuelType))
    }

    // Filtrar por rango de precio
    result = result.filter(
      (vehicle) => vehicle.price >= activeFilters.priceRange.min && vehicle.price <= activeFilters.priceRange.max,
    )

    // Filtrar por rango de año
    result = result.filter(
      (vehicle) => vehicle.year >= activeFilters.yearRange.min && vehicle.year <= activeFilters.yearRange.max,
    )

    // Aplicar ordenamiento
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "year-desc":
        result.sort((a, b) => b.year - a.year)
        break
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Por defecto, mantener el orden original (destacados)
        break
    }

    setFilteredVehicles(result)
    setCurrentPage(1) // Resetear a la primera página cuando cambian los filtros
  }, [vehicles, searchTerm, activeFilters, sortOption])

  // Calcular vehículos para la página actual
  const indexOfLastVehicle = currentPage * vehiclesPerPage
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage
  const currentVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle)
  const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage)

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Manejar cambios en los filtros
  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters)
  }

  // Manejar cambios en el ordenamiento
  const handleSortChange = (option) => {
    setSortOption(option)
  }

  // Manejar cambios en la búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  // Limpiar todos los filtros
  const clearAllFilters = () => {
    setActiveFilters({
      brand: [],
      model: [],
      condition: [],
      bodyType: [],
      transmission: [],
      fuelType: [],
      priceRange: { min: 0, max: 100000 },
      yearRange: { min: 2000, max: 2023 },
    })
    setSearchTerm("")
  }

  // Manejar clic en un vehículo para ver detalles
  const handleVehicleClick = (vehicle) => {
    navigateTo("vehicle-detail", vehicle)
  }

  return (
    <>
      {/* Hero section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Vehículos</h1>
          <p className="text-xl max-w-2xl">
            Explora nuestra amplia selección de vehículos nuevos y usados. Utiliza los filtros para encontrar el auto
            perfecto para ti.
          </p>
        </div>
      </section>

      {/* Search and filter section */}
      <section className="bg-gray-100 py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Buscar por marca, modelo, tipo..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                className="flex items-center gap-2 md:hidden"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter size={18} />
                Filtros
              </Button>

              <VehicleSorter onSortChange={handleSortChange} currentSort={sortOption} />

              {activeFilters.condition.length > 0 ||
              activeFilters.bodyType.length > 0 ||
              activeFilters.transmission.length > 0 ||
              activeFilters.fuelType.length > 0 ||
              activeFilters.brand.length > 0 ||
              activeFilters.model.length > 0 ||
              searchTerm ? (
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800" onClick={clearAllFilters}>
                  Limpiar filtros
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <VehicleFilters onFilterChange={handleFilterChange} activeFilters={activeFilters} />
            </div>

            {/* Filters - Mobile */}
            <div className={`md:hidden ${isFilterOpen ? "block" : "hidden"} mb-6`}>
              <VehicleFilters
                onFilterChange={handleFilterChange}
                activeFilters={activeFilters}
                onClose={() => setIsFilterOpen(false)}
                isMobile={true}
              />
            </div>

            {/* Vehicle grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  Mostrando {indexOfFirstVehicle + 1}-{Math.min(indexOfLastVehicle, filteredVehicles.length)} de{" "}
                  {filteredVehicles.length} vehículos
                </p>
              </div>

              {filteredVehicles.length > 0 ? (
                <VehicleGrid vehicles={currentVehicles} onVehicleClick={handleVehicleClick} />
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No se encontraron vehículos</h3>
                  <p className="text-gray-600 mb-4">
                    No hay vehículos que coincidan con los criterios de búsqueda seleccionados.
                  </p>
                  <Button onClick={clearAllFilters}>Limpiar filtros</Button>
                </div>
              )}

              {/* Pagination */}
              {filteredVehicles.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                      <Button
                        key={number}
                        variant={currentPage === number ? "default" : "outline"}
                        size="sm"
                        onClick={() => paginate(number)}
                        className={currentPage === number ? "bg-blue-600" : ""}
                      >
                        {number}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

