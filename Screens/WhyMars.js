import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//import Video from 'react-native-video';

export default class WhyMars extends Component {
  static navigationOptions = {
   title: 'Why Mars?',
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
            <View >
			<ScrollView>
                <Text style={styles.header}> Why Mars?</Text>

			    <Text>{'\n'}video goes here</Text>
			<Text style={styles.body}>{'\n'}Among planetary bodies in our solar system, Mars is singular in that it possesses all the raw materials required to support not only life, but a new branch of human civilization.  This uniqueness is illustrated most clearly if we contrast Mars with the Earth's Moon, the most frequently cited alternative location for extraterrestrial human colonization.{'\n'}

{'\n'}In contrast to the Moon, the Red Planet is rich in carbon, nitrogen, hydrogen, and oxygen, all in biologically readily accessible forms such as carbon dioxide gas, nitrogen gas, and water ice and permafrost.  Except in permanent shaded polar craters where ultra-cold temperatures prevail, carbon, nitrogen, and hydrogen are only present on the Moon in parts-per-million quantities. Oxygen is abundant on the Moon, but only in tightly bound oxides such as silicon dioxide (SiO2), ferrous oxide (Fe2O3), magnesium oxide (MgO), and alumina oxide (Al2O3), which require very high energy processes to reduce.  Current knowledge indicates that if Mars were smooth and all its ice and permafrost melted into liquid water, the entire planet would be covered with an ocean over 100 meters deep.  This contrasts strongly with the Moon, which is so dry that if concrete were found there, lunar colonists would mine it to get the water out.  Thus, if plants could be grown in greenhouses on the Moon (an unlikely proposition, as we've seen) most of their biomass material would have to be imported.{'\n'}

{'\n'}The Moon is also deficient in about half the metals of interest to industrial society (copper, for example), as well as many other elements of interest such as sulfur and phosphorus. Mars has every required element in abundance.  Moreover, on Mars, as on Earth, hydrologic and volcanic processes have occurred that are likely to have consolidated various elements into local concentrations of high-grade mineral ore.  Indeed, the geologic history of Mars has been compared to that of Africa, with very optimistic inferences as to its mineral wealth implied as a corollary.  In contrast, the Moon has had virtually no history of water or volcanic action, with the result that it is basically composed of trash rocks with very little differentiation into ores that represent useful concentrations of anything interesting.{'\n'}

{'\n'}You can generate power on either the Moon or Mars with solar panels, and here the advantages of the Moon's clearer skies and closer proximity to the Sun than Mars roughly balance the disadvantage of large energy storage requirements created by the Moon's 28-day light/dark cycle. But if you wish to manufacture solar panels, so as to create a self-expanding power base, Mars holds an enormous advantage, as only Mars possesses the large supplies of carbon and hydrogen needed to produce the pure silicon required for producing photovoltaic panels and other electronics. In addition, Mars has the potential for wind-generated power while the Moon clearly does not. But both solar and wind power offer relatively modest potential—tens or at most hundreds of kilowatts here or there. To create a vibrant civilization you need a richer power base, and this Mars has both in the short and medium term in the form of its geothermal power resources which offer potential for a large number of locally created electricity-generating stations in the 10 MWe (10,000 kilowatt) class. In the long term, Mars will enjoy a power-rich economy based upon exploitation of its large domestic resources of deuterium fuel for fusion reactors. Deuterium is five times more common on Mars than it is on Earth, and tens of thousands of times more common on Mars than on the Moon.{'\n'}

{'\n'}The biggest problem with the Moon, as with all other airless planetary bodies and proposed artificial free-space colonies, is that sunlight is not available in a form useful for growing crops. A single acre of plants on Earth requires 4 MW of sunlight power, a square kilometer needs 1,000 MW.  The entire world put together does not produce enough electric power to illuminate the farms of the state of Rhode Island, that agricultural giant.  Growing crops with electrically generated light is just economically hopeless.  But you can't use natural sunlight on the Moon or any other airless body in space unless you put walls on the greenhouse thick enough to shield out solar flares, a requirement that enormously increases the expense of creating crop land.  Even if you did that, it wouldn't do you any good on the Moon, because plants won't grow in a light/dark cycle lasting 28 days.{'\n'}

{'\n'}On Mars there is an atmosphere thick enough to protect crops grown on the surface from solar flares.  Therefore, thin-walled inflatable plastic greenhouses protected by unpressurized UV-resistant hard-plastic shield domes can be used to rapidly create crop land on the surface. Even without the problems of solar flares and a month-long diurnal cycle, such simple greenhouses would be impractical on the Moon because they would create unbearably high temperatures.  On Mars, in contrast, the strong greenhouse effect created by such domes would be precisely what is necessary to produce a temperate climate inside.  Such domes up to 50 meters in diameter are light enough to be transported from Earth initially, and later on they can be manufactured on Mars out of indigenous materials.  Because all the resources to make plastics exist on Mars, networks of such 50-to-100 meter domes could rapidly be manufactured and deployed, opening up large areas of the surface to both shirtsleeve human habitation and agriculture.  That's just the beginning, as it will eventually be possible for humans to substantially thicken Mars' atmosphere by forcing the regolith to outgas its contents through a deliberate program of artificially induced global warming.  Once that has been accomplished, the habitation domes could be virtually any size, as they would not have to sustain a pressure differential between their interior and exterior.  In fact, once that has been done, it will be possible to raise specially bred crops outside the domes.{'\n'}

{'\n'}The point to be made is that unlike colonists on any other known extraterrestrial body, Martian colonists will be able to live on the surface, not in tunnels, and move about freely and grow crops in the light of day.  Mars is a place where humans can live and multiply to large numbers, supporting themselves with products of every description made out of indigenous materials.  Mars is thus a place where an actual civilization, not just a mining or scientific outpost, can be developed.{'\n'}

{'\n'}For our generation, and those which will soon follow, Mars is the New World.</Text>
		</ScrollView>
            </View>
            );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  body:{
    width: '85%',
    textAlign: 'center',
    margin:'10%',
    fontSize: 15,
    justifyContent: 'center'
  },

  title: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: 35,
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
  backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
  fullScreen: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	}
});
