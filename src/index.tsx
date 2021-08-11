import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routers from './routers/Routers';
import { Provider } from 'react-redux';
import store from './store';
import './index.less';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Routers />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
