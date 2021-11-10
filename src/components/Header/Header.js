import React from "react";
import "./Header.css";
import mealImage from "./meals.jpg";
import CartButton from "../Cart/CartButton";

const Header = props => {
    return <>
        <header className='header'>
            <h1>Hastie's Food Website</h1>
            <CartButton />
        </header>
        <div className='main-image'>
            <img src={mealImage}  alt='buffet'/>
        </div>
    </>
}

export default Header;