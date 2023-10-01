import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../images/logo.png"
import { useState } from "react"
import { Menu } from "@mui/icons-material"
const Header = () => {

    const [responsive, setResponsive] = useState(false)
    return (
        <>
            <header>
                <div className="container flexsb">
                    <div className="logo">
                        <img src={logo} alt="My logo" />
                    </div>
                    <div className={responsive ? 'hideMenu' : 'nav'}>
                        {
                            navlink.map((links, i) => {
                                return (
                                    <Link onClick={() => setResponsive(!responsive)} to={links.url} key={i}>{links.text}</Link>
                                )
                            })
                        }
                    </div>
                    <button className="toggle" onClick={() => setResponsive(!responsive)}>
                        <Menu className="icon"></Menu>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header