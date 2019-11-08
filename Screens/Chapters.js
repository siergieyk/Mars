import React from 'react';
import {StyleSheet, Button, Text, View, Linking } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class Chapters extends React.Component {
  static navigationOptions = {
   title: 'Chapters of The Mars Society',
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
      <View>
        <Text style={styles.chapters}>Find a Chapter</Text>
        <Button
          title='Find'
          color='#403D3D'
          onPress={ ()=>{ Linking.openURL('http://chapters.marssociety.org/')}}
        />

        <Text style={styles.chapters}>Start a Chapter</Text>
        <Text>Chapters of the Mars Society are local, independent groups which are organized by members.  There are Mars Society chapters in many U.S. states, and countries around the world.  These groups typically work on Mars-related projects together.</Text>
        <Button
          title="Start"
          color='#403D3D'
          onPress={ ()=>{ Linking.openURL('http://chapters.marssociety.org/chapter-docs/')}}
        />
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
