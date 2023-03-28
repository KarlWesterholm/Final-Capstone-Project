import React from "react";
import Logo from "../images/Logo .svg";


const Nav = () => {
    return(
    <>
        <nav>
            <img src={Logo} alt="Little Lemon Logo" height="40px" width="auto"/>
            <ul id="navlinks">
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
        </nav>
    </>
    )
};

export default Nav;