import Heading from "../common/Heading"
import { contact } from "../data/dummydata"

const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <Heading title='Keep In Touch'></Heading>
                    <div className="content flexsb">
                        <div className="left">
                            <form>
                                <div className="flex">
                                    <input type="text" placeholder="Name" required />
                                    <input type="email" placeholder="Email" required />
                                </div>
                                <input type="text" placeholder="Subject" required />
                                <textarea placeholder="leave a comment here" cols="30" rows="10"></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="right">
                            {
                                contact.map((item, index) => {
                                    return (
                                        <>
                                            <div className="box" key={index}>
                                                <i>{item.icon}</i>
                                                <p>{item.text1}</p>
                                                <p>{item.text2}</p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Contact