import T from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import { CategoryIcon, HeaderTitle, ScreenWrapper, Separator, Value } from '../../components';
import { colors, dimensions } from '../../styles';
import { dateWithTime } from '../../utils/dateHelpers';
import s from './styles';

const TransferDetail = ({
  fromName,
  toName,
  transfer,
}) => (
  <View style={s.root}>
    <View style={[s.iconContainer, { backgroundColor: colors.green }]}>
      <CategoryIcon
        size={dimensions.iconSize * 1.5}
        tintColor={colors.white}
        name="shuffle-disabled"
      />
    </View>
    <ScreenWrapper style={s.withoutPaddingBottom}>
      <View style={s.container}>
        <View style={s.mainContentContainer}>
          <Text style={s.title}>Transfer</Text>
          <Text style={s.accountName}>{`Chuyển tiền từ ${fromName} sang ${toName}`}</Text>
          <Text style={s.regular}>{dateWithTime(transfer.date)}</Text>
        </View>
        <Value style={s.value} value={transfer.value} isTransfer />
      </View>
      <Separator />
      {
        !!transfer.note && (
          <View style={s.secondContainer}>
            <Text style={s.secondTitle}>Ghi chú</Text>
            <Text style={s.regular}>{transfer.note}</Text>
          </View>
        )
      } 
    </ScreenWrapper> 
  </View>
);

TransferDetail.navigationOptions = {
  headerTitle: <HeaderTitle title="Chi tiết chuyển tiền" />,
};

TransferDetail.propTypes = {
  fromName: T.string,
  toName: T.string,
  transfer: T.object,
};

export default TransferDetail;
