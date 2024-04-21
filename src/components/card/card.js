import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import { cardType } from '../../utils/constants';
import { setCurrentIngredient } from '../../services/actions/current-ingredient';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardStyles from './card.module.css';

function Card({card, onCardClick}) {

  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = () => {
    dispatch(setCurrentIngredient(card));
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
    <Link to={`/ingredients/${card._id}`} key={card._id} state={{background: location}} ref={dragRef} onClick={handleClick}>
      <li className={CardStyles.card}>
        <img src={card.image} className={CardStyles.image} alt={card.name} />
        { card.count > 0 && <Counter count={card.count} size={'default'} extraClass={'m-2'} /> }
        <div className={CardStyles.innerContainer}>
          <span className={CardStyles.productPrice}>{card.price}</span>
          <CurrencyIcon type={'primary'} />
        </div>
        <h3 className={CardStyles.title}>{card.name}</h3>
      </li>
    </Link>
  );
}

export default Card;

Card.propTypes = {
  card: cardType.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
