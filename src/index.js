import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { persistor, sagaMiddleware, store } from './redux/configStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { getToken } from './services/api';

import 'antd/dist/antd.css';
import './App.css';
import './sass/_app.scss';
import rootSaga from './redux/rootSaga';
require('dotenv').config();

const onBeforeLift = store => () => {
  console.log(store.getState());
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate onBeforeLift={onBeforeLift(store)} loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
sagaMiddleware.run(rootSaga);
serviceWorker.unregister();
