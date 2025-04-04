import { Fuel, Gauge } from "lucide-react"

export default function VehicleCard({ vehicle }) {
  // Extraer marca y modelo del nombre del vehículo (si es posible)
  const nameParts = vehicle.name ? vehicle.name.split(" ") : ["", ""]
  const brand = nameParts[0]
  const model = nameParts.slice(1).join(" ")

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {vehicle.condition && (
          <div className="absolute top-2 right-2">
            <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              {vehicle.condition}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <span className="text-white font-bold p-4 text-lg">Ver detalles</span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-1">
          <span className="text-sm text-blue-600 font-medium">{brand}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{model}</h3>
        <div className="flex items-center text-gray-600 mt-1">
          <span>{vehicle.year}</span>
          <span className="mx-2">•</span>
          <span className="font-semibold text-blue-600">{vehicle.price}</span>
        </div>

        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <div className="bg-blue-100 p-1.5 rounded-full mr-2 group-hover:bg-blue-200 transition-colors">
              <Fuel className="h-3.5 w-3.5 text-blue-600" />
            </div>
            {vehicle.fuelType}
          </div>
          <div className="flex items-center">
            <div className="bg-blue-100 p-1.5 rounded-full mr-2 group-hover:bg-blue-200 transition-colors">
              <Gauge className="h-3.5 w-3.5 text-blue-600" />
            </div>
            {vehicle.mileage}
          </div>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-blue-900 active:bg-blue-700 active:text-white focus:bg-blue-700 focus:text-white">
          Ver detalles
        </button>
      </div>
    </div>
  )
}

