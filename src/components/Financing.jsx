"use client"
import { CreditCard, Check, AlertCircle, Landmark } from "lucide-react"
import { Button } from "./ui/button"

export default function Financing() {
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

        {/* Crédito Automotriz */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Crédito Automotriz</h3>
                <p className="text-gray-700 mb-4">
                  Ser pioneros en la oferta de crédito directo es una de las principales características de Favereautos.
                  Ofrecer crédito directo significa que la empresa brinda financiamiento directamente a los clientes,
                  sin la necesidad de intermediarios financieros adicionales.
                </p>
                <p className="text-gray-700 mb-4">
                  Esta estrategia puede tener varios beneficios tanto para la empresa como para los clientes:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">Acceso más fácil al financiamiento:</span> Eliminar intermediarios
                    puede simplificar el proceso de obtención de crédito para los clientes. Al trabajar directamente con
                    Favereautos, los clientes pueden experimentar un proceso de solicitud de crédito más rápido y
                    directo.
                  </li>
                  <li>
                    <span className="font-medium">Mayor flexibilidad en términos y condiciones:</span> Al ofrecer
                    crédito directo, Favereautos tiene la capacidad de establecer sus propios términos y condiciones, lo
                    que puede resultar en mayor flexibilidad para adaptarse a las necesidades financieras de sus
                    clientes.
                  </li>
                  <li>
                    <span className="font-medium">Control sobre la experiencia del cliente:</span> Al manejar el proceso
                    de financiamiento internamente, tenemos un mayor control sobre la experiencia del cliente en
                    general. Esto puede ayudar a garantizar un servicio consistente y de alta calidad en todas las
                    etapas del proceso de compra.
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/favareautos/placeholder.svg?height=300&width=500&text=Financiamiento+Automotriz"
                  alt="Financiamiento Automotriz"
                  className="rounded-lg shadow-lg"
                />
              </div>
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
                <h4 className="font-bold text-lg mb-4">Características</h4>
                <div className="space-y-3 mb-8">
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
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4 text-blue-800">¿Por qué elegir nuestro Crédito Directo?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Proceso de aprobación rápido y sin burocracia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Atención personalizada durante todo el proceso</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Flexibilidad para adaptarnos a tu situación financiera</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>Sin costos ocultos ni comisiones adicionales</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <p className="text-gray-700 mb-4 text-sm">
                    Consulta por las opciones que tenemos para Crédito Directo, todos los casos serán evaluados.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Solicitar Crédito Directo</Button>
                </div>
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
                  <Button className="w-full bg-green-600 hover:bg-green-700">Consultar Opciones</Button>
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
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-medium px-8 py-6">
                Solicitar Asesoría Financiera
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6">
                Ver Vehículos Financiables
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
