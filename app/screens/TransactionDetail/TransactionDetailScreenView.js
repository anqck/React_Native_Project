import T from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import { CategoryIcon, HeaderTitle, NavigationButton, ScreenWrapper, Separator, Value } from '../../components';
import { colors, dimensions } from '../../styles';
import { dateWithTime } from '../../utils/dateHelpers';
import { getParam } from '../../utils/navHelpers';
import s from './styles';

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
