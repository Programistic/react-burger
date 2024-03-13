import React from "react";
import OrderDetailsStyles from './order-details.module.css';

function OrderDetails({orderNumber = '034536', onOrderDetailsOkButtonClick}) {

  const handleClick = () => {
    onOrderDetailsOkButtonClick();
  }

  return(
    <div className={OrderDetailsStyles.container}>
      <span className={OrderDetailsStyles.orderNumber}>{orderNumber}</span>
      <p className={OrderDetailsStyles.text}>идентификатор заказа</p>
      <button type="button" className={OrderDetailsStyles.button} aria-label="Ok" onClick={handleClick}/>
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
