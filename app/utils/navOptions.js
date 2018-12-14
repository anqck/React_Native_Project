import React from 'react';
import { View } from 'react-native';

import { DrawerIcon, Logo, PropsProxyHOC } from '../components';
import styles from '../styles/AppStyles';


const navOptions = ({ title, icon }) => ({
  navigationOptions: {
    title,
    headerTitle: <View style={styles.logoContainer}><Logo /></View>,
    drawerIcon: PropsProxyHOC(DrawerIcon, { name: icon }),
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitle: null,
  },
});

export default navOptions;
