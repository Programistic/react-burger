import CardStyles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function Card({image, price, title}) {
  return (
    <li className={CardStyles.card}>
      <img src={image} className={CardStyles.image} alt={title} />
      <Counter count={''} size="default" extraClass="m-1" />
      <div className={CardStyles.innerContainer}>
        <span className={CardStyles.productPrice}>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={CardStyles.title}>{title}</h3>
    </li>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card;
