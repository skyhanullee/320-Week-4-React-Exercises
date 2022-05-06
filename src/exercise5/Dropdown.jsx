import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export default function Dropdown({ header, children }) {
  return (
    <div className="Dropdown">
      <div className="Dropdown__header">{header}</div>
      <div className="Dropdown__content">{children}</div>
    </div>
  );
}

Dropdown.propTypes = {
    header: PropTypes.any.isRequired
};
