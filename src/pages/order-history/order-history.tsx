import CardOrder from '../../components/card-order/card-order';
import styles from './order-history.module.css';

function OrderHistory() {

  return (
    <ul className={styles.cardsOrderList}>
      <CardOrder orderNumber='#034535' orderDate='2024-06-02T18:33:32.877Z' orderName='Death Star Starship Main бургер' orderStatus='Создан' />
      <CardOrder orderNumber='#034537' orderDate='2024-06-03T13:33:32.877Z' orderName='Death Star Starship Main бургер' orderStatus='Готовится' />
      <CardOrder orderNumber='#034543' orderDate='2024-06-04T17:33:32.877Z' orderName='Death Star Starship Main бургер' orderStatus='Отменён' />
    </ul>
  )
};

export default OrderHistory;
