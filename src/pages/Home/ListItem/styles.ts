import { StyleSheet } from 'react-native';
import fonts from '../../../styles/fonts';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000030',
    width: '80%',
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },

  textName: {
    fontSize: 22,
    color: 'white',
    fontFamily: fonts.regular,
    textAlign: 'center',
  }


});
