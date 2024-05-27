import { shallowEqual } from "react-redux";
import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import OrderDetailsStyles from './order-details.module.css';

interface IOrderDetailsProps {
  onOrderDetailsOkButtonClick: () => void,
};

const OrderDetails: FC<IOrderDetailsProps> = ({ onOrderDetailsOkButtonClick }) => {

  const { orderNumber } = useAppSelector((store) => ({orderNumber: store.order.orderNumber}), shallowEqual);

  return (
    <div className={OrderDetailsStyles.container}>
      <span className={OrderDetailsStyles.orderNumber}>{orderNumber}</span>
      <p className={OrderDetailsStyles.text}>идентификатор заказа</p>
      <button type="button" className={OrderDetailsStyles.button} aria-label="Ok" onClick={onOrderDetailsOkButtonClick} />
      <p className={OrderDetailsStyles.message}>
        Ваш заказ начали готовить
      </p>
      <p className={OrderDetailsStyles.message}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
