import React from "react";
import MarioAdrianA from "./images/Mario and Adrian A.jpg";
import MarioAdrianB from "./images/Mario and Adrian b.jpg";

function About() {
    return(
        <>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon was started by Mario and Adrian back in 1985, and has since become a local favorite spot for people of all walks of life.</p>
            <img src={MarioAdrianA} alt="Mario and Adrian 1" style={{width:"228px", height:"324px", zIndex:"1"}}/>
            <img src={MarioAdrianB} alt="Mario and Adrian 2" style={{width:"228px", height:"324px"}}/>
        </>
    );
};

export default About;