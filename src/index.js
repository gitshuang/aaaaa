import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todos/todos.js';
import store from 'store';
import { Provider } from 'react-redux';

const App = () => (
    <Provider store={store} >
      <Todos />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
