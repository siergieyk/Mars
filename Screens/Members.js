import React from 'react';
import {StyleSheet, Button, Text, View, Linking } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class Members extends React.Component {
  static navigationOptions = {
   title: 'Member Connections',
   headerStyle: {
      backgroundColor: '#AA071D',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
 };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Member Connections</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'grey',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: 30,
   marginTop : "10%"
 },
 chapters: {
  color: '#403D3D',
  fontWeight: 'bold',
  fontSize: 20,
  marginTop : "5%",
  marginLeft: '2%'
},
chButton:{
  width: 50,
  height: 50,
  justifyContent:'center'
}
});
