import React from 'react';
import PropTypes from 'prop-types';
// This is lodash, a handy JavaScript utility library that has a `capitalize` function
import capitalize from 'lodash/capitalize';

import './CoffeeCard.css';

export default function CoffeeCard({ drinkName, price }) {
  const getCoffeeImage = () => {
    switch(drinkName) {
      case 'espresso':
        // CC BY-SA 4.0 - Lemone
        return 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg';
      case 'latte':
        // CC BY-SA 3.0 - Takeaway
        return 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg';
      case 'mocha':
        // CC 3.0 - Million Moments
        return 'https://upload.wikimedia.org/wikipedia/commons/7/79/Mocha.jpg';
      case 'americano':
        // CC BY-SA 2.0 - Ewan Munro
        return 'https://upload.wikimedia.org/wikipedia/commons/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg';
      default:
        return null;
    }
  };

  return (
    <div className="CoffeeCard" data-testid="CoffeeCard">
      {/* The className syntax here is BEM (Block Element Modifier syntax)
        You can read more about it here:
        http://getbem.com/naming/
      */}
      <img
        className="CoffeeCard__image"
        src={getCoffeeImage()}
        alt={drinkName}
      />
      <h3 className="CoffeeCard__title">{capitalize(drinkName)}</h3>
      <p className="CoffeeCard__description">Cost: ${price.toFixed(2)}</p>
    </div>
  );
}

CoffeeCard.propTypes = {
  // PropTypes.oneOf allows us to define an enumeration of values
  drinkName: PropTypes.oneOf(['espresso', 'latte', 'mocha', 'americano']).isRequired,
  price: PropTypes.number.isRequired
};