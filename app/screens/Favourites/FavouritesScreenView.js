import T from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { DateFilter, FlatList, Separator, Subtitle, TransactionItem } from '../../components';
import s from './styles';


const Favourites = ({
  concatenatedData,
  onDeleteFromFavourites,
                      onGoToDetail,
  dateForFiltering,
  setDateForFiltering,
  setListRef,
}) => (
  <View style={s.root}>
    <DateFilter
      dateForFiltering={dateForFiltering}
      setDateForFiltering={setDateForFiltering}
    />
    <Subtitle
      style={s.subtitle}
      leftText="Yêu thích"
    />
    <Separator withShadow />
    <FlatList
      isSimpleEmptyText={!!concatenatedData.length}
      data={concatenatedData}
      renderItem={({ item }) =>
        <TransactionItem
          entity={item}
          onDelete={() => onDeleteFromFavourites({ id: item.id, isTransaction: !!item.account })}
          onPress={() => onGoToDetail({ id: item.id, isTransaction: !!item.account })}
        />
      }
      listEmptyText="Bạn không có yêu thích nào"
      flatListRef={setListRef}
    />
  </View>
);

Favourites.propTypes = {
  concatenatedData: T.array,
  onDeleteFromFavourites: T.func,
  onGoToDetail: T.func,
  setDateForFiltering: T.func,
  dateForFiltering: T.object,
  setListRef: T.func,
};


export default Favourites;
