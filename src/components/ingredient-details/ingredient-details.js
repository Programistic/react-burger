import React from "react";
import InggredientDetailsStyles from './ingredient-details.module.css';
import { propTypesForData } from "../../utils/constants";

function IngredientDetails({card}) {

  return(
    <div className={InggredientDetailsStyles.container}>
      <h2 className={InggredientDetailsStyles.cardTitle}>Детали ингредиента</h2>
      <img src={card.image_large} className={InggredientDetailsStyles.image} alt={card.name}></img>
      <p className={InggredientDetailsStyles.ingredientName}>
        {card.name}
      </p>
      <ul className={InggredientDetailsStyles.list}>
        <li className={InggredientDetailsStyles.listItem}>
          <h3 className={InggredientDetailsStyles.itemHeading}>Калории, ккал</h3>
          <span className={InggredientDetailsStyles.itemValue}>{card.calories}</span>
        </li>
        <li className={InggredientDetailsStyles.listItem}>
          <h3 className={InggredientDetailsStyles.itemHeading}>Белки, г</h3>
          <span className={InggredientDetailsStyles.itemValue}>{card.proteins}</span>
        </li>
        <li className={InggredientDetailsStyles.listItem}>
          <h3 className={InggredientDetailsStyles.itemHeading}>Жиры, г</h3>
          <span className={InggredientDetailsStyles.itemValue}>{card.fat}</span>
        </li>
        <li className={InggredientDetailsStyles.listItem}>
          <h3 className={InggredientDetailsStyles.itemHeading}>Углеводы, г</h3>
          <span className={InggredientDetailsStyles.itemValue}>{card.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;

IngredientDetails.propTypes = propTypesForData;
