import Hero from "./Hero"
import About from '../pages/About'
import Services from "../pages/Services"
import Portfolio from "../pages/Portfolio"
import Testimonials from "../pages/Testimonials"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
const Home = () => {
    return (
        <>
            <Hero></Hero>
            <About></About>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Contact></Contact>
        </>
    )
}

export default Home