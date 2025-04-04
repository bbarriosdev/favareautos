"use client"
import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import FeaturedVehicles from "./components/FeaturedVehicles"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import VehiclesPage from "./components/VehiclesPage"
import VehicleDetail from "./components/VehicleDetail"
import Financing from "./components/Financing"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedVehicle, setSelectedVehicle] = useState(null)

  // Función para cambiar de página
  const navigateTo = (page, vehicleData = null) => {
    setCurrentPage(page)
    if (vehicleData) {
      setSelectedVehicle(vehicleData)
    }
    window.scrollTo(0, 0) // Scroll al inicio cuando cambia la página
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      <main className="flex-grow">
        {currentPage === "home" && (
          <>
            <Hero />
            <FeaturedVehicles navigateTo={navigateTo} />
            <About />
            <Contact />
          </>
        )}
        {currentPage === "vehicles" && <VehiclesPage navigateTo={navigateTo} />}
        {currentPage === "vehicle-detail" && selectedVehicle && (
          <VehicleDetail vehicle={selectedVehicle} navigateBack={() => navigateTo("vehicles")} />
        )}
        {currentPage === "financing" && <Financing />}
      </main>
      <Footer />
    </div>
  )
}

