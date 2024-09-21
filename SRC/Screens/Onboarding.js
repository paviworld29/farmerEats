import React, { useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { IMAGE, TEXT, font } from '../Constants';
import styles from '../Styles/Onboardingcss';
import Dots from 'react-native-dots-pagination';

const { width: WIDTH } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    image: IMAGE.OnBoardingFirst,
    text: TEXT.SlidFirst,
    header: 'Quality',
    ButtonColor: '#5EA25F',
  },
  {
    key: '2',
    image: IMAGE.OnBoardingSecond,
    text: TEXT.SlidSecond,
    header: 'Convenient',
    ButtonColor: '#D5715B',
  },
  {
    key: '3',
    image: IMAGE.OnBoardingThird,
    text: TEXT.SlidThird,
    header: 'Local',
    ButtonColor: '#F8C569',
  },
];

const Onboarding = ({ navigation }) => {
  const [active, setActive] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / WIDTH);
    setActive(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.slideContainer}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
              <View style={styles.bottomContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.header}</Text>
                  <Text style={styles.discription}>{item.text}</Text>
                  <Dots
                    length={slides.length}
                    active={active}
                    paddingVertical={50}
                    activeDotWidth={20}
                    passiveColor="#261C12"
                    activeColor="#261C12"
                  />
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: item.ButtonColor }]}>
                    <Text style={styles.buttonText}>Join the movement!</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.textLogin}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Onboarding;

 
