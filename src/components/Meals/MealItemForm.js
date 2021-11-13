import "./MealItemForm.css"
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Input from "../../UI/Input/Input";
import { useRef } from "react/cjs/react.development";

const MealItemForm = props => {
    const [valid, setValid] = useState(true);
    const inputRef = useRef();

    let meal = props.meal;
    const id = meal.id;

    const cartCtx = useContext(CartContext);
    const addToCart = cartCtx.addItem;

    const submissionHandler = event => {
        event.preventDefault();
        const enteredValue = inputRef.current.value;
        const enteredAmount = +enteredValue;
        if (enteredValue.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setValid(false);
            return;
        }
        
        meal = { ...props.meal, amount: enteredAmount };
        addToCart(meal);
    };
    return <form className='form' onSubmit={submissionHandler}>
        <Input className={id}
            label="Amount"
            input={{
                ref: inputRef,
                id: 'amount ' + id,
                type: 'number',
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1
            }} />
        <button>Add</button>
        {!valid && <p>Invalid amount</p>}
    </form>
}

export default MealItemForm;