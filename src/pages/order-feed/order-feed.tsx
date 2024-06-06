import CardOrder from '../../components/card-order/card-order';
import OrderNumber from './order-number';
import styles from './order-feed.module.css';

function OrderFeed() {

  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.title}>Лента заказов</h1>
        <ul className={styles.cardsOrderList}>
          <CardOrder orderNumber='#034535' orderDate='2024-06-02T18:33:32.877Z' orderName='Death Star Starship Main бургер' orderStatus='Создан' />
          <CardOrder orderNumber='#034537' orderDate='2024-06-03T13:33:32.877Z' orderName='Death Star Starship Main бургер' orderStatus='Готовится' />
          <CardOrder orderNumber='#034543' orderDate='2024-06-04T17:33:32.877Z' orderName='Death Star Starship Main бургер' orderStatus='Отменён' />
          <CardOrder orderNumber='#034537' orderDate='2024-06-03T13:33:32.877Z' orderName='Death Star Starship Main бургер' orderStatus='Готовится' />
          <CardOrder orderNumber='#034543' orderDate='2024-06-04T17:33:32.877Z' orderName='Death Star Starship Main бургер' orderStatus='Отменён' />
        </ul>
        <div className={styles.orderInfo}>
          <div className={styles.orderStatus}>
            <div className={styles.orderNumberContainer}>
              <h3 className={styles.heading}>Готовы:</h3>
              <div className={styles.orderNumberList}>
                <OrderNumber orderNumber='034523' orderStatus='Готов' />
                <OrderNumber orderNumber='034524' orderStatus='Готов' />
                <OrderNumber orderNumber='034525' orderStatus='Готов' />
                <OrderNumber orderNumber='034523' orderStatus='Готов' />
                <OrderNumber orderNumber='034524' orderStatus='Готов' />
                <OrderNumber orderNumber='034525' orderStatus='Готов' />
              </div>
            </div>
            <div className={styles.orderNumberContainer}>
              <h3 className={styles.heading}>В работе:</h3>
              <div className={styles.orderNumberList}>
                <OrderNumber orderNumber='034523' orderStatus='В работе' />
                <OrderNumber orderNumber='034524' orderStatus='В работе' />
                <OrderNumber orderNumber='034525' orderStatus='В работе'/>
                <OrderNumber orderNumber='034523' orderStatus='В работе'/>
              </div>
            </div>
          </div>
          <h3 className={styles.quantityHeading}>Выполнено за все время:</h3>
          <p className={styles.orderQuantity}>{'28752'}</p>
          <h3 className={styles.quantityHeading}>Выполнено за сегодня:</h3>
          <p className={styles.orderQuantity}>{'138'}</p>
        </div>
      </div>
    </section>
  )
};

export default OrderFeed;
