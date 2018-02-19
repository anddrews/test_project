import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/lib/integration/react'
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import { ReduxNavigation } from './src/settings/navigation/';

const { store, persistor } = configureStore({});

export default class App extends Component<{}> {
  render() {
    return (
      <Provider style={styles.container} store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ReduxNavigation />
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});
