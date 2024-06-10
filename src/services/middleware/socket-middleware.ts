import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppDispatch } from '../../types/dispatch';
import type { RootState } from '../../types/state';
import type { TWSActions } from '../actions/ws-actions';
import {
  wsInit,
  wsOpen,
  wsError,
  wsClose,
  wsGetMessage,
 } from '../actions/ws-actions';
import { updateAccessToken } from '../../utils/api-constants';
import { checkResponse } from '../../utils/constants';
import { setError } from '../actions/error';

export const socketMiddleware = (): Middleware => {
    let url: string;
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
      let ws: WebSocket | null = null;
      return next => (action: TWSActions) => {
        const { dispatch } = store;
        const { type } = action;
        if (type === 'WS_CONNECTION_START') {
          url = action.payload;
          ws = new WebSocket(url);
        }
        if (ws) {
          ws.onopen = event => {
            dispatch(wsOpen(event));
          };
          ws.onerror = event => {
            dispatch(wsError(event));
          };
          ws.onmessage = event => {
            const { data } = event;
            const parseData = JSON.parse(data);
            dispatch(wsGetMessage(parseData));
            if (parseData.message === 'Invalid or missing token') {
              updateAccessToken()
                .then(checkResponse)
                .then(res => {
                  //localStorage.setItem('accessToken', res.accessToken);               
                  const wsUrl = new URL(url);
                  wsUrl.searchParams.set(
                    'token',
                    res.accessToken.replace('Bearer ', '')
                  );
                  dispatch(wsInit(wsUrl.toString()));
                })
                .catch(err => dispatch(setError(err.status)));
            }
          };
          ws.onclose = event => {
            dispatch(wsClose());
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
