import { FC } from 'react';
import styles from './order-feed.module.css'

interface OrderNumberProps {
  orderNumber: string,
  orderStatus: string,
}

const OrderNumber: FC<OrderNumberProps> = ({ orderNumber, orderStatus }) => {

  let orderStatusColor;

  if (orderStatus === 'В работе') {
    orderStatusColor = '#f2f2f3'
  } else if (orderStatus === 'Готов') {
    orderStatusColor = '#00cccc';
  };

  return (
    <span className={styles.orderNumber} style={{'--color': orderStatusColor} as string & number}>{orderNumber}</span>
  )
};

export default OrderNumber;
