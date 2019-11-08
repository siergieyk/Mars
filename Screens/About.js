import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import WhyMars from './WhyMars';
//import Video from 'react-native-video';

export default class About extends Component {
  static navigationOptions = {
   title: 'Society Info',
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
            <View style={styles.container}>
                <Button style={styles.aboutButton}
                title="Why Mars?"
                color='#AA071D'
                onPress={() => this.props.navigation.navigate('WhyMars')}
                />
								<Button style={styles.aboutButton}
                title="Founding Declaration"
                color='#AA071D'
                onPress={() => this.props.navigation.navigate('Founding')}
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
				marginTop: '10%'
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
      aboutButton:{
      width: 100,
      height: 50,
      justifyContent:'space-between',
      alignItems: 'center',
    },

    });
