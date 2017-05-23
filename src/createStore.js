// i middleware si pongono tra l'action e lo store
// ContainerView ---> AC (action) --> middleware ---> store ---> ContainerView

// applyMiddleware permette ad esempio di vedere i log dopo la action
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';

import shoppingListReducer from './reducers/shoppingListReducer';
import promiseMiddleware from 'redux-promise';

// questa funziona sarà creata dalla Container View
export default (initialState = {}) => (
  createStore(combineReducers({
    items: shoppingListReducer
  }), initialState, applyMiddleware(logger, promiseMiddleware))
);
