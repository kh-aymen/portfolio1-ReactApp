import { FormatQuote } from "@mui/icons-material"
import { testimonials } from "../data/dummydata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Heading from "../common/Heading"

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <>
            <section className="testimonials hero">
                <div className="container">
                    <Heading title='Test Monials'></Heading>
                    <Slider {...settings}>
                        {
                            testimonials.map((val, i) => {
                                return (
                                    <div className="box" key={i}>
                                        <i 
                                        ><FormatQuote></FormatQuote></i>
                                        <p>{val.text}</p>
                                        <div className="img">
                                            <img src={val.image} alt="" />
                                        </div>
                                        <h3 data-aos="fade-right">{val.name}</h3>
                                        <label data-aos="zoom-out">{val.post}</label>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Testimonials