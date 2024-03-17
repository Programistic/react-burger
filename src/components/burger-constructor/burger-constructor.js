import BurgerConstructorStyles from './burger-constructor.module.css';
import BurgerComponent from "../burger-component/burger-component";
import { Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { DataContext } from '../../utils/constants';
import { useContext } from 'react';

function BurgerConstructor({onButtonMakeOrderClick}) {

  const data = useContext(DataContext);

  const componentList = data.map((component) => {
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

  componentList.shift();
  componentList.pop();

  const firstComponent = data[0];
  const lastComponent = data[data.length-1];

  const handleClick = () => {
    onButtonMakeOrderClick();
  }

  return (
    <section className={BurgerConstructorStyles.constructor}>
      <ConstructorElement type={'top'} isDragIconVisible={false} thumbnail={firstComponent.image} text={firstComponent.name} price={firstComponent.price} isLocked={true} />
      <ul className={BurgerConstructorStyles.componentsList}>
        {componentList}
      </ul>
      <ConstructorElement type={'bottom'} isDragIconVisible={false} thumbnail={lastComponent.image} text={lastComponent.name} price={lastComponent.price} isLocked={true} />
      <div className={BurgerConstructorStyles.innerContainer}>
        <span className={BurgerConstructorStyles.productPrice}>610</span>
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
