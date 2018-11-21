import React from 'react';
import {NativeModules, StatusBar, Text, View } from 'react-native';
import { COLOR } from 'react-native-material-ui';
import { MenuProvider } from 'react-native-popup-menu';

import {App1, BaseNavigator} from "./app/navigation";
import styles from './app/styles/AppStyles';

const UIManager = NativeModules.UIManager;

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
        accentColor: COLOR.pink500,
    },
};

export default class App extends React.Component {
  render() {
    return (
      <MenuProvider>
        <View style={styles.rootStyle}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={COLOR.white}
          />
          <App1/>
        </View>
      </MenuProvider>
    );
  }
}

