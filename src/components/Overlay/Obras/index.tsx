import React, {useState, useEffect, useCallback} from 'react';
import { Text,TouchableOpacity,TouchableOpacityProps, View, ScrollView } from 'react-native';
import {styles} from './styles'
import {LinearGradient} from 'expo-linear-gradient'

import { Feather } from '@expo/vector-icons'
import List from './components/ListFotografia'
import ImageButton from './components/ImageButton'


interface OverlayPros extends TouchableOpacityProps {
  currentUser: object
}

const Fotografia: React.FC<OverlayPros> = ({currentUser,...rest}) => {
  const [state,setState] = useState(1)
  const [currentData,setCurrentData]=useState([])




  const handleItemPress = useCallback(item=>{
    setCurrentData(item);
   
    setState(2);

  },[])

  const arrayFotografia = []
  if(currentUser.Fotografia !== undefined) {
    for(var i = 1; i < currentUser.Fotografia.length;i++ ) {
      arrayFotografia.push(currentUser.Fotografia[i])
    }
  }
  const arrayDesign = []
  if(currentUser.Design !== undefined) {
    for(var i = 1; i < currentUser.Design.length;i++ ) {
      arrayDesign.push(currentUser.Design[i])
    }
  }
  const arrayArquitetura = []
  if(currentUser.Arquitetura !== undefined) {
    for(var i = 1; i < currentUser.Arquitetura.length;i++ ) {
      arrayArquitetura.push(currentUser.Arquitetura[i])
    }
  }

  const arrayEscultura = []
  if(currentUser.Escultura !== undefined) {
    for(var i = 0; i < currentUser.Escultura.length;i++ ) {
      arrayEscultura.push(currentUser.Escultura[i])
    }
  }


  return (
    <LinearGradient 
     colors={['#006991','#013245']}
     start={[0,0]} 
     end={[1,1]} 
     style={styles.container}>
  {  
  state===1
  ?
  <>
  <Text style={styles.textTitle}>Inscrições</Text>
    <TouchableOpacity {...rest} style={styles.buttonVoltar}>
      <Feather name='chevron-left' color='white' size={40}/>
    </TouchableOpacity>
    <ScrollView style={styles.scrollView}>

    {arrayFotografia.length!==0 && 
   <View style={styles.containerList}>
    <Text style={styles.textFotografia}>Fotografia</Text>
    {arrayFotografia.map(item=>(
      <List 
        onPress={()=>{handleItemPress(item)}}
        key={item.id} 
        name={item.name} 
        description={item.description} 
        images={item.images}/>))
    } 
    </View>
    }

    {arrayDesign.length!==0 && 
      <View style={styles.containerList}>
        <Text style={styles.textFotografia}>Design</Text>
        {arrayDesign.map(item=>(
          <List 
          onPress={()=>{handleItemPress(item)}}
            key={item.id} 
            name={item.name} 
            description={item.description} 
            images={item.images}/>))
        } 
        </View>
    }

    {arrayArquitetura.length!==0 && 
      <View style={styles.containerList}>
        <Text style={styles.textFotografia}>Arquitetura</Text>
        {arrayArquitetura.map(item=>(
          <List 
          onPress={()=>{handleItemPress(item)}}
            key={item.id} 
            name={item.name} 
            description={item.description} 
            images={item.images}/>))
        } 
        </View>
    }

    
    {arrayEscultura.length!==0 && 
      <View style={styles.containerList}>
        <Text style={styles.textFotografia}>Escultura</Text>
        {arrayEscultura.map(item=>(
          <List 
          onPress={()=>{handleItemPress(item)}}
            key={item.id} 
            name={item.name} 
            description={item.description} 
            images={item.images}/>))
        } 
        </View>
    }


    </ScrollView>
    </>
    :
    <>
     <Text style={styles.textTitle}>{currentData.name}</Text>
      <TouchableOpacity {...rest} style={styles.buttonVoltar}>
        <Feather name='chevron-left' color='white' size={40}/>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
      <View style={[styles.containerList,{paddingHorizontal: 30,}]}>
        <Text style={styles.textDescription}>Conceituação:    {currentData.description} </Text>
        {currentData.images.map((item, index)=>(
          <ImageButton   
            onPress={() => {
              window.open(item.imageUrl,'_blank',)
            }} 
            key={item.imageName} 
            id={index}
            />
          ))
        }
      </View>
      </ScrollView>
    </>
  }
   
  </LinearGradient>
  )
   
};

export default Fotografia;
