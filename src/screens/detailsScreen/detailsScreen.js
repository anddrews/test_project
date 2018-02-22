import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import userDecorator from '../../decorators/userDecorator';

@userDecorator
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'DETAILS',
  };
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  render() {
    const { locations } = this.props;
    return (
      <View style={styles.container}>
        <Text> DETAIL SCREEN</Text>
        <Text>{this.props.user.userName}</Text>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button title="set new name" onPress={() => this.props.setUser(this.state.text) } />
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