import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" target="_blank" rel="noopener noreferrer">
                    {/* Your logo */}
                    <img src={`${process.env.PUBLIC_URL}/images/lagos-flow.png`} alt="nav-icon" style={{ height: "30px" }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-1">
                            <NavLink exact activeClassName="active" to="/home">HOME</NavLink>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <NavLink exact activeClassName="active" target='_blank' to="/map">MAP</NavLink>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <NavLink exact activeClassName="active" target='_blank' to="/about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <NavLink exact activeClassName="active" target='_blank' to="/contact">CONTACT</NavLink>
                        </li>
                        <li className="nav-item ms-1">
                            <NavLink exact activeClassName="active" target='_blank' to="/faq">FAQ</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
