import TabContentStyles from './tab-content.module.css';
import Card from '../card/card';

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
        count={1}
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
        count={3}
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
        count={5}
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

export default TabContent;
