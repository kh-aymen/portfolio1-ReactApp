import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../common/Header"
import Home from "../home/Home"
import About from "./About"
import Services from "./Services"
import Portfolio from "./Portfolio"
import Testimonials from "./Testimonials"
import Blog from "./Blog"
import Contact from "./Contact"
import Footer from "../common/Footer"
const Pages = () => {
    return (
        <>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/about" Component={About} />
                    <Route exact path="/services" Component={Services} />
                    <Route exact path="/portfolio" Component={Portfolio} />
                    <Route exact path="/testimonials" Component={Testimonials} />
                    <Route exact path="/blog" Component={Blog} />
                    <Route exact path="/contact" Component={Contact} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    )
}

export default Pages