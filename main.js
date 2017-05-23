import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
//import { StyleSheet, Text, View } from 'react-native';
//import Header from './src/components/Header';
//import ShoppingList from './src/components/ShoppingList';
import HomeScreen from './src/components/HomeScreen';
import createStore from './src/createStore';

const store = createStore();


//class App extends React.Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Header title="Shopping Cart" style={{top:20}}></Header>
//        {//<Total></Total>
//        }
//        <ShoppingList style={{top:20}}></ShoppingList>
//      </View>
//    );
//  }
//}


const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    //alignSelf: 'stretch'
  },
});
*/

Expo.registerRootComponent(App);
