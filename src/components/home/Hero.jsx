import { home } from '../data/dummydata'
import Typewriter from 'typewriter-effect'
const Hero = () => {

    return (
        <>

            <section className="hero">
                {
                    home.map((val, i) => {
                        return (
                            <div className="heroContainer" key={i}>
                                <h3 data-aos="fade-right">{val.text}</h3>
                                <h1 data-aos="fade-left">
                                    <Typewriter  options={{ strings: [`${val.name}`, `${val.post}`, `${val.design}`], autoStart: true, loop: true }} ></Typewriter>
                                </h1>
                                <p data-aos="fade-right">{val.desc}</p>
                                <button className='primaryBtn' data-aos="fade-up">Download CV</button>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Hero