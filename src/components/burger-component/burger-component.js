import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerComponentStyles from './burger-component.module.css';
import { CONSTRUCTOR_DELETE_INGREDIENT } from "../../services/actions/constructor-ingredients";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import { useRef } from "react";

function BurgerComponent({isLocked, text, price, thumbnail, id, index, onMove}) {

  const componentRef = useRef(null);

  const [, dropRef] = useDrop({
    accept: 'component',
    hover: (item, monitor) => {
      if (!componentRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = componentRef.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      onMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{isDragging}, dragRef] = useDrag({
    type: 'component',
    item: () => {
      return {id, index}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;

  dragRef(dropRef(componentRef));

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({type: CONSTRUCTOR_DELETE_INGREDIENT, id});
  };

  return (
    <li className={BurgerComponentStyles.componentsListItem} style={{opacity}} ref={componentRef}>
      <button className={BurgerComponentStyles.buttonDragIcon} type='button'>
        <DragIcon />
      </button>
      <ConstructorElement
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
        handleClose={() => handleDelete()}
      />
    </li>
  );
}

export default BurgerComponent;

BurgerComponent.propTypes = {
  isLocked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
