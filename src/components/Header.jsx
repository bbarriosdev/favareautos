"use client"

import { useState, useEffect } from "react"
import { Clock, Mail, Phone, Facebook, Instagram, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"

export default function Header({ navigateTo, currentPage }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFinancingMenuOpen, setIsFinancingMenuOpen] = useState(false)

  // Detectar cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Header contenedor - siempre presente */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Barra superior - se oculta al hacer scroll */}
        <div
          className={`bg-blue-900 text-white transition-all duration-300 ease-in-out ${
            isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-8 opacity-100"
          }`}
        >
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-xs h-full">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>Lun-Vie: 9:30-19:00 | Sáb: 10:30-13:30</span>
              </div>
              <div className="hidden md:flex items-center">
                <Mail className="h-3.5 w-3.5 mr-1" />
                <a href="mailto:contacto@favereautos.cl" className="hover:text-yellow-300">
                  contacto@favereautos.cl
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/56981358847"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-yellow-300"
              >
                <Phone className="h-3.5 w-3.5 mr-1" />
                <span>+56 981358847</span>
              </a>
              <div className="hidden md:flex items-center space-x-2">
                <a
                  href="https://www.facebook.com/automotorafavereautos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300"
                >
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.instagram.com/_automotorafavereautos_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Header principal - siempre visible */}
        <div className={`bg-white border-b transition-all duration-300 ease-in-out ${isScrolled ? "shadow-md" : ""}`}>
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => navigateTo("home")} className="cursor-pointer">
                <img src="/favareautos/logo.jpeg" alt="FAVEREAUTOS Automotora" className="h-12 w-auto" />
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
                Nuestro Stock
              </button>

              {/* Menú desplegable de Financiamiento */}
              <div
                className="relative group"
                onMouseEnter={() => setIsFinancingMenuOpen(true)}
                onMouseLeave={() => setIsFinancingMenuOpen(false)}
              >
                <button
                  onClick={() => navigateTo("financing")}
                  className={`text-gray-800 hover:text-blue-600 font-medium flex items-center ${
                    currentPage === "financing" ? "text-blue-600" : ""
                  }`}
                >
                  Financiamiento
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${isFinancingMenuOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Submenú */}
                <div
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                    isFinancingMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <div className="py-1">
                    <button
                      onClick={() => navigateTo("financing")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Tradicional
                    </button>
                    <button
                      onClick={() => navigateTo("financing")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Directo
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigateTo("insurance")}
                className={`text-gray-800 hover:text-blue-600 font-medium ${currentPage === "insurance" ? "text-blue-600" : ""}`}
              >
                Seguros
              </button>

              <button
                onClick={() => navigateTo("sell-your-car")}
                className={`text-gray-800 hover:text-blue-600 font-medium ${currentPage === "sell-your-car" ? "text-blue-600" : ""}`}
              >
                Compramos tu auto
              </button>

              <button
                onClick={() => navigateTo("commercial-advisory")}
                className={`text-gray-800 hover:text-blue-600 font-medium ${currentPage === "commercial-advisory" ? "text-blue-600" : ""}`}
              >
                Asesoría Comercial
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
                    Nuestro Stock
                  </button>

                  <div className="border-l-2 border-gray-200 pl-3 ml-2 space-y-2">
                    <button
                      onClick={() => navigateTo("financing")}
                      className={`text-left text-gray-800 hover:text-blue-600 font-medium ${currentPage === "financing" ? "text-blue-600" : ""}`}
                    >
                      Financiamiento
                    </button>
                    <button
                      onClick={() => navigateTo("financing")}
                      className="text-left text-gray-600 hover:text-blue-600 text-sm pl-2"
                    >
                      Tradicional
                    </button>
                    <button
                      onClick={() => navigateTo("financing")}
                      className="text-left text-gray-600 hover:text-blue-600 text-sm pl-2"
                    >
                      Directo
                    </button>
                  </div>

                  <button
                    onClick={() => navigateTo("insurance")}
                    className={`text-left text-gray-800 hover:text-blue-600 font-medium ${currentPage === "insurance" ? "text-blue-600" : ""}`}
                  >
                    Seguros
                  </button>

                  <button
                    onClick={() => navigateTo("sell-your-car")}
                    className={`text-left text-gray-800 hover:text-blue-600 font-medium ${currentPage === "sell-your-car" ? "text-blue-600" : ""}`}
                  >
                    Compramos tu auto
                  </button>

                  <button
                    onClick={() => navigateTo("commercial-advisory")}
                    className={`text-left text-gray-800 hover:text-blue-600 font-medium ${currentPage === "commercial-advisory" ? "text-blue-600" : ""}`}
                  >
                    Asesoría Comercial
                  </button>

                  <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">
                    Contacto
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Espaciador para compensar el header fijo */}
      <div className={`transition-all duration-300 ease-in-out ${isScrolled ? "h-[68px]" : "h-[100px]"}`}></div>
    </>
  )
}
