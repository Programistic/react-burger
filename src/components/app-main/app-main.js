import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import AppMainStyles from './app-main.module.css';
import PropTypes from 'prop-types';
import { CONSTRUCTOR_SET_BUN, CONSTRUCTOR_SET_INGREDIENT } from "../../services/actions/constructor-ingredients";
import uuid from "react-uuid";

function AppMain({onCardClick, onButtonMakeOrderClick}) {

  const dispatch = useDispatch();

  const { ingredients } = useSelector(store => ({ingredients: store.data.data}), shallowEqual);

  const handleDrop = (itemId) => {
    const ingredient = ingredients.find(item => item._id === itemId._id);
    ingredient._id = uuid();
    ingredient.type === 'bun' ? dispatch({type: CONSTRUCTOR_SET_BUN, bun: {...ingredient}}) : dispatch({type: CONSTRUCTOR_SET_INGREDIENT, ingredient: {...ingredient}});
  };

  return (
    <main className={AppMainStyles.main}>
      <div className={AppMainStyles.container}>
        <h1 className={AppMainStyles.title}>Соберите бургер</h1>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients onCardClick={onCardClick} />
          <BurgerConstructor onButtonMakeOrderClick={onButtonMakeOrderClick} onDropHandler={handleDrop} />
        </DndProvider>
      </div>
    </main>
  );
}

export default AppMain;

AppMain.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  onButtonMakeOrderClick: PropTypes.func.isRequired,
};
