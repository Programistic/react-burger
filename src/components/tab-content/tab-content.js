import TabContentStyles from './tab-content.module.css';
import Card from '../card/card';
import PropTypes from 'prop-types';

function TabContent({cards}) {
  const cardsBun = cards.filter(card => card.type === 'bun');
  const cardsSauce = cards.filter(card => card.type === 'sauce');
  const cardsMain = cards.filter(card => card.type === 'main');

  const cardListBun = cardsBun.map((card) => {
    return (
      <Card
        key={card._id}
        title={card.name}
        image={card.image}
        price={card.price}
      />
    );
  });

  const cardListSauce = cardsSauce.map((card) => {
    return (
      <Card
        key={card._id}
        title={card.name}
        image={card.image}
        price={card.price}
      />
    );
  });

  const cardListMain = cardsMain.map((card) => {
    return (
      <Card
        key={card._id}
        title={card.name}
        image={card.image}
        price={card.price}
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
  )
}

TabContent.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape(
        {
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired
        }
      )
    )
  )
}

export default TabContent;
