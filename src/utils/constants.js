import PropTypes from 'prop-types';

export const dataURL = `${window.location.protocol}//norma.nomoreparties.space/api/ingredients`;

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
};

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
