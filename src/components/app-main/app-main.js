import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { propTypesForData } from "../../utils/constants";
import AppMainStyles from './app-main.module.css';

function AppMain({data, onCardClick, onButtonMakeOrderClick}) {
  return (
    <main className={AppMainStyles.main}>
      <div className={AppMainStyles.container}>
        <h1 className={AppMainStyles.title}>Соберите бургер</h1>
        <BurgerIngredients data={data} onCardClick={onCardClick} />
        <BurgerConstructor data={data} onButtonMakeOrderClick={onButtonMakeOrderClick} />
      </div>
    </main>
  );
}

export default AppMain;

AppMain.propTypes = propTypesForData;
