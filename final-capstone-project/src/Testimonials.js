import React from "react";
import Review from "./Review.js";


function Testimonials() {
    return (
        <>
            <div id="testimonials">
                <h2>Testimonials</h2>
                <Review name="John" image={""} rating={"5/5"}/>
            </div>
        </>
    );
};

export default Testimonials;