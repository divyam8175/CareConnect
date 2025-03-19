import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Services from './Services'
import AIHealthAssistant from './AIHealthAssistant'
import FeaturedDoctors from './FeaturedDoctors'
import Footer from './Footer'

const Home = () => {

  return (
    <section className='homePage page'>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <AIHealthAssistant/>
      <FeaturedDoctors/>
      <Footer/>
    </section>
  )
}

export default Home