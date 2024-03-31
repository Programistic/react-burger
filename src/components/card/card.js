import CardStyles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { cardType } from '../../utils/constants';
import { count } from './../../utils/test-data';
import { useDispatch } from 'react-redux';
import { CURRENT_INGREDIENT } from '../../services/actions/current-ingredient';

function Card({card, onCardClick}) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({type: CURRENT_INGREDIENT, card})
    onCardClick(card);
  };

  return (
    <li className={CardStyles.card} onClick={handleClick}>
      <img src={card.image} className={CardStyles.image} alt={card.name} />
      <Counter count={count} size={'default'} extraClass={'m-1'} />
      <div className={CardStyles.innerContainer}>
        <span className={CardStyles.productPrice}>{card.price}</span>
        <CurrencyIcon type={'primary'} />
      </div>
      <h3 className={CardStyles.title}>{card.name}</h3>
    </li>
  );
}

export default Card;

Card.propTypes = {
  card: cardType.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
