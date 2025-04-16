import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Shield,
  Award,
  Music,
  Clock,
} from "lucide-react"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section with logo and social media */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-blue-800">
          <div className="bg-white p-3 rounded-lg mb-4 md:mb-0">
            <img src="/favareautos/logo.jpeg" alt="FAVEREAUTOS Automotora" className="h-12 w-auto" />
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.facebook.com/automotorafavereautos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/_automotorafavereautos_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Music size={20} />
                <span className="sr-only">TikTok</span>
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
            <div className="flex gap-2">
              <div className="bg-blue-800 p-1.5 rounded">
                <Shield className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="bg-blue-800 p-1.5 rounded">
                <Award className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="bg-blue-800 p-1.5 rounded text-xs font-bold flex items-center justify-center text-yellow-400 px-2">
                ISO 9001
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Sobre Nosotros</h4>
            <p className="text-gray-300 mb-4">
              Tenemos el compromiso pleno de brindarte la mejor experiencia en la compra y venta de automóviles,
              acompañándote en cada paso, desde la decisión hasta la transacción final.
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Nuestros Valores
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-400 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Trabaja con Nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Enlaces Rápidos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#vehicles" className="text-gray-300 hover:text-yellow-400 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Nuestro Stock
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-yellow-400 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-yellow-400 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Contacto
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Financiamiento
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-yellow-400 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Seguros
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-yellow-400 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Compramos tu auto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Vehículos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Autos Nuevos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Autos Usados
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  SUVs & Crossovers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Camionetas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Vehículos Comerciales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Ofertas Especiales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Los Carrera 0460, Quilpué
                    <br />
                    Paradero 29 del Troncal Urbano
                  </p>
                  <p className="text-gray-300 mt-2">
                    <span className="font-medium">Sucursal Belloto:</span>
                    <br />
                    Freire 848, Esquina María Arellano
                    <br />
                    Paradero 15, Quilpué
                  </p>
                </div>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Fono: 32 254 8983</p>
                  <p className="text-gray-300">Celular: 56 981358847</p>
                </div>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">ventas@favereautos.cl</p>
                  <p className="text-gray-300">contacto@favereautos.cl</p>
                </div>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Lunes a viernes: 9:30 a 19:00 hrs</p>
                  <p className="text-gray-300">Sábado: 10:30 a 13:30 hrs</p>
                </div>
              </li>
              <li>
                <a href="#contact">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium mt-2">
                    Contáctanos Ahora
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-blue-800" />

        {/* Bottom section with copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} FAVEREAUTOS Automotora. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-400">
              Términos y Condiciones
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-yellow-400">
              Política de Privacidad
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-yellow-400">
              Mapa del Sitio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
