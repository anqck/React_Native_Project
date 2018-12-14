import R from 'ramda';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { compose, defaultProps, hoistStatics, withHandlers, withProps, withPropsOnChange, withState } from 'recompose';

import { categoriesTypes } from '../../constants/categories';
import icons from '../../constants/categoryIcons';
import { categoriesOperations } from '../../modules/categories';
import { dimensions } from '../../styles';
import { getParam } from '../../utils/navHelpers';
import CategoryEditor from './CategoryEditorScreenView';


const accountProp = (propName, def) => R.pathOr(def, ['category', propName]);

const enhance = compose(

  connect(null, categoriesOperations),

  defaultProps({
    onClear: () => null,
    icon: {
      name: 'attach-money',
      size: dimensions.iconSize,
    },
  }),


  withProps({ icons }),
  withProps(({ navigation }) => ({ category: getParam('category')(navigation) })),
  withProps(({ category, createCategory, updateCategory }) => ({
    submit: category ? updateCategory : createCategory,
  })),
  withState('icon', 'setIcon', accountProp('icon', icons[0])),
  withState('name', 'setName', accountProp('name', '')),
  withState('type', 'setType', accountProp('type', null)),
  withState('isPickerVisible', 'setPickerVisible', false),
  withHandlers({
    togglePicker: ({ isPickerVisible, setPickerVisible }) => () => {
      setPickerVisible(!isPickerVisible);
    },
    onChangeIcon: ({ setPickerVisible, setIcon }) => (value) => {
      setIcon(value);
      setPickerVisible(false);
    },
    onSubmit: ({
      submit, navigation, category, onClose, ...props
    }) => () => {
      Keyboard.dismiss();
      const editedProps = R.pick(['name', 'icon', 'type'], props);
      const propsToSubmit = category ? { id: category.id, ...editedProps } : editedProps;
      submit(propsToSubmit);
      navigation.goBack(null);
    },
    onSelectCategory: ({ setType }) => (val) => {
      const type = val === '0' ? categoriesTypes.expense : categoriesTypes.income;
      setType(type);
    },
  }),
  withPropsOnChange(
    ['name', 'type', 'icon'],
    ({ name, type, icon }) => ({ isValid: !!name && name.length > 0 && !!type && !!icon }),
  ),
);


export default hoistStatics(enhance)(CategoryEditor);
