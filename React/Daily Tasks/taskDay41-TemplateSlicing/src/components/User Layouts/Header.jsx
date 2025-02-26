//Common header page 

import { Link, useSearchParams } from "react-router-dom"
import Modal from 'react-modal'
import LogOutConfirm from "../User Pages/LogOutConfirm";
import { useState } from "react";

export default function Header(){
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)', 
          backgroundColor:'whitesmoke',
          padding:'50px',
          boxShadow:'0 0 10px gray'
        },
      };
      var [isOpen,setIsOpen]=useState(false)
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
                    <Link onClick={()=>{setIsOpen(true)}}>Log Out</Link>
                    </li>

                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                </nav>
                </div>
            </header>

            <Modal isOpen={isOpen}  style={{...customStyles,overlay: {zIndex: 10}}}>
                <LogOutConfirm setIsOpen={setIsOpen}/>
            </Modal>
        </>
    )
}