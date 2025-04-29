"use client"
import { CreditCard, Check, Landmark, ArrowRight, User, Phone, Mail, Calculator, FileText, X } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function Financing() {
  const [showForm, setShowForm] = useState(false)
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

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div>
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Soluciones Financieras
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-800">Financiamiento</h2>
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-700 text-center max-w-2xl mx-auto font-semibold">
              En FAVEREAUTOS estamos comprometidos con la innovación y la satisfacción del cliente proporcionando
              soluciones financieras accesibles y eficientes para la adquisición de vehículos.
            </p>
          </div>
        </div>

        {/* Características Generales */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-blue-800 text-center">Características Generales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Financiamos autos nuevos o usados.",
                "Para fines particulares o comerciales.",
                "Hasta 48 meses de plazo.",
                "Financiamiento especial para PYME.",
                "Cuota fija en pesos.",
                "Hasta 90 días la primera cuota",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opciones de Financiamiento */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Nuestras Opciones de Financiamiento</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Crédito Directo */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full inline-flex mb-4">
                  <CreditCard className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold mb-2">Crédito Directo</h4>
                <p className="text-gray-600 mb-4">
                  Financiamiento directo sin intermediarios con condiciones flexibles
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() =>
                    document.getElementById("credito-directo-section").scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Ver Detalles
                </Button>
              </div>
            </div>

            {/* Crédito Convencional */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-full inline-flex mb-4">
                  <Landmark className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold mb-2">Crédito Convencional</h4>
                <p className="text-gray-600 mb-4">Financiamiento a través de instituciones financieras asociadas</p>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() =>
                    document.getElementById("credito-convencional-section").scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Ver Detalles
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Detalles de Crédito Directo */}
        <div id="credito-directo-section" className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800">Crédito Directo</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Condiciones para Crédito Directo</h4>
                <div className="space-y-3">
                  {[
                    "Solo residentes de la Quinta región.",
                    "Pie de 50% o 40% del valor vehículo",
                    "Aval referencial familiar directo.",
                    "Acreditar renta acorde al pago de cuota.",
                    "Comprobante de domicilio.",
                    "Cédula de Identidad vigente.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-blue-800">Solicita información</h4>
                <p className="text-gray-700 mb-6">
                  Para conocer más detalles sobre nuestras opciones de crédito directo, comunícate con nuestros asesores
                  financieros.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setShowForm(true)}>
                  Solicitar Crédito Directo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Detalles de Crédito Convencional */}
        <div id="credito-convencional-section" className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 border border-green-100">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Landmark className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800">Crédito Convencional</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Requisitos Dependientes</h4>
                <div className="space-y-3 mb-8">
                  {[
                    "1 año de antigüedad laboral.",
                    "3 Últimas liquidaciones de sueldo renta fija.",
                    "6 últimas liquidaciones de sueldo renta variable.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <h4 className="font-bold text-lg mb-4">Requisitos Independientes</h4>
                <div className="space-y-3">
                  {["Carpeta tributaria para créditos", "Mínimo 3 años de antigüedad laboral."].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-green-800">Crédito con Instituciones Financieras</h4>
                <p className="text-gray-700 mb-4">
                  Trabajamos con las principales instituciones financieras del país para ofrecerte las mejores opciones
                  de crédito automotriz.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[1, 2, 3, 4, 5, 6].map((bank) => (
                    <div key={bank} className="bg-white h-16 rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-gray-500 text-sm">Banco {bank}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => setShowForm(true)}>
                    Consultar Opciones
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-blue-800 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para financiar tu próximo vehículo?</h3>
            <p className="max-w-2xl mx-auto mb-8">
              Nuestros asesores financieros están listos para ayudarte a encontrar la mejor opción de financiamiento que
              se adapte a tus necesidades y posibilidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium px-8 py-6"
                onClick={() => setShowForm(true)}
              >
                Solicitar Asesoría Financiera
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6">
                Ver Vehículos Financiables
              </Button>
            </div>
          </div>
        </div>

        {/* Formulario de Asesoría Financiera */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Calculator className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Solicitud de Asesoría Financiera</h3>
                  </div>
                  <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {formStatus === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <Check className="h-12 w-12 text-green-500" />
                    </div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">¡Solicitud enviada con éxito!</h4>
                    <p className="text-green-700 mb-4">
                      Hemos recibido tu solicitud de asesoría financiera. Un asesor se pondrá en contacto contigo en las
                      próximas 24 horas.
                    </p>
                    <Button
                      variant="outline"
                      className="border-green-500 text-green-600 hover:bg-green-50 mt-4"
                      onClick={() => setShowForm(false)}
                    >
                      Cerrar
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-gray-600 mb-4">
                      Complete el siguiente formulario y uno de nuestros asesores financieros se pondrá en contacto
                      contigo para brindarte la mejor asesoría personalizada.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo</Label>
                        <div className="relative">
                          <User
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <Input id="name" placeholder="Tu nombre" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <div className="relative">
                          <Phone
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
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

                    <div className="space-y-2">
                      <Label htmlFor="financing-type">Tipo de financiamiento de interés</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="directo">Crédito Directo</SelectItem>
                          <SelectItem value="convencional">Crédito Convencional</SelectItem>
                          <SelectItem value="no-se">No estoy seguro, necesito asesoría</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicle-price">Valor aproximado del vehículo</Label>
                        <div className="relative">
                          <CreditCard
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <Input id="vehicle-price" placeholder="Ej: 10.000.000" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pie">Pie disponible (opcional)</Label>
                        <div className="relative">
                          <CreditCard
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                          <Input id="pie" placeholder="Ej: 5.000.000" className="pl-10" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="plazo">Plazo deseado (meses)</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un plazo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12">12 meses</SelectItem>
                            <SelectItem value="24">24 meses</SelectItem>
                            <SelectItem value="36">36 meses</SelectItem>
                            <SelectItem value="48">48 meses</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="income-type">Tipo de ingresos</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dependiente">Dependiente</SelectItem>
                            <SelectItem value="independiente">Independiente</SelectItem>
                            <SelectItem value="jubilado">Jubilado</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="comments">Comentarios adicionales</Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                        <Textarea
                          id="comments"
                          placeholder="Información adicional que consideres relevante para tu solicitud de financiamiento"
                          className="pl-10 min-h-[100px]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                        Cancelar
                      </Button>
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700"
                        disabled={formStatus === "sending"}
                      >
                        {formStatus === "sending" ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <>
                            Enviar solicitud <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
