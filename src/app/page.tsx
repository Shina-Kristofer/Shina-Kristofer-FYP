import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { VehicleDetection } from './components/VehicleDetection'
import { About } from './components/About'
import { Contact } from './components/Contact'

export default function Home() {
  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
      <Hero />
      <Features />
      <VehicleDetection />
      <About />
      <Contact />
    </div>
  )
}

