import { connectRouter, routerMiddleware } from 'connected-react-router';
import { adminReducer, authReducer, mainReducer } from 'reducers';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import { watchAll } from './sagas';
export const getStore = (history) => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

  const sagaMiddleware = createSagaMiddleware();

  const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    main: mainReducer,
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
