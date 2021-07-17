import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

/**
 *  blacklist config redux
 *  whitelist config redux persit
 */

export const KEY_ROOT_STORE = 'nftify_bridge';

const persistConfig = {
  key: KEY_ROOT_STORE,
  storage: storage,
  // whitelist: ['addressReducer', 'listTokenReducer'],
  // blacklist: ['addressReducer.errorNetwork'],
};

const root = persistReducer(persistConfig, rootReducer);
export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(root, applyMiddleware(sagaMiddleware, logger));
export const persistor = persistStore(store, {});
