import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createMultilanguageReducer } from 'redux-multilanguage';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as reducers from './ducks';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = (state, action) => {
  return combineReducers({
    multilanguage: createMultilanguageReducer({ currentLanguageCode: 'en' }),
    ...reducers,
  })(state, action);
};

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['auth', 'tags', 'profile', 'users'],
};

const middleware = [thunk];

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, devTools);
const persistor = persistStore(store);
export { persistor, store };
