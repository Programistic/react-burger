import { TIngredient } from '../../types/ingredient';
import { useAppSelector } from '../../hooks/hooks';
import { shallowEqual } from 'react-redux';
import { FC } from 'react';
import styles from './ingredient-preview.module.css';

interface IIngredientPreviewProps {
  id: string,
  index: number,
  count: number,
};

const IngredientPreview: FC<IIngredientPreviewProps> = ({ id, index, count }) => {

  const { ingredients } = useAppSelector(store => ({ingredients: store.data.data}), shallowEqual);
  const ingredient = ingredients.find((item: TIngredient) => item._id === id);
  const isCountVisible = index > 5;

  return (
    <li className={styles.ingredient} style={{'--position': (-index)} as string & number}>
      <img src={ingredient.image} className={styles.image} alt={ingredient.name}></img>
      { isCountVisible &&
        <>
          <span className={styles.count}>{`+${count-index}`}</span>
          <div className={styles.overlay}></div>
        </>
      }
    </li>
  );
}

export default IngredientPreview;
