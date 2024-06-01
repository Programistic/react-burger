import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TIngredient } from '../../types/ingredient';
import CardStyles from './card.module.css';

type TCardProps = {
  card: TIngredient,
};

const Card = ({ card }: TCardProps) => {

  const location = useLocation();

  const [{isDrag}, dragRef] = useDrag({
    type: 'card',
    item: card,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    }),
  });

  return (
    <Link to={`/ingredients/${card._id}`} key={card._id} state={{background: location}} ref={dragRef}>
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
