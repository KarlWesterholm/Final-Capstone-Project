import React from "react";
import Header from './Header.js';
import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import About from "./About.js";

const HomePage = () => {
    return (
    <>
        <Header/>
        <Specials />
        <Testimonials/>
        <About />
    </>
    );
};

export default HomePage;