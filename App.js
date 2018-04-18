import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Awal from './src/awal';
import Page1 from './src/Tampil';
import Inputbaru from './src/inputbaru';
import Coba from './src/coba';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}


const RootStack = StackNavigator(

  {
    Awal: {
      screen: Awal,
    },
    Page1: {
      screen: Page1,
    },
    Inputbaru: {
      screen: Inputbaru,
    },
    Coba: {
      screen: Coba,
    },
  },
  {
    initialRouteName: 'Awal',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
