import React from "react";
import Logo from "./images/Logo .svg";

function Footer() {
    return (
        <>
            <div style={{backgroundColor:"#495E57", display: "flex", justifyContent:"center", padding: "40px"}}>
                <img src={Logo} alt=""/>
                <ul className="footerNav">
                    <h6>Doormat Navigation</h6>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Menu</a>
                    </li>
                    <li>
                        <a href="">Reservations</a>
                    </li>
                    <li>
                        <a href="">Order Online</a>
                    </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                </ul>
                <ul className="footerNav">
                    <h6>Contact</h6>
                    <li>
                        <a href="">Address</a>
                    </li>
                    <li>
                        <a href="">Phone Number</a>
                    </li>
                    <li>
                        <a href="">Email</a>
                    </li>
                </ul>
                <ul className="footerNav">
                    <h6>Social Media Links</h6>
                    <li>
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="">YouTube</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Footer;