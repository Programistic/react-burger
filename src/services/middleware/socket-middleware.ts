import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppDispatch } from '../../types/dispatch';
import type { RootState } from '../../types/state';
import type { TWSActions } from '../actions/ws-actions';
import {
  wsSuccessOpen,
  wsError,
  wsClose,
  wsGetMessage,
 } from '../actions/ws-actions';

export const socketMiddleware = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
      let ws: WebSocket | null = null;
      return next => (action: TWSActions) => {
        const { dispatch } = store;
        const { type } = action;
        if (type === 'WS_CONNECTION_START') {
          ws = new WebSocket(wsUrl);
        }
        if (ws) {
          ws.onopen = event => {
            dispatch(wsSuccessOpen(event));
          };
          ws.onerror = event => {
            dispatch(wsError(event));
          };
          ws.onmessage = event => {
            const { data } = event;
            dispatch(wsGetMessage(data));
          };
          ws.onclose = event => {
            dispatch(wsClose(event));
          };
          if (type === 'WS_SEND_MESSAGE') {
            const message = action.payload;
            ws.send(JSON.stringify(message));
          }
        }
        next(action);
      };
    }) as Middleware;
};
