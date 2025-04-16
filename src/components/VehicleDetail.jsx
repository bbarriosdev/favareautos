"use client"
import { useState } from "react"
import {
  ChevronLeft,
  Car,
  Fuel,
  Gauge,
  Calendar,
  Share2,
  MessageSquare,
  Mail,
  X,
  CreditCard,
  Check,
  AlertCircle,
} from "lucide-react"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export default function VehicleDetail({ vehicle, navigateBack }) {
  const [activeImage, setActiveImage] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)

  // Generar imágenes adicionales para la galería (en una app real vendrían del backend)
  const images = [
    vehicle.image,
    `/placeholder.svg?height=400&width=600&text=Interior+${vehicle.name}`,
    `/placeholder.svg?height=400&width=600&text=Lateral+${vehicle.name}`,
    `/placeholder.svg?height=400&width=600&text=Trasera+${vehicle.name}`,
    `/placeholder.svg?height=400&width=600&text=Motor+${vehicle.name}`,
  ]

  // Extraer marca y modelo del nombre del vehículo
  const nameParts = vehicle.name.split(" ")
  const brand = nameParts[0]
  const model = nameParts.slice(1).join(" ")

  // Formatear precio para mostrar
  const formattedPrice = typeof vehicle.price === "number" ? `$${vehicle.price.toLocaleString()}` : vehicle.price

  // Formatear kilometraje para mostrar
  const formattedMileage =
    typeof vehicle.mileage === "number" ? `${vehicle.mileage.toLocaleString()} km` : vehicle.mileage

  // Características adicionales (en una app real vendrían del backend)
  const additionalFeatures = [
    "Aire acondicionado",
    "Dirección asistida",
    "Cierre centralizado",
    "Elevalunas eléctricos",
    "Control de crucero",
    "Sistema de navegación",
    "Bluetooth",
    "Cámara de retroceso",
    "Sensores de aparcamiento",
    "Asientos calefactables",
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    alert("Solicitud enviada. Nos pondremos en contacto contigo pronto.")
    setShowContactForm(false)
  }

  // Función para abrir el cliente de correo con información predefinida
  const openMailClient = () => {
    const recipient = "ventas@favereautos.com"
    const subject = `Solicitud de información: ${vehicle.name} ${vehicle.year}`
    const body = `
Hola,

Me gustaría recibir más información sobre el siguiente vehículo:

Vehículo: ${vehicle.name}
Año: ${vehicle.year}
Precio: ${formattedPrice}
Condición: ${vehicle.condition}
Kilometraje: ${formattedMileage}
Motor: ${vehicle.engine}
Transmisión: ${vehicle.transmission}
Color: ${vehicle.color}
Tipo: ${vehicle.bodyType}

Por favor, contáctenme a la brevedad.

Saludos cordiales,
    `

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb y navegación */}
      <div className="bg-gray-100 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <button onClick={navigateBack} className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Volver a vehículos
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna izquierda - Galería e información principal */}
          <div className="lg:w-2/3">
            {/* Galería de imágenes */}
            <div className="mb-8">
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-4 bg-gray-100">
                <img
                  src={images[activeImage] || "/placeholder.svg"}
                  alt={`${vehicle.name} - Imagen ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Miniaturas */}
              <div className="grid grid-cols-5 gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`h-20 rounded-md overflow-hidden border-2 transition-all ${
                      activeImage === index
                        ? "border-blue-600 opacity-100"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs de información */}
            <Tabs defaultValue="especificaciones" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="especificaciones">Especificaciones</TabsTrigger>
                <TabsTrigger value="caracteristicas">Características</TabsTrigger>
                <TabsTrigger value="financiamiento">Financiamiento</TabsTrigger>
              </TabsList>

              <TabsContent value="especificaciones">
                <div className="bg-white rounded-lg p-6 border">
                  <h2 className="text-xl font-bold mb-4">Especificaciones técnicas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Marca:</span>
                      <span className="text-gray-700">{brand}</span>
                    </div>
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Modelo:</span>
                      <span className="text-gray-700">{model}</span>
                    </div>
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Año:</span>
                      <span className="text-gray-700">{vehicle.year}</span>
                    </div>
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Kilometraje:</span>
                      <span className="text-gray-700">{formattedMileage}</span>
                    </div>
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Combustible:</span>
                      <span className="text-gray-700">{vehicle.fuelType}</span>
                    </div>
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Transmisión:</span>
                      <span className="text-gray-700">{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Motor:</span>
                      <span className="text-gray-700">{vehicle.engine}</span>
                    </div>
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Color:</span>
                      <span className="text-gray-700">{vehicle.color}</span>
                    </div>
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Tipo:</span>
                      <span className="text-gray-700">{vehicle.bodyType}</span>
                    </div>
                    <div className="flex items-center p-3 border-b">
                      <span className="font-medium w-1/2">Condición:</span>
                      <span className="text-gray-700">{vehicle.condition}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="caracteristicas">
                <div className="bg-white rounded-lg p-6 border">
                  <h2 className="text-xl font-bold mb-4">Características y equipamiento</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[...vehicle.features, ...additionalFeatures].map((feature, index) => (
                      <div key={index} className="flex items-center p-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="financiamiento">
                <div className="bg-white rounded-lg p-6 border">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <CreditCard className="h-6 w-6 mr-2 text-blue-600" />
                      Crédito Automotriz
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Ser pioneros en la oferta de crédito directo es una de las principales características de
                      Favereautos. Ofrecer crédito directo significa que la empresa brinda financiamiento directamente a
                      los clientes, sin la necesidad de intermediarios financieros adicionales.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Esta estrategia puede tener varios beneficios tanto para la empresa como para los clientes:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                      <li>
                        <span className="font-medium">Acceso más fácil al financiamiento:</span> Eliminar intermediarios
                        puede simplificar el proceso de obtención de crédito para los clientes. Al trabajar directamente
                        con Favereautos, los clientes pueden experimentar un proceso de solicitud de crédito más rápido
                        y directo.
                      </li>
                      <li>
                        <span className="font-medium">Mayor flexibilidad en términos y condiciones:</span> Al ofrecer
                        crédito directo, Favereautos tiene la capacidad de establecer sus propios términos y
                        condiciones, lo que puede resultar en mayor flexibilidad para adaptarse a las necesidades
                        financieras de sus clientes.
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <h3 className="text-lg font-bold mb-3 text-blue-800">Crédito Directo</h3>
                      <ul className="space-y-2">
                        {[
                          "Financiamos autos nuevos o usados.",
                          "Para fines particulares o comerciales.",
                          "Hasta 48 meses de plazo.",
                          "Financiamiento especial para PYME.",
                          "Cuota fija en pesos.",
                          "Hasta 90 días la primera cuota",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-bold mt-6 mb-3">Condiciones para Crédito Directo</h4>
                      <ul className="space-y-2">
                        {[
                          "Solo residentes de la Quinta región.",
                          "50% pie valor vehículo",
                          "Aval referencial familiar directo.",
                          "Acreditar renta acorde al pago de cuota.",
                          "Comprobante de domicilio.",
                          "Cédula de Identidad vigente.",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="text-lg font-bold mb-3">Crédito Convencional</h3>

                      <h4 className="font-bold mb-3 text-gray-700">Requisitos Dependientes:</h4>
                      <ul className="space-y-2 mb-6">
                        {[
                          "1 año de antigüedad laboral.",
                          "3 Últimas liquidaciones de sueldo renta fija.",
                          "6 últimas liquidaciones de sueldo renta variable.",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-bold mb-3 text-gray-700">Requisitos Independientes:</h4>
                      <ul className="space-y-2">
                        {["Carpeta tributaria para créditos", "Mínimo 3 años de antigüedad laboral."].map(
                          (item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-gray-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-100 text-center">
                    <h3 className="text-lg font-bold mb-2 text-green-800">
                      ¿Quieres saber más sobre nuestras opciones de financiamiento?
                    </h3>
                    <p className="mb-4 text-green-700">
                      Contáctanos y te ayudaremos a encontrar la mejor opción para ti.
                    </p>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => setShowContactForm(true)}
                    >
                      Consultar por financiamiento
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Columna derecha - Precio y contacto */}
          <div className="lg:w-1/3">
            <div className="sticky top-4">
              <div className="bg-white border rounded-lg p-6 shadow-sm mb-6">
                <h1 className="text-2xl font-bold mb-1">{vehicle.name}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <span>{vehicle.year}</span>
                  <span className="mx-2">•</span>
                  <span>{vehicle.condition}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-bold">{formattedPrice}</h2>
                  <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">Financiable</Badge>
                </div>

                <Separator className="my-4" />

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Fuel className="h-5 w-5 text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Combustible</p>
                      <p className="font-medium">{vehicle.fuelType}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Gauge className="h-5 w-5 text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Kilometraje</p>
                      <p className="font-medium">{formattedMileage}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Año</p>
                      <p className="font-medium">{vehicle.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Tipo</p>
                      <p className="font-medium">{vehicle.bodyType}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
                    onClick={() => setShowContactForm(true)}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Solicitar información
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-600 hover:bg-green-50 py-6"
                    onClick={() => {
                      // Número de teléfono (en una app real vendría de la base de datos)
                      const phoneNumber = "5551234567"
                      // Mensaje predefinido
                      const message = `Hola, estoy interesado en el ${vehicle.name} ${vehicle.year} (${formattedPrice}). ¿Podría darme más información?`
                      // Crear URL de WhatsApp
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                      // Abrir WhatsApp en una nueva pestaña
                      window.open(whatsappUrl, "_blank")
                    }}
                  >
                    <MessageSquare className="h-5 w-5 mr-2 text-green-600" />
                    Contactar por WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-gray-300"
                    onClick={() => {
                      // Usar Web Share API si está disponible
                      if (navigator.share) {
                        navigator
                          .share({
                            title: `${vehicle.name} ${vehicle.year}`,
                            text: `Mira este ${vehicle.name} ${vehicle.year} por ${formattedPrice}`,
                            url: window.location.href,
                          })
                          .catch((err) => console.log("Error al compartir:", err))
                      } else {
                        // Fallback: copiar URL al portapapeles
                        navigator.clipboard
                          .writeText(window.location.href)
                          .then(() => alert("Enlace copiado al portapapeles"))
                          .catch((err) => console.log("Error al copiar:", err))
                      }
                    }}
                  >
                    <Share2 className="h-5 w-5 mr-2" />
                    Compartir
                  </Button>
                </div>
              </div>

              {showContactForm && (
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Solicitar información</h3>
                    <button onClick={() => setShowContactForm(false)} className="text-gray-500 hover:text-gray-700">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4">
                    Complete el formulario y nos pondremos en contacto con usted a la brevedad con más información sobre
                    este {vehicle.name}.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Tu nombre" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" placeholder="Tu número de teléfono" />
                      </div>
                      <div>
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                          id="message"
                          placeholder="Estoy interesado en este vehículo..."
                          rows={4}
                          defaultValue={`Hola, estoy interesado en el ${vehicle.name} ${vehicle.year} (${formattedPrice}) y me gustaría recibir más información.`}
                          required
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button type="submit" className="flex-1">
                          Enviar solicitud
                        </Button>
                        <Button type="button" variant="outline" className="flex items-center" onClick={openMailClient}>
                          <Mail className="h-4 w-4 mr-2" />
                          Usar mi correo
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
