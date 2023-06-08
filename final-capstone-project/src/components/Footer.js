import React from "react";
import Logo from "../images/Logo .svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <ul className="footerNav">
                    <h6>Doormat Navigation</h6>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/reserve">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/delivery">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <ul className="footerNav">
                    <h6>Contact</h6>
                    <li>
                        <Link to="/contact">Address</Link>
                    </li>
                    <li>
                        <Link to="/contact">Phone Number</Link>
                    </li>
                    <li>
                        <Link to="/contact">Email</Link>
                    </li>
                </ul>
                <ul className="footerNav">
                    <h6>Social Media Links</h6>
                    <li>
                        <Link to={{ pathname: "https://facebook.com" }}>Facebook</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "https://instagram.com" }}>Instagram</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: "https://youtube.com" }}>YouTube</Link>
                    </li>
                </ul>
                <img src={Logo} alt="Logo"/>
            </footer>
        </>
    );
};

export default Footer;