import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to FarmerEats</Text>

      <Text style={styles.subtitle}>
        Your farm's best companion for managing business hours, inventory, and
        more.
      </Text>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('BussinessHourScreen')}
        >
        <Text style={styles.buttonText}>Go to Business Hours</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('ConfirmationScreen')}
        >
        <Text style={styles.buttonText}>Go to Confirmation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('VerificationScreen')}
        >
        <Text style={styles.buttonText}>Go to Verification</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
         onPress={() => navigation.navigate('LoginScreen')}
        >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: width * 0.05,
  },
  headerText: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#261C12',
    marginBottom: height * 0.05,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.045,
    color: '#261C12',
    textAlign: 'center',
    marginBottom: height * 0.1,
  },
  button: {
    backgroundColor: '#D5715B',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    borderRadius: 25,
    marginBottom: height * 0.03,
    width: width * 0.8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.045,
  },
});

export default HomeScreen;
