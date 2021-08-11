import React,{useEffect,useState, useCallback} from 'react';
import { ActivityIndicator, Image,Text,ScrollView,TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {styles} from './styles'
import LogoCCAL from '../../assets/images/logoCcal.png'
import firebase from 'firebase'
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem'
import Overlay from '../../components/Overlay'

const Home: React.FC = () => {


  const [state, setState] = useState(2)
  const [currentCategory,setCurrentCategory] = useState('Fotografia')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [renderOverlay, setRenderOverlay] = useState(false)
  const [currentUser, setCurrentUser]= useState([])



  const effect = useSelector(state => state.effect);

  const dispatch = useDispatch();

  const setEffect = useCallback(
    boolean => dispatch({ type: 'setEffect', value: boolean }),
    [dispatch],
  );


  const handleItemPress = useCallback((item,category)=>{
   
    setCurrentUser(item),
    setCurrentCategory(category)
    setRenderOverlay(true)
  },[setCurrentUser,setRenderOverlay])
  
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
      setUsers(data)
      setLoading(false)
    })
  }, []);





  

  var userNames = []
  if(users.length !== 0) {
    for (let i = 0; i < users.length; i++) {
      userNames.push(users[i].fullName) 
    }
  }

  const userFaltando = users.filter(item=>item.fullName === 'Caio Andreazza Morbin')




  const userWorks = users.filter(item=> item.Fotografia !== undefined || item.Design !== undefined || item.Arquitetura !== undefined || item.Escultura !== undefined )

  const usersFotografia = users.filter(item=> item.Fotografia !== undefined)
  const usersDesign = users.filter(item=> item.Design !== undefined)
  const usersArquitetura = users.filter(item=> item.Arquitetura !== undefined)
  const usersEscultura = users.filter(item=> item.Escultura !== undefined)

  
  const userNotWorks = users.filter(item=> item.Fotografia === undefined && item.Design === undefined && item.Arquitetura === undefined && item.Escultura === undefined )


  var InscricoesDesign = [];
  var InscricoesFotografia = [];
  var InscricoesArquitetura = [];
  var InscricoesEscultura = [];
  var allInscricoes = [];

  if(usersFotografia !== []) {
    for (let i = 0; i < usersFotografia.length; i++) {
      for(let j = 1; j< usersFotografia[i].Fotografia.length; j++) {
        InscricoesFotografia.push(usersFotografia[i].Fotografia[j])
        allInscricoes.push(usersFotografia[i].Fotografia[j])
      }
    }
  }


  if(usersDesign !== []) {
    for (let i = 0; i < usersDesign.length; i++) {
      for(let j = 1; j< usersDesign[i].Design.length; j++) {
        InscricoesDesign.push(usersDesign[i].Design[j])
        allInscricoes.push(usersDesign[i].Design[j])
      }
    }
  }




  if(usersArquitetura !== []) {
    for (let i = 0; i < usersArquitetura.length; i++) {
      for(let j = 1; j< usersArquitetura[i].Arquitetura.length; j++) {
        InscricoesArquitetura.push(usersArquitetura[i].Arquitetura[j])
        allInscricoes.push(usersArquitetura[i].Arquitetura[j])
      }
    }
  }



  if(usersEscultura !== []) {
    for (let i = 0; i < usersEscultura.length; i++) {
      for(let j = 0; j< usersEscultura[i].Escultura.length; j++) {
        InscricoesEscultura.push(usersEscultura[i].Escultura[j])
        allInscricoes.push(usersEscultura[i].Escultura[j])
      }
    }
  }
