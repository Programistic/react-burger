import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { propTypesForData } from "../../utils/constants";
import AppMainStyles from './app-main.module.css';

function AppMain({data}) {
  return (
    <main className={AppMainStyles.main}>
      <div className={AppMainStyles.container}>
        <h1 className={AppMainStyles.title}>Соберите бургер</h1>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </div>
    </main>
  );
}

export default AppMain;

AppMain.propTypes = propTypesForData;
