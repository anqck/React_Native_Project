import T from 'prop-types';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ListItem } from 'react-native-material-ui';

import { Icon, Subtitle } from '../../components';
import screens from '../../constants/screens';
import colors from '../../styles/colors';
import s from './styles';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const Accounts = ({
  accounts, onPress, onAddAccount, totalBalance,onTranfer,onTranferPress,onAccountPress
}) => {
  const _keyExtractor = item => item.id;

  const _renderItem = ({ item }) => (

    <ListItem
                        divider
                        leftElement={<Avatar
                          small
                          rounded
                          overlayContainerStyle={{backgroundColor: item.color}}         
                          activeOpacity={0.7}
                        />}
                        centerElement={{
                            primaryText: item.name,
                            secondaryText: item.balance.toString().replace(/(.)(?=(\d{3})+$)/g,'$1,')+' ₫' ,
                        }}
                        rightElement={{
                          menu: {
                            icon: "more-vert",
                            labels: ["Chuyển khoản","Sửa tài khoản"]
                        }
                      }}
                        onLeftElementPress={() => {

                        }}
                        onPress={() =>  onAccountPress(item)}
                        onRightElementPress={(menu) => {
                          if(menu.index === 0)                                              
                            onTranferPress(item);
                          else if (menu.index === 1)
                          onPress(item);

                        }}
                    />
  );

  return (
    <View style={s.root}>
      <Subtitle
        style={s.subtitle}
        leftText="Tài khoản"
        totalBalance={totalBalance}
      />
      <FlatList
        data={accounts}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        numColumns={1}
        style={s.paddingHorizontal}
        bounces={false}
      />
    </View>
  );
};

Accounts.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <TouchableOpacity
      onPress={onNavigate(navigation, screens.AccountEditor, { title: 'Thêm tài khoản' })}
    >
      <Icon
        name="plus"
        color={colors.green}
        width={60}
        height={24}
      />
    </TouchableOpacity>
  ),
});

Accounts.propTypes = {
  accounts: T.array,
  onPress: T.func,
  onAddAccount: T.func,
  totalBalance: T.number,
};

export default Accounts;
