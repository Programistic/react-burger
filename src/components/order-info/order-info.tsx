import { shallowEqual } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientInfo from "./ingredient-info";
import styles from './order-info.module.css';

const OrderInfo = () => {

  const orderNumber = '#034533';
  const orderName ='Black Hole Singularity острый бургер';
  const orderDate = '2024-06-02T18:33:32.877Z';
  const totalCost = 510;

  let orderStatus = 'Выполнен';
  let orderStatusColor;

  if (orderStatus === 'Выполнен') {
    orderStatusColor = '#00cccc'
  } else if (orderStatus === ('Готовится' || 'Создан')) {
    orderStatusColor = '#f2f2f3';
  } else if (orderStatus === 'Отменён') {
    orderStatusColor = '#e52b1a';
  };

  return (
    <div className={styles.container}>
      <span className={styles.orderNumber}>{orderNumber}</span>
      <h2 className={styles.orderName}>{orderName}</h2>
      <span className={styles.orderStatus} style={{'--color': orderStatusColor} as string & number}>{orderStatus}</span>
      <h3 className={styles.orderContentHeading}>Состав:</h3>
      <ul className={styles.ingredientsList}>
        <IngredientInfo id = "643d69a5c3f7b9001cfa093d" />
        <IngredientInfo id = "643d69a5c3f7b9001cfa093d" />
        <IngredientInfo id = "643d69a5c3f7b9001cfa093d" />
        
      </ul>
      <div className={styles.innerContainer}>
        <FormattedDate date={new Date(orderDate)} className={styles.orderDate} />
        <div className={styles.priceContainer}>
          <span className={styles.productPrice}>{totalCost}</span>
          <div className={styles.currencyIconLarge}></div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
