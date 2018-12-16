import AsyncStorage from 'redux-persist/es/storage';
import { persistCombineReducers } from 'redux-persist';
import app from './app';
import navigator from './navigator';
import settings from './settings';
import accounts from './accounts';
import categories from './categories';
import transactions from './transactions';

const config = {
  key: 'root',
  whitelist: [
    'settings',
    'accounts',
    'categories',
    'transactions',
    'transfers',
  ],
  storage: AsyncStorage,
};

const appReducer = {
  transactions,
  categories,
  accounts,
  app,
  navigator,
  settings,
};


 export default persistCombineReducers( config,appReducer);
 
 