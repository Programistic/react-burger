import BurgerConstructorStyles from './burger-constructor.module.css';
import BurgerComponent from "../burger-component/burger-component";
import { Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CONSTRUCTOR_INGREDIENTS } from '../../services/actions/constructor-ingredients';

function BurgerConstructor({onButtonMakeOrderClick}) {

  const { data } = useSelector(store => ({data: store.data}), shallowEqual);
  const dispatch = useDispatch();

  const bun = data.data.find((item) => {
    return item.type === 'bun';
  });

  const isBun = bun !== undefined;

  let totalCost = isBun ? (bun.price * 2) : 0;
  let idArray = [];

  const componentList = data.data.filter(item => item.type !== 'bun').map((component) => {
    
    totalCost += component.price;
    idArray.push(component._id);
    
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
    idArray.unshift(bun._id);
    idArray.push(bun._id);
    dispatch({type: CONSTRUCTOR_INGREDIENTS, idArray})
    onButtonMakeOrderClick(idArray);
  }

  return (
    <section className={BurgerConstructorStyles.constructor}>
      { isBun && <ConstructorElement type={'top'} isDragIconVisible={false} thumbnail={bun.image} text={bun.name} price={bun.price} isLocked={true} /> }
      <ul className={BurgerConstructorStyles.componentsList}>
        {componentList}
      </ul>
      { isBun && <ConstructorElement type={'bottom'} isDragIconVisible={false} thumbnail={bun.image} text={bun.name} price={bun.price} isLocked={true} /> }
      <div className={BurgerConstructorStyles.innerContainer}>
        <span className={BurgerConstructorStyles.productPrice}>{totalCost}</span>
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
