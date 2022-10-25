import React, {useState} from 'react';
import "./Navbar.scss";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <div className="navbar-wrapper">
        <h3 className="nav-logo">F.C</h3>
        <div className={`nav-items ${isOpen && "open"}`}>
            <a href=""> Home</a>
            <a href=""> Portfolio </a>
            <a href=""> Agency </a>
            <a href=""> Services </a>
            <a href=""> Journal </a>
            <a href=""> Contact </a>
        </div>
        <div className={`nav-menu ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="bar">

            </div>
        </div>
    </div>
}

export default Navbar;