import R from 'ramda';
import { Keyboard } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { compose, defaultProps, hoistStatics, withHandlers, withProps, withState } from 'recompose';

import { accountsOperations } from '../../modules/accounts';
import { chartPalette, dimensions } from '../../styles';
import { getParam } from '../../utils/navHelpers';
import AccountEditorScreenView from './AccountEditorScreenView';


const accountProp = (propName, def) => R.pathOr(def, ['account', propName]);

const withAccount = withProps(({ navigation }) => ({
  account: getParam('account')(navigation),
}));

const withValidation = withProps(({ name }) => ({
  isValid: !!name && name.length > 0,
}));

const withSubmitEvent = withProps(({ account, createAccount, updateAccount }) => ({
  submit: account ? updateAccount : createAccount,
}));

const onChangeBalance = ({ setInitialBalance }) => (value) => {
  setInitialBalance(+value.replace(/[^\d]/g, ''));
};

const onToggleColorPicker = ({ toggleColorPicker, isColorPickerVisible }) => () => {
  toggleColorPicker(!isColorPickerVisible);
};

const onSelectColor = ({ setColor, toggleColorPicker }) => (color) => {
  toggleColorPicker(false);
  setColor(color);
};

const onSubmit = ({
  submit, account, navigation, ...props
}) => () => {
  Keyboard.dismiss();
  const editedProps =
    R.pick(['name', 'currency', 'date', 'initialBalance', 'balance', 'color'], props);
  const propsToSubmit = account ? { id: account.id, ...editedProps } : editedProps;
 // console.log(propsToSubmit);
  submit(propsToSubmit);
  navigation.dispatch(NavigationActions.back());
};

const enhance = compose(
  connect(null, accountsOperations),
  withAccount,
  withSubmitEvent,
  withState('name', 'onNameChange', accountProp('name', '')),
  withState('initialBalance', 'setInitialBalance', accountProp('initialBalance', 0)),
  withState('balance', 'setBalance', accountProp('balance')),
  withState('color', 'setColor', accountProp('color', chartPalette.salmon500)),
  withState('isColorPickerVisible', 'toggleColorPicker', false),

  defaultProps({
    onClear: () => null,
    icon: {
      name: 'cash-multiple',
      size: dimensions.iconSize,
    },
  }),

  withHandlers({
    onChangeBalance,
    onToggleColorPicker,
    onSelectColor,
    onSubmit,
  }),
  withValidation,
);

export default hoistStatics(enhance)(AccountEditorScreenView);
