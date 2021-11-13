import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const items = state.items;
        const newItem = action.item;
        const updatedTotalPrice = state.totalPrice + (newItem.price * newItem.amount);

        const itemIndex = items.findIndex(
            (item) => item.id === newItem.id
        );
        const existingItem = items[itemIndex];

        let updatedItem;
        let updatedItems;

        if (existingItem) {
            updatedItem = {
                ...existingItem,
                amount: existingItem.amount + newItem.amount
            }
            updatedItems = [...items];
            updatedItems[itemIndex] = updatedItem;
        } else updatedItems = items.concat(newItem);

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }
    else if (action.type === 'REMOVE') {
        const items = state.items;
        const totalPrice = state.totalPrice;
        const removedAmount = 1; //placeholder

        const itemIndex = items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = items[itemIndex];
        
        const updatedTotalPrice = totalPrice - (existingItem.price * removedAmount);
        const updatedItems = [...items];

        if (existingItem.amount - removedAmount < 1) {
            updatedItems.splice(itemIndex, 1);
        } else {
            let updatedItem = {
                ...existingItem,
                amount: existingItem.amount - removedAmount
            }
            updatedItems[itemIndex] = updatedItem;
        }

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
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItem = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
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