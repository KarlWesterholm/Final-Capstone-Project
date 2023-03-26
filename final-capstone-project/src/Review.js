import React from "react";
import { BsStarFill } from "react-icons/bs";

function Review(props) {
    const articleStyle = {
        backgroundColor: "#EDEFEE",
        borderRadius: "16px",
        display: "grid",
        justfiyContent: "center",
        textAlign: "center",
        maxWidth: "250px",
        margin: "auto",
        alignItems: "flex-start"
    }
    return (
        <>
            <article style={articleStyle}>
                <h4>{props.rating} <BsStarFill/> </h4>
                <img src={props.image} alt={props.name} style={{margin: "auto"}}/>
                <h4>{props.name}</h4>
                <h5>{props.review}</h5>
            </article>
        </>
    );
};

export default Review;