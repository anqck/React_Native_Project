import moment from 'moment';
import T from 'prop-types';
import R from 'ramda';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Button, DatePicker, HeaderTitle, KeyboardAvoidingView, ScreenWrapper } from '../../components';
import { colors } from '../../styles';
import { AccountSelect, InputText, TwoArrowDown } from './components';
import s from './styles';

export const getBackgroundColor = account => (
  R.prop('color', account)
    ? ({
      borderColor: account.color,
      backgroundColor: account.color,
    })
    : {}
);

export const getIcon = account => (
  R.prop('icon', account)
    ? ({
      name: account.icon,
      size: 30,
    })
    : {}
);

const AccountEditor = ({
  account,
  accountsArr,
  date,
  from,
  isReadyForSubmit,
  isValidValue,
  note,
  setDate,
  onChangeFrom,
  onChangeNote,
  onChangeTo,
  onChangeValue,
  onSubmit,
  to,
  value,
}) => {
  const optionsFrom = accountsArr.filter(item => item.id !== to.id);
  const optionsTo = accountsArr.filter(item => item.id !== from.id);
  // console.log(account);
  return (
    <View style={s.root}>
      <ScreenWrapper style={s.withoutPaddingBottom}>
        <ScrollView>
          <View style={[s.card, getBackgroundColor(from)]}>
            <AccountSelect
              options={optionsFrom} 
              selectOption={account}             
              onSelect={index => {onChangeFrom(optionsFrom[index]); console.log("OnSelect2");}}
            />
            <InputText
              placeholder="Giá trị"
              value={value}
              onChangeText={onChangeValue}
              iconRight={getIcon(from)}
              keyboardType="numeric"
            />
            {
              !isValidValue.isValid &&
              !!value &&
              !R.isEmpty(from) &&
              <Text style={s.error}>{isValidValue.message}</Text>
            }
          </View>
          <TwoArrowDown color={isReadyForSubmit ? colors.green : colors.grey} />
          <View style={[s.card, getBackgroundColor(to)]}>
            <AccountSelect
              options={optionsTo}
              onSelect={index => onChangeTo(optionsTo[index])}
            />
            <DatePicker
              isSelected={false}
              placeholder="Ngày?"
              onSelectDate={val => setDate(val)}
              containerStyle={s.marginVertical}
              // format={dateFormat.newAccountDateFormat}
              // mode="datetime"
              colorIsSelected={colors.grey}
              date={date}
            />
            <InputText
              placeholder="Ghi chú"
              value={note}
              onChangeText={onChangeNote}
            />
          </View>
        </ScrollView>
      </ScreenWrapper>
      <KeyboardAvoidingView withHeader>
        {isReadyForSubmit &&
        <Button
          secondaryOpacity
          title="OK"
          onPress={onSubmit}
        />
        }
      </KeyboardAvoidingView>
    </View>
  );
};


AccountEditor.navigationOptions = () => ({
  headerTitle: <HeaderTitle title="Chuyển tiền" />,
});

AccountEditor.propTypes = {
  accountsArr: T.arrayOf(
    T.oneOfType([
      T.object,
      T.string,
    ])),
  date: T.oneOfType([
    T.instanceOf(Date),
    T.instanceOf(moment),
  ]),
  from: T.object,
  isReadyForSubmit: T.bool,
  isValidValue: T.object,
  note: T.string,
  onChangeDate: T.func,
  onChangeFrom: T.func,
  onChangeNote: T.func,
  onChangeTo: T.func,
  onChangeValue: T.func,
  onSubmit: T.func,
  to: T.object,
  value: T.oneOfType([T.string, T.number]),
};

export default AccountEditor;
