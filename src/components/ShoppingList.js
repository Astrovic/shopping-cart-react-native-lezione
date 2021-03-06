import React, { Component } from 'react';
import { StyleSheet, /*Text, ScrollView,*/ View, ListView } from 'react-native';
import OrderItem from './OrderItem';
import Total from './Total';

class ShoppingList extends Component {

  constructor(props) {
    super(props);
    console.log('passed in props');
    console.log(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.title !== r2.title
    });

    this.state = {
      total: 0,
      dataSource: this.ds.cloneWithRows(props.items)
    };

    this.refresh = this.refresh.bind(this);
  }

  //state={ items: [] };

  //state = {total:0}

  componentWillMount() {
    // metto il load in una funzione refresh
    // if (this.props.loadItems) {
    //   this.props.loadItems();
    // }
    console.log('componentWillMount --> this.refresh();');
    this.refresh();

    //updateTotal(amount) {
    //  this.setState({ total: this.state.total + amount });
    //}

    /*
    fetch('http://www.dmi.unict.it/~calanducci/LAP2/data.json', {
      headers: {
        //se cambiano i dati nella url, vengono prelevati quelli della cache
        //dunque chiedo di non utilizzare la cache
        'Cache-Control': 'no-cache'
      }})
      .then(response => response.json())
      .then(responseData => this.setState({ dataSource: this.ds.cloneWithRows(responseData.items) }))
      .catch(error => {
        console.log(error);
        alert('niente da fare...');
      });
      */
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps');
    console.log('sono in newProps');
    console.log(newProps);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newProps.items)
    });
  }

  refresh() {
    if (this.props.loadItems) {
      this.props.loadItems();
    }
  }

  updateTotal(amount) {
    this.setState({ total: this.state.total + amount });
  }

  // renderOrderItems() {
  //   /*
  //   const numeri =[1,2,3,4,5,6];
  //   //const nuoviNumeri = numeri.map(function(currentNumber){
  //   //  return currentNumber + 10;
  //   //})
  //   const nuoviNumeri = numeri.map((currentNumber,index) => (currentNumber + 10 + " index " + index));
  //   console.log(nuoviNumeri)
  //
  //   */
  //   // map consente di eseguire una funzione. Usando un array di input
  //   // ed alla fine farà il merge, generando una altro array di output
  //   /*this.props.items.map(function(currentItem){
  //     //return currentItem.price + 1;
  //     return <OrderItem onQuantityChange={this.updateTotal.bind(this)}  />;
  //   })*/
  //   return this.props.items.map((currentItem, i) =>
  //      <OrderItem key={i} onQuantityChange={this.updateTotal.bind(this)} />
  //   );
  // }

  renderRow(rowData) {
    console.log('in renderRow');
    console.log(rowData);
    return <OrderItem productDetail={rowData} onQuantityChange={this.updateTotal.bind(this)} />
  }

  render() {
    return (
      <View style={[styles.wrapper, this.props.style]}>
        <Total total={(this.state.total).toFixed(2)} />
        {/*<ScrollView
          showVerticalScrollIndicator={false}>
          {/*
          <OrderItem onQuantityChange={this.updateTotal.bind(this)} />
          <OrderItem />
          <OrderItem />
          <OrderItem />}
          {this.renderOrderItems()}
        </ScrollView>*/}
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
wrapper: {
  backgroundColor: 'gainsboro',
  flex: 1,
  //borderWidth: 1,
  top: 20
}
});

/*
ShoppingList.defaultProps = {
items: [
   { title: 'Masterining React Native',
     thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg',
     description: 'One of the book used during the LAP2 course for learning React Native development',
     price: 30.4,
     url: 'https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9' },
   { title: 'Getting Started With React Native',
     thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg',
     description: 'One of the book used during the LAP2 course for learning React Native development',
     price: 30.4,
     url: 'https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE' },
   { title: 'Masterining React Native',
     thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg',
     description: 'One of the book used during the LAP2 course for learning React Native development',
     price: 30.4,
     url: 'https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9' },
   { title: 'Getting Started With React Native',
     thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg',
     description: 'One of the book used during the LAP2 course for learning React Native development',
     price: 30.4,
     url: 'https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE' },
   { title: 'Masterining React Native',
     thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51OqHiEyDtL.jpg',
     description: 'One of the book used during the LAP2 course for learning React Native development',
     price: 30.4,
     url: 'https://www.amazon.it/dp/1785885782/ref=cm_sw_r_cp_ep_dp_xxFdzb4HAR9N9' },
   { title: 'Getting Started With React Native',
     thumbnailUrl: 'https://images-na.ssl-images-amazon.com/images/I/51DkGupUKoL.jpg',
     description: 'One of the book used during the LAP2 course for learning React Native development',
     price: 30.4,
     url: 'https://www.amazon.it/dp/1785885189/ref=cm_sw_r_cp_ep_dp_XyFdzbBK48PEE' }
]
};
*/

export default ShoppingList;
