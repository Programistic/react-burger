import BurgerConstructorStyles from './burger-constructor.module.css';
import BurgerComponent from "../burger-component/burger-component";
import { Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { CONSTRUCTOR_SET_BUN, CONSTRUCTOR_SET_INGREDIENT, CONSTRUCTOR_UPDATE } from '../../services/actions/constructor-ingredients';
import { useDrop } from "react-dnd";
import PropTypes from 'prop-types';

function BurgerConstructor({onButtonMakeOrderClick, onDropHandler}) {

  const { bun, ingredients } = useSelector(store => ({bun: store.ingredients.bun, ingredients: store.ingredients.ingredients}), shallowEqual);

  const dispatch = useDispatch();

  const [{isHover}, dropTarget] = useDrop({
    accept: 'card',
    drop(itemId) {
      onDropHandler(itemId);
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const borderColor = isHover ? '#4c4cff' : 'transparent';

  const isBun = bun !== null;

  let totalCost = isBun ? (bun.price * 2) : 0;
  let idArray = [];

  const moveComponent = (dragIndex, hoverIndex) => {
    const dragComponent = ingredients[dragIndex];
    const newIngredients = [...ingredients];
    newIngredients.splice(dragIndex, 1);
    newIngredients.splice(hoverIndex, 0, dragComponent);
  
    dispatch({type: CONSTRUCTOR_UPDATE, newIngredients});
  };

  const componentList = ingredients.map((ingredient, index) => {
    
    totalCost += ingredient.price;
    idArray.push(ingredient._id);
    
    return (
      <BurgerComponent
        key={ingredient._id}
        text={ingredient.name}
        image={ingredient.image}
        price={ingredient.price}
        thumbnail={ingredient.image}
        isLocked={false}
        id={ingredient._id}
        index={index}
        onMove={moveComponent}
      />
    );
  });

  const handleClick = () => {
    isBun && idArray.unshift(bun._id);
    isBun && idArray.push(bun._id);
    isBun && dispatch({type: CONSTRUCTOR_SET_BUN, idArray})
    isBun && onButtonMakeOrderClick(idArray);
  }

  return (
    <section className={BurgerConstructorStyles.constructor}>
      <div className={BurgerConstructorStyles.container} style={{borderColor}} ref={dropTarget}>
        { isBun && <ConstructorElement type={'top'} isDragIconVisible={false} thumbnail={bun.image} text={bun.name} price={bun.price} isLocked={true} /> }
        <ul className={BurgerConstructorStyles.componentsList} >
          {componentList}
        </ul>
        { isBun && <ConstructorElement type={'bottom'} isDragIconVisible={false} thumbnail={bun.image} text={bun.name} price={bun.price} isLocked={true} /> }
      </div>
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
