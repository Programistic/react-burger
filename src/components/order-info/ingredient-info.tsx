import { useAppSelector } from '../../hooks/hooks';
import { shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TIngredient } from '../../types/ingredient';
import { FC } from 'react';
import styles from './order-info.module.css'

interface IIngredientInfoProps {
  id: string;
}

const IngredientInfo: FC<IIngredientInfoProps> = ({ id }) => {

  //let {id}  = useParams();

  const { ingredients } = useAppSelector(store => ({ingredients: store.data.data}), shallowEqual);
  const ingredient = ingredients.find((item: TIngredient) => item._id === id);

  const ingredientPrice = 330;
  const number = 2;

  const isVisible = ingredient !== undefined;

  return (
    <>
      { isVisible &&
        <li className={styles.ingredientsListItem}>
          <div className={styles.imageContainer}>
            <img src={ingredient.image} className={styles.image} alt={ingredient.name}></img>
          </div>
          <h3 className={styles.ingredientName}>{ingredient.name}</h3>
          <div className={styles.priceContainer}>
            <span className={styles.productPrice}>{`${number} X ${ingredientPrice}`}</span>
            <div className={styles.currencyIconLarge}></div>
          </div>
        </li>
      }
    </>
  );
};

export default IngredientInfo;
