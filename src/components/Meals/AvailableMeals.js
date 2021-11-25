import "./AvailableMeals.css"
import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";
import Card from "../../UI/Card/Card";

const AvailableMeals = props => {
    const [meals, setMeals] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);
    function errorHandler() {
        // setError("something went wrong");
        throw new Error("something went wrong");
    }



    useEffect(() => {
        setLoading(true);

        async function fetchArray(url) {
            return fetch(url).then((response) => {
                return response.json();
            }).catch(errorHandler).then((data) => {
                const array = [];
                for (const key in data) array.push(data[key]);
                return array;
            });
        }

        async function fetchMeals() {
            const url = "https://react-http-82519-default-rtdb.firebaseio.com/meals.json";
            const tempmeals = await fetchArray(url);
            setMeals(tempmeals);
            return tempmeals;
        }
        
        fetchMeals().catch(error => {
            setLoading(false);
            setError(error.message);
        });

        setLoading(false);
        return clearTimeout();
    }, []);

    if (loading) return <section className='loading'>
        <p>Loading</p>
    </section>

    if (error) return <section className='error'>
        <p>{error}</p>
    </section>

    const mealList = meals.map(meal => {
        return <li key={meal.id}><MealItem
            meal={meal}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        /></li>
    });
    return <Card className='meals'>
        <ul>{mealList}</ul>
    </Card>
}

export default AvailableMeals;