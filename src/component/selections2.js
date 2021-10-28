import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,Image,Dimensions} from 'react-native'
class Selection2 extends Component{
    constructor(){
        super();
        this.state={

        }
    }


    render(){
        const {navigation}=this.props;
        const {width, height} = Dimensions.get('window')

        return(
          <ScrollView contentContainerStyle={styles.container}>
              <View style={{padding:20}}>
              <Image source={require('../screens/FM.png')} style={{width:300,height:200}}/>
             </View>
             <View style={{margin:10}}>
             <TouchableOpacity  style={{backgroundColor:'#7dbe42',
      padding:15,
      borderTopLeftRadius:20,
      borderTopRightRadius:20}} onPress={()=>{
                 this.props.navigation.navigate('Selection')
             }}>
                    <View style={{flexDirection:'row'}}>
                    <Image source={require('../screens/back.png')} style={{width:50,height:40}}/>
                    <Text style={{textAlign:'center',color:'white',marginLeft:15,marginTop:10}}>Projects</Text>
                    </View>
             </TouchableOpacity>
             <View style={{
                 width:'50%',
                 padding:15,
                 backgroundColor:'white',
                 borderBottomLeftRadius:20,
                 borderBottomRightRadius:20
             }}>
                   <TouchableOpacity style={styles.buttonCard}
                  
                  onPress={()=>{
                    navigation.navigate('Health and Safety checklist')
                }}
                  >
                      <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Health and Safety Check list</Text>
                          </View>
                          
                     
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCard}
                  
                  onPress={()=>{
                    navigation.navigate('Fire sprinkler installation checking')
                }}
                  >
                      <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Fire Sprinkler Installation Check list</Text>
                          </View>
                         
                       
                          
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCard} 
                  
                  onPress={()=>{
                    navigation.navigate('Civil check-list')
                }}
                  >
                      <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Civils Check list</Text>
                          </View>
                      
                         
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.buttonCard} 
                  
                  onPress={()=>{
                    navigation.navigate('Tank check-list')
                }}
                  >
                      <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Tank Check list</Text>
                          </View>
                        
                     
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCard} 
                  
                  onPress={()=>{
                    navigation.navigate('Sprinkler installation pump check-list')
                }}
                  >
                      <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Sprinkler pump room Check list</Text>
                          </View>
                          
                          
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCard} 
                  
                  onPress={()=>{
                    navigation.navigate('Detection system checklist')
                }}
                  >
                      <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}> Fire Detection Check list</Text>
                          </View>
                          
                    
                   
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCard} 
                   
                   onPress={()=>{
                    navigation.navigate('Testing check-list')
                }}
                  >
                      <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Testing Check list</Text>
                          </View>
                          
                     
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCard} 
                  
                  onPress={()=>{
                    navigation.navigate('Site Instruction')
                }}
                  >
                      <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Site Instruction Check list</Text>
                          </View>
                         
                          
                     
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCard} 
                  
                  onPress={()=>{
                    navigation.navigate('Client checklist')
                }}
                  >
                      <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Client Check list</Text>
                          </View>
                 
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.buttonCard} 
                  
                  onPress={()=>{
                    navigation.navigate('Supervise check-list')
                }}
                  >
                      <View style={{flexDirection:'row',padding:20,justifyContent:'space-between'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Supervisor Check list</Text>
                          </View>
                         
                     
                          
                     
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity>
                 
                  
                  {/* <TouchableOpacity style={styles.buttonCard} 
                  
                  onPress={()=>{
                    navigation.navigate('Sprinkler installation check-list')
                }}
                  >
                      <View style={{flexDirection:'row'}}>
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../screens/checklist.png')} style={{width:20,height:20}}/>
                           <Text>{' '}</Text>
                          <Text style={{color:'white'}}>Sprinkler installation check-list</Text>
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
            
                         
                           <Image source={require('../screens/enter.png')} style={{height:20,width:20}}/>
                      </View>
                  </TouchableOpacity> */}
                  </View>
                </View>
          </ScrollView>
        )
    }
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
        width:350,
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
export default Selection2;