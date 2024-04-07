import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { CURRENT_INGREDIENT_SET } from '../../services/actions/current-ingredient';
import { useDrag } from 'react-dnd';
import { cardType } from '../../utils/constants';
import PropTypes from 'prop-types';
import CardStyles from './card.module.css';

function Card({card, onCardClick}) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({type: CURRENT_INGREDIENT_SET, card})
    onCardClick();
  };

  const [{isDrag}, dragRef] = useDrag({
    type: 'card',
    item: card,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    }),
  });

  return (
    !isDrag &&
    <li className={CardStyles.card} onClick={handleClick} ref={dragRef} >
      <img src={card.image} className={CardStyles.image} alt={card.name} />
      <Counter count={card.count} size={'default'} extraClass={'m-2'} />
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
