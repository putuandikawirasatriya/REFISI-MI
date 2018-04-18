import React from 'react';
import { StyleSheet, Text, View,ScrollView, TextInput, Button, TouchableOpacity, ActivityIndicator,Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Inputbaru extends React.Component {
    static navigationOptions = {
      header: null
    };
    constructor()
    {
        super();
        this.state = {
          Nama: '',
          Harga: '',
          Os: '',
          Cpu : '',
          Ram: '',
          Storage: '',
          UkuranHp: '',
          TipeNetwork: '',
          KameraDepan: '',
          KameraBelakang: '',
          Berat: '',
          ActivityIndicator_Loading: false,
        }
    }

    submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://mhs.rey1024.com/appmobile/A1615051104/kirimData.php',
            {
                method: 'POST',
                headers:
                {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  Nama : this.state.Nama,
                  Harga: this.state.Harga,
                  Os: this.state.Os,
                  Cpu : this.state.Cpu,
                  Ram: this.state.Ram,
                  Storage: this.state.Storage,
                  UkuranHp: this.state.UkuranHp,
                  TipeNetwork: this.state.TipeNetwork,
                  KameraDepan: this.state.KameraDepan,
                  KameraBelakang: this.state.KameraBelakang,
                  Berat: this.state.Berat,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS', responseJsonFromServer);
                this.setState(
                {
                  Nama: '',
                  Harga: '',
                  Os: '',
                  Cpu : '',
                  Ram: '',
                  Storage: '',
                  UkuranHp: '',
                  TipeNetwork: '',
                  KameraDepan: '',
                  KameraBelakang: '',
                  Berat: '',
                  ActivityIndicator_Loading: false,
                });

            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
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
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, margin: 10 ,color: 'white', textAlign: 'center' }} > REFISI MI
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.input}>
          <Text style={{ fontSize: 20, margin: 30, color: 'black', textAlign: 'center' }}>INPUT SPESIFIKASI BARU</Text>

          </View>
          <ScrollView>
       <View style={styles.nama}>
          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>NAMA HP</Text>
          <TextInput
            style={styles.text}
            onChangeText = {(TextInputText) => this.setState({ Nama: TextInputText })}
            value={this.state.Nama}
            underlineColorAndroid="crimson"
            placeholder="Masukan Nama HP"
            />
          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>HARGA</Text>
          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            placeholder="Masukan Harga"
            onChangeText = {(TextInputText) => this.setState({ Harga: TextInputText })}
                 value={this.state.Harga}
            />
          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>Opertion System</Text>
          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            onChangeText = {(TextInputText) => this.setState({ Os: TextInputText })}
            value={this.state.Os}
            placeholder="Masukan Operation System"
            />
          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>CPU</Text>
          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            placeholder="Masukan CPU"
            onChangeText = {(TextInputText) => this.setState({ Cpu: TextInputText })}
                 value={this.state.Cpu}
          />
          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>RAM</Text>
          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            placeholder="masukan RAM"
            onChangeText = {(TextInputText) => this.setState({ Ram: TextInputText })}
                 value={this.state.Ram}
          />
          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>STORAGE</Text>
          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            placeholder="masukan storage"
            onChangeText = {(TextInputText) => this.setState({ Storage: TextInputText })}
                 value={this.state.Storage}
          />
          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>UKURAN HP</Text>
          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            placeholder="Masukan Ukuran"
            onChangeText = {(TextInputText) => this.setState({ UkuranHp: TextInputText })}
                 value={this.state.UkuranHp}
            />

          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>TIPE NETWORK</Text>
          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            placeholder="Masukan Tipe Network"
            onChangeText = {(TextInputText) => this.setState({ TipeNetwork: TextInputText })}
                 value={this.state.TipeNetwork}
            />
          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>KAMERA</Text>
          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            placeholder="Masukan Kamera Depan"
            onChangeText = {(TextInputText) => this.setState({ KameraDepan: TextInputText })}
                 value={this.state.KameraDepan}
          />

          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            placeholder="Masukan Kamera Belakang"
            onChangeText = {(TextInputText) => this.setState({ KameraBelakang: TextInputText })}
                 value={this.state.KameraBelakang}
          />
          <Text style={{ fontSize : 17, fontWeight: 'bold', marginTop : 10, color: 'crimson', textAlign : 'center'}}>BERAT HP</Text>
          <TextInput
            style={styles.text}
            underlineColorAndroid="crimson"
            placeholder="Masukan Berat"
            onChangeText = {(TextInputText) => this.setState({ Berat: TextInputText })}
                 value={this.state.Berat}
          />
          </View>
          <TouchableOpacity style={styles.Button} onPress={this.submitData}>
            <Text style={styles.ButtonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('Awal')}>
            <Text style={styles.ButtonText}>Go Back</Text>
          </TouchableOpacity>

          </ScrollView>
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
    flexDirection: 'column'
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
      width: 350,
      height: 80,
      backgroundColor: '#F48FB1', //merah agak muda
      margin: 10,
      borderRadius:10
    //  borderRadius: 100
    },

    nama: {
      width: 300,
      height: 825,
      backgroundColor: 'white', //putih kehijauan
      backgroundColor: 'rgba(255,235,238, .4)',
      margin :10,
    },
  footer: {
    flex: 1,
    backgroundColor: '#EC407A', //hijau tua
    //margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius : 10

  },
  text: {
    textAlign: 'center',
    color: '#212121',
  //  fontWeight: 'bold',
    fontSize: 15,
    padding: 8
  },
  Button: {
    marginBottom: 20,
    backgroundColor: 'crimson',
    padding: 20,
    borderRadius: 3,
  },
  ButtonText:{
    textAlign: 'center',
    color: '#FFFFFF'
  }

});
export default Inputbaru;
