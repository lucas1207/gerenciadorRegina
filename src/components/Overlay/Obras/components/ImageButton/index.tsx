import React, {useState, useEffect, useCallback} from 'react';
import { Text,TouchableOpacity,TouchableOpacityProps, View } from 'react-native';
import {styles} from './styles'



interface ListFotografiaProps extends TouchableOpacityProps {
  id: number;

}

const ListFotografia: React.FC<ListFotografiaProps> = ({id,...rest}) => {

  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text style={styles.textName}>Acessar Arquivo {id+1} </Text>
      
    </TouchableOpacity>
  )
   
};

export default ListFotografia;
