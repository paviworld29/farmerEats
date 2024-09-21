import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { IMAGE } from '../../Constants';
import styles from '../../Styles/loginScreenCss';

const { width, height } = Dimensions.get('window');
import {
  launchImageLibrary as _launchImageLibrary,
  launchCamera as _launchCamera,
} from 'react-native-image-picker';

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const VerificationScreen = ({ navigation, route }) => {
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [error, setError] = useState('');

  const {
    fullName,
    email,
    phoneNumber,
    businessName,
    informalName,
    streetAddress,
    city,
    state,
    zipcode,
  } = route.params || {};

  useEffect(() => {
    console.log('Received data:', {
      fullName,
      email,
      phoneNumber,
      businessName,
      informalName,
      streetAddress,
      city,
      state,
      zipcode,
    });
  }, [fullName, email, phoneNumber, businessName, informalName, streetAddress, city, state, zipcode]);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      const imageName = imageUri.split('/').pop();
      setSelectedImageName(imageName);
      setError('');
    }
  };

  const clearImage = () => {
    setSelectedImageName(null);
  };

  const handleSubmit = () => {
    if (!selectedImageName) {
      setError('Please upload proof of registration.');
    } else {
      setError('');
      navigation.navigate('BussinessHourScreen', {
        fullName,
        email,
        phoneNumber,
        businessName,
        informalName,
        streetAddress,
        city,
        state,
        zipcode,
        selectedImageName,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>FarmerEats</Text>
      </View>
      <View style={styles.newHereContainer}>
        <Text style={styles.newHereText}>Signup 3 of 4</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Verification</Text>
      </View>
      <View style={styles.newHereContainer}>
        <Text style={[styles.newHereText, { fontSize: 14 }]}>
          Attach proof of Department of Agriculture registrations i.e. Florida Fresh, USDA Approved, USDA Organic
        </Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
        <TouchableOpacity onPress={openImagePicker}>
          <Text style={{ color: '#000', marginTop: 30 }}>Attach proof of registration</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#D5715B' }]}
          onPress={handleCameraLaunch}>
          <Image
            source={IMAGE.CameraIcon}
            style={[styles.iconAdd, { width: width * 0.06 }]}
          />
        </TouchableOpacity>
      </View>

      {selectedImageName && (
        <View style={[styles.inputContainer, { marginTop: 30 }]}>
          <TouchableOpacity onPress={clearImage}>
            <Text style={[styles.TextInput, { color: 'black' }]}>
              Uploaded: {selectedImageName} (Tap to remove)
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}

      <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.orText, { textDecorationLine: 'underline', color: '#000000' }]}
            onPress={() => navigation.navigate('FarmInfoScreen')}>
            <Image
              source={IMAGE.BackIcon}
              style={[styles.iconAdd, { width: width * 0.07 }]}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmit}
            style={[styles.loginButton, {
              width: width * 0.6,
              backgroundColor: '#D5715B',
              height: height * 0.07,
              borderRadius: width * 0.09,
              justifyContent: 'center',
              alignItems: 'center',
            }]}>
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerificationScreen;
