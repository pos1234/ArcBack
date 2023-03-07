import React from "react"
import {NavLink} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <div className="navigation">
              <nav className="navbar navbar-expand-md sticky-top" id="navbar">
        <a href="/" className="navbar-brand">ArcBack</a>
        <button className="navbar-toggler toggler-icon" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Responsive">
                <span></span>
                <span></span>
                <span></span>
        </button>
        <div className="collapse navbar-collapse" id="Responsive">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" className="nav-link">Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/services" className="nav-link">Services</NavLink>
                </li>
                <li className="nav-item empty">
                    <NavLink to="/news" className="nav-link">News</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/clients" className="nav-link">Clients</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>
        </div>
    </nav> 
        </div>
    )
}

export default Navbar
