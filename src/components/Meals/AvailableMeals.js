import "./AvailableMeals.css"
import React from "react";
import DUMMY_MEALS from "./dummy-meals.js"
import MealItem from "./MealItem";
import Card from "../../UI/Card/Card";

const AvailableMeals = props => {
    const meals = DUMMY_MEALS.map(meal => {
        return <li key={meal.id}>{<MealItem
            meal={meal}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />}</li>
    });
    return <Card className='meals'>
        <ul>{meals}</ul>
    </Card>
}

export default AvailableMeals;