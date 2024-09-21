import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: width * 0.08,
    },
    headerText: {
      marginTop: height * 0.04,
      color: '#000000',
      fontSize: width * 0.07,
    },
    subHeaderContainer: {
      marginTop: height * 0.09,
    },
    title: {
      fontSize: width * 0.08,
      fontWeight: 'bold',
      color: '#261C12',
    },
    otpTextInput: {
      width: 60,           // Equal width and height for circular shape
      height: 60,          // Adjust the size based on your design
      borderRadius: 10,    // Half of width and height to make it circular
      borderWidth: 1,
      borderColor: '#000', // Border color
      textAlign: 'center', // Centers the text inside the circle
      fontSize: 20,
      color: '#000',       // Text color
      backgroundColor: '#f0f0f0', // Optional: background color
    },    
    newHereContainer: {
      flexDirection: 'row',
      marginTop: height * 0.02,
    },
    newHereText: {
      fontSize: width * 0.04,
    },
    createAccountText: {
      fontSize: width * 0.04,
      color: '#D5715B',
    },
    bottomContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: height * 0.26, // Adjusted to be relative to screen height
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: width * 0.03,
      paddingHorizontal: width * 0.04,
      marginBottom: height * 0.02,
      backgroundColor: '#f0f0f0',
      paddingVertical: height * 0.01,
    },
    input: {
      fontSize: width * 0.04,
      color: '#0000004D',
      paddingHorizontal: width * 0.02,
      flex: 1,
    },
    loginButton: {
      width: '100%',
      backgroundColor: '#D5715B',
      height: height * 0.07,
      borderRadius: width * 0.03,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: height * 0.02,
    },
    loginButtonText: {
      color: 'white',
      fontSize: width * 0.045,
      fontWeight: 'bold',
    },
    forgetText: {
      color: '#D5715B',
      fontSize: width * 0.04,
    },
    iconAdd: {
      width: width * 0.05,
      height: width * 0.05,
    },
  });

  export default styles;
