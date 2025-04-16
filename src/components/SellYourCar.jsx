"use client"
import { useState } from "react"
import {
  Car,
  DollarSign,
  Camera,
  Check,
  ArrowRight,
  FileText,
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  X,
  Star,
} from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Label } from "./ui/label"
import { Card, CardContent } from "./ui/card"
import { Separator } from "./ui/separator"

export default function SellYourCar() {
  const [formStatus, setFormStatus] = useState(null) // null, 'sending', 'success'
  const [uploadedImages, setUploadedImages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus("sending")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus(null)
        e.target.reset()
        setUploadedImages([])
      }, 3000)
    }, 1500)
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return

    // Simulate image upload (in a real app, you would upload to a server)
    const newImages = files.map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      name: file.name,
      // In a real app, you would use the uploaded image URL
      // Here we're using a placeholder
      url: URL.createObjectURL(file),
    }))

    setUploadedImages([...uploadedImages, ...newImages].slice(0, 5)) // Limit to 5 images
  }

  const removeImage = (id) => {
    setUploadedImages(uploadedImages.filter((img) => img.id !== id))
  }

  const benefits = [
    {
      title: "Valoración justa",
      description: "Ofrecemos el mejor precio del mercado por tu vehículo basado en su estado real",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "Proceso rápido",
      description: "Completamos todo el proceso de compra en menos de 48 horas",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Sin complicaciones",
      description: "Nos encargamos de todos los trámites legales y administrativos",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Pago inmediato",
      description: "Recibe el pago por tu vehículo en el momento de la transacción",
      icon: <DollarSign className="h-6 w-6" />,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Vende tu Auto
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">Compramos tu Auto</h2>
          <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 text-center max-w-2xl mx-auto font-semibold">
            Obtén el mejor precio por tu vehículo de forma rápida, segura y sin complicaciones
          </p>
        </div>

        {/* Proceso de venta */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-800">¿Cómo funciona?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-xl mb-3">1. Completa el formulario</h4>
                <p className="text-gray-600">
                  Proporciona los datos de tu vehículo y sube algunas fotos para que podamos evaluarlo inicialmente.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                  <Car className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-xl mb-3">2. Evaluación técnica</h4>
                <p className="text-gray-600">
                  Nuestros expertos realizarán una inspección detallada de tu vehículo para determinar su valor real.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-xl mb-3">3. Oferta y pago</h4>
                <p className="text-gray-600">
                  Te presentamos nuestra mejor oferta y, si la aceptas, realizamos el pago inmediatamente y nos
                  encargamos de todos los trámites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Beneficios */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-800">¿Por qué vendernos tu auto?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario de venta */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Vende tu auto en minutos</h3>
              <p className="text-gray-700 mb-6">
                Completa el formulario con los datos de tu vehículo y nos pondremos en contacto contigo para coordinar
                una evaluación y ofrecerte el mejor precio del mercado.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-3 text-yellow-800">¿Qué necesitas para vender tu auto?</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">Documentación del vehículo al día</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">Cédula de identidad vigente</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">Historial de mantenciones (si está disponible)</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">Vehículo limpio para la evaluación</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <span className="text-gray-700">¿Prefieres hablar con un asesor? Llama al 32 254 8983</span>
              </div>
            </div>

            <div className="md:w-1/2">
              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center h-full flex flex-col justify-center">
                  <div className="bg-green-100 p-4 rounded-full inline-flex justify-center items-center mx-auto mb-6">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-green-800 mb-2">¡Solicitud enviada con éxito!</h4>
                  <p className="text-green-700 mb-4">
                    Hemos recibido los datos de tu vehículo. Un asesor se pondrá en contacto contigo en las próximas 24
                    horas para coordinar la evaluación.
                  </p>
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50 mt-4"
                    onClick={() => setFormStatus(null)}
                  >
                    Enviar otra solicitud
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input id="name" placeholder="Tu nombre" className="pl-10" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <Input id="phone" placeholder="Tu teléfono" className="pl-10" required />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input id="email" type="email" placeholder="tu@email.com" className="pl-10" required />
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-brand">Marca del vehículo</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una marca" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="toyota">Toyota</SelectItem>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="nissan">Nissan</SelectItem>
                          <SelectItem value="mazda">Mazda</SelectItem>
                          <SelectItem value="hyundai">Hyundai</SelectItem>
                          <SelectItem value="kia">Kia</SelectItem>
                          <SelectItem value="chevrolet">Chevrolet</SelectItem>
                          <SelectItem value="ford">Ford</SelectItem>
                          <SelectItem value="volkswagen">Volkswagen</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-year">Año del vehículo</Label>
                      <div className="relative">
                        <Calendar
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <Input id="vehicle-year" placeholder="Ej: 2020" className="pl-10" required />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle-model">Modelo del vehículo</Label>
                    <Input id="vehicle-model" placeholder="Ej: Corolla" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-km">Kilometraje</Label>
                      <Input id="vehicle-km" placeholder="Ej: 50000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle-color">Color</Label>
                      <Input id="vehicle-color" placeholder="Ej: Blanco" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle-condition">Estado general del vehículo</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excelente">Excelente - Como nuevo</SelectItem>
                        <SelectItem value="bueno">Bueno - Pequeños detalles</SelectItem>
                        <SelectItem value="regular">
                          Regular - Funciona correctamente pero con desgaste visible
                        </SelectItem>
                        <SelectItem value="necesita-reparacion">Necesita reparaciones</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Fotos del vehículo (máximo 5)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        id="vehicle-photos"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                        disabled={uploadedImages.length >= 5}
                      />
                      <label
                        htmlFor="vehicle-photos"
                        className={`flex flex-col items-center justify-center cursor-pointer ${
                          uploadedImages.length >= 5 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        <Camera className="h-10 w-10 text-gray-400 mb-2" />
                        <p className="text-gray-600 mb-1">Haz clic para subir fotos</p>
                        <p className="text-gray-400 text-sm">
                          {uploadedImages.length}/5 imágenes - JPG, PNG (máx. 5MB cada una)
                        </p>
                      </label>

                      {uploadedImages.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-2">
                          {uploadedImages.map((img) => (
                            <div key={img.id} className="relative group">
                              <img
                                src={img.url || "/placeholder.svg"}
                                alt={img.name}
                                className="h-20 w-full object-cover rounded-md"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(img.id)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">Comentarios adicionales</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                      <Textarea
                        id="comments"
                        placeholder="Información adicional sobre tu vehículo (modificaciones, historial de mantenciones, etc.)"
                        className="pl-10 min-h-[100px]"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 mt-4"
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        Solicitar tasación <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-8 text-gray-800">Lo que dicen nuestros clientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Carlos Mendoza",
                text: "Proceso rápido y sin complicaciones. Me ofrecieron un precio justo por mi auto y el pago fue inmediato.",
              },
              {
                name: "María González",
                text: "Excelente servicio. En menos de 48 horas vendí mi auto y recibí el pago. Muy recomendable.",
              },
              {
                name: "Roberto Sánchez",
                text: "Me sorprendió lo fácil que fue todo el proceso. El equipo fue muy profesional y me ofrecieron un buen precio.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="rounded-xl overflow-hidden border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
