import {StyleSheet, Dimensions} from 'react-native';
import { IMAGE } from '../../Constants'; 
const { width, height } = Dimensions.get('window');
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
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 5,
      marginLeft: 5,
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
    orText: {
      fontSize: width * 0.04,
      color: '#8e93a1',
      marginVertical: height * 0.01,
    },
    socialButtonsContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: height * 0.02,
    },
    socialButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: 'white',
      height: width * 0.12,
      width: width * 0.20,
      borderRadius: (width * 0.15) / 2,
      marginVertical: height * 0.015,
    },
    icon: {
      width: width * 0.07,
      height: width * 0.07,
    },
    iconLock: {
      width: width * 0.04,
      height: width * 0.05,
    },
    iconAdd: {
      width: width * 0.05,
      height: width * 0.05,
    },
    forgetText: {
      color: '#D5715B',
      fontSize: width * 0.04,
    },
  });

  export default styles;