import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerComponentStyles from './burger-component.module.css';
import bunSmallImg from '../../images/bun-small-02.png';

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

export default BurgerComponent;
