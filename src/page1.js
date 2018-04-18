import React from 'react';
import { StyleSheet, Text,TouchableHighlight, TouchableOpacity,
   View, Button, TextInput,RefreshControl, Image, ListView, ActivityIndicator,
 FlatList, List, ListItem } from 'react-native';

const gambar = require('./img/1.png');


export default class ListData extends React.Component {
  static navigationOptions = {
      header: null
   };

     constructor(props) {
      super(props);
      let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.state = {
        isLoading: true,
        refreshing: false,
      };
    }

    _onRefresh() {
      this.setState({refreshing: true});
      fetch('http://mhs.rey1024.com/appmobile/A1615051104/getData.php')
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            refreshing: false,
            dataSource: ds.cloneWithRows(responseJson),
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    componentDidMount() {

    return fetch('http://mhs.rey1024.com/appmobile/A1615051104/getData.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  renderRow(record) {
      return (
        <TouchableOpacity activeOpacity={0.7} style={styles.row}>
           <View style={styles.info}>
           <View style={styles.photo}>
           <Image source={gambar} style={styles.profile} />
           </View>
           <View style={styles.tulisan}>
            <Text style={styles.Title}>Nama : {record.Nama}</Text>
            <Text style={styles.Title}>Harga : {record.Harga}</Text>
            <Text style={styles.Details}>Operation System : {record.Os}</Text>
            <Text style={styles.Details}>CPU : {record.Cpu}</Text>
            <Text style={styles.Details}>RAM : {record.Ram}</Text>
            <Text style={styles.Details}>Storage : {record.Storage}</Text>
            <Text style={styles.Details}>Ukuran HP : {record.UkuranHp}</Text>
            <Text style={styles.Details}>Tipe Network : {record.TipeNetwork}</Text>
            <Text style={styles.Details}>Kamera Depan : {record.KameraDepan}</Text>
            <Text style={styles.Details}>Kamera Belakang : {record.KameraBelakang}</Text>
            <Text style={styles.Details}>Berat : {record.Berat}</Text>
            </View>
           </View>

        </TouchableOpacity>
      );
    }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator color='#FFFFFF' size='large'/>
        </View>
      );
    }
    return (
      <View style={{marginTop: 20, justifyContent:'center', flex: 1}}>
      <View style={styles.Header}>
          <Text style={styles.TextHeader}>REFISI MI</Text>
      </View>
      <FlatList
      <TouchableOpacity activeOpacity={0.7} style={styles.row}>
         <View style={styles.info}>
         <View style={styles.photo}>
         <Image source={gambar} style={styles.profile} />
         </View>
         <View style={styles.tulisan}>
          <Text style={styles.Title}>Nama : {record.Nama}</Text>
          <Text style={styles.Title}>Harga : {record.Harga}</Text>
          <Text style={styles.Details}>Operation System : {record.Os}</Text>
          <Text style={styles.Details}>CPU : {record.Cpu}</Text>
          <Text style={styles.Details}>RAM : {record.Ram}</Text>
          <Text style={styles.Details}>Storage : {record.Storage}</Text>
          <Text style={styles.Details}>Ukuran HP : {record.UkuranHp}</Text>
          <Text style={styles.Details}>Tipe Network : {record.TipeNetwork}</Text>
          <Text style={styles.Details}>Kamera Depan : {record.KameraDepan}</Text>
          <Text style={styles.Details}>Kamera Belakang : {record.KameraBelakang}</Text>
          <Text style={styles.Details}>Berat : {record.Berat}</Text>
          </View>
         </View>

      </TouchableOpacity>
        />
        <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('Awal')}>
          <Text style={styles.ButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>

    );
  }
}


const styles = StyleSheet.create({
    Header: {
        width:370,
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#D81B60',
    },
    TextHeader: {
        fontSize: 30
    },
    ListItem: {
        backgroundColor:'#BBDEFB',
        marginTop: 5,
        flex: 1
    },
    ListFirst: {
      fontSize: 20
    },
    info: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255, .6)',
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  Details: {
    color: '#000',
    fontSize: 15,
  },
  photo: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',

  },
  tulisan: {
    flex: 1,
  },
  profile:{
    height: 100 ,
    width: 50 ,
  },
  box: {
    flex: 1
  },
  Button: {
    marginTop: 20,
    backgroundColor: 'crimson',
    padding: 20,
    borderRadius: 3,
  },
  ButtonText:{
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
