import React from "react";
import InggredientDetailsStyles from './ingredient-details.module.css';
import { cardType } from "../../utils/constants";

function Ingredient() {

  const card = {
    "name":"Биокотлета из марсианской Магнолии",
    "proteins":420,
    "fat":142,
    "carbohydrates":242,
    "calories":4242,
    "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
 };

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

export default Ingredient;

Ingredient.propTypes = {
  card: cardType.isRequired,
};