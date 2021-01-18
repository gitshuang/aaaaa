import { createStore } from 'redux';
import reducer from './root';

const store = createStore(
  reducer
);

export default store;
