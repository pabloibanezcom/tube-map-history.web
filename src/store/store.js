import { connectRouter, routerMiddleware } from 'connected-react-router';
import { adminReducer, authReducer } from 'reducers';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import { watchAll } from './sagas';

export const getStore = (history) => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose

  const sagaMiddleware = createSagaMiddleware();

  const createRootReducer = (_history) => combineReducers({
    router: connectRouter(_history),
    auth: authReducer,
    admin: adminReducer,
  });

  const store = createStore(
    createRootReducer(history),
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
      )
    )
  );

  sagaMiddleware.run(watchAll);

  return store;
}