console.log(InscricoesEscultura)
 


  var inscricoesPendentesFotografia = InscricoesFotografia.filter(item=> item.status1 === 1  && item.name !== undefined && item.status !== 1 && item.status !== -1 )
  var inscricoesPendentesDesign = InscricoesDesign.filter(item=> item.status1 === 1 && item.name !== undefined && item.status !== 1 && item.status !== -1)
  var inscricoesPendentesEscultura = InscricoesEscultura.filter(item=> item.status1 === 1 && item.name !== undefined && item.status !== 1 && item.status !== -1)
  var inscricoesPendentesArquitetura = InscricoesArquitetura.filter(item=> item.status1 === 1 && item.name !== undefined && item.status !== 1 && item.status !== -1)
  
  console.log(inscricoesPendentesArquitetura)
  
  var inscricoesAvaliadasFotografia = InscricoesFotografia.filter(item=>item.status === 1)
  var inscricoesAvaliadasFotografia2 = inscricoesAvaliadasFotografia.filter(item=>item.name !== undefined)
  var inscricoesAvaliadasDesign = InscricoesDesign.filter(item=>item.status === 1)
  var inscricoesAvaliadasEscultura = InscricoesEscultura.filter(item=>item.status === 1)
  var inscricoesAvaliadasArquitetura = InscricoesArquitetura.filter(item=>item.status === 1)

  var inscricoesReprovadasFotografia = InscricoesFotografia.filter(item=>item.status === -1)

  var inscricoesReprovadasDesign = InscricoesDesign.filter(item=>item.status === -1)
  var inscricoesReprovadasEscultura = InscricoesEscultura.filter(item=>item.status === -1)
  var inscricoesReprovadasArquitetura = InscricoesArquitetura.filter(item=>item.status === -1)



  var numberFotografia = 0;
  var numberDesign = 0;
  var numberEscultura = 0;
  var numberArquitetura = 0;

  if(usersFotografia !== []) {
    for (let i = 0; i < usersFotografia.length; i++) {
      numberFotografia += usersFotografia[i].Fotografia.length-1
    }
  }
  if(usersDesign !== []) {
    for (let i = 0; i < usersDesign.length; i++) {
      numberDesign += usersDesign[i].Design.length-1
    }
  }
  if(usersEscultura !== []) {
    for (let i = 0; i < usersEscultura.length; i++) {
      numberEscultura += usersEscultura[i].Escultura.length
    }
  }
  if(usersArquitetura !== []) {
    for (let i = 0; i < usersArquitetura.length; i++) {
      numberArquitetura += usersArquitetura[i].Arquitetura.length-1
    }
  }


  const numberTotal = numberArquitetura + numberDesign + numberEscultura+ numberFotografia


  const emails = []

    for (let i = 0; i < userNotWorks.length; i++) {
      emails.push(userNotWorks[i].email)
    }

    const names = []

    for (let i = 0; i < userNotWorks.length; i++) {
      names.push(userNotWorks[i].fullName)
    }




 


  var colorFotografia = '#ffffff'
  if(state===2) {
    colorFotografia = '#00AFF1'

  }
  var colorDesign = '#ffffff'
  if(state===3) {
    colorDesign = '#00AFF1'

  }
  var colorArquitetura = '#ffffff'
  if(state===4) {
    colorArquitetura = '#00AFF1'
  
  }
  var colorEscultura = '#ffffff'
  if(state===5) {
    colorEscultura = '#00AFF1'

  }
  
  var colorFotografiaAv = '#ffffff'
  if(state===6) {
    colorFotografiaAv = '#00AFF1'

  }
  var colorDesignAv = '#ffffff'
  if(state===7) {
    colorDesignAv = '#00AFF1'
 
  }
  var colorArquiteturaAv = '#ffffff'
  if(state===8) {
    colorArquiteturaAv = '#00AFF1'
 
  }
  var colorEsculturaAv = '#ffffff'
  if(state===9) {
    colorEsculturaAv = '#00AFF1'

  }

  var colorFotografiaRep = '#ffffff'
  if(state===10) {
    colorFotografiaRep = '#00AFF1'

  }
  var colorDesignRep = '#ffffff'
  if(state===11) {
    colorDesignRep = '#00AFF1'
 
  }
  var colorArquiteturaRep = '#ffffff'
  if(state===12) {
    colorArquiteturaRep = '#00AFF1'
 
  }
  var colorEsculturaRep = '#ffffff'
  if(state===13) {
    colorEsculturaRep = '#00AFF1'

  }

  if(effect) {
    setEffect(false)
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

      setUsers(data)
      setLoading(false)
    })
  }

  


  return (
    <>
  
    <LinearGradient 
    colors={['#575757','#C7C7C7' ]} 
    start={[0,0]} 
    end={[1,1]} 
    style={styles.container}
    >
      
      <View style={{height: '100%', width: '30%'}}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.viewInfo}>
          <Text style={[styles.textInfo,{marginBottom: 50,}]}>Pendentes</Text>
          <View style={styles.viewRow}>
            <TouchableOpacity style={{alignItems: 'center'}}   onPress={()=>{setState(2),setCurrentCategory('Fotografia')}} >
              <Text style={[styles.textInfo,{color: colorFotografia}]}>Fotografia</Text>
              <Text style={[styles.textDetail,{color: colorFotografia}]}>{inscricoesPendentesFotografia.length} inscrições</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setState(3),setCurrentCategory('Design')}}>
              <Text style={[styles.textInfo,{color: colorDesign}]}>Design</Text>
              <Text style={[styles.textDetail,{color: colorDesign}]}>{inscricoesPendentesDesign.length} inscrições</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.viewRow}>
            <TouchableOpacity onPress={()=>{setState(4),setCurrentCategory('Arquitetura')}}>
              <Text style={[styles.textInfo,{color: colorArquitetura}]}>Arquitetura</Text>
              <Text style={[styles.textDetail,{color: colorArquitetura}]}> {inscricoesPendentesArquitetura.length} inscrições</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setState(5),setCurrentCategory('Escultura')}}>
              <Text style={[styles.textInfo,{color: colorEscultura}]}>Escultura</Text>
              <Text style={[styles.textDetail,{color: colorEscultura}]}> {inscricoesPendentesEscultura.length} inscrições</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.textInfo,{marginBottom: 50, color: '#68CC4F'}]}>Aprovadas</Text>
          <View style={styles.viewRow}>

            <TouchableOpacity style={{alignItems: 'center'}}   onPress={()=>{setState(6),setCurrentCategory('Fotografia')}} >
              <Text style={[styles.textInfo,{color: colorFotografiaAv}]}>Fotografia</Text>
              <Text style={[styles.textDetail,{color: colorFotografiaAv}]}>{inscricoesAvaliadasFotografia2.length} inscrições</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setState(7),setCurrentCategory('Design')}}>
              <Text style={[styles.textInfo,{color: colorDesignAv}]}>Design</Text>
              <Text style={[styles.textDetail,{color: colorDesignAv}]}>{inscricoesAvaliadasDesign.length} inscrições</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.viewRow}>
            <TouchableOpacity onPress={()=>{setState(8), setCurrentCategory('Arquitetura')}}>
              <Text style={[styles.textInfo,{color: colorArquiteturaAv}]}>Arquitetura</Text>
              <Text style={[styles.textDetail,{color: colorArquiteturaAv}]}> {inscricoesAvaliadasArquitetura.length} inscrições</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setState(9),setCurrentCategory('Escultura')}}>
              <Text style={[styles.textInfo,{color: colorEsculturaAv}]}>Escultura</Text>
              <Text style={[styles.textDetail,{color: colorEsculturaAv}]}>{inscricoesAvaliadasEscultura.length} inscrições</Text>
            </TouchableOpacity>
          </View>

          <Text style={[styles.textInfo,{marginBottom: 50, color: '#FF4D4D'}]}>Reprovadas</Text>
          <View style={styles.viewRow}>

            <TouchableOpacity style={{alignItems: 'center'}}   onPress={()=>{setState(10),setCurrentCategory('Fotografia')}} >
              <Text style={[styles.textInfo,{color: colorFotografiaRep}]}>Fotografia</Text>
              <Text style={[styles.textDetail,{color: colorFotografiaRep}]}>{inscricoesReprovadasFotografia.length} inscrições</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setState(11),setCurrentCategory('Design')}}>
              <Text style={[styles.textInfo,{color: colorDesignRep}]}>Design</Text>
              <Text style={[styles.textDetail,{color: colorDesignRep}]}>{inscricoesReprovadasDesign.length} inscrições</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.viewRow}>
            <TouchableOpacity onPress={()=>{setState(12), setCurrentCategory('Arquitetura')}}>
              <Text style={[styles.textInfo,{color: colorArquiteturaRep}]}>Arquitetura</Text>
              <Text style={[styles.textDetail,{color: colorArquiteturaRep}]}> {inscricoesReprovadasArquitetura.length} inscrições</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setState(13),setCurrentCategory('Escultura')}}>
              <Text style={[styles.textInfo,{color: colorEsculturaRep}]}>Escultura</Text>
              <Text style={[styles.textDetail,{color: colorEsculturaRep}]}>{inscricoesReprovadasEscultura.length} inscrições</Text>
            </TouchableOpacity>
          </View>
          </ScrollView> 
      </View>
     
     <View style={styles.viewLista}>
      <Image style={styles.imageLogo} source={LogoCCAL}/>
      <Text style={styles.textTitle}>Prêmio Alumínio{'\n'} Arte e Design 2021</Text>
     
     { loading ? 
     <ActivityIndicator 
     style={{marginTop: 200, alignSelf:'center'}} 
     size='large' 
     color='white'
     /> 
     : 
     <>
    
      {state===2 && 
      <View style={{height: '100%',width:'100%'}}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.containerList}>
          {inscricoesPendentesFotografia.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Fotografia')}} fullName={item.name}/>))}
        </ScrollView>
      </View>
     }
      {state===3 && 
       <View style={{height: '100%',width:'100%'}}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.containerList}>
        {inscricoesPendentesDesign.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Design')}} fullName={item.name}/>))}
      </ScrollView>
    </View>
     }
      {state===4 && 
       <View style={{height: '100%',width:'100%'}}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.containerList}>
        {inscricoesPendentesArquitetura.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Arquitetura')}} fullName={item.name}/>))}
    </ScrollView>
    </View>
     }
      {state===5 && 
    <View style={{height: '100%',width:'100%'}}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.containerList}>
        {inscricoesPendentesEscultura.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Escultura')}} fullName={item.name}/>))}
      </ScrollView>
    </View>
     }

      {state===6 &&
    <View style={{height: '100%',width:'100%'}}>
     <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.containerList}>
        {inscricoesAvaliadasFotografia2.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Fotografia')}} fullName={item.name}/>))}
    </ScrollView>
    </View>
     }  
     {state===7 && 
      <View style={{height: '100%',width:'100%'}}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.containerList}>
          {inscricoesAvaliadasDesign.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Design')}} fullName={item.name}/>))}
        </ScrollView>
      </View>
     }  
     {state===8 && 
      <View style={{height: '100%',width:'100%'}}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.containerList}>
          {inscricoesAvaliadasArquitetura.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Arquitetura')}} fullName={item.name}/>))}
        </ScrollView>
      </View>
     }  
     {state===9 && 
     <View style={{height: '100%',width:'100%'}}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.containerList}>
        {inscricoesAvaliadasEscultura.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Escultura')}} fullName={item.name}/>))}
      </ScrollView>
    </View>
     }  
      {state===10 && 
      <View style={{height: '100%',width:'100%'}}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.containerList}>
        {inscricoesReprovadasFotografia.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Fotografia')}} fullName={item.name}/>))}
      </ScrollView>
      </View>
     }  
      {state===11 &&
      <View style={{height: '100%',width:'100%'}}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.containerList}>
        {inscricoesReprovadasDesign.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Design')}} fullName={item.name}/>))}
        </ScrollView>
      </View>
     }  
        {state===12 && 
        <View style={{height: '100%',width:'100%'}}>
          <ScrollView 
          showsVerticalScrollIndicator={false}
          style={styles.containerList}>
          {inscricoesReprovadasArquitetura.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Arquitetura')}} fullName={item.name}/>))}
          </ScrollView>
         </View>
     }  
      {state===13 &&
      <View style={{height: '100%',width:'100%'}}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.containerList}>
          {inscricoesReprovadasEscultura.map(item=> (<ListItem onPress={()=>{handleItemPress(item,'Escultura')}} fullName={item.name}/>))}
        </ScrollView>
      </View>
     }  
     </>
    }
    </View>
   
  
    </LinearGradient>
   {renderOverlay && <Overlay currentUser={currentUser} minimizeOverlay={value=>setRenderOverlay(value)} currentCategory={currentCategory} onPress={()=>{setRenderOverlay(false)}}/>}
    </>
  )
   
};

export default Home;
