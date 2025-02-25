//Common header page 

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
                        <Link to='/user'>Home</Link>
                    </li>

                    <li className="dropdown">
                        <Link to='/user/about'>About</Link>
                    </li>
                    
                    <li>
                        <Link to='/user/blog'>Blog</Link>
                    </li>

                    <li>
                    <Link to='/user/contact'>Contact</Link>
                    </li>

                    <li>
                    <Link to='/'>Log Out</Link>
                    </li>

                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                </nav>
                </div>
            </header>
        </>
    )
}