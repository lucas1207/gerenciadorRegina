import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';



export const styles = StyleSheet.create({
  blurView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerList: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 15,
  },
  iconClose: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconDados: {
    height: 50,
    width: 50,
    
    position: 'absolute',
    top: 30,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    height: '80%',
    width: '60%',
   
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textName:{
    fontSize: 35,
    alignSelf: 'center',
    paddingHorizontal:'10%',
    color: 'white',
    fontFamily: fonts.regular,
    textAlign: 'center',

  },
  textName2:{
    fontSize: 35,
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    paddingHorizontal:'10%',
    color: 'white',
    fontFamily: fonts.regular,
    textAlign: 'center',

  },

  textType:{
    fontSize: 22,
    alignSelf: 'center',
    paddingHorizontal:'10%',
    color: 'white',
    fontFamily: fonts.semibold,
    textAlign: 'center',

  },

  viewRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },

  button: {
    height: 300,
    width: 300,
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonOff: {
    height: 300,
    width: 300,
    borderColor: 'white',
    opacity: 0.2,
    borderWidth: 4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },


  textButton: {
    position: 'absolute',
    alignSelf: 'center',
    textAlign: 'center',
    bottom: -80,
    color: 'white',
    fontSize: 20,
    fontFamily: fonts.medium,
  },

  imageButton: {
    height: '60%',
    width: '60%',
  },

  imageButtonOff: {
    height: '60%',
    width: '60%',
    opacity: 0.3,
  },
  scrollView: {
    height: '100%',
 
    width: '100%',
  
 
  },

  viewTop: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textDescription: {
    fontSize: 18,
    color: 'white',
    lineHeight: 28,
    fontFamily: fonts.regular,
  },

  touchableGreen: {
    marginVertical: 40,
    height: 80,
    width: 300,
    backgroundColor: '#68CC4F',
    borderRadius: 5,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  touchableRed: {
    marginVertical: 40,
    height: 80,
    width: 300,
    backgroundColor: '#FF4D4D',
    borderRadius: 5,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textTouchable: {
    fontFamily: fonts.semibold,
    fontSize: 28,
    color: 'white'
  },

  textDados: {
    fontFamily: fonts.regular,
    fontSize: 22,
    marginVertical: 20,
    paddingHorizontal: '10%',
    color: 'white'
  }



});
