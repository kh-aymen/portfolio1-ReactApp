import { social } from "../data/dummydata"

const Footer = () => {
    return (
        <>
            <footer>
                {
                    social.map((item) => {
                        return (
                            <>
                                <a href={item.url} target="_blank" rel="noreferrer"><i>{item.icon}</i></a>
                            </>
                        )
                    })
                }
                <p><b>All Right Resrved 2023 By KHALFI AYMEN</b></p>
            </footer>
        </>
    )
}
export default Footer