import React from "react";
import Logo from "./images/Logo .svg";
{/* import { Box, HStack } from "@chakra-ui/react"; */}


function Nav() {
    return(
    <>
        <nav>
            <img src={Logo} alt="Little Lemon Logo" height="40px" width="auto"/>
            <ul id="navlinks">
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
        </nav>
    </>
    )
};

export default Nav;