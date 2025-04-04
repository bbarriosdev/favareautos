"use client"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export default function Header({ navigateTo, currentPage }) {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => navigateTo("home")} className="cursor-pointer">
            <img src="/logo.jpeg" alt="FAVEREAUTOS Automotora" className="h-12 w-auto" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => navigateTo("home")}
            className={`text-gray-800 hover:text-blue-600 font-medium ${currentPage === "home" ? "text-blue-600" : ""}`}
          >
            Inicio
          </button>
          <button
            onClick={() => navigateTo("vehicles")}
            className={`text-gray-800 hover:text-blue-600 font-medium ${currentPage === "vehicles" ? "text-blue-600" : ""}`}
          >
            Vehículos
          </button>
          <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium">
            Nosotros
          </a>
          <button
            onClick={() => navigateTo("financing")}
            className={`text-gray-800 hover:text-blue-600 font-medium ${currentPage === "financing" ? "text-blue-600" : ""}`}
          >
            Financiamiento
          </button>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">
            Contacto
          </a>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              <button
                onClick={() => navigateTo("home")}
                className={`text-left text-gray-800 hover:text-blue-600 font-medium ${currentPage === "home" ? "text-blue-600" : ""}`}
              >
                Inicio
              </button>
              <button
                onClick={() => navigateTo("vehicles")}
                className={`text-left text-gray-800 hover:text-blue-600 font-medium ${currentPage === "vehicles" ? "text-blue-600" : ""}`}
              >
                Vehículos
              </button>
              <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium">
                Nosotros
              </a>
              <button
                onClick={() => navigateTo("financing")}
                className={`text-left text-gray-800 hover:text-blue-600 font-medium ${currentPage === "financing" ? "text-blue-600" : ""}`}
              >
                Financiamiento
              </button>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">
                Contacto
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

