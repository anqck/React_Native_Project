import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from './BaseNavigator';

const NavigatorView = ({ dispatch, navigator }) => (
  <Navigator navigation={{
    dispatch,
    state: navigator,
 }} />
);

NavigatorView.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object,
};

export default NavigatorView;
