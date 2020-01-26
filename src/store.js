import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { counter } from './redux/reducers';

const reducers = combineReducers({
  counter: counter,
});

export const store = createStore(reducers, devToolsEnhancer());
