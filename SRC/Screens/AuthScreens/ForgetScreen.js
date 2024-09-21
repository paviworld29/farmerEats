import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';
import axios from 'axios';
import { IMAGE } from '../../Constants';
import styles from '../../Styles/ForgetPasswordScreenCss';
import { useFocusEffect } from '@react-navigation/native';

const ForgetScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const clearInputs = () => {
    setPhoneNumber('');
    setPhoneError('');
  };

  useFocusEffect(
    useCallback(() => {
      clearInputs();
      return () => {};
    }, [])
  );

  const validatePhoneNumber = (input) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(input);
  };

  const handleSendCode = async () => {
    let valid = true;

    if (!phoneNumber) {
      setPhoneError('Phone number is required');
      valid = false;
    } else if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      valid = false;
    } else {
      setPhoneError('');
    }

    if (valid) {
      try {
        const response = await axios.post('https://sowlab.com/assignment/user/forgot-password', {
          mobile: `+1${phoneNumber}`,
        });
        console.log(response.data);
        if (response.data.success) {
          setModalMessage('OTP sent to your mobile.');
        } else {
          setModalMessage(response.data.message);
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
        setModalMessage("Couldn't send an OTP, please try again.");
      } finally {
        setModalVisible(true);
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    if (modalMessage === "Couldn't send an OTP, please try again.") {
      navigation.navigate('OtpScreen');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>FarmerEats</Text>
      </View>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.title}>Forgot Password?</Text>
        <View style={styles.newHereContainer}>
          <Text style={styles.newHereText}>Remember your password? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.createAccountText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <Image source={IMAGE.PhoneIcon} style={styles.iconAdd} />
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

        <TouchableOpacity style={styles.loginButton} onPress={handleSendCode}>
          <Text style={styles.loginButtonText}>Send Code</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={modalStyles.modalBackground}>
          <View style={modalStyles.modalContainer}>
            <Text style={modalStyles.modalMessage}>{modalMessage}</Text>
            <Pressable style={modalStyles.modalButton} onPress={handleCloseModal}>
              <Text style={modalStyles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalMessage: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ForgetScreen;
