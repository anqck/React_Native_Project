import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import {
  ScreenWrapper,
  HeaderTitle,
  NavigationButton,
  CategoryIcon,
  Value,
  Separator,
} from '../../components';
import s from './styles';
import { getParam } from '../../utils/navHelpers';
import { dimensions, colors } from '../../styles';
import { dateWithTime } from '../../utils/dateHelpers';

const TransactionDetail = ({
 account,
 category: {
   name = '-',
   icon = null,
 },
 transaction,
}) => (
  <View style={s.root}>
    <View style={[s.iconContainer, { backgroundColor: account.color }]}>
      <CategoryIcon
        size={dimensions.iconSize * 1.5}
        tintColor={colors.white}
        name={icon}
      />
    </View>
    <ScreenWrapper style={s.withoutPaddingBottom}>
      <View style={s.container}>
        <View style={s.mainContentContainer}>
          <Text style={s.title}>{name}</Text>
          <Text style={s.accountName}>{account.name}</Text> 
          <Text style={s.regular}>{dateWithTime(transaction.date)}</Text>
        </View>
        <Value
          style={s.value}
          value={transaction.value}
        />
      </View>
      <Separator />
      {
        !!transaction.note && (
          <View style={s.secondContainer}>
            <Text style={s.secondTitle}>Ghi chú</Text>
            <Text style={s.regular}>{transaction.note}</Text>
          </View>
        )
      }
    </ScreenWrapper>
  </View>
);

TransactionDetail.navigationOptions = ({ navigation }) => ({
  headerTitle: <HeaderTitle title="Chi tiết thu/chi" />,
  headerRight:
  <NavigationButton
    title="Sửa"
    titleStyle={s.headerRight}
    onPress={getParam('onEditPress')(navigation)}
  />,

});

TransactionDetail.propTypes = {
  account: T.object,
  category: T.object,
  transaction: T.object,
};

export default TransactionDetail;
