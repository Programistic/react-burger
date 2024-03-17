import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import PropTypes from 'prop-types';
import { cardType } from "../../utils/constants";
import AppMainStyles from './app-main.module.css';
import { DataContext } from "../../utils/constants";

function AppMain({data, onCardClick, onButtonMakeOrderClick}) {
  return (
    <main className={AppMainStyles.main}>
      <div className={AppMainStyles.container}>
        <h1 className={AppMainStyles.title}>Соберите бургер</h1>
        <BurgerIngredients data={data} onCardClick={onCardClick} />
        <DataContext.Provider value={data}>
          <BurgerConstructor onButtonMakeOrderClick={onButtonMakeOrderClick} />
        </DataContext.Provider>
      </div>
    </main>
  );
}

export default AppMain;

AppMain.propTypes = {
  data: PropTypes.arrayOf(cardType).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onButtonMakeOrderClick: PropTypes.func.isRequired,
};
