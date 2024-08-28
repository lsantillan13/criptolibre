import Nav from "./ux-ui/components/Nav/components/Nav"
import Footer from "./ux-ui/components/Footer/Footer"
import Home from "./home/components/Home"
import OffersCarousel from "./home/components/OffersCarousel"

export default function App() {
  return (
    <div className="App">
      <Nav/>
    <main className="container mx-auto">
      {/* Section 1 - Carousel Section */} <Home/>
      {/* Section 2 - Offer Section w/ Card Layout && Offer Carrousel */} <OffersCarousel />
      {/* Section 3 */}
    </main>
    <Footer/>
  </div>
  )
}