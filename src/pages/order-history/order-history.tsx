import OrderHistoryStyles from './order-history.module.css';

function OrderHistory() {

  return (
    <div className={OrderHistoryStyles.container}>
      <h2 className={OrderHistoryStyles.title}>История заказов</h2>
    </div>
  )
};

export default OrderHistory;
