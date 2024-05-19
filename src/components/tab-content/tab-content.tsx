import Card from '../card/card';
import { useSelector, shallowEqual } from 'react-redux';
import { InView } from 'react-intersection-observer';
import { useState, useEffect, useMemo } from 'react';
import { FC } from 'react';
import { TIngredient } from '../../types/ingredient';
import TabContentStyles from './tab-content.module.css';

interface ITabContentProps {
  onSetTab: (item: string) => void,
}

interface IAppStore {
  data: any,
}

const TabContent: FC<ITabContentProps> = ({ onSetTab }) => {

  const { data } = useSelector((store: IAppStore) => ({data: store.data}), shallowEqual);

  const { cardsBun, cardsSauce, cardsMain } = useMemo (
    () => ({
      cardsBun: data.data.filter((card: TIngredient) => card.type === 'bun'),
      cardsSauce: data.data.filter((card: TIngredient) => card.type === 'sauce'),
      cardsMain: data.data.filter((card: TIngredient) => card.type === 'main'), 
    }),
    [data]
  );

  const cardListBun = cardsBun.map((card: TIngredient) => {
    return (
      <Card
        key={card._id}
        card={card}
      />
    );
  });

  const cardListSauce = cardsSauce.map((card: TIngredient) => {
    return (
      <Card
        key={card._id}
        card={card}
      />
    );
  });

  const cardListMain = cardsMain.map((card: TIngredient) => {
    return (
      <Card
        key={card._id}
        card={card}
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
