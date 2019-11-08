import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


export default class Founding extends Component {
	static navigationOptions = {
   title: 'Founding Declaration',
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
			<ScrollView>
                <Text style={styles.header}> Founding Declaration</Text>

			    <Text style={styles.declaration}>This declaration describes the motivation for the Mars Society.  It was ratified by 700 attendees at the organization's founding convention held in August 1998 at the University of Colorado in Boulder, Colorado.</Text>
			<Text style={styles.body}>>{'\n'}The time has come for humanity to journey to the planet Mars.{'\n'}

{'\n'}We're ready.  Though Mars is distant, we are far better prepared today to send humans to the Red Planet than we were to travel to the Moon at the commencement of the space age.  Given the will, we could have our first crews on Mars within a decade.{'\n'}

{'\n'}The reasons for going to Mars are powerful.{'\n'}

{'\n'}We must go for the knowledge of Mars. Our robotic probes have revealed that Mars was once a warm and wet planet, suitable for hosting life's origin. But did it? A search for fossils on the Martian surface or microbes in groundwater below could provide the answer. If found, they would show that the origin of life is not unique to the Earth, and, by implication, reveal a universe that is filled with life and probably intelligence as well. From the point of view learning our true place in the universe, this would be the most important scientific enlightenment since Copernicus.{'\n'}

{'\n'}We must go for the knowledge of Earth. As we begin the twenty-first century, we have evidence that we are changing the Earth's atmosphere and environment in significant ways. It has become a critical matter for us better to understand all aspects of our environment. In this project, comparative planetology is a very powerful tool, a fact already shown by the role Venusian atmospheric studies played in our discovery of the potential threat of global warming by greenhouse gases. Mars, the planet most like Earth, will have even more to teach us about our home world. The knowledge we gain could be key to our survival.{'\n'}

{'\n'}We must go for the challenge. Civilizations, like people, thrive on challenge and decay without it. The time is past for human societies to use war as a driving stress for technological progress. As the world moves towards unity, we must join together, not in mutual passivity, but in common enterprise, facing outward to embrace a greater and nobler challenge than that which we previously posed to each other. Pioneering Mars will provide such a challenge. Furthermore, a cooperative international exploration of Mars would serve as an example of how the same joint-action could work on Earth in other ventures.{'\n'}

{'\n'}We must go for the youth. The spirit of youth demands adventure. A humans-to-Mars program would challenge young people everywhere to develop their minds to participate in the pioneering of a new world. If a Mars program were to inspire just a single extra percent of today's youth to scientific educations, the net result would be tens of millions more scientists, engineers, inventors, medical researchers and doctors. These people will make innovations that create new industries, find new medical cures, increase income, and benefit the world in innumerable ways to provide a return that will utterly dwarf the expenditures of the Mars program.{'\n'}

{'\n'}We must go for the opportunity. The settling of the Martian New World is an opportunity for a noble experiment in which humanity has another chance to shed old baggage and begin the world anew; carrying forward as much of the best of our heritage as possible and leaving the worst behind. Such chances do not come often, and are not to be disdained lightly.{'\n'}

{'\n'}We must go for our humanity. Human beings are more than merely another kind of animal, -we are life's messenger. Alone of the creatures of the Earth, we have the ability to continue the work of creation by bringing life to Mars, and Mars to life. In doing so, we shall make a profound statement as to the precious worth of the human race and every member of it.{'\n'}

{'\n'}We must go for the future. Mars is not just a scientific curiosity; it is a world with a surface area equal to all the continents of Earth combined, possessing all the elements that are needed to support not only life, but technological society. It is a New World, filled with history waiting to be made by a new and youthful branch of human civilization that is waiting to be born. We must go to Mars to make that potential a reality. We must go, not for us, but for a people who are yet to be. We must do it for the Martians.{'\n'}

{'\n'}Believing therefore that the exploration and settlement of Mars is one of the greatest human endeavors possible in our time, we have gathered to found this Mars Society, understanding that even the best ideas for human action are never inevitable, but must be planned, advocated, and achieved by hard work. We call upon all other individuals and organizations of like-minded people to join with us in furthering this great enterprise. No nobler cause has ever been. We shall not rest until it succeeds.</Text>
		</ScrollView>
            </View>
            );
    }
}

const styles = StyleSheet.create({
	fullScreen: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	body:{
    //flex: 1,
    width: '85%',
    textAlign: 'center',
    fontSize: 15,
		margin: 15
    //justifyContent: 'center'
  },
	header: {
		textAlign: 'center',
		marginTop: 5,
		fontSize: 50,
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	declaration: {
		fontStyle: 'italic',
		fontSize: 15,
		marginHorizontal: 10
	}
});
