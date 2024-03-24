import PropTypes from 'prop-types';
import React from 'react';

export const apiURL = `${window.location.protocol}//norma.nomoreparties.space/api`;
export const dataURL = `${apiURL}/ingredients`;
export const orderURL = `${apiURL}/orders`;

export const cardType = PropTypes.shape(
  {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }
);

export const DataContext = React.createContext();
