import React from "react";
import Card from "./Card.js";
import GreekSalad from "../images/greek salad.jpg";
import Bruchetta from "../images/Bruchetta.png";
import LemonDessert from "../images/lemon dessert.jpg";
import { Link } from "react-router-dom";

/* Hero section for specials, calling Card component for each individual special card */

const Specials = () => {
    const specialcards = [
        {
            image: GreekSalad,
            text: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            alt: "Greek Salad"
        },
        {
            image: Bruchetta,
            text: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
            alt: "Bruchetta"
        },
        {
            image: LemonDessert,
            text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is an authentic as can be imagined. ",
            alt: "Lemon Dessert"
        }
    ]
    return (
        <>
            <article id="specialHeader">
                <h3>This week's specials!</h3>
                <Link to="/oops"><button type="button">View Menu</button></Link>
            </article>
            <article id="specials">
                {specialcards.map((special) => (
                    <Card image={special.image} text={special.text} alt={special.alt} key={special.alt}/>
                ))}
            </article>
        </>
    );
};

export default Specials;