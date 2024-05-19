import { useParams } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { TIngredient } from "../../types/ingredient";
import InggredientStyles from './ingredient.module.css';

interface IAppStore {
  data: any,
};

function Ingredient() {

  let {id}  = useParams();

  const { ingredients } = useSelector((store: IAppStore) => ({ingredients: store.data.data}), shallowEqual);
  const ingredient = ingredients.find((item: TIngredient) => item._id === id);
  const isVisible = ingredient !== undefined;

  return (
    <>
      { isVisible &&
        <div className={InggredientStyles.container}>
          <h2 className={InggredientStyles.cardTitle}>Детали ингредиента</h2>
          <img src={ingredient.image_large} className={InggredientStyles.image} alt={ingredient.name}></img>
          <p className={InggredientStyles.ingredientName}>
            {ingredient.name}
          </p>
          <ul className={InggredientStyles.list}>
            <li className={InggredientStyles.listItem}>
              <h3 className={InggredientStyles.itemHeading}>Калории, ккал</h3>
              <span className={InggredientStyles.itemValue}>{ingredient.calories}</span>
            </li>
            <li className={InggredientStyles.listItem}>
              <h3 className={InggredientStyles.itemHeading}>Белки, г</h3>
              <span className={InggredientStyles.itemValue}>{ingredient.proteins}</span>
            </li>
            <li className={InggredientStyles.listItem}>
              <h3 className={InggredientStyles.itemHeading}>Жиры, г</h3>
              <span className={InggredientStyles.itemValue}>{ingredient.fat}</span>
            </li>
            <li className={InggredientStyles.listItem}>
              <h3 className={InggredientStyles.itemHeading}>Углеводы, г</h3>
              <span className={InggredientStyles.itemValue}>{ingredient.carbohydrates}</span>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

export default Ingredient;
