import BurgerComponent from "../burger-component/burger-component";
import { Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { addBun, addIngredient, updateConstructor, saveOrder } from "../../services/actions/constructor-ingredients";
import { incCounter } from "../../services/actions/all-ingredients";
import { useDrop } from "react-dnd";
import PropTypes from 'prop-types';
import BurgerConstructorStyles from './burger-constructor.module.css';

function BurgerConstructor({onButtonMakeOrderClick}) {

  const { bun, ingredients } = useSelector(store => ({bun: store.ingredients.bun, ingredients: store.ingredients.ingredients}), shallowEqual);
  const { ingredientsArr } = useSelector(store => ({ingredientsArr: store.data.data}), shallowEqual);

  const dispatch = useDispatch();

  const [{isHover}, dropTarget] = useDrop({
    accept: 'card',
    drop(item) {
      dropHandler(item);
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const borderColor = isHover ? '#4c4cff' : 'transparent';
  
  const dropHandler = (dropItem) => {
    const ingredient = ingredientsArr.find(item => item._id === dropItem._id);
    ingredient.type === 'bun' ? dispatch(addBun(ingredient)) : dispatch(addIngredient(ingredient));
    dispatch(incCounter(ingredient));
  };

  const moveComponent = (dragIndex, hoverIndex) => {
    const dragComponent = ingredients[dragIndex];
    const newIngredients = [...ingredients];
    newIngredients.splice(dragIndex, 1);
    newIngredients.splice(hoverIndex, 0, dragComponent);
    dispatch(updateConstructor(newIngredients));
  };

  const isBun = bun !== null;

  let totalCost = isBun ? (bun.price * 2) : 0;

  const componentList = ingredients.map((ingredient, index) => {
    totalCost += ingredient.price;
    
    return (
      <BurgerComponent
        key={ingredient.uniqueId}
        id={ingredient._id}
        uniqueId={ingredient.uniqueId}
        index={index}
        text={ingredient.name}
        image={ingredient.image}
        price={ingredient.price}
        thumbnail={ingredient.image}
        isLocked={false}
        onMove={moveComponent}
        ingredients={ingredients}
      />
    );
  });

  const handleClick = () => {
    const orderIdArray = ingredients.map(item => item._id);
    orderIdArray.unshift(bun._id);
    orderIdArray.push(bun._id);
    dispatch(saveOrder(orderIdArray));
    onButtonMakeOrderClick(orderIdArray);
  };

  return (
    <section className={BurgerConstructorStyles.constructor}>
      <div className={BurgerConstructorStyles.container} style={{borderColor}} ref={dropTarget}>
        <div>
          { isBun && <ConstructorElement type={'top'} isDragIconVisible={false} thumbnail={bun.image} text={bun.name + ' (верх)'} price={bun.price} isLocked={true} /> }
        </div>
        <ul className={BurgerConstructorStyles.componentsList} >
          {componentList}
        </ul>
        <div>
          { isBun && <ConstructorElement type={'bottom'} isDragIconVisible={false} thumbnail={bun.image} text={bun.name + ' (низ)'} price={bun.price} isLocked={true} /> }
        </div>
      </div>
      <div className={BurgerConstructorStyles.innerContainer}>
        <span className={BurgerConstructorStyles.productPrice}>{totalCost}</span>
        <div className={BurgerConstructorStyles.currencyIconLarge}></div>
        <Button htmlType={'button'} type={'primary'} size={'large'} disabled={!isBun} aria-label='Оформить заказ' onClick={handleClick}>
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
