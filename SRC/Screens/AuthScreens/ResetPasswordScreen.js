import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { IMAGE } from '../../Constants';
import styles from '../../Styles/ResetPasswordScreenCss';

const ResetPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const validatePassword = () => {
    if (!newPassword || !confirmPassword) {
      setErrorMessage('Both fields are required');
      return false;
    }
    if (newPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return false;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async () => {
    if (validatePassword()) {
      try {
        const response = await fetch('https://sowlab.com/assignment/user/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: '895642',  
            password: newPassword,
            cpassword: confirmPassword,
          }),
        });

        const data = await response.json();

        if (data.success === 'true') {
          setModalVisible(true);
        } else {
          setErrorMessage(data.message || 'Failed to reset password, please try again.');
        }
      } catch (error) {
        console.error("API Error:", error);
        setErrorMessage("An error occurred, please try again.");
      }
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigation.navigate('LoginScreen');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.headerText}>FarmerEats</Text>
          </View>

          <View style={styles.subHeaderContainer}>
            <Text style={styles.title}>Reset Password</Text>
            <View style={styles.newHereContainer}>
              <Text style={styles.newHereText}>Remember your password? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.createAccountText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.inputContainer}>
              <Image source={IMAGE.LockIcon} style={styles.iconAdd} />
              <TextInput
                placeholder="New Password"
                style={styles.input}
                placeholderTextColor="#8e93a1"
                secureTextEntry={true}
                value={newPassword}
                onChangeText={(value) => setNewPassword(value)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Image source={IMAGE.LockIcon} style={styles.iconAdd} />
              <TextInput
                placeholder="Confirm New Password"
                style={styles.input}
                placeholderTextColor="#8e93a1"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(value) => setConfirmPassword(value)}
              />
            </View>

            {errorMessage ? (
              <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}

            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>

         
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleModalClose}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Password Reset Successfully!</Text>
                <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
                  <Text style={styles.modalButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordScreen;
