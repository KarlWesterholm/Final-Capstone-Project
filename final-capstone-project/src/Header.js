import React from "react";
import RestaurantFood from "./images/restauranfood.jpg";

function Header() {
    return (
        <>
            <header>
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p style={{color:"#EDEFEE"}}>We are a family owned Mediterranean restaurant, focused on traditional  recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </article>
                <img src={RestaurantFood} style={{height:"497px", width:"365px", marginBottom:"10px", alt:"Restaurant food"}}/>
            </header>
        </>
    );
};

export default Header;