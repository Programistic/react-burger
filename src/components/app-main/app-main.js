import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import PropTypes from 'prop-types';
import AppMainStyles from './app-main.module.css';

function AppMain({onCardClick, onButtonMakeOrderClick}) {
  return (
    <main className={AppMainStyles.main}>
      <div className={AppMainStyles.container}>
        <h1 className={AppMainStyles.title}>Соберите бургер</h1>
        <BurgerIngredients onCardClick={onCardClick} />
        <BurgerConstructor onButtonMakeOrderClick={onButtonMakeOrderClick} />
      </div>
    </main>
  );
}

export default AppMain;

AppMain.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  onButtonMakeOrderClick: PropTypes.func.isRequired,
};
