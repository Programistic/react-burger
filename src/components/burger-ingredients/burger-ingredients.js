import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsStyles from './burger-ingredients.module.css';
import TabContent from "../tab-content/tab-content";

function BurgerIngredients({ data }) {
  const [current, setCurrent] = React.useState('bun')
  return (
    <section className={BurgerIngredientsStyles.ingredients}>
      <div className={BurgerIngredientsStyles.menu}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <TabContent cards={data} />
    </section>
  )
}

export default BurgerIngredients;
