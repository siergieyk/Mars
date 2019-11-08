import React, { Component } from 'react';
import { 
        FlatList,
        AppRegistry,
        StyleSheet, 
        Text, 
        View,
        Image
       } from 'react-native';


export default class News extends Component{
  constructor(){
      super()
      this.state = {
          dataSource:[]
      }
  }

renderItem = ({item}) => {
    return(    
    <View>
    <Image 
    source={{uri:item.image_src}}
        style={{width:300, height:300}}/>

        <View>
        <Text>
        {item.title}
        </Text>
        <Text>
        {item.description}
        </Text>

</View>
</View>
)    
    
}

componentDidMount(){
    const url ='https://rocky-temple-05069.herokuapp.com/news/'
    fetch(url)
    .then((response)=>response.json())
    .then((responseJson)=>{
        console.log(responseJson)
        this.setState({
            dataSource: responseJson
        })
        
    })
    .catch((error) => {
        console.log(error)
        
    })
}


    render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
        renderItem={this.renderItem}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5fcff',
  }
});
