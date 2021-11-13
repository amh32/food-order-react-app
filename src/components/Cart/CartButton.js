import "./CartButton.css";
import React, { useContext, useEffect, useState } from "react";

import CartIcon from "./CartIcon";
import Cart from "./Cart";
import CartContext from "../../store/cart-context";

const CartButton = props => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [btnHighlighted, setBtnHighlighted] = useState(false);

    const toggleCart = () => setCartIsOpen(open => !open);
    
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;
    const cartLenght = cartItems.reduce((totalAmount, item) => {
        return totalAmount + item.amount;
    }, 0);
    
    useEffect(() => {
        if (cartItems.length === 0) {
            return;
        }
        
        setBtnHighlighted(true);
        
        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);
        
        return () => {
            clearTimeout(timer)
        };
    }, [cartLenght]);
    
    const btnClassName = `button ${btnHighlighted ? 'bump' : ''}`;
    return <>
        {cartIsOpen && <Cart toggleCart={toggleCart} items={cartItems} />}
        <button className={btnClassName} onClick={toggleCart}>

            <span className='icon'><CartIcon /></span>
            <span>Your Cart</span>
            <span className='badge'>{cartLenght}</span>
        </button>

    </>
}

export default CartButton