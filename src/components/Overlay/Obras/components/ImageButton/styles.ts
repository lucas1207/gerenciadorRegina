import { StyleSheet } from 'react-native';
import fonts from '../../../../../styles/fonts';



export const styles = StyleSheet.create({
  container: {
    height: 50,
 
    alignSelf: 'center',
    borderRadius: 7,
    backgroundColor: '#808080cc',
    paddingHorizontal:25,
    marginVertical: 30,
    alignItems: 'center',
    flexDirection: 'row',
   
  },

  textName:{
    fontSize: 18,
    color: 'white',
    fontFamily: fonts.regular,
    textAlign: 'left',

  },

  

});
