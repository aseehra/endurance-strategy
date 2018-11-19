import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import * as serviceWorker from './serviceWorker';
import EnduranceStrategy from './containers/EnduranceStrategy';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <EnduranceStrategy />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
