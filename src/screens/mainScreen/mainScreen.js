import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { SunShine } from '../../components';

class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'MAIN',
  };

  render() {
    return (
      <View style={styles.container}>
        <SunShine/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

