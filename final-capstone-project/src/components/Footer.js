import React from "react";
import Logo from "../images/Logo .svg";

const Footer = () => {
    return (
        <>
            <div style={{backgroundColor:"#495E57", display: "flex", justifyContent:"center", padding: "40px"}}>
                <img src={Logo} alt="Logo"/>
                <ul className="footerNav">
                    <h6>Doormat Navigation</h6>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/reserve">Reservations</a>
                    </li>
                    <li>
                        <a href="/delivery">Order Online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
                <ul className="footerNav">
                    <h6>Contact</h6>
                    <li>
                        <a href="/contact">Address</a>
                    </li>
                    <li>
                        <a href="/contact">Phone Number</a>
                    </li>
                    <li>
                        <a href="/contact">Email</a>
                    </li>
                </ul>
                <ul className="footerNav">
                    <h6>Social Media Links</h6>
                    <li>
                        <a href="facebook.com">Facebook</a>
                    </li>
                    <li>
                        <a href="instagram.com">Instagram</a>
                    </li>
                    <li>
                        <a href="youtube.com">YouTube</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Footer;