import React from "react";
import Review from "./Review.js";


const Testimonials = () => {
    const reviews = [
        {
            name: "John",
            image: "https://i.pravatar.cc/150?img=7",
            rating: "5/5",
            comment: "Incredible food, and a truly incredible attention to every detail."
        },
        {
            name: "Amy",
            image: "https://i.pravatar.cc/150?img=5",
            rating: "4.5/5",
            comment: "Amazing service and a wonderful atmosphere."
        },
        {
            name: "Giacomo",
            image: "https://i.pravatar.cc/150?img=11",
            rating: "5/5",
            comment: "It's like being back in Italy!"
        },
        {
            name: "Lilly",
            image: "https://i.pravatar.cc/150?img=9",
            rating: "4.9/5",
            comment: "What an experience! I bring all my friends here."
        }
    ];
    return (
        <>
            <div id="testimonials">
                <h2 style={{justifyContent:"center", fontSize: "48pt"}}>Testimonials</h2>
                {reviews.map(review => (
                <Review name={review.name} image={review.image} rating={review.rating} comment={review.comment} key={review.name}/>
                ))};
            </div>
        </>
    );
};

export default Testimonials;