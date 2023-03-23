import React from "react";
import RestaurantFood from "./images/restauranfood.jpg";

function Header() {
    return (
        <>
            <header background-color="#495E57">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional  recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </article>
                <img src={RestaurantFood} height="497px" width="365px" alt="Restaurant food"/>
            </header>
        </>
    );
};

export default Header;