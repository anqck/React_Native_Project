import React from 'react';
import {NativeModules, StatusBar, Text, View } from 'react-native';
import { COLOR } from 'react-native-material-ui';
import { MenuProvider } from 'react-native-popup-menu';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import {App1, BaseNavigator} from "./app/navigation";
import styles from './app/styles/AppStyles';
import Navigator from './app/navigation/NavigatorContainer';
import { store, persistor } from './app/store';
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
           <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Navigator/>
          </PersistGate>
      </Provider>
        </View>
      </MenuProvider>
    );
  }
}

