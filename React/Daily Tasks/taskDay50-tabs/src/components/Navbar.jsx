import { useContext, useState } from "react"
import { indexContext } from "./Home"

export default function Navbar() {
    const [active, setActive] = useState()        // To set active tabs
    const setIndex = useContext(indexContext)      // To access setIndex method

    var tabs = ["Components", "JSX", "Props", "ReactJS", "State"]

    return (
        <ul className="nav nav-tabs">
            {tabs.map((tab, index) => (
                <li className="nav-item" key={index}>
                    <a className={`nav-link text-dark pe-auto ${active == index ? "active" : ""}`} onClick={() => { setIndex(index); setActive(index)}}> {tab} </a>
                </li> ))}
        </ul>
    )
}
