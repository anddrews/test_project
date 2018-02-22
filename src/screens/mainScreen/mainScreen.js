import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SunShine } from '../../components';
import  userDecorator  from '../../decorators/userDecorator';

@userDecorator
export default class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'MAIN',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.user.userName}</Text>
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


