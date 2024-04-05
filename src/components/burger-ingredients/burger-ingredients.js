import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsStyles from './burger-ingredients.module.css';
import TabContent from "../tab-content/tab-content";
import { useState, useMemo } from "react";
import PropTypes from 'prop-types';

function BurgerIngredients({onCardClick}) {

  const [tab, setTab] = useState('bun');

  const current = (isBunView, isSauceView, isMainView) => {
    if (isBunView) {
      setTab('bun')
      return;
    }
    if (!isBunView && isSauceView) {
      setTab('sauce')
      return;
    }
    else if (!isBunView && !isSauceView && isMainView) {
      setTab('main')
      return;
    }
  };

  const handleClick = (value) => {
    setTab({ currentTab: value} )
  }

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
      <TabContent onCardClick={onCardClick} onSetTab={setTab} onCurrent={current} tab={tab} />
    </section>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};
