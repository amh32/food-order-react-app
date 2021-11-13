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

    const addHandler = (item) => {
        const modifiedItem = {...item, amount: 1};
        ctx.addItem(modifiedItem);
    }

    const removeHandler = (id) => {
        ctx.removeItem(id);
    }

    const itemList = items.map(item => {
        

        return <CartItem 
            key={item.id}
            id={item.id}
            name={item.name}
            summary={item.description}
            price={item.price}
            amount={item.amount}
            onAdd={addHandler.bind(null, item)}
            onRemove={removeHandler.bind(null, item.id)}
            />
    });

    return <Modal className='cart' toggle={toggleCart}>
        <ul className='cart-items'>{itemList}</ul>
        <div className='total'>Total Price: {totalPrice}</div>
        <div className='actions'>
            <button className='button--alt' onClick={toggleCart}>Back</button>
            <button className='solid-button'>Order</button>
        </div>
    </Modal>
}

export default Cart;