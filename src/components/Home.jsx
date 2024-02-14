import About from "./About"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Simplify from "./Simplify"
import Testimonials from "./Testimonials"


const Home = () => {
  return (
    <div className='w-full mx-auto h-full font-primary'>
        <Navbar/>
        <Hero/>
        <About/>
        <Testimonials/>
        <Simplify/>
        <Footer/>
    </div>
  )
}

export default Home