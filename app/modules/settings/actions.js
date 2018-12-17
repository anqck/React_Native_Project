import { createActions } from 'redux-actions';
import types from './types';

export const { signIn, generateMockData, resetData } = createActions(
  types.SIGN_IN,
  types.GENERATE_MOCK_DATA,
  types.RESET_DATA,
);
