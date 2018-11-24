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


const App = () => (
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