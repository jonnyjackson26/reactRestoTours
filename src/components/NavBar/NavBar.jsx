import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './NavBar.css'; // Import CSS file for styling

const NavBar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/" className="logo-link"><img className='logo' src="/src/assets/logo.png" alt="Logo" /></Link>

                <nav>
                    <div className="menu-toggle" id="mobile-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="nav-list">
                        <li><Link to="/about-us" className="nav-link">About Us</Link></li>
                        <li><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li><Link to="/tours" className="nav-link">Our Tours</Link></li>
                        <li><Link to="/faq" className="nav-link">FAQ</Link></li>
                        <li><Link to="/register" className="nav-link">Register</Link></li>

                        {/* Uncomment and modify as needed for dropdown menu */}
                        {/* <li className="dropdown">
                            <Link to="/our-tours" className="nav-link dropbtn">Our Tours</Link>
                            <div className="dropdown-content">
                                <Link to="/our-tours#kirtland" className="nav-link">Kirtland</Link>
                                <Link to="/our-tours#youth-tours" className="nav-link">Youth Tours</Link>
                            </div>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
