"use client"
import { useState } from "react"
import { Shield, Check, Car, User, Phone, Mail, Calendar, FileText, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Label } from "./ui/label"
import { Card, CardContent } from "./ui/card"
import { Separator } from "./ui/separator"

export default function Insurance() {
  const [formStatus, setFormStatus] = useState(null) // null, 'sending', 'success'

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
      }, 3000)
    }, 1500)
  }

  const insuranceTypes = [
    {
      title: "Seguro Obligatorio (SOAP)",
      description: "Cobertura básica obligatoria por ley que cubre daños corporales en accidentes de tránsito.",
      features: ["Cobertura de lesiones", "Gastos médicos", "Incapacidad", "Muerte accidental"],
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Seguro Contra Terceros",
      description: "Protección para daños que puedas causar a terceros, tanto a personas como a sus bienes.",
      features: ["Responsabilidad civil", "Daños a terceros", "Defensa legal", "Asistencia en ruta básica"],
      icon: <Car className="h-8 w-8" />,
    },
    {
      title: "Seguro Todo Riesgo",
      description: "La cobertura más completa que protege tu vehículo contra casi cualquier eventualidad.",
      features: [
        "Daños propios",
        "Robo total o parcial",
        "Incendio",
        "Eventos naturales",
        "Asistencia en ruta completa",
      ],
      icon: <Shield className="h-8 w-8" />,
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
            Protección Completa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">Seguros Automotrices</h2>
          <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-gray-700 text-center max-w-2xl mx-auto font-semibold">
            Protege tu inversión con nuestros planes de seguros diseñados específicamente para tus necesidades
          </p>
        </div>

        {/* Tipos de seguros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {insuranceTypes.map((insurance, index) => (
            <Card
              key={index}
              className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                  <div className="text-blue-600">{insurance.icon}</div>
                </div>
                <h3 className="font-bold text-xl mb-3">{insurance.title}</h3>
                <p className="text-gray-600 mb-4">{insurance.description}</p>
                <Separator className="my-4" />
                <div className="space-y-2">
                  {insurance.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Formulario de cotización */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Solicita tu Cotización</h3>
              <p className="text-gray-700 mb-6">
                Completa el formulario y nuestros asesores te contactarán con la mejor oferta de seguro para tu
                vehículo. Trabajamos con las principales compañías aseguradoras para ofrecerte el mejor precio y
                cobertura.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-3 text-blue-800">¿Por qué elegir nuestros seguros?</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Mejores precios garantizados</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Asesoría personalizada</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Asistencia en siniestros</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Renovación automática con descuentos</span>
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
                    Hemos recibido tu solicitud de cotización. Un asesor se pondrá en contacto contigo en las próximas
                    24 horas.
                  </p>
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50 mt-4"
                    onClick={() => setFormStatus(null)}
                  >
                    Solicitar otra cotización
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

                  <div className="space-y-2">
                    <Label htmlFor="insurance-type">Tipo de seguro</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un tipo de seguro" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="soap">Seguro Obligatorio (SOAP)</SelectItem>
                        <SelectItem value="terceros">Seguro Contra Terceros</SelectItem>
                        <SelectItem value="todo-riesgo">Seguro Todo Riesgo</SelectItem>
                        <SelectItem value="no-se">No estoy seguro, necesito asesoría</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comments">Comentarios adicionales</Label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                      <Textarea
                        id="comments"
                        placeholder="Información adicional que consideres relevante"
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
                        Solicitar cotización <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Compañías aseguradoras */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Trabajamos con las mejores compañías aseguradoras</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white h-20 rounded-lg flex items-center justify-center shadow-sm border border-gray-100"
              >
                <span className="text-gray-400">Aseguradora {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
