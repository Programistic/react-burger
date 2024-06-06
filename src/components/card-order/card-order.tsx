import { useAppSelector } from '../../hooks/hooks';
import { shallowEqual } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FC } from 'react';
import IngredientPreview from '../ingredient-preview/ingredient-preview';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './card-order.module.css';

interface ICardOrderProps {
  orderNumber: string,
  orderDate: string,
  orderName: string,
  orderStatus: string,
};

const CardOrder: FC<ICardOrderProps> = ({orderNumber, orderDate, orderName, orderStatus}) => {
  
  const location = useLocation();

  const totalCost = 480;

  let orderStatusColor;

  if (orderStatus === 'Создан') {
    orderStatusColor = '#f2f2f3'
  } else if (orderStatus === 'Готовится') {
    orderStatusColor = '#00cccc';
  } else if (orderStatus === 'Отменён') {
    orderStatusColor = '#e52b1a';
  };

  return (
    <Link to={`/profile/orders/`} key={orderNumber} state={{background: location}} className={styles.orderLink}>
      <li className={styles.card}>
        <div className={styles.innerContainer}>
          <span className={styles.orderNumber}>{orderNumber}</span>
          <FormattedDate date={new Date(orderDate)} className={styles.orderDate} />
        </div>
        <h2 className={styles.orderName}>{orderName}</h2>
        <span className={styles.orderStatus} style={{'--color': orderStatusColor} as string & number}>{orderStatus}</span>
        <div className={styles.innerContainer}>
          <ul className={styles.ingredientsList}>
            <IngredientPreview id = "643d69a5c3f7b9001cfa093d" count={8} index={1} />
            <IngredientPreview id = "643d69a5c3f7b9001cfa093d" count={8} index={2} />
            <IngredientPreview id = "643d69a5c3f7b9001cfa093d" count={8} index={3} />
            <IngredientPreview id = "643d69a5c3f7b9001cfa093d" count={8} index={4} />
            <IngredientPreview id = "643d69a5c3f7b9001cfa0947" count={8} index={5} />
            <IngredientPreview id = "643d69a5c3f7b9001cfa0947" count={8} index={6} />
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
