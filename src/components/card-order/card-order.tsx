import { Link, useLocation } from 'react-router-dom';
import { FC } from 'react';
import IngredientPreview from '../ingredient-preview/ingredient-preview';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppSelector } from '../../hooks/hooks';
import { shallowEqual } from 'react-redux';
import { TIngredient } from '../../types/ingredient';
import uuid from 'react-uuid';
import styles from './card-order.module.css';

interface ICardOrderProps {
  orderNumber: string;
  orderDate: string;
  orderName: string;
  orderStatus: string;
  ingredientsId: string[];
}

const CardOrder: FC<ICardOrderProps> = ({orderNumber, orderDate, orderName, orderStatus, ingredientsId}) => {
  
  const location = useLocation();

  const { ingredients } = useAppSelector(store => ({ingredients: store.data.data}), shallowEqual);

  let totalCost = 0;

  ingredientsId.forEach(id => {
    const ingredient = ingredients.find((item: TIngredient) => item._id === id);
    if (ingredient) {
      totalCost = totalCost + ingredient.price;
    };
  });


  let statusColor = 'f2f2f3';
  let status;

  if (orderStatus === ('done' || 'created')) {
    statusColor = '#00cccc';
    status = 'Готов';
  } else if (orderStatus === 'pending') {
    status = 'Готовится';
  } else if (orderStatus === 'none') {
    status = '';
  } else {
    statusColor = '#e52b1a';
    status = 'Отменён';
  };

  let index = 0;

  const ingredientPreviewList = ingredientsId.map(id => {
    if (index < 6) {
      return (
        <IngredientPreview
          id={id}
          key={uuid()}
          index={index++}
          count={ingredientsId.length-1}
        />
      )
    };
    return null;
  });

  return (
    <Link to={`/profile/orders/`} key={orderNumber} state={{background: location}} className={styles.orderLink}>
      <li className={styles.card}>
        <div className={styles.innerContainer}>
          <span className={styles.orderNumber}>{orderNumber}</span>
          <FormattedDate date={new Date(orderDate)} className={styles.orderDate} />
        </div>
        <h2 className={styles.orderName}>{orderName}</h2>
        <span className={styles.orderStatus} style={{'--color': statusColor} as string & number}>{status}</span>
        <div className={styles.innerContainer}>
          <ul className={styles.ingredientsList}>
            {ingredientPreviewList}
          </ul>
          <div className={styles.priceContainer}>
            <span className={styles.productPrice}>{totalCost}</span>
            <div className={styles.currencyIconLarge}></div>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default CardOrder;
