import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppMainStyles from './app-main.module.css';
import { FC } from "react";

interface IAppMainProps {
  onButtonMakeOrderClick: (item: string[]) => void,
}

const AppMain: FC<IAppMainProps> = ({ onButtonMakeOrderClick }) => {

  return (
    <main className={AppMainStyles.main}>
      <div className={AppMainStyles.container}>
        <h1 className={AppMainStyles.title}>Соберите бургер</h1>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor onButtonMakeOrderClick={onButtonMakeOrderClick} />
        </DndProvider>
      </div>
    </main>
  );
}

export default AppMain;
