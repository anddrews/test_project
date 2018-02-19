import React, { Component } from 'react';
import {
  View,
  Animated,
  Image,
  Text,
  Easing,
} from 'react-native';
import styles from './styles';

export default class SunShine extends Component<{}> {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.animate();
  }
  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 3,
        duration: 2000,
        easing: Easing.linear,
      },
    ).start(() => this.animate());
  }
  render() {
    const img1 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 1, 0, 0],
    });
    const img2 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 0, 1, 0],
    });
    const img3 = this.animatedValue.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [0, 0, 0, 1],
    });
    return (
      <Animated.View style={styles.container}>
        <Animated.Image style={[styles.img, { opacity: img1 }]} source={require('../../../asset/img/sun1.png')}/>
        <Animated.Image style={[styles.img, { opacity: img2 }]} source={require('../../../asset/img/sun2.png')}/>
        <Animated.Image style={[styles.img, { opacity: img3 }]} source={require('../../../asset/img/sun3.png')}/>
      </Animated.View>
    );
  }
}
