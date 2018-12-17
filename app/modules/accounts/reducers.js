import { handleActions } from 'redux-actions';
import types from './types';
import { chartPalette } from '../../styles';
import { insertWithUUID,insert, insertAll, update, removeId } from '../../utils/stateHelper';
import typesSettings from '../settings/types';

const createAccount = (props) => {
  const {
    name,
    initialBalance = 0,
    initialDate = new Date(),
    color = chartPalette.blue500,
  } = props;

  return {
    name, initialBalance, initialDate, color,
  };
};

//    "accounts": Object {
//        "byId": Object {
//            "0": Object {
//                "color": "#27ae60",
//                  "icon": "credit-card",
//                  "id": "0",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "name": "Card",
//                },
//            "1": Object {
//                "color": "#27ae60",
//                  "icon": "cash-multiple",
//                  "id": "1",
//                  "initialBalance": 0,
//                  "initialDate": 2018-04-17T13:29:18.248Z,
//                  "name": "Cash",
//                },
//          },
//        "ids": Array [
//            "3",
//            "2",
//            "1",
//            "0",
//          ],
//      },

const defaultAccounts = [
  createAccount({ name: 'Khác', color: chartPalette.yellow500 }),
  createAccount({ name: 'Tiền mặt', color: chartPalette.purple500 }),
  createAccount({ name: 'Thẻ tín dụng', color: chartPalette.lightBlue500 }),
];

const initialState = insertAll({}, defaultAccounts);

const accountsReducer = handleActions({
  // [types.CREATE_ACCOUNT]: (state, { payload }) => insert(state, createAccount({
  //   ...payload,
  //   balance: payload.initialBalance,
  // })),
  [types.CREATE_ACCOUNT]: (state, { payload }) => insertWithUUID(
    state,
    createAccount(payload),
  ),
  [types.UPDATE_ACCOUNT]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_ACCOUNT]: (state, { payload }) => removeId(state, payload),
  [typesSettings.RESET_DATA]: () => initialState,
}, initialState);

export default accountsReducer;
