import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="container">
                <Link to="/" className="logo-link">
                    <img className='logo' src="/src/assets/logo.png" alt="Logo" />
                </Link>

                <nav>
                    <div className="menu-toggle" id="mobile-menu" onClick={handleToggle}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
                        <li><Link to="/about-us" className="nav-link" onClick={handleToggle}>About Us</Link></li>
                        <li><Link to="/testimonials" className="nav-link" onClick={handleToggle}>Testimonials</Link></li>
                        <li><Link to="/contact" className="nav-link" onClick={handleToggle}>Contact</Link></li>
                        <li><Link to="/tours" className="nav-link" onClick={handleToggle}>Our Tours</Link></li>
                        <li><Link to="/faq" className="nav-link" onClick={handleToggle}>FAQ</Link></li>
                        <li><Link to="/register" className="nav-link" onClick={handleToggle}>Register</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
