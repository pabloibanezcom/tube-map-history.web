import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { adminReducer, mainReducer } from './store/reducers';
import { watchAll } from './store/sagas';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  main: mainReducer,
  admin: adminReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchAll);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
