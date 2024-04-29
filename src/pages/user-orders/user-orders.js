import UserOrdersStyles from './user-orders.module.css';

function UserOrders() {
  return (
    <div className={UserOrdersStyles.container}>
      <h2 className={UserOrdersStyles.title}>История заказов</h2>
    </div>
  )
}

export default UserOrders;
