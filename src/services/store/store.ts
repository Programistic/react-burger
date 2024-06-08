import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/root-reducer';
import { enhancer } from '../../utils/constants';
import { thunk } from 'redux-thunk';
import { socketMiddleware } from '../middleware/socket-middleware';
import { wsAllOrderUrl } from '../../utils/ws-constants';

export const store = createStore(
  rootReducer,
  enhancer(applyMiddleware(thunk, socketMiddleware(wsAllOrderUrl)))
);
