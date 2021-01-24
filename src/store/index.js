import { createStore } from 'redux';
import reducer from './root/toDoReducer.js';
 const defaultState = [{title:'111',id:'0'}]
const store = createStore(
  reducer,
  defaultState
);

export default store;
