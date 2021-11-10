import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalPrice = state.totalPrice + (action.item.price * action.item.amount);
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }
    else if (action.type === 'REMOVE') {
        const updatedItems = [];
        const updatedTotalPrice = state.totalPrice - action.item.price;
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }
    return defaultCartState;
}

const CartProvider = props => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItem = item => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItem = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    return <CartContext.Provider
        value={{
            items: cartState.items,
            totalPrice: cartState.totalPrice,
            addItem,
            removeItem
        }}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;