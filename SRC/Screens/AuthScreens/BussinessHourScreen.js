import React, { useState } from 'react';
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

const BussinessHourScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [error, setError] = useState('');

  const handleDayPress = (day) => {
    setSelectedDay(day);
    setError('');
  };

  const handleTimeSlotPress = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setError('');
  };

  const handleSignUpPress = async () => {
    if (!selectedDay || !selectedTimeSlot) {
      setError('Please select a day and a time slot.');
    } else {
      setError('');
      const registerData = {
        full_name: "john doe",
        email: "johndoe@mail.com",
        phone: "+19876543210",
        password: "12345678",
        role: "farmer",
        business_name: "Dairy Farm",
        informal_name: "London Dairy",
        address: "3663 Marshville Road",
        city: "Poughkeepsie",
        state: "New York",
        zip_code: 12601,
        device_token: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
        type: "email",
        social_id: "0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx",
        business_hours: {
          [selectedDay]: [selectedTimeSlot],
        },
      };

      try {
        const response = await fetch('https://your-api-url/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ registerData }),
        });

        const data = await response.json();
        
        if (data.success) {
          navigation.navigate('ConfirmationScreen');
        } else {
          setError(data.message || 'Registration failed.');
        }
      } catch (error) {
        setError('Server error while registering.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>FarmerEats</Text>
      </View>
      <View style={styles.newHereContainer}>
        <Text style={styles.newHereText}>Signup 4 of 4</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Business Hour</Text>
      </View>
      <View style={styles.newHereContainer}>
        <Text style={[styles.newHereText, { fontSize: 14 }]}>
          Choose the hours your farm is open for pickups. This will allow
          customers to order deliveries.
        </Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 35, justifyContent: 'center' }}>
        {['M', 'T', 'W', 'Th', 'F', 'S', 'Su'].map((day) => (
          <TouchableOpacity
            key={day}
            style={{
              width: width * 0.1,
              height: width * 0.1,
              borderRadius: (width * 0.1) / 6,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 5,
              backgroundColor: selectedDay === day ? '#D5715B' : 'white',
            }}
            onPress={() => handleDayPress(day)}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: selectedDay === day ? 'white' : '#261C124D',
              }}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 35 }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: '45%',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: width * 0.03,
            backgroundColor: selectedTimeSlot === '8:00am - 10:00am' ? '#F8C569' : '#f0f0f0',
            paddingVertical: height * 0.02,
          }}
          onPress={() => handleTimeSlotPress('8:00am - 10:00am')}
        >
          <Text>8:00am - 10:00am</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: '45%',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: width * 0.03,
            backgroundColor: selectedTimeSlot === '10:00am - 1:00pm' ? '#F8C569' : '#f0f0f0',
            paddingVertical: height * 0.02,
          }}
          onPress={() => handleTimeSlotPress('10:00am - 1:00pm')}
        >
          <Text>10:00am - 1:00pm</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: '45%',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: width * 0.03,
            backgroundColor: selectedTimeSlot === '1:00pm - 4:00pm' ? '#F8C569' : '#f0f0f0',
            paddingVertical: height * 0.02,
          }}
          onPress={() => handleTimeSlotPress('1:00pm - 4:00pm')}
        >
          <Text>1:00pm - 4:00pm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: '45%',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: width * 0.03,
            backgroundColor: selectedTimeSlot === '4:00pm - 7:00pm' ? '#F8C569' : '#f0f0f0',
            paddingVertical: height * 0.02,
          }}
          onPress={() => handleTimeSlotPress('4:00pm - 7:00pm')}
        >
          <Text>4:00pm - 7:00pm</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            width: '45%',
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: width * 0.03,
            backgroundColor: selectedTimeSlot === '7:00pm - 10:00pm' ? '#F8C569' : '#f0f0f0',
            paddingVertical: height * 0.02,
          }}
          onPress={() => handleTimeSlotPress('7:00pm - 10:00pm')}
        >
          <Text>7:00pm - 10:00pm</Text>
        </TouchableOpacity>
      </View>

      {error ? (
        <Text style={{ color: 'red', marginTop: 20, textAlign: 'center' }}>{error}</Text>
      ) : null}

      <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('VerificationScreen')}>
            <Image
              source={IMAGE.BackIcon}
              resizeMode="contain"
              style={{ width: width * 0.07, height: width * 0.07 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSignUpPress}
            style={{
              width: width * 0.6,
              backgroundColor: '#D5715B',
              height: height * 0.07,
              borderRadius: width * 0.09,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BussinessHourScreen;
