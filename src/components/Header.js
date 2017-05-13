import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title, style}) => (
  <View style={[styles.wrapper, style]}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    height : 44,
    //flex: 1,
    backgroundColor: 'dodgerblue',
    shadowOffset: {height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize : 18,
    color: 'white',
    fontWeight: '300'
  }
});

export default Header;
