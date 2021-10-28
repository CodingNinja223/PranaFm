import React,{Component} from 'react';
import {View,ScrollView,Text,Image,StyleSheet,TextInput,TouchableOpacity} from  'react-native';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
class Login extends Component{
    constructor(){
        super();
        this.state={
            isSelected:false,
            email:'',
            password:''
        }
    }



    componentDidMount(){

    }

    loginHandler=()=>{
        const {email,password}=this.state
        auth().signInWithEmailAndPassword(email,password)
        .then((userCredential) => {
            var user = userCredential.user;
          })
          .catch((error) => {
            console.log(error)
          });
    }

    render(){
        return(
         <ScrollView contentContainerStyle={styles.container}>
             <View style={{justifyContent:'center',alignItems:'center',marginTop:70}}>
                 <Image source={require('./FM.png')} style={{width:300,height:200}}/>
             </View>
             <View style={{justifyContent:'center',alignItems:'center',marginTop:70}}>
                   <View style={styles.Form}>
                       <Text style={{fontWeight:'bold',fontSize:23}}>Login</Text>
                       {/* <Text style={{color:'grey'}}>Don't have an account? <Text style={{color:'blue'}}>Create your account</Text>, it takes less than a minute.</Text> */}
                      <View>
                         <TextInput
                           placeholder="Email"
                           inputStyle={{color: 'black'}} 
                           style={{borderBottomColor:'grey',borderBottomWidth:1}}
                           onChangeText={(e)=>this.setState({email:e.trim()})}
                           value={this.state.email}
                          />
                        
                          {/* <Image source={require('./user.png')} style={{width:30,height:30,position:'absolute',top:15,left:290}}/> */}
                          
                      </View>
                      <View>
                         <TextInput
                          placeholder="Password"
                          secureTextEntry={true}
                           style={{borderBottomColor:'grey',borderBottomWidth:1}}
                           onChangeText={(e)=>this.setState({password:e})}
                           value={this.state.password}
                          />
                        {/* <Image source={require('./padlock.png')} style={{width:25,height:25,position:'absolute',top:15,left:300}}/> */}
                      </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                         {/* <View style={{flexDirection:'row'}}>
                                <CheckBox
                                disabled={false}
                                value={this.state.isSelected}
                                onValueChange={(newValue)=>this.setState({isSelected:newValue})}
                                style={styles.checkbox}
                                />
                             <Text style={{marginTop:5}}>Remember Me</Text>
                         </View>
                         <View>
                             <Text style={{fontWeight:'bold',marginTop:5}}>Forgot Password?</Text>
                         </View> */}
                    </View>
                    <View style={{marginTop:10,marginLeft:7}}>
                        <TouchableOpacity style={styles.button} onPress={()=>this.loginHandler()}>
                             <Text style={{textAlign:'center',color:'white'}}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                   </View>   
             </View>
         </ScrollView>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        justifyContent:'center'
    },
    Form:{
        width:'90%',
        borderRadius:30,
        backgroundColor:'white',
        padding:19,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
    },
    checkbox: {
        alignSelf: "center",
      },
      button:{
        backgroundColor:'blue',
        width:100,
        borderRadius:10,
        padding:10,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
      }
})

export default Login;