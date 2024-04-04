import CardStyles from './card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { cardType } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { CURRENT_INGREDIENT_SET } from '../../services/actions/current-ingredient';
import { useDrag } from 'react-dnd';

function Card({card, counter, onCardClick}) {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({type: CURRENT_INGREDIENT_SET, card})
    onCardClick();
  };

  const {_id} = card;
  const [{isDrag}, dragRef] = useDrag({
    type: 'card',
    item: {_id},
    collect: monitor => ({
      isDrag: monitor.isDragging()
    }),
  });


  return (
    !isDrag &&
    <li className={CardStyles.card} onClick={handleClick} ref={dragRef} >
      <img src={card.image} className={CardStyles.image} alt={card.name} />
      <Counter count={counter} size={'default'} extraClass={'m-1'} />
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
