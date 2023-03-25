import React from "react";
import Review from "./Review.js";


function Testimonials() {
    return (
        <>
            <div id="testimonials">
                <h2 style={{justifyContent:"center"}}>Testimonials</h2>
                <Review name="John" image={""} rating={"5/5"} review="Incredible food, and a truly incredible attention to every detail."/>
                <Review name="Amy" image={""} rating={"4.5/5"} review="Amazing service and a wonderful atmosphere. "/>
                <Review name="Giacomo" image={""} rating={"5/5"} review="It's like being back in Italy!"/>
                <Review name="Lilly" image={""} rating={"4.9/5"} review="What an experience! I bring all my friends here."/>
            </div>
        </>
    );
};

export default Testimonials;