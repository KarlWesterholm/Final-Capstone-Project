import React from "react";
import Review from "./Review.js";


function Testimonials() {
    const johnImg = "https://i.pravatar.cc/150?img=7"
    const amyImg = "https://i.pravatar.cc/150?img=5"
    const giacomoImg = "https://i.pravatar.cc/150?img=11"
    const lillyImg = "https://i.pravatar.cc/150?img=9"
    return (
        <>
            <div id="testimonials">
                <h2 style={{justifyContent:"center", fontSize: "48pt"}}>Testimonials</h2>
                <Review name="John" image={johnImg} rating={"5/5"} review="Incredible food, and a truly incredible attention to every detail."/>
                <Review name="Amy" image={amyImg} rating={"4.5/5"} review="Amazing service and a wonderful atmosphere. "/>
                <Review name="Giacomo" image={giacomoImg} rating={"5/5"} review="It's like being back in Italy!"/>
                <Review name="Lilly" image={lillyImg} rating={"4.9/5"} review="What an experience! I bring all my friends here."/>
            </div>
        </>
    );
};

export default Testimonials;