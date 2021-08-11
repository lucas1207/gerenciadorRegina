import { StyleSheet } from 'react-native';
import fonts from '../../../styles/fonts';



export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'space-evenly',
    paddingVertical: '15%'
  },

  buttonVoltar: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 30,
    top: 30,
  },

  textTitle:{
    fontSize: 35,
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    color: 'white',
    fontFamily: fonts.regular,
    textAlign: 'center',

  },

  textData:{
    fontSize: 22,
    color: 'white',
    fontFamily: fonts.regular,
    textAlign: 'center',

  },
  

});
