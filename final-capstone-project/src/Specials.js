import React from "react";
import Card from "./Card.js";
import GreekSalad from "./images/greek salad.jpg";
import Bruchetta from "./images/Bruchetta.png";
import LemonDessert from "./images/lemon dessert.jpg";

const Specials = () => {
    const greekText = "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.";
    const bruchettaText = "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ";
    const lemonText = "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is an authentic as can be imagined. ";
    return (
        <>
            <article id="specialHeader">
                <h3>This week's specials!</h3>
                <button>View Menu</button>
            </article>
            <article id="specials">
                <Card image={GreekSalad} text={greekText} alt="Greek Salad" />
                <Card image={Bruchetta} text={bruchettaText} alt="Bruchetta" />
                <Card image={LemonDessert} text={lemonText} alt="Lemon Dessert"/>
            </article>
        </>
    );
};

export default Specials;