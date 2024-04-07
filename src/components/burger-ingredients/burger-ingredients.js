import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import TabContent from "../tab-content/tab-content";
import { useState } from "react";
import PropTypes from 'prop-types';
import BurgerIngredientsStyles from './burger-ingredients.module.css';

function BurgerIngredients({onCardClick}) {

  const [tab, setTab] = useState('bun');

  const handleClick = (value) => {
    setTab(value);
  };

  return (
    <section className={BurgerIngredientsStyles.ingredients}>
      <div className={BurgerIngredientsStyles.menu}>
        <Tab value={'bun'} active={tab === 'bun'} onClick={handleClick}>
          Булки
        </Tab>
        <Tab value={'sauce'} active={tab === 'sauce'} onClick={handleClick}>
          Соусы
        </Tab>
        <Tab value={'main'} active={tab === 'main'} onClick={handleClick}>
          Начинки
        </Tab>
      </div>
      <TabContent onCardClick={onCardClick} onSetTab={setTab} />
    </section>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};
