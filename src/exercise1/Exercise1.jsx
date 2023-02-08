import React from 'react';
import CoffeeCard from './CoffeeCard';

export default function Exercise1() {
  const coffees = [
    {drinkName: 'espresso', price: 4},
    {drinkName: 'latte', price: 4},
    {drinkName: 'mocha', price: 4},
    {drinkName: 'americano', price: 4},
  ];

  const coffeeList = coffees.map((coffee) => {
    return (
      <CoffeeCard
        drinkName={coffee.drinkName}
        price={coffee.price}
      />
    )
  });
  
  return (
    <div>
      <h2>Exercise 1</h2>
      <p>
        In <code>Exercise1.jsx</code>, there is a component called <code>CoffeeCard.jsx</code> that is imported, but not used.
      </p>
      <ol>
        <li>Render this component four times in <code>Exercise1.jsx</code> (one for each coffee drink).</li>
        <li>Pass in the correct props.</li>
        {coffeeList}
      </ol>
    </div>
  );
}