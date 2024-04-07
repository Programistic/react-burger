import Card from '../card/card';
import { useSelector, shallowEqual } from 'react-redux';
import { InView } from 'react-intersection-observer';
import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import TabContentStyles from './tab-content.module.css';

function TabContent({onCardClick, onSetTab}) {

  const { data } = useSelector(store => ({data: store.data}), shallowEqual);

  const { cardsBun, cardsSauce, cardsMain } = useMemo (
    () => ({
      cardsBun: data.data.filter(card => card.type === 'bun'),
      cardsSauce: data.data.filter(card => card.type === 'sauce'),
      cardsMain: data.data.filter(card => card.type === 'main'), 
    }),
    [data]
  );

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

  const [state, setState] = useState({
    isBunView: true,
    isSauceView: false,
    isMainView: false,
  });

  useEffect(
    () => {
      if (state.isBunView) {onSetTab('bun'); return;};
      if (!state.isBunView && state.isSauceView && !state.isMainView) {onSetTab('sauce'); return;};
      if (!state.isBunView && !state.isSauceView && state.isMainView) {onSetTab('main'); return;}
    }, [state]
  );

  return (
    <div className={TabContentStyles.content}>
      <InView onChange={bunView => {setState({...state, isBunView: bunView})}} threshold={0.2}>
        <div>
          <h2 className={TabContentStyles.title}>Булки</h2>
          <ul className={TabContentStyles.cardList}>
            {cardListBun}
          </ul>
        </div>
      </InView>
      <InView onChange={sauceView => {setState({...state, isSauceView: sauceView})}} threshold={1}>
        <div>
          <h2 className={TabContentStyles.title}>Соусы</h2>
          <ul className={TabContentStyles.cardList}>
            {cardListSauce}
          </ul>
        </div>
      </InView>
      <InView onChange={mainView => {setState({...state, isMainView: mainView})}} threshold={0.65}>
        <div>
          <h2 className={TabContentStyles.title}>Начинки</h2>
          <ul className={TabContentStyles.cardList}>
            {cardListMain}
          </ul>
        </div>
      </InView>
    </div>
  );
}

export default TabContent;

TabContent.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  onSetTab: PropTypes.func.isRequired,
};
