import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsStyles from './burger-ingredients.module.css';
import TabContent from "../tab-content/tab-content";
import cardsArray from '../../utils/data';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('one')
  return (
    <section className={BurgerIngredientsStyles.ingredients}>
      <div className={BurgerIngredientsStyles.menu}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <TabContent cards={cardsArray} />
    </section>
  )
}

export default BurgerIngredients;
