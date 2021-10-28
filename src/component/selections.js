import React from 'react'
import {Dimensions,View,Text,StyleSheet,Button,Image,TouchableOpacity,ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth';
const Selection =({navigation})=>{
    const {width, height} = Dimensions.get('window')
    return(
     <ScrollView contentContainerStyle={styles.container}>
          <View style={{padding:20}}>
            <Image source={require('../screens/FM.png')} style={{width:300,height:200}}/>
         </View>
         <View style={{margin:10}}>
             <TouchableOpacity style={{backgroundColor:'#7dbe42',
      padding:15,
      borderTopLeftRadius:20,
      borderTopRightRadius:20}} onPress={()=>auth().signOut().then(() => console.log('User signed out!'))}>
                    <View style={{flexDirection:'row'}}>
                    <Image source={require('../screens/back.png')} style={{width:50,height:40}}/>
                    <Text style={{textAlign:'center',color:'white',marginLeft:15,marginTop:10}}>Back to Login </Text>
                    </View>
             </TouchableOpacity>
             <View style={{
                 width:'80%',
                 padding:15,
                 backgroundColor:'white',
                 borderBottomLeftRadius:20,
                 borderBottomRightRadius:20
             }}>
                  <TouchableOpacity style={styles.buttonCard}
                    onPress={()=>{
                        navigation.navigate('New Site Job')
                    }}
                   >
                      <View style={{flexDirection:'row'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>New Site Job</Text>
                          </View>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCard}
                  
                  onPress={()=>{
                    navigation.navigate('Fire Audit Checklist')
                }}
                  >
                      <View style={{flexDirection:'row'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Fire Audit Checklist</Text>
                          </View>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                 
                  <TouchableOpacity style={styles.buttonCard}
                  
                  onPress={()=>{
                    navigation.navigate('Selection2')
                }}
                  >
                      <View style={{flexDirection:'row'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Projects</Text>
                          </View>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                          <Text>{' '}</Text>
                     
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>    
             </View>
         </View>
     </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eeeff4'
    },
    card:{
      backgroundColor:'#7dbe42',
      width:380,
      padding:15,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
    },
    cardBody:{
        width:380,
        padding:15,
        backgroundColor:'white',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    buttonCard:{
        backgroundColor:'#006bb4',
        borderRadius:15,
        padding:20,
        shadowColor: "#006bb4",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
        margin:5
    }
})

export default Selection