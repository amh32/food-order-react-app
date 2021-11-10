import "./Cart.css"
import React, { useContext } from "react";
import Modal from "../../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const toggleCart = props.toggleCart;
    const ctx = useContext(CartContext);
    const items = ctx.items;
    const totalPrice = `$${ctx.totalPrice.toFixed(2)}`;

    const addHandler = item => {
    }

    const removeHandler = id => {
    }

    let estimatedPrice = 0;
    items.forEach(item => {
        estimatedPrice += (item.price * item.amount);
    });

    const itemList = items.map(item => {
        return <li>
            <CartItem 
            key={item.id}
            name={item.name}
            summary={item.description}
            price={item.price}
            amount={item.amount}
            onAdd={addHandler}
            onRemove={removeHandler}
            />
        </li>
    });

    return <Modal className='cart' toggle={toggleCart}>
        <ul className='cart-items'>{itemList}</ul>

        <div className='total'>Estimated Total: {estimatedPrice}</div>
        <div className='total'>Actual Total: {totalPrice}</div>
        <div className='actions'>
            <button className='button--alt' onClick={toggleCart}>Back</button>
            <button className='solid-button'>Order</button>
        </div>
    </Modal>
}

export default Cart;