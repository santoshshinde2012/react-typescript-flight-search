import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'react-datepicker/dist/react-datepicker.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
