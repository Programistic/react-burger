import TabContentStyles from './tab-content.module.css';
import Card from '../card/card';
import { propTypesForData } from '../../utils/constants';

function TabContent({data}) {

  const cardsBun = data.filter(card => card.type === 'bun');
  const cardsSauce = data.filter(card => card.type === 'sauce');
  const cardsMain = data.filter(card => card.type === 'main');

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
  );
}

export default TabContent;

TabContent.propTypes = propTypesForData;
