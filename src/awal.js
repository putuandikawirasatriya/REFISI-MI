import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Awal extends React.Component {
  static navigationOptions = {
    header: null
  };
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, margin: 10 ,color: 'white', textAlign: 'center' }} > REFISI MI
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.input}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Page1')}>
          <Text style={{ fontSize: 20, margin: 50, color: 'black', textAlign: 'center' }}>
          MI GO</Text>
          </TouchableOpacity>

          </View>
          <View style={styles.data}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Inputbaru')}>
          <Text style={{ fontSize: 25,margin : 40, color: 'black', textAlign: 'center' }} >INPUT BARU</Text>
          </TouchableOpacity>
          </View>
          </View>

          <View style={styles.footer}>
            <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }} >#PrototipeUndiksha</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E0F2F1', //warna dasar hijau
    flex: 1,
    flexDirection: 'column',

  },
  header: { //header pada layar
    flex: 1,
    backgroundColor: '#D81B60', //hijau tua
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',


  },
  box: {
    flex: 8, // dasar
    backgroundColor: '#B2DFDB', //hijau muda
    flexDirection: 'column',
    backgroundColor: 'rgba(232,234,246, .6)',
    alignItems: 'center'

  },

  input: {
      width: 200,
      height: 150,
      //backgroundColor: '#EF5350', //merah agak muda
      margin: 50,
      borderRadius: 20,
      backgroundColor: 'rgba(220,20,60, .7)'
    //  borderRadius: 100
    },
    data: {
      width: 200,
      height: 150,
      backgroundColor: 'white', //putih kehijauan
      borderRadius: 20,
      margin :50
    },
  footer: {
    flex: 1,
    backgroundColor: '#EC407A', //hijau tua
    //margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius : 10

  },
});

export default Awal;
