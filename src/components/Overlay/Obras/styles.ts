import { StyleSheet } from 'react-native';
import fonts from '../../../styles/fonts';



export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 45,
    justifyContent: 'space-evenly',
    paddingTop: '10%'
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

  textFotografia: {
    fontSize: 22,
    color:'white',
    paddingLeft: 20,
    fontFamily: fonts.regular,
  },
  containerList: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 15,
  },

  scrollView: {
    height: '100%',
    width: '100%',
    marginTop: 40,
  },

  textDescription: {
    fontSize: 18,
    color: 'white',
    lineHeight: 28,
    fontFamily: fonts.regular,
  }
  

});
