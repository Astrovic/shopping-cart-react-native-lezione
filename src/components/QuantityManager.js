import React, { Component } from 'react';
import { StyleSheet, View, Text, /*TouchableOpacity,*/ Button } from 'react-native';

class QuantityManager extends Component {

  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
    this.onQuantityChange = this.onQuantityChange.bind(this);
  }

  //state= { quantity: 0 };

  onQuantityChange({ decrease }) {
    if (decrease && this.state.quantity === 0) {
      return;
    }
    if (decrease && this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
      this.props.onQuantityChange(-this.props.basePrice);
    } else {
      this.setState({ quantity: this.state.quantity + 1 });
      this.props.onQuantityChange(this.props.basePrice);
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Quantity: {this.state.quantity}</Text>
        <View style={styles.buttons}>
          {/*<TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>*/}
          <Button title="+" onPress={this.onQuantityChange} />
          <Button title="-" onPress={() => this.onQuantityChange({ decrease: true })} />
        </View>
        <Text>Subtotal: {this.state.quantity * this.props.basePrice}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'gainsboro',
    flex: 1,
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'center'
  }
});


export default QuantityManager;
