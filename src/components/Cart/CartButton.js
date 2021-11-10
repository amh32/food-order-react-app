import "./CartButton.css";
import React, { useContext, useState } from "react";

import CartIcon from "./CartIcon";
import Cart from "./Cart";
import CartContext from "../../store/cart-context";

const CartButton = props => {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const toggleCart = () => {
        setCartIsOpen(isOpen => !isOpen);
        console.log('cart is open: ' + cartIsOpen);
    }

    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;
    const cartLenght = cartItems.reduce((totalAmount, item) => {
        return totalAmount + item.amount;
    }, 0);

    return <>
        {cartIsOpen && <Cart toggleCart={toggleCart} items={cartItems} />}
        <button className='button' onClick={toggleCart}>

            <span className='icon'><CartIcon /></span>
            <span>Your Cart</span>
            <span className='badge'>{cartLenght}</span>
        </button>

    </>
}

export default CartButton