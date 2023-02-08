import React from 'react';
import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import Exercise2 from './Exercise2';
import Orchid from './Orchid';

describe('Exercise2', () => {
  it('should render an orchid', async () => {
    render(<Exercise2 />);

    const orchid = await screen.findByAltText('orchid');
    expect(orchid).toBeDefined();
  });

  it('should have a borderColor', async () => {
    render(<Exercise2 />);

    const orchid = await screen.findByAltText('orchid');
    expect(orchid.style[0]).toEqual('border');
  });

  it('should have the correct propTypes', () => {
    expect(Orchid.propTypes.borderColor).toEqual(PropTypes.string.isRequired);
  });
});

