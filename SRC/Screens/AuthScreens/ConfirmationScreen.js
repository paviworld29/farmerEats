import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { IMAGE } from '../../Constants';

const { width, height } = Dimensions.get('window'); 

const ConfirmationScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: height * 0.26 }}>
      <View>
        <Image 
          source={IMAGE.RightIcon} 
          style={{ 
            width: width * 0.3, 
            height: width * 0.3,  
            resizeMode: 'contain' 
          }} 
        />
      </View>
      <Text style={{ fontSize: width * 0.08, color: '#261C12', marginTop: height * 0.02 }}>
        You're all done!
      </Text>
      <Text style={{ 
        fontSize: width * 0.04, 
        color: '#261C12', 
        paddingHorizontal: width * 0.1, 
        textAlign: 'center', 
        marginTop: height * 0.02 
      }}>
        Hang tight! We are currently reviewing your account and will follow up with you in 2-3 business days. In the meantime, you can set up your inventory.
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')} 
        style={{
          backgroundColor: '#D5715B',
          paddingVertical: height * 0.02,
          paddingHorizontal: width * 0.2,
          borderRadius: 25,
          width: width * 0.8,
          marginTop: height * 0.25,
          alignItems: 'center'
        }}>
        <Text style={{ color: 'white', fontSize: width * 0.04 }}>
          Got it!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmationScreen;
