import TabContentStyles from './tab-content.module.css';
import Card from '../card/card';
import PropTypes from 'prop-types';
import { cardType } from '../../utils/constants';

function TabContent({data, onCardClick}) {

  const cardsBun = data.filter(card => card.type === 'bun');
  const cardsSauce = data.filter(card => card.type === 'sauce');
  const cardsMain = data.filter(card => card.type === 'main');

  const cardListBun = cardsBun.map((card) => {
    return (
      <Card
        key={card._id}
        card={card}
        onCardClick={onCardClick}
      />
    );
  });

  const cardListSauce = cardsSauce.map((card) => {
    return (
      <Card
        key={card._id}
        card={card}
        onCardClick={onCardClick}
      />
    );
  });

  const cardListMain = cardsMain.map((card) => {
    return (
      <Card
        key={card._id}
        card={card}
        onCardClick={onCardClick}
      />
    );
  });

  return (
    <div className={TabContentStyles.content}>
      <h2 className={TabContentStyles.title}>Булки</h2>
      <ul className={TabContentStyles.cardList}>
        {cardListBun}
      </ul>
      <h2 className={TabContentStyles.title}>Соусы</h2>
      <ul className={TabContentStyles.cardList}>
        {cardListSauce}
      </ul>
      <h2 className={TabContentStyles.title}>Начинки</h2>
      <ul className={TabContentStyles.cardList}>
        {cardListMain}
      </ul>
    </div>
  );
}

export default TabContent;

TabContent.propTypes = {
  data: PropTypes.arrayOf(cardType).isRequired,
  onCardClick: PropTypes.func.isRequired,
};
