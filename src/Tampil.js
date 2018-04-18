import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem,
   TouchableOpacity, Image, RefreshControl, Alert } from 'react-native';

const gambar = require('./img/1.png');
export default class ListData extends React.Component {
  static navigationOptions = {
      header: null
   };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
}

  componentDidMount()  {
      const url = 'http://mhs.rey1024.com/appmobile/A1615051104/getData.php';
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }
  onRefresh() {
		Alert.alert('Data telah diperbarui !');
		this.setState({refreshing: true});
		this.componentDidMount();
	  }
  render() {
    return (
      <View style={{marginTop: 20, justifyContent:'center', flex: 1,}}>
      <View style={styles.Header}>
          <Text style={styles.TextHeader}>REFISI MI</Text>
      </View>
        <FlatList
        refreshControl={
							<RefreshControl
								refreshing={this.state.refreshing}
								onRefresh={this.onRefresh.bind(this)}
							/>
						}
          data={this.state.data}
          renderItem={({item}) =>
          <TouchableOpacity activeOpacity={0.7} style={styles.row}>
             <View style={styles.info}>
             <View style={styles.photo}>
             <Image source={gambar} style={styles.profile} />
             </View>
             <View style={styles.tulisan}>
              <Text style={styles.Title}>Nama : {item.Nama}</Text>
              <Text style={styles.Title}>Harga : {item.Harga}</Text>
              <Text style={styles.Details}>Operation System : {item.Os}</Text>
              <Text style={styles.Details}>CPU : {item.Cpu}</Text>
              <Text style={styles.Details}>RAM : {item.Ram}</Text>
              <Text style={styles.Details}>Storage : {item.Storage}</Text>
              <Text style={styles.Details}>Ukuran HP : {item.UkuranHp}</Text>
              <Text style={styles.Details}>Tipe Network : {item.TipeNetwork}</Text>
              <Text style={styles.Details}>Kamera Depan : {item.KameraDepan}</Text>
              <Text style={styles.Details}>Kamera Belakang : {item.KameraBelakang}</Text>
              <Text style={styles.Details}>Berat : {item.Berat}</Text>
              </View>
             </View>

          </TouchableOpacity>
        }
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
