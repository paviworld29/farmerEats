import { View, Text ,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import { TEXT } from '../Constants';
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window'); // Getting screen dimensions


const RenderScreens = ({IMAGE,
    HEADER,
    SUBHEADER,
    COLOR}) => {
  return (
    <View style={styles.slideContainer}>
    <Text style={styles.text}>{HEADER}</Text>

    <Text style={styles.text}>{SUBHEADER}</Text>
    <TouchableOpacity style={{backgroundColor:COLOR}}>
    <Text>hello</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    slideContainer: {
      width: WIDTH, // Responsive width
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
    },
    image: {
      width: WIDTH * 1.1, // 90% of the screen width for a better fit on all devices
      // height: HEIGHT * 0.65, // 65% of the screen height, making it responsive
      // borderRadius: 40,
      // overflow: 'hidden', // To ensure the borderRadius is visible
    },
  });

export default RenderScreens