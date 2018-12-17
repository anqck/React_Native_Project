import React from 'react';
import {NativeModules, StatusBar, Text, View } from 'react-native';
import { COLOR } from 'react-native-material-ui';
import { MenuProvider } from 'react-native-popup-menu';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import styles from './app/styles/AppStyles';
import Navigator from './app/navigation/NavigatorContainer';
import { store, persistor } from './app/store';
import { appOperations } from './app/modules/app';
import { lifecycle } from 'recompose';

console.ignoredYellowBox = ['MenuContext', 'Deprecation warning'];

const App = () => (
<MenuProvider>
        <View style={styles.rootStyle}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor='#48A2F8'
          />
         
           <Provider store={store}>
              <PersistGate persistor={persistor}>
                 <Navigator/>
              </PersistGate>
            </Provider>
        </View>
      </MenuProvider>
  );
// export default class App extends React.Component {
//   render() {
//     return (
      
//     );
//   }
// }

const enhance = lifecycle({
  componentDidMount() {
    store.dispatch(appOperations.loadAssets());
  },
});

export default enhance(App);