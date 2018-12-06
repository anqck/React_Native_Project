import { connect } from 'react-redux';
import { compose, hoistStatics, withProps, withHandlers } from 'recompose';
import MoreMenuScreenView from './MoreMenuScreenView';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const enhance = compose(

  
  withHandlers({
    onPress: props => item => props.navigation.navigate(item.nav),
  }),
);

export default hoistStatics(enhance)(MoreMenuScreenView);
