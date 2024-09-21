import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import { IMAGE } from '../../Constants';
import styles from '../../Styles/loginScreenCss';
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    
    if (!fullName) newErrors.fullName = 'Full Name is required';

     
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email Address is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid Email Address';
    }

    
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be 10 digits';
    }

  
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

     
    if (password !== reEnterPassword) {
      newErrors.reEnterPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
     
      navigation.navigate('FarmInfoScreen', {
        fullName,
        email,
        phoneNumber,
        password,
      });
    }
  };

   
  useFocusEffect(
    useCallback(() => {
      
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      setReEnterPassword('');
      setErrors({});
    }, [])
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>FarmerEats</Text>
      </View>
      <View style={styles.newHereContainer}>
        <Text style={styles.newHereText}>Signup 1 of 4 </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Welcome!</Text>
      </View>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={IMAGE.GoogleIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={IMAGE.FacebookIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={IMAGE.AppleIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={[styles.newHereContainer, { justifyContent: 'center' }]}>
        <Text style={[styles.newHereText, { fontSize: 13 }]}>Or Signup with</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={[styles.inputContainer, { paddingVertical: 3 }]}>
          <Image source={IMAGE.ProfileIcon} style={styles.iconLock} />
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            value={fullName}
            onChangeText={setFullName}
          />
          {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}
        </View>

        <View style={[styles.inputContainer, { paddingVertical: 3 }]}>
          <Image source={IMAGE.Iconaddtherate} style={styles.iconAdd} />
          <TextInput
            placeholder="Email Address"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>
        <View style={[styles.inputContainer, { paddingVertical: 3 }]}>
          <Image source={IMAGE.PhoneIcon} style={styles.iconAdd} />
          <TextInput
            placeholder="Phone Number"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
        </View>
        <View style={[styles.inputContainer, { paddingVertical: 3 }]}>
          <Image source={IMAGE.LockIcon} style={styles.iconAdd} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>
        <View style={[styles.inputContainer, { paddingVertical: 3 }]}>
          <Image source={IMAGE.LockIcon} style={styles.iconAdd} />
          <TextInput
            placeholder="Re-enter Password"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            secureTextEntry={true}
            value={reEnterPassword}
            onChangeText={setReEnterPassword}
          />
          {errors.reEnterPassword && <Text style={styles.errorText}>{errors.reEnterPassword}</Text>}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={[
                styles.orText,
                {
                  marginTop: 30,
                  textDecorationLine: 'underline',
                  color: '#000000',
                },
              ]}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSubmit}
            style={[
              styles.loginButton,
              {
                width: width * 0.6,
                backgroundColor: '#D5715B',
                height: height * 0.07,
                borderRadius: width * 0.09,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: height * 0.02,
                alignSelf: 'center',
              },
            ]}>
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
