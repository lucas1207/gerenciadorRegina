import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },

  textTitle:{
    fontSize: 38,
    color: 'white',
    marginTop: 50,
    textAlign: 'center',
    fontFamily: fonts.medium,
  },

  imageLogo: {
    resizeMode: 'contain',
    height: 125,
    width: 300,
    position: 'absolute',
    right: 50,
    top: 50,
  },



  containerList: {
    marginTop: 50,
    width: '80%',
    height: 1,
  
  
  },  

  textTop: {
    fontFamily: fonts.semibold,
    fontSize: 18,
    color: 'white',
  },

  viewInfo: {
    height: 200,
    width: '100%',
    paddingTop: 150,
  },

  viewRow: {
    width:'100%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  textInfo: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: fonts.regular,
    color: 'white',
  },
  textDetail: {
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: fonts.regular,
    color: 'white',
  },

  buttonInscrições: {
    paddingVertical: 10,

    width: 250,
    position:'absolute',
    right: '8%',
    top: '30%',
    backgroundColor: '#80808099',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },


  buttonUsuarios: {
    paddingVertical: 10,
    width: 250,
    position:'absolute',
    right: '8%',
    top: '60%',
    backgroundColor: '#80808099',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textButton: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fonts.semibold,
  },

  viewLista: {
    alignItems: 'flex-start',

    width: '70%',
    height: '80%',
  },

});
