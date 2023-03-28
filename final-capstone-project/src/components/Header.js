import React from "react";
import RestaurantFood from "../images/restauranfood.jpg";

const Header = () => {
    return (
        <>
            <header>
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p style={{color:"#EDEFEE"}}>We are a family owned Mediterranean restaurant, focused on traditional  recipes served with a modern twist.</p>
                    <button href="/reserve">Reserve a Table</button>
                </article>
                <img src={RestaurantFood} alt={"Restaurant food"} style={{height:"497px", width:"365px", marginBottom:"10px"}}/>
            </header>
        </>
    );
};

export default Header;