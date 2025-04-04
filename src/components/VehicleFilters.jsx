"use client"
import { useState, useEffect } from "react"
import { Slider } from "./ui/slider"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { X } from "lucide-react"

export default function VehicleFilters({ onFilterChange, activeFilters, onClose, isMobile = false }) {
  const [filters, setFilters] = useState(activeFilters)

  // Actualizar filtros cuando cambian los activeFilters (por ejemplo, al limpiar todos los filtros)
  useEffect(() => {
    setFilters(activeFilters)
  }, [activeFilters])

  // Opciones de filtro
  const brands = [
    "Toyota",
    "Honda",
    "Volkswagen",
    "Ford",
    "Chevrolet",
    "Mazda",
    "Nissan",
    "Hyundai",
    "Kia",
    "BMW",
    "Mercedes-Benz",
    "Audi",
  ]
  const models = {
    Toyota: ["Corolla", "Camry", "RAV4", "Highlander", "4Runner"],
    Honda: ["Civic", "Accord", "CR-V", "Pilot", "HR-V"],
    Volkswagen: ["Golf", "Jetta", "Passat", "Tiguan", "Atlas"],
    Ford: ["Explorer", "Escape", "F-150", "Mustang", "Edge"],
    Chevrolet: ["Silverado", "Equinox", "Tahoe", "Malibu", "Camaro"],
    Mazda: ["CX-5", "CX-9", "Mazda3", "Mazda6", "MX-5"],
    Nissan: ["Sentra", "Altima", "Rogue", "Pathfinder", "Frontier"],
    Hyundai: ["Tucson", "Santa Fe", "Elantra", "Sonata", "Kona"],
    Kia: ["Sportage", "Sorento", "Forte", "Optima", "Soul"],
    BMW: ["Serie 3", "Serie 5", "X3", "X5", "X7"],
    "Mercedes-Benz": ["Clase C", "Clase E", "GLC", "GLE", "GLS"],
    Audi: ["A4", "A6", "Q3", "Q5", "Q7"],
  }
  const conditions = ["Nuevo", "Usado"]
  const bodyTypes = ["Sedán", "SUV", "Hatchback", "Camioneta", "Coupé", "Convertible"]
  const transmissions = ["Automático", "Manual", "CVT"]
  const fuelTypes = ["Gasolina", "Diésel", "Híbrido", "Eléctrico"]

  // Manejar cambios en los checkboxes
  const handleCheckboxChange = (category, value) => {
    const updatedFilters = { ...filters }

    if (updatedFilters[category].includes(value)) {
      updatedFilters[category] = updatedFilters[category].filter((item) => item !== value)
    } else {
      updatedFilters[category] = [...updatedFilters[category], value]
    }

    // Si cambia la marca, resetear los modelos seleccionados
    if (category === "brand") {
      updatedFilters.model = []
    }

    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  // Manejar cambios en los sliders de rango
  const handleRangeChange = (category, values) => {
    const updatedFilters = {
      ...filters,
      [category]: { min: values[0], max: values[1] },
    }

    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  // Formatear precio para mostrar
  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`
  }

  // Obtener modelos disponibles basados en las marcas seleccionadas
  const getAvailableModels = () => {
    if (filters.brand.length === 0) {
      return []
    }

    let availableModels = []
    filters.brand.forEach((brand) => {
      if (models[brand]) {
        availableModels = [...availableModels, ...models[brand]]
      }
    })

    return availableModels
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-6 ${isMobile ? "relative" : ""}`}>
      {isMobile && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Filtros</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={18} />
          </Button>
        </div>
      )}

      <div className="space-y-6">
        {/* Marca */}
        <div>
          <h3 className="font-medium mb-3">Marca</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={filters.brand.includes(brand)}
                  onCheckedChange={() => handleCheckboxChange("brand", brand)}
                />
                <Label htmlFor={`brand-${brand}`} className="ml-2 text-sm font-normal cursor-pointer">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Modelo - Solo mostrar si hay marcas seleccionadas */}
        {filters.brand.length > 0 && (
          <>
            <div>
              <h3 className="font-medium mb-3">Modelo</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                {getAvailableModels().map((model) => (
                  <div key={model} className="flex items-center">
                    <Checkbox
                      id={`model-${model}`}
                      checked={filters.model.includes(model)}
                      onCheckedChange={() => handleCheckboxChange("model", model)}
                    />
                    <Label htmlFor={`model-${model}`} className="ml-2 text-sm font-normal cursor-pointer">
                      {model}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Condición */}
        <div>
          <h3 className="font-medium mb-3">Condición</h3>
          <div className="space-y-2">
            {conditions.map((condition) => (
              <div key={condition} className="flex items-center">
                <Checkbox
                  id={`condition-${condition}`}
                  checked={filters.condition.includes(condition)}
                  onCheckedChange={() => handleCheckboxChange("condition", condition)}
                />
                <Label htmlFor={`condition-${condition}`} className="ml-2 text-sm font-normal cursor-pointer">
                  {condition}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Tipo de carrocería */}
        <div>
          <h3 className="font-medium mb-3">Tipo de Vehículo</h3>
          <div className="space-y-2">
            {bodyTypes.map((type) => (
              <div key={type} className="flex items-center">
                <Checkbox
                  id={`bodyType-${type}`}
                  checked={filters.bodyType.includes(type)}
                  onCheckedChange={() => handleCheckboxChange("bodyType", type)}
                />
                <Label htmlFor={`bodyType-${type}`} className="ml-2 text-sm font-normal cursor-pointer">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Transmisión */}
        <div>
          <h3 className="font-medium mb-3">Transmisión</h3>
          <div className="space-y-2">
            {transmissions.map((transmission) => (
              <div key={transmission} className="flex items-center">
                <Checkbox
                  id={`transmission-${transmission}`}
                  checked={filters.transmission.includes(transmission)}
                  onCheckedChange={() => handleCheckboxChange("transmission", transmission)}
                />
                <Label htmlFor={`transmission-${transmission}`} className="ml-2 text-sm font-normal cursor-pointer">
                  {transmission}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Tipo de combustible */}
        <div>
          <h3 className="font-medium mb-3">Combustible</h3>
          <div className="space-y-2">
            {fuelTypes.map((fuel) => (
              <div key={fuel} className="flex items-center">
                <Checkbox
                  id={`fuelType-${fuel}`}
                  checked={filters.fuelType.includes(fuel)}
                  onCheckedChange={() => handleCheckboxChange("fuelType", fuel)}
                />
                <Label htmlFor={`fuelType-${fuel}`} className="ml-2 text-sm font-normal cursor-pointer">
                  {fuel}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Rango de precio */}
        <div>
          <h3 className="font-medium mb-3">Rango de Precio</h3>
          <div className="px-2">
            <Slider
              defaultValue={[filters.priceRange.min, filters.priceRange.max]}
              min={0}
              max={100000}
              step={1000}
              value={[filters.priceRange.min, filters.priceRange.max]}
              onValueChange={(values) => handleRangeChange("priceRange", values)}
              className="mb-6"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{formatPrice(filters.priceRange.min)}</span>
              <span>{formatPrice(filters.priceRange.max)}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Rango de año */}
        <div>
          <h3 className="font-medium mb-3">Año</h3>
          <div className="px-2">
            <Slider
              defaultValue={[filters.yearRange.min, filters.yearRange.max]}
              min={2000}
              max={2023}
              step={1}
              value={[filters.yearRange.min, filters.yearRange.max]}
              onValueChange={(values) => handleRangeChange("yearRange", values)}
              className="mb-6"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{filters.yearRange.min}</span>
              <span>{filters.yearRange.max}</span>
            </div>
          </div>
        </div>

        {isMobile && (
          <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={onClose}>
            Aplicar Filtros
          </Button>
        )}
      </div>
    </div>
  )
}

