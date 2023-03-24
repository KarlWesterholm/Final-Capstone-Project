import React from "react";
import { BsStarFill } from "react-icons/bs";

function Review(props) {
    const articleStyle = {
        backgroundColor: "#EDEFEE",
        borderRadius: "16px",
        display: "grid"
    }
    return (
        <>
            <article style={articleStyle}>
                <h4>{props.rating} <BsStarFill/> </h4>
                <img src={props.image} alt={props.name} height="" width=""/>
                <h4>{props.name}</h4>
                <h5>{props.review}</h5>
            </article>
        </>
    );
};

export default Review;