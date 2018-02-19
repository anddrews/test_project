import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import RootReducer from '../reducers/rootReducer';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const middlewares = [thunk, reactNavigationReduxMiddleware];
const enhancer = composeWithDevTools({

})(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}

