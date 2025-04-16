import Header from "../../components/Header"
import Footer from "../../components/Footer"
import CommercialAdvisory from "../../components/CommercialAdvisory"

export default function CommercialAdvisoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <CommercialAdvisory />
      </main>
      <Footer />
    </div>
  )
}
