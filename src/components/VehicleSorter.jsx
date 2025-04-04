"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function VehicleSorter({ onSortChange, currentSort }) {
  const handleChange = (value) => {
    onSortChange(value)
  }

  return (
    <div className="flex items-center">
      <span className="text-sm text-gray-600 mr-2 hidden md:inline">Ordenar por:</span>
      <Select value={currentSort} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="featured">Destacados</SelectItem>
          <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
          <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
          <SelectItem value="year-desc">Año: Más reciente</SelectItem>
          <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

