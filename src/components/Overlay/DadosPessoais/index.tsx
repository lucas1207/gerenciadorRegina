import React, {useState,useEffect} from 'react';
import { Text,TouchableOpacity,TouchableOpacityProps } from 'react-native';
import {styles} from './styles'
import {LinearGradient} from 'expo-linear-gradient'
import firebase from 'firebase'

import { Feather } from '@expo/vector-icons'

interface OverlayPros extends TouchableOpacityProps {
  currentUser: object
}





const DadosPessoais: React.FC<OverlayPros> = ({currentUser,...rest}) => {



  return (
    <LinearGradient 
     colors={['#006991','#013245']}
     start={[0,0]} 
     end={[1,1]} 
     style={styles.container}>
    <Text style={styles.textTitle}>Dados Pessoais</Text>
    <TouchableOpacity {...rest} style={styles.buttonVoltar}>
      <Feather name='chevron-left' color='white' size={40}/>
    </TouchableOpacity>

    <Text style={styles.textData}>Nome completo:   {currentUser.fullName}</Text>
    <Text style={styles.textData}>Data de nascimento:   {currentUser.birthDay}</Text>
    <Text style={styles.textData}>Telefone:   {currentUser.phone}</Text>
    <Text style={styles.textData}>Email:   {currentUser.email}</Text>
    <Text style={styles.textData}>Endereço:   {currentUser.adress}</Text>
    <Text style={styles.textData}>Cidade:   {currentUser.city}</Text>
    <Text style={styles.textData}>Estado:   {currentUser.state}</Text>
    <Text style={styles.textData}>Cep:   {currentUser.cep}</Text>
  </LinearGradient>
  )
   
};

export default DadosPessoais;
