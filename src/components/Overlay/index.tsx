import React, {useState,useCallback,useEffect} from 'react';
import { View,Text, TouchableOpacity,ScrollView,TouchableOpacityProps, Alert} from 'react-native';
import {styles} from './styles'
import { BlurView } from 'expo-blur';
import {LinearGradient} from 'expo-linear-gradient'
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons'
import firebase from 'firebase';

import ImageButton from './Obras/components/ImageButton'
import DadosPessoais from './DadosPessoais';



interface OverlayPros extends TouchableOpacityProps {
  currentUser: object
  currentCategory: string;
  minimizeOverlay: unknown;

}

const Overlay: React.FC<OverlayPros> = ({currentUser,currentCategory,minimizeOverlay, ...rest}) => {

  
  const [id, setId] = useState()
  const [loading, setLoading] = useState(false)
  const [currentData,setCurrentData] = useState([])
  const [state,setState] = useState(1)


  const dispatch = useDispatch();

  const setEffect = useCallback(
    boolean => dispatch({ type: 'setEffect', value: boolean }),
    [dispatch],
  );



  useEffect(() => {
    setLoading(true)
    firebase.database().ref(`users`).once('value').then(snapshot=> {
      const data = []
      snapshot.forEach(child=> {
        data.push({
          Fotografia: child.val().Fotografia,
          Design: child.val().Design,
          Arquitetura: child.val().Arquitetura,
          Escultura: child.val().Escultura,
          adress: child.val().adress,
          birthDay: child.val().birthDay,
          cep: child.val().cep,
          city: child.val().city,
          cpf: child.val().cpf,
          email: child.val().email,
          fullName: child.val().fullName,
          id: child.val().id,
          phone: child.val().phone,
          state: child.val().state,
        });
      });

      if(currentCategory==='Fotografia') {
        var users = data.filter(item=> item.Fotografia !== undefined)
        
        if(currentUser.id === 2) {
          var users2 = users.filter(item=>item.Fotografia.length > 2)
          console.log(users2)
          var trabalho = users2.filter(item=>item.Fotografia[currentUser.id].name=== currentUser.name)
          console.log(trabalho)
        } else if (currentUser.id=== 3) {
          var users2 = users.filter(item=>item.Fotografia.length > 3)
          console.log(users2)
          var trabalho = users2.filter(item=>item.Fotografia[currentUser.id].name=== currentUser.name)
          console.log(trabalho)
        }else {
          var trabalho = users.filter(item=> item.Fotografia.[currentUser.id].name === currentUser.name)
        }
        
       

        setId(trabalho[0].id)
        setCurrentData(trabalho[0])
    
      }

      if(currentCategory==='Design') {
        var users = data.filter(item=> item.Design !== undefined)

        
        if(currentUser.id === 2) {
          var users2 = users.filter(item=>item.Design.length > 2)
          console.log(users2)
          var trabalho = users2.filter(item=>item.Design[currentUser.id].name=== currentUser.name)
          console.log(trabalho)
        }else {
          var trabalho = users.filter(item=> item.Design.[currentUser.id].name === currentUser.name)
        }

    
  
        setId(trabalho[0].id)
        setCurrentData(trabalho[0])
      }

      if(currentCategory==='Arquitetura') {
        var users = data.filter(item=> item.Arquitetura !== undefined)

        var trabalho = users.filter(item=> item.Arquitetura.[currentUser.id].name === currentUser.name)
  
        setId(trabalho[0].id)
        setCurrentData(trabalho[0])
      }

      if(currentCategory==='Escultura') {
        var users = data.filter(item=> item.Escultura !== undefined)
  
        var trabalho = users.filter(item=> item.Escultura.[currentUser.id].name === currentUser.name)
 
        setId(trabalho[0].id)
        setCurrentData(trabalho[0])
        
      }
     
      setLoading(false)
    })
  }, []);





    
  const handleButtonPush = useCallback(()=>{
    setLoading(true)
    firebase.database().ref(`users/${id}/${currentCategory}/${currentUser.id}`).update({
      status:1
    })
    setEffect(true);
    minimizeOverlay(false);


 
  },[id,setEffect,setLoading])

  const handleRedPush = useCallback(()=>{
    setLoading(true)
    firebase.database().ref(`users/${id}/${currentCategory}/${currentUser.id}`).update({
      status:-1
    })
    setEffect(true)
    minimizeOverlay(false);
  
  

 
  },[id,setEffect,setLoading])






  return (
   <BlurView intensity={30} tint={'dark'} style={styles.blurView}>
     <LinearGradient 
     colors={['#006991','#013245']}
     start={[0,0]} 
     end={[1,1]} 
     style={styles.container}>
     
      { state===1 ? <> 
        <View style={styles.viewTop}>
        <Text style={styles.textName}>{currentUser.name}</Text>
        {currentUser.images.length === 5 && currentCategory === 'Design' && 
        <Text style={styles.textType}>Projeto</Text>
        }
        {currentUser.images.length === 5 && currentCategory === 'Arquitetura' && 
        <Text style={styles.textType}>Projeto</Text>
        }
        {currentUser.images.length === 2 && currentCategory === 'Design' &&
        <Text style={styles.textType}>Ideia</Text>
        }
         {currentUser.images.length === 2 && currentCategory === 'Arquitetura' &&
        <Text style={styles.textType}>Ideia</Text>
        }
       </View>

        <TouchableOpacity {...rest} style={styles.iconClose} >
          <Feather 
          name={'x'} 
          color='white' 
          size={40} 
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setState(2)} style={styles.iconDados} >
          <Feather 
          name={'user'} 
          color='white' 
          size={40} 
          />
        </TouchableOpacity>



        <ScrollView style={styles.scrollView}>
        <View style={[styles.containerList,{paddingHorizontal: 30,}]}>
        <Text style={styles.textDescription}>Conceituação:    {currentUser.description} </Text>
        {currentUser.images.map((item, index)=>(
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


        <View style={styles.viewRow}>
          <TouchableOpacity  onPress={()=>{handleRedPush()}} style={styles.touchableRed}>
            <Text style={styles.textTouchable}>DECLINAR</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{handleButtonPush()}} style={styles.touchableGreen}>
            <Text style={styles.textTouchable}>AVALIAR</Text>
          </TouchableOpacity>
        </View>

        </ScrollView>
      </> : <>
      <Text style={styles.textName2}>{currentData.fullName}</Text>

      
      <TouchableOpacity 
          onPress={()=>setState(1)}
          style={styles.iconClose} >
          <Feather 
          name={'x'} 
          color='white' 
          size={40} 
          />
        </TouchableOpacity>

        <Text style={styles.textDados}>Email: {currentData.email}</Text>
        <Text style={styles.textDados}>Data de Nascimento: {currentData.birthDay}</Text>       
        <Text style={styles.textDados}>Endereço: {currentData.adress}</Text>       
        <Text style={styles.textDados}>Cidade: {currentData.city}</Text>   
        <Text style={styles.textDados}>Estado: {currentData.state}</Text> 
        <Text style={styles.textDados}>Telefone: {currentData.phone}</Text>   
      </>
      }
     </LinearGradient>
     
   </BlurView>
  )
   
};

export default Overlay;
