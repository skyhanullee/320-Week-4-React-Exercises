import React from 'react';
import PropTypes from 'prop-types';

function Orchid({ borderColor, orchidImageUrl, orchidAlt }) {
  return (
    <div>
      <img src={orchidImageUrl} alt={orchidAlt} style={{border: `${borderColor}`}} />
    </div>
  )
}

export default Orchid

Orchid.propTypes = {
  // PropTypes.oneOf allows us to define an enumeration of values
  borderColor: PropTypes.string.isRequired,
  orchidImageUrl: PropTypes.string.isRequired,
  orchidAlt: PropTypes.string.isRequired
};