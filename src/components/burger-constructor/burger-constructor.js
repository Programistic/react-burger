import BurgerConstructorStyles from './burger-constructor.module.css';
import BurgerComponent from "../burger-component/burger-component";
import meetSmallImg from '../../images/meat-small-02.png';
import mineralRingsSmallImg from '../../images/mineral-rings-small.png';
import sauseSmallImg from '../../images/sauce-small-03.png';
import bunSmallImg from '../../images/bun-small-02.png';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {
  return (
    <section className={BurgerConstructorStyles.constructor}>
      <BurgerComponent type={'top'} isDragIconVisible={false} thumbnail={bunSmallImg} text={"Краторная булка N-200i (верх)"} price={220} isLocked={true}/>
      <ul className={BurgerConstructorStyles.componentsList}>
        <BurgerComponent isDragIconVisible={true} thumbnail={sauseSmallImg} text={"Соус традиционный галактический"} price={120} isLocked={false}/>
        <BurgerComponent isDragIconVisible={true} thumbnail={meetSmallImg} text={"Мясо бессмертных моллюсков"} price={400} isLocked={false}/>
        <BurgerComponent isDragIconVisible={true} thumbnail={meetSmallImg} text={"Мясо бессмертных моллюсков"} price={400} isLocked={false}/>
        <BurgerComponent isDragIconVisible={true} thumbnail={sauseSmallImg} text={"Соус традиционный галактический"} price={120} isLocked={false}/>
        <BurgerComponent isDragIconVisible={true} thumbnail={sauseSmallImg} text={"Соус традиционный галактический"} price={120} isLocked={false}/>
        <BurgerComponent isDragIconVisible={true} thumbnail={mineralRingsSmallImg} text={"Хрустящие минеральные кольца"} price={50} isLocked={false}/>
        <BurgerComponent isDragIconVisible={true} thumbnail={mineralRingsSmallImg} text={"Хрустящие минеральные кольца"} price={50} isLocked={false}/>
      </ul>
      <BurgerComponent type={'bottom'} isDragIconVisible={false} thumbnail={bunSmallImg} text={"Краторная булка N-200i (верх)"} price={220} isLocked={true}/>
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
