import AsyncStorage from 'redux-persist/es/storage';
import { persistCombineReducers } from 'redux-persist';
import app from './app';
import navigator from './navigator';
import settings from './settings';
import accounts from './accounts';
import categories from './categories';


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

  categories,
  accounts,
  app,
  navigator,
  settings,
};


 export default persistCombineReducers( config,appReducer);
 
 