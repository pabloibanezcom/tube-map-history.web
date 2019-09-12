import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
// Admin
import { adminReducer } from 'store/admin/reducers';
import { watchAdmin } from 'store/admin/sagas';
// Auth
import { authReducer } from 'store/auth/reducers';
import { watchAuth } from 'store/auth/sagas';
// Public
import { publicReducer } from 'store/public/reducers';
import { watchPublic } from 'store/public/sagas';

export const getStore = (history) => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose

  const sagaMiddleware = createSagaMiddleware();

  const createRootReducer = (_history) => combineReducers({
    router: connectRouter(_history),
    auth: authReducer,
    admin: adminReducer,
    public: publicReducer
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

  sagaMiddleware.run(watchAdmin);
  sagaMiddleware.run(watchAuth);
  sagaMiddleware.run(watchPublic);

  return store;
}
