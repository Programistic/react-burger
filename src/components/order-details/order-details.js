import React from "react";
import OrderDetailsStyles from './order-details.module.css';
import { useSelector, shallowEqual } from "react-redux";
import PropTypes from 'prop-types';

function OrderDetails({onOrderDetailsOkButtonClick}) {

  const { orderNumber } = useSelector(store => ({orderNumber: store.order.order}), shallowEqual);

  return(
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

OrderDetails.propTypes = {
  onOrderDetailsOkButtonClick: PropTypes.func.isRequired,
};
