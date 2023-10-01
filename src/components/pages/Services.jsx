import Heading from "../common/Heading"
import { services } from "../data/dummydata"
import Counter from "./Counter"

const Services = () => {
    return (
        <>
            <section className="services">
                <div className="container">
                    <Heading title={'Services'} ></Heading>
                    <div className="content grid3">
                        {
                            services.map((item, index) => {
                                return (
                                    <div className="box" key={index} data-aos="flip-left">
                                        <li>{item.icon}</li>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Counter></Counter>
        </>
    )
}

export default Services