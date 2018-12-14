import React from 'react';
import { StatusBar, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import { lifecycle } from 'recompose';
import { PersistGate } from 'redux-persist/es/integration/react';

import { appOperations } from './app/modules/app';
import Navigator from './app/navigation/NavigatorContainer';
import { persistor, store } from './app/store';
import styles from './app/styles/AppStyles';

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