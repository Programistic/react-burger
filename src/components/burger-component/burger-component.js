import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerComponentStyles from './burger-component.module.css';
import PropTypes from 'prop-types';

function BurgerComponent({isDragIconVisible=true, type, isLocked, text, price, thumbnail}) {
  return (
    <li className={BurgerComponentStyles.componentsListItem}>
      <button className={`${BurgerComponentStyles.buttonDragIcon} ${isDragIconVisible ? '' : BurgerComponentStyles.isVisible}`} type='button'>
        <DragIcon />
      </button>
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
      />
    </li>
  )
}

BurgerComponent.propTypes = {
  isDragIconVisible: PropTypes.bool,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}

export default BurgerComponent;
