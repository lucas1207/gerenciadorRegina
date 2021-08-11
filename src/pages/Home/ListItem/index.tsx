import React from 'react';
import { TouchableOpacity,Text, TouchableOpacityProps } from 'react-native';
import {styles} from './styles'


interface ListItemPros extends TouchableOpacityProps {
  fullName: string
  
}

const ListItem: React.FC<ListItemPros> = ({fullName, ...rest}) => {

  
  return (
   <TouchableOpacity {...rest} style={styles.container}>
     <Text style={styles.textName}>{fullName}</Text>
   </TouchableOpacity>
  )
   
};

export default ListItem;
