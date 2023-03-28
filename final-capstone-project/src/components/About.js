import React from "react";
import MarioAdrianA from "../images/Mario and Adrian A.jpg";
import MarioAdrianB from "../images/Mario and Adrian b.jpg";

function About() {
    return(
        <>
            <article id="about">
                <div>
                    <h1 style={{textShadow:"2px 2px 4px #495E57"}}>Little Lemon</h1>
                    <h2 style={{color:"#333333"}}>Chicago</h2>
                    <p>Little Lemon was started by Mario and Adrian back in 1985, and has since become a local favorite spot for people of all walks of life.</p>
                </div>
                <img src={MarioAdrianB} alt="Mario and Adrian 2" style={{width:"228px", height:"324px", zIndex:"1", margin: "50px -15px -15px 10px", objectFit:"cover", objectPosition:"80% 100%"}}/>
                <img src={MarioAdrianA} alt="Mario and Adrian 1" style={{width:"228px", height:"324px", zIndex:"0", margin: "-15px 10px auto -15px", objectFit:"cover", objectPosition:"70% 100%"}}/>
            </article>
        </>
    );
};

export default About;