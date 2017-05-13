import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class ProductDetail extends React.Component {
  state = { newPrice: this.props.price }
  handleUpdatePrice = text => {
    this.setState({ newPrice: parseFloat(text) });
    this.props.onPriceChange(parseFloat(text));
  }

  render() {
    const { wrapperStyle, titleStyle, descriptionStyle, priceStyle, newPriceStyle } = styles;
    const { title, description, price } = this.props;

    return (
      <View style={wrapperStyle}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={descriptionStyle}>{description}</Text>
        <Text style={priceStyle}>{this.state.newPrice} Euro</Text>
        <TextInput
          style={newPriceStyle}
          keyboardType='decimal-pad'
          placeholder="new price"
          onChangeText={this.handleUpdatePrice}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: 'white',
    //borderWidth: 1,
    flex: 2,
    marginHorizontal: 10,
    //justifyContent: 'center',
    /*marginHorizontal: 15,
    marginTop: 15,
    height: 200,
    //flex: 1,
    //borderWidth: 1,
    top: 20,
    shadowOffset: {height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 5*/
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '400'
  },
  descriptionStyle: {
    fontSize: 12
  },
  priceStyle: {
    fontSize: 20,
    fontWeight: '600'
  },
  newPriceStyle: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'red',
    height: 44,
    paddingLeft: 5
  }
});

export default ProductDetail;
