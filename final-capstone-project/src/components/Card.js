import React from "react";
import {BsArrowRight} from "react-icons/bs";

const Card = (props) => {
    return (
        <>
            <article id="card">
                <img src={props.image} alt={props.alt} style={{width:"260px", height:"200px"}}/>
                <p>{props.text}</p>
                <a href="/delivery">Order for Delivery <BsArrowRight /></a>
            </article>
        </>
    );
};

export default Card;