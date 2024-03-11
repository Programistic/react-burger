import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerComponentStyles from './burger-component.module.css';
import PropTypes from 'prop-types';

function BurgerComponent({isLocked, text, price, thumbnail}) {
  return (
    <li className={BurgerComponentStyles.componentsListItem}>
      <button className={BurgerComponentStyles.buttonDragIcon} type='button'>
        <DragIcon />
      </button>
      <ConstructorElement
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
      />
    </li>
  )
}

BurgerComponent.propTypes = {
  isLocked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default BurgerComponent;
