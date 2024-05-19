import { useParams } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { TIngredient } from "../../types/ingredient";
import InggredientDetailsStyles from './ingredient-details.module.css';

interface IAppStore {
  data: any,
};

function IngredientDetails() {

  let {id}  = useParams();

  const { ingredients } = useSelector((store: IAppStore) => ({ingredients: store.data.data}), shallowEqual);
  const ingredient = ingredients.find((item: TIngredient) => item._id === id);
  const isModalVisible = ingredient ? true : false;

  return (
    <>
      { isModalVisible &&
        <div className={InggredientDetailsStyles.container}>
          <h2 className={InggredientDetailsStyles.cardTitle}>Детали ингредиента</h2>
          <img src={ingredient.image_large} className={InggredientDetailsStyles.image} alt={ingredient.name}></img>
          <p className={InggredientDetailsStyles.ingredientName}>
            {ingredient.name}
          </p>
          <ul className={InggredientDetailsStyles.list}>
            <li className={InggredientDetailsStyles.listItem}>
              <h3 className={InggredientDetailsStyles.itemHeading}>Калории, ккал</h3>
              <span className={InggredientDetailsStyles.itemValue}>{ingredient.calories}</span>
            </li>
            <li className={InggredientDetailsStyles.listItem}>
              <h3 className={InggredientDetailsStyles.itemHeading}>Белки, г</h3>
              <span className={InggredientDetailsStyles.itemValue}>{ingredient.proteins}</span>
            </li>
            <li className={InggredientDetailsStyles.listItem}>
              <h3 className={InggredientDetailsStyles.itemHeading}>Жиры, г</h3>
              <span className={InggredientDetailsStyles.itemValue}>{ingredient.fat}</span>
            </li>
            <li className={InggredientDetailsStyles.listItem}>
              <h3 className={InggredientDetailsStyles.itemHeading}>Углеводы, г</h3>
              <span className={InggredientDetailsStyles.itemValue}>{ingredient.carbohydrates}</span>
            </li>
          </ul>
        </div>
      }
    </>
  );
};

export default IngredientDetails;
