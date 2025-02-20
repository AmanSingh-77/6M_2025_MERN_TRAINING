import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>  
             <header id="header" className="header d-flex align-items-center sticky-top">
                <div className="container position-relative d-flex align-items-center">
                <a href="index.html" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">Company</h1>
                    <span>.</span>
                </a>
                <nav id="navmenu" className="navmenu">
                    <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li className="dropdown">
                        <Link to='/about' className="acive">About</Link>
                        <ul>
                        <li>
                            <a href="#">Team</a>
                        </li>
                        <li>
                            <a href="testimonials.html">Testimonials</a>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                            <span>Deep Dropdown</span>{" "}
                            <i className="bi bi-chevron-down toggle-dropdown" />
                            </a>
                            <ul>
                            <li>
                                <a href="#">Deep Dropdown 1</a>
                            </li>
                            <li>
                                <a href="#">Deep Dropdown 2</a>
                            </li>
                            <li>
                                <a href="#">Deep Dropdown 3</a>
                            </li>
                            <li>
                                <a href="#">Deep Dropdown 4</a>
                            </li>
                            <li>
                                <a href="#">Deep Dropdown 5</a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                    <Link to='/contact'>Contact</Link>
                    </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                </nav>
                <div className="header-social-links">
                    <a href="#" className="twitter">
                    <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#" className="facebook">
                    <i className="bi bi-facebook" />
                    </a>
                    <a href="#" className="instagram">
                    <i className="bi bi-instagram" />
                    </a>
                    <a href="#" className="linkedin">
                    <i className="bi bi-linkedin" />
                    </a>
                </div>
                </div>
            </header>
        </>
    )
}