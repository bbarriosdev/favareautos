"use client"

import VehicleCard from "./VehicleCard"

export default function VehicleGrid({ vehicles, onVehicleClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} onClick={() => onVehicleClick(vehicle)} className="cursor-pointer">
          <VehicleCard
            vehicle={{
              ...vehicle,
              // Formatear datos para el componente VehicleCard
              price: typeof vehicle.price === "number" ? `$${vehicle.price.toLocaleString()}` : vehicle.price,
              mileage: typeof vehicle.mileage === "number" ? `${vehicle.mileage.toLocaleString()} km` : vehicle.mileage,
            }}
          />
        </div>
      ))}
    </div>
  )
}

