import React from 'react';
import { /*StyleSheet,*/ Image } from 'react-native';

const Thumbnail = ({ url/*, style*/ }) => (
  <Image
    source={{ uri: url }}
    style={{ width: 100, height: 100, margin: 10, flex: 1 }}
    resizeMode='contain'
  />
);

/*const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    height: 200,
    flex: 1,
    //borderWidth: 1,
    top: 20,
    shadowOffset: { height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderRadius: 5
  }
});*/

export default Thumbnail;
