import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsStyles from './burger-ingredients.module.css';
import TabContent from "../tab-content/tab-content";
import PropTypes from 'prop-types';

function BurgerIngredients({onCardClick}) {

  const [current, setCurrent] = React.useState('bun')

  const handleClick = (value) => {
    setCurrent(value)
    console.log(value)
  }

  return (
    <section className={BurgerIngredientsStyles.ingredients}>
      <div className={BurgerIngredientsStyles.menu}>
        <Tab value={'bun'} active={current === 'bun'} onClick={handleClick}>
          Булки
        </Tab>
        <Tab value={'sauce'} active={current === 'sauce'} onClick={handleClick}>
          Соусы
        </Tab>
        <Tab value={'main'} active={current === 'main'} onClick={handleClick}>
          Начинки
        </Tab>
      </div>
      <TabContent onCardClick={onCardClick} />
    </section>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};
