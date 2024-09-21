import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import { IMAGE } from '../../Constants';
import styles from '../../Styles/loginScreenCss';
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const FarmInfoScreen = ({ navigation, route }) => {
  const [businessName, setBusinessName] = useState('');
  const [informalName, setInformalName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [errors, setErrors] = useState({});

  const { fullName, email, phoneNumber } = route.params || {};

  useEffect(() => {
    console.log('Received data from SignupScreen:', fullName, email, phoneNumber);
  }, [fullName, email, phoneNumber]);

  const validateInputs = () => {
    const newErrors = {};

    if (!businessName) {
      newErrors.businessName = 'Business Name is required';
    }
    if (!informalName) {
      newErrors.informalName = 'Informal Name is required';
    }
    if (!streetAddress) {
      newErrors.streetAddress = 'Street Address is required';
    }
    if (!city) {
      newErrors.city = 'City is required';
    }
    if (!state) {
      newErrors.state = 'State is required';
    }
    
    const zipcodeRegex = /^[0-9]{5}$/;
    if (!zipcode) {
      newErrors.zipcode = 'Zipcode is required';
    } else if (!zipcodeRegex.test(zipcode)) {
      newErrors.zipcode = 'Zipcode must be 5 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      navigation.navigate('VerificationScreen', {
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
    }
  };

  useFocusEffect(
    useCallback(() => {
      setBusinessName('');
      setInformalName('');
      setStreetAddress('');
      setCity('');
      setState('');
      setZipcode('');
      setErrors({});
    }, [])
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>FarmerEats</Text>
      </View>
      <View style={styles.newHereContainer}>
        <Text style={styles.newHereText}>Signup 2 of 4</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Farm Info</Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <View style={[styles.inputContainer, { paddingVertical: 3 }]}>
          <Image source={IMAGE.BussinessIcon} style={styles.iconLock} />
          <TextInput
            placeholder="Business Name"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            value={businessName}
            onChangeText={setBusinessName}
          />
          {errors.businessName && <Text style={styles.errorText}>{errors.businessName}</Text>}
        </View>

        <View style={[styles.inputContainer, { paddingVertical: 3 }]}>
          <Image source={IMAGE.EmojiIcon} style={styles.iconAdd} />
          <TextInput
            placeholder="Informal Name"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            value={informalName}
            onChangeText={setInformalName}
          />
          {errors.informalName && <Text style={styles.errorText}>{errors.informalName}</Text>}
        </View>

        <View style={[styles.inputContainer, { paddingVertical: 3 }]}>
          <Image source={IMAGE.HomeIcon} style={styles.iconAdd} />
          <TextInput
            placeholder="Street Address"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            value={streetAddress}
            onChangeText={setStreetAddress}
          />
          {errors.streetAddress && <Text style={styles.errorText}>{errors.streetAddress}</Text>}
        </View>

        <View style={[styles.inputContainer, { paddingVertical: 3 }]}>
          <Image source={IMAGE.LocationIcon} style={styles.iconAdd} />
          <TextInput
            placeholder="City"
            style={styles.input}
            placeholderTextColor="#8e93a1"
            value={city}
            onChangeText={setCity}
          />
          {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={[styles.inputContainer, { paddingVertical: 3, width: '40%' }]}>
            <TextInput
              placeholder="State"
              style={styles.input}
              placeholderTextColor="#8e93a1"
              value={state}
              onChangeText={setState}
            />
            {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
          </View>

          <View style={[styles.inputContainer, { paddingVertical: 3, width: '50%' }]}>
            <TextInput
              placeholder="Enter Zipcode"
              style={styles.input}
              placeholderTextColor="#8e93a1"
              keyboardType="numeric"
              value={zipcode}
              onChangeText={setZipcode}
            />
            {errors.zipcode && <Text style={styles.errorText}>{errors.zipcode}</Text>}
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 90 }}>
          <TouchableOpacity
            style={[styles.orText, { marginTop: 30, textDecorationLine: 'underline', color: '#000000' }]}
            onPress={() => navigation.navigate('SignupScreen')}
          >
            <Image
              source={IMAGE.BackIcon}
              style={[styles.iconAdd, { width: width * 0.07 }]}
            />
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
            ]}
          >
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FarmInfoScreen;
