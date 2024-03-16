import CardStyles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { propTypesForData } from '../../utils/constants';
import { count } from './../../utils/test-data';



function Card({image, price, title, card, onCardClick}) {

  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className={CardStyles.card} onClick={handleClick}>
      <img src={image} className={CardStyles.image} alt={title} />
      <Counter count={count} size={'default'} extraClass={'m-1'} />
      <div className={CardStyles.innerContainer}>
        <span className={CardStyles.productPrice}>{price}</span>
        <CurrencyIcon type={'primary'} />
      </div>
      <h3 className={CardStyles.title}>{title}</h3>
    </li>
  );
}

export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  card: propTypesForData,
};
