import React, { Component } from 'react';
import { StyleSheet, /*View,*/ TouchableOpacity, Linking } from 'react-native';
import Thumbnail from './Thumbnail';
import ProductDetail from './ProductDetail';
import QuantityManager from './QuantityManager';

class OrderItem extends Component {
  state = { newPrice: 25 };

  updatePrice = newPrice =>
    //this.setState({newPrice: newPrice}); è equivalente a
    this.setState({ newPrice });


  render() {
    return (
      //console.log("dettaglio");
      //console.log(this.props.productDetail);
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={0.8}
        onPress={() => Linking.openURL(this.props.productDetail.url)}
      >
      <Thumbnail url={this.props.productDetail.thumbnailUrl} />
      <ProductDetail
        title={this.props.productDetail.title}
        description={this.props.productDetail.description}
        onPriceChange={this.updatePrice}
        price={25}
      />
      <QuantityManager
        onQuantityChange={this.props.onQuantityChange}
        basePrice={this.state.newPrice}
      />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    height: 200,
    //flex: 1,
    //borderWidth: 1,
    top: 20,
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
});


export default OrderItem;
