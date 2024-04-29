import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from "react";
import { decCounter } from "../../services/actions/all-ingredients";
import { deleteIngredient } from "../../services/actions/constructor-ingredients";
import PropTypes from 'prop-types';
import BurgerComponentStyles from './burger-component.module.css';

function BurgerComponent({isLocked, text, price, thumbnail, uniqueId, id, index, ingredients, onMove}) {

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
    const ingredient = ingredients.find(item => item._id === id);
    dispatch(decCounter(ingredient));
    dispatch(deleteIngredient(uniqueId));
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
  id: PropTypes.string.isRequired,
  uniqueId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  ingredients: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired,
};
