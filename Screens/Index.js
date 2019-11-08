import React from 'react';
import {StyleSheet, Button, Text, View, Linking } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



export default class Home extends React.Component {
  static navigationOptions = {
   title: 'The Mars Society',
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
    <View style={{ backgroundColor: '#403D3D', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', height:40}}>
        <Button
          title="Members"
          color="#403D3D"
          onPress={() => this.props.navigation.navigate('Members')}
        />
        <Button
          title="Chapters"
          color="#403D3D"
          onPress={() => this.props.navigation.navigate('Chapters')}
        />
        <Button
          title="Society Info"
          color='#403D3D'
          onPress={() => this.props.navigation.navigate('About')}
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
  header: {
		textAlign: 'center',
		marginTop: 10,
		fontSize: 50,
		fontWeight: 'bold',
	},
  chButton:{
  width: 50,
  height: 50,
  justifyContent:'center'
},

});
