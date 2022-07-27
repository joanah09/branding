import React, { useState } from "react";
import data from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarLinks from "./navbarLinks";

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNav = () => {
        setNavbarOpen(!navbarOpen)
    } 

    const links = data.navbar.map(item => {
      return (
        <NavbarLinks key={item.name} {...item}/>
      )
    })
    
    return (
      <>
        <nav className="w-full flex flex-wrap items-center shadow-md justify-between px-2 py-3 bg-neutral-50 lg:h-24 fixed xl:relative z-10">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                href="#">
                LOGO
              </a>

              <button
                className="transition-all text-black cursor-pointer text-xl leading-none px-3 py-1 border bg-slate-100 border-solid rounded block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={toggleNav}>
                    {navbarOpen ? <FontAwesomeIcon icon="fas fa-x" /> : 
                    <FontAwesomeIcon icon="fa-solid fa-bars" />}
              </button>
            </div>
            
            <div className={"md:flex flex-grow items-center" + (navbarOpen ? " block" : " hidden")}>
              <ul className="flex flex-col md:flex-row list-none ml-0 lg:ml-auto">
                <li className="nav-item">
                  {links}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}


export default Navbar