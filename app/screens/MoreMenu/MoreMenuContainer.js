import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { compose, hoistStatics, withHandlers, withState } from 'recompose';

import { settingsOperations } from '../../modules/settings';
import { withLoading } from '../../utils/enhancers';
import MoreMenuScreenView from './MoreMenuScreenView';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);
const mapStateToProps = state => ({
  currency: state.settings.currency,
});
 
const alert = (title, text, func) => {
  Alert.alert(title, text,
    [{
      text: 'OK',
      onPress: func,
    }, {
      text: 'Cancel',
    }],
    { cancelable: false }
  );
};


const enhance = compose(
  connect(mapStateToProps, settingsOperations),
  withState('isLoading', 'toggleLoading', false),
  withHandlers({
    action: props => (action) => {
      props.toggleLoading(true);
      setTimeout(() => {
        action();
        props.toggleLoading(false);
        props.navigation.navigate('Bookmarks');
      }, 100);
    },
  }),
  withHandlers({
    onResetData: props => () => {
      console.log("RS");
      alert('Xóa dữ liệu',
        'Bạn có muốn trờ lại trạng thái ban đầu và xóa tất cả dữ liệu ?',
        () => props.action(props.resetData));
    },
    onPress: props => item => 
    {
      props.navigation.navigate(item.nav)
    }
    ,
  }),
  withLoading(),
);

export default hoistStatics(enhance)(MoreMenuScreenView);
