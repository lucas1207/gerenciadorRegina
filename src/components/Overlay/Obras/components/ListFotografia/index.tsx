import React, {useState, useEffect, useCallback} from 'react';
import { Text,TouchableOpacity,TouchableOpacityProps, View } from 'react-native';
import {styles} from './styles'



interface ListFotografiaProps extends TouchableOpacityProps {
  images: object;
  name: string;
  description: string;
}




const ListFotografia: React.FC<ListFotografiaProps> = ({name,images,description,...rest}) => {

  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text style={styles.textName}>{name}</Text>
      <Text style={styles.textName}>Número de arquivos: {images.length}</Text>
    </TouchableOpacity>
  )
   
};

export default ListFotografia;
