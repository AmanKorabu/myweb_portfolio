import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    // .................................
    const [showNav, setShowNav] = useState(false);
    const hndlMenu = () => {
        setShowNav(!showNav);
    }
    // .................................
    return (
        <header>
           <Link to="/" onClick={() => setShowNav(false)} style={{textDecoration: 'none', color: 'white' ,hover: {color: 'gray'}}}><h1>My Portfolio</h1></Link> 
            <nav className={showNav ? 'mobile' : 'web'}>
                <Link to="/" onClick={() => setShowNav(false)}>Home</Link>
                <Link to="/projects" onClick={() => setShowNav(false)}>Projects</Link>
                <Link to="/certificate" onClick={() => setShowNav(false)}>Certification</Link>
                <Link to="/about" onClick={() => setShowNav(false)}>About</Link>
                <Link to="/contact" onClick={() => setShowNav(false)}>Contact</Link>
            </nav>
   
            <div className="hamburg">
                <GiHamburgerMenu className="hamburger" size={30} color='white' onClick={hndlMenu} />


            </div>
        </header>
    )
}

export default Navbar
