import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import AppMainStyles from './app-main.module.css';

function AppMain() {
  return (
    <main className={ AppMainStyles.main }>
      <div className={ AppMainStyles.container }>
        <h1 className={ AppMainStyles.title }>Соберите бургер</h1>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  );
}

export default AppMain;
