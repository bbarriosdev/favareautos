import WhatsAppButton from "../components/WhatsAppButton"
import "./index.css"

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>FAVEREAUTOS - Automotora</title>
        <meta name="description" content="Encuentra tu vehículo ideal en FAVEREAUTOS" />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
