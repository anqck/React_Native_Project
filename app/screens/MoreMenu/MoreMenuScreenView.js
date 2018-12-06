import React from 'react';
import T from 'prop-types';

import { View, FlatList } from 'react-native';
import screens from '../../constants/screens'
import {
  Subtitle,

  Icon,
} from '../../components';
import s from './styles';
import  { ListItem, Subheader } from 'react-native-material-ui'
import { Avatar } from 'react-native-elements'
const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);


const Accounts = ({
  accounts, onPress
}) => {
 
  const _renderItem = ({ item }) => (
   
    <ListItem
                        divider
                        leftElement={<Avatar
                          medium
                          rounded
                          icon={{name: item.icon, type: item.icon_type}}
                          activeOpacity={0.7}
                          
                        />}
                        centerElement={{
                            primaryText: item.title,
                            secondaryText: item.subtitle ,
                            
                        }}
                        
                        onLeftElementPress={() => {

                        }}
                        onPress={() =>  onPress(item)}
                       
                    />
  );


  
  return (
    <View style={s.root}>
      <Subtitle
        style={s.subtitle}
        leftText="Chức năng khác"
      />
      <FlatList
        data={[{title: 'Danh sách yêu thích', subtitle:  'Danh sách các thu/chi ghi yêu thích được lưu', icon_type: 'font-awesome', icon: 'star', key: '1',nav: screens.Favourites},
        {title: 'Danh sách các hạng mục thu/chi', subtitle:  'Danh sách các hạng mục thu/chi', icon: 'ios-list-box', icon_type: 'ionicon', key: '2',nav: screens.Categories}]}
        renderItem={_renderItem}
        numColumns={1}
        style={s.paddingHorizontal}
        bounces={false}
      />
    </View>
  );
};



Accounts.propTypes = {
  accounts: T.array,
  onPress: T.func,
  onAddAccount: T.func,
  totalBalance: T.number,
};

export default Accounts;
