import BurgerConstructorStyles from './burger-constructor.module.css';
import BurgerComponent from "../burger-component/burger-component";
import { Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { DataContext } from '../../utils/constants';
import { useContext } from 'react';

function BurgerConstructor({onButtonMakeOrderClick}) {

  const data = useContext(DataContext);

  const bun = data.find((item) => {
    return item.type === 'bun';
  });

  const isBun = bun !== undefined;

  let price = isBun ? (bun.price * 2) : 0;

  const componentList = data.filter(item => item.type !== 'bun').map((component) => {
    
    price += component.price;
   
    return (
      <BurgerComponent
        key={component._id}
        text={component.name}
        image={component.image}
        price={component.price}
        thumbnail={component.image}
        isLocked={false}
      />
    );
  });

  const handleClick = () => {
    onButtonMakeOrderClick();
  }

  return (
    <section className={BurgerConstructorStyles.constructor}>
      { isBun && <ConstructorElement type={'top'} isDragIconVisible={false} thumbnail={bun.image} text={bun.name} price={bun.price} isLocked={true} /> }
      <ul className={BurgerConstructorStyles.componentsList}>
        {componentList}
      </ul>
      { isBun && <ConstructorElement type={'bottom'} isDragIconVisible={false} thumbnail={bun.image} text={bun.name} price={bun.price} isLocked={true} /> }
      <div className={BurgerConstructorStyles.innerContainer}>
        <span className={BurgerConstructorStyles.productPrice}>{price}</span>
        <div className={BurgerConstructorStyles.currencyIconLarge}></div>
        <Button htmlType={'button'} type={'primary'} size={'large'} aria-label='Оформить заказ' onClick={handleClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  onButtonMakeOrderClick: PropTypes.func.isRequired,
};
