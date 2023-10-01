import { about } from '../data/dummydata'
import Heading from '../common/Heading'
const About = () => {
    return (
        <>
            <section className="about">

                {about.map((val, index) => {
                    return (
                        <>
                            <div key={index} className="container flex aboutContainer" >
                                <div className="side" data-aos="fade-down-right">
                                    <img src={val.cover} alt='' />
                                </div>
                                <div className="side right" data-aos="fade-down-left">
                                    <Heading title='About Me' ></Heading>
                                    <p >{val.desc}</p>
                                    <p >{val.desc1}</p>
                                    <button className='btn'>Download CV</button>
                                    <button className='primaryBtn btn'>Download CV</button>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </section>
        </>
    )
}

export default About