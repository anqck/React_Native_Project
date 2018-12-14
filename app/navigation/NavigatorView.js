import PropTypes from 'prop-types';
import React from 'react';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import Navigator from './BaseNavigator';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

const NavigatorView = ({ dispatch, navigator }) => (
  <Navigator navigation={{    dispatch,    state: navigator,    addListener, }} />
/* <Navigator navigation={addNavigationHelpers({ dispatch, state: navigator ,addListener})} /> */
);

NavigatorView.propTypes = {
  dispatch: PropTypes.func,
  navigator: PropTypes.object,
};


export default NavigatorView;
