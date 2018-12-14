import T from 'prop-types';
import React from 'react';
import { ScrollView, View } from 'react-native';

import {
  Button,
  CategoriesList,
  DatePicker,
  FormInput,
  HeaderTitle,
  Input,
  KeyboardAvoidingView,
  ScreenWrapper,
  Select,
  Value,
} from '../../components';
import { dimensions } from '../../styles';
import { getParam } from '../../utils/navHelpers';
import s from './styles';

// import dateFormat from '../../constants/dateFormat';


const AccountEditor = ({
  icon,
  date,
  value,
  note,
  setDate,
  onSubmit,
  accounts,
  account,
  isIncome,
  categoryName,
  categoryIcon,
  onUpdateNote,
  onToggleModal,
  isVisibleModal,
  onChangeAccount,
  incomeCategories,
  onChangeCategory,
  isReadyForSubmit,
  expenseCategories,
  isSelectedCategory,
}) => (
  <View style={s.root}>
    <ScreenWrapper style={s.withoutPaddingBot}>
      <ScrollView>
     
        <Value value={value} style={s.valueText} type={isIncome ? 'income' : 'expense'} />
        <Select
          isAccount
          selectOption={account}
          options={accounts}
          containerStyle={s.selectorContainer}
          style={s.selector}
          defaultValue="Tài khoản"
          selectorsWidth={dimensions.containerWidth}
          onSelect={onChangeAccount}
          textStyle={s.selectTextStyle}
          optionHeight={dimensions.verticalIndent * 2.8}
        />
        <FormInput
          style={s.selector}
          containerStyle={s.selectorContainer}
          isSelected={isSelectedCategory}
          value={categoryName}
          icon={categoryIcon}
          onPress={onToggleModal}
        />
        <DatePicker
          isSelected
          placeholder="Ngày"
          onSelectDate={val => setDate(val)}
          defaultValue={date}
          // format={dateFormat.newAccountDateFormat}
          mode="datetime"
          date={date}
        />
        <Input
          isValid
          placeholder="Ghi chú"
          value={note}
          onChangeText={onUpdateNote}
          containerStyle={s.noteContainer}
          iconRight={icon}
        />
      </ScrollView>
    </ScreenWrapper>
    <KeyboardAvoidingView withHeader>
      {isReadyForSubmit &&
      <Button
        secondaryOpacity
        title="Lưu"
        onPress={onSubmit}
      />
      }
    </KeyboardAvoidingView>
    <CategoriesList
      isModal
      isVisible={isVisibleModal}
      categories={isIncome ? incomeCategories : expenseCategories}
      onSelect={onChangeCategory}
      onToggleModal={onToggleModal}
    />
  
  </View>
);

AccountEditor.navigationOptions = ({ navigation }) => ({
  headerTitle:
  <HeaderTitle title={getParam('value')(navigation) < 0 ? 'Chi tiết chi' : 'Chi tiết thu'} />,
});

AccountEditor.propTypes = {
  date: T.any,
  onSubmit: T.func,
  icon: T.object,
  setDate: T.func,
  value: T.number,
  onUpdateNote: T.func,
  note: T.string,
  accounts: T.array,
  account: T.object,
  onChangeAccount: T.func,
  expenseCategories: T.array,
  incomeCategories: T.array,
  categoryName: T.string,
  categoryIcon: T.object,
  isSelectedCategory: T.bool,
  onChangeCategory: T.func,
  onToggleModal: T.func,
  isIncome: T.bool,
  isVisibleModal: T.bool,
  isReadyForSubmit: T.bool,
};

export default AccountEditor;
