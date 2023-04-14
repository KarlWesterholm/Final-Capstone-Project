import React from "react";
import Logo from "../images/Logo .svg";
import { Link } from "react-router-dom"


const Nav = () => {
    return(
    <>
        <nav>
            <img src={Logo} alt="Little Lemon Logo" height="40px" width="auto"/>
            <ul id="navlinks">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/oops">About</Link>
                </li>
                <li>
                    <Link to="/oops">Menu</Link>
                </li>
                <li>
                    <Link to="/reserve">Reservations</Link>
                </li>
                <li>
                    <Link to="/oops">Order Online</Link>
                </li>
                <li>
                    <Link to="/oops">Login</Link>
                </li>
            </ul>
        </nav>
    </>
    )
};

export default Nav;