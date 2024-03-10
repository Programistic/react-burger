import BurgerConstructorStyles from './burger-constructor.module.css';
import BurgerComponent from "../burger-component/burger-component";
import { Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ data }) {

  const componentList = data.map((component) => {
    return (
      <BurgerComponent
        key={component._id}
        text={component.name}
        image={component.image}
        price={component.price}
        thumbnail={component.image}
        isDragIconVisible={true}
        isLocked={false}
      />
    );
  });

  componentList.shift();
  componentList.pop();

  return (
    <section className={BurgerConstructorStyles.constructor}>
      <ConstructorElement type={'top'} isDragIconVisible={false} thumbnail={data[0].image} text={data[0].name} price={data[0].price} isLocked={true} />
      <ul className={BurgerConstructorStyles.componentsList}>
        {componentList}
      </ul>
      <ConstructorElement type={'bottom'} isDragIconVisible={false} thumbnail={data[data.length-1].image} text={data[data.length-1].name} price={data[data.length-1].price} isLocked={true} />
      <div className={BurgerConstructorStyles.innerContainer}>
        <span className={BurgerConstructorStyles.productPrice}>610</span>
        <div className={BurgerConstructorStyles.currencyIconLarge}></div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor;
