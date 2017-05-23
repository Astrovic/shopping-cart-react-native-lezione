import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
//import ShoppingList from './src/components/ShoppingList';
import ShoppingListContainer from '../containers/ShoppingListContainer';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Shopping Cart Lezione" style={{ top:20 }} />
        {/*<ShoppingList style={{top:20}}></ShoppingList>*/}
        <ShoppingListContainer style={{ top:20 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    //alignSelf: 'stretch'
  },
});
