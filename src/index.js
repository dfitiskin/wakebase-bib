import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import App from './App';
import gen from './reducers';
import registerServiceWorker from './registerServiceWorker';

const data = localStorage.getItem('bib-state');
const savedState = data ? JSON.parse(data) : undefined;

const history = createHistory();
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    gen,
    routing: routerReducer
  }),
  savedState,
  composeWithDevTools(
    applyMiddleware(middleware)
  )
);

store.subscribe(state => {
  localStorage.setItem('bib-state', JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
