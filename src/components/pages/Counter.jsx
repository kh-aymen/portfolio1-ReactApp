import { project } from "../data/dummydata"
import CountUp from "react-countup"

const Counter = () => {
    return (
        <>
            <div className="hero counter">
                <div className="container grid3 grid4">
                    {
                        project.map((item, index) => {
                            return (
                                <div className="box" key={index} data-aos="zoom-in">
                                    <li>{item.icon}</li>
                                    <h1 className="heading">
                                    <CountUp start={0} end={item.num} duration={2.5} enableScrollSpy
                                    ></CountUp></h1>
                                    <h3>{item.title}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Counter