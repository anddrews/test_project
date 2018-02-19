import React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import RootNavigation from './rootNavigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

function ReduxNavigation(props) {
  const { dispatch, navigation } = props;
  const addListener = createReduxBoundAddListener('root');
  const nav = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: navigation,
    addListener,
  });
  return (
    <RootNavigation navigation={ nav } />
  );
}

const mapStateToProps = state => ({ navigation: state.navigation });
export default connect(mapStateToProps)(ReduxNavigation);
