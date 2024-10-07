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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMAGE } from '../../Constants';
import styles from '../../Styles/loginScreenCss';
import { useFocusEffect } from '@react-navigation/native';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');


  const fbLogin = resCallback => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('rest===', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback({message: 'Email is required'});
        }

        if (result.isCancelled) {
          console.log('error');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fileds=email,name,picture,friend',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log('login fail error' + error);
      },
    );
  };

  const onFbLogin = async () => {
    try {
      await fbLogin(_responseInfoCallBack);
    } catch (error) {
      console.log('error rised', error);
    }
  };

  
  const _responseInfoCallBack = async (error, result) => {
    if (error) {
      console.log('error top', error);
      return;
    } else {
      const userData = result;
      console.log('fb data ++', userData);
    }
  };

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  useFocusEffect(
    useCallback(() => {
      clearInputs();
      return () => {};
    }, [])
  );

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleLogin = async () => {
    let valid = true;

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      try {
        const response = await axios.post('https://sowlab.com/assignment/user/login', {
          email: email,
          password: password,
          role: 'farmer',
          type: 'email',
        });

        if (response.data.success) {
          setModalMessage('Login successful!');
          await AsyncStorage.setItem('authToken', response.data.token);
          navigation.navigate('HomeScreen');
        } else {
          setModalMessage(response.data.message);
        }
      } catch (error) {
        console.error('Login Error:', error);
        if (error.response) {
          setModalMessage(error.response.data.message || 'An error occurred. Please try again.');
        } else {
          setModalMessage('Network error. Please check your connection.');
        }
      } finally {
        setModalVisible(true);
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>FarmerEats</Text>
      </View>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.title}>Welcome back!</Text>
        <View style={styles.newHereContainer}>
          <Text style={styles.newHereText}>New here? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.createAccountText}>Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <Image source={IMAGE.Iconaddtherate} style={styles.iconAdd} />
          <TextInput
            placeholder="Email Address"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <View style={styles.inputContainer}>
          <Image source={IMAGE.LockIcon} style={styles.iconLock} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => navigation.navigate('ForgetScreen')}>
            <Text style={styles.forgetText}>Forget?</Text>
          </TouchableOpacity>
        </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or login with</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={IMAGE.GoogleIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={onFbLogin}>
            <Image source={IMAGE.FacebookIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={IMAGE.AppleIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
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

export default LoginScreen;
