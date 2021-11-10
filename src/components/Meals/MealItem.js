import "./MealItem.css"
import React from "react";
import MealItemForm from "./MealItemForm";

const MealItem = props => {
    return <div className={'meal ' + props.id}>
        <h3>{props.name}</h3>
        <p className='description'>{props.description}</p>
        <label className='price'>{props.price}</label>
        <MealItemForm meal={props.meal}></MealItemForm>
    </div>
}

export default MealItem;