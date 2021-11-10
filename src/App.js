// import './App.css';
import React from 'react';
import Header from './components/Header/Header.js';
import AvailableMeals from './components/Meals/AvailableMeals.js';
import MealsSummary from './components/Meals/MealsSummary.js';

function App() {
  return <div className="App">
    <Header />
    <MealsSummary />
    <AvailableMeals />
  </div>
}

export default App;
