import {StyleSheet, Dimensions} from 'react-native';
import {IMAGE, TEXT, font} from '../Constants';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    padding: 30,
    borderTopRightRadius: 30,
  },
  slideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.75,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    marginTop: '10%',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    fontStyle: font.bold,
  },
  discription: {
    fontSize: 15,
    color: '#261C12',
    textAlign: 'center',
    marginTop: 35,
  },
  textLogin: {
    fontSize: 14,
    color: '#261C12',
    textAlign: 'center',
    fontStyle: font.bold,
    textDecorationLine: 'underline',
  },
});

export default styles;
