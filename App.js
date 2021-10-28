import React,{Component} from 'react';
import {StyleSheet,Text,View,Button,Image, TouchableOpacity,Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Selection from './src/component/selections';
import 'react-native-gesture-handler';
import Logins from './src/screens/Login';
import auth from '@react-native-firebase/auth';
import SiteJob from './src/screens/New-site-job'
import SiteInstruction from './src/screens/Site-instruction'
import FireAudit from './src/screens/fire-audit-checklist';
import HealthSafetyCheckList from './src/screens/Health-safety-checklist';
import FireSprinklerInstallationChecking from './src/screens/fire-sprinkler-installation-checking';
import CivilCheckList from './src/screens/civil-check-list';
import TankCheckList from './src/screens/tank-check-list';
import SprinklerInstallationCheckList from './src/screens/Sprinkler-installation-check-list';
import TestingCheckList from './src/screens/testing-check-list';
import ClientCheckList from './src/screens/Client-checklist';
import DetectionSystemChecklist from './src/screens/Detection-system-checklist';
import SuperviseCheckList from './src/screens/Supervise-check-list';
import SprinklerInstallationPumpCheckList from './src/screens/sprinkler-pump-room-check-list';
import Camera from './src/component/camera';
import Selection2 from './src/component/selections2';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/AntDesign';
const Stack = createStackNavigator();


const LoginHandler =()=>{
  return(
    <Stack.Navigator headerMode="none">
       <Stack.Screen name="Login" component={Logins}/>
    </Stack.Navigator>
  )
}

const HomeNavigator=({navigation})=>{
  const myIcon = <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />;
  return(
       <Stack.Navigator  initialRouteName="Selection">
           <Stack.Screen name="Selection" component={Selection} options={{ title: ' ' }} />
           <Stack.Screen name="Selection2" component={Selection2} options={{ title: ' ' }} />
           <Stack.Screen name="New Site Job" navigation={navigation} component={SiteJob} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Site Instruction" component={SiteInstruction} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Fire Audit Checklist" component={FireAudit} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Health and Safety checklist" navigation={navigation} component={HealthSafetyCheckList} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Fire sprinkler installation checking" component={FireSprinklerInstallationChecking} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Civil check-list" component={CivilCheckList} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Tank check-list" component={TankCheckList} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Sprinkler installation pump check-list" component={SprinklerInstallationPumpCheckList} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Sprinkler installation check-list" component={SprinklerInstallationCheckList} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Testing check-list" component={TestingCheckList} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Client checklist" component={ClientCheckList} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Detection system checklist" component={DetectionSystemChecklist} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Supervise check-list" component={SuperviseCheckList} option={{
               headerLeft:()=>(
                <Icon name="back" size={30} color="#900" onPress={()=>navigation.goBack()} />
               )
           }}/>
           <Stack.Screen name="Camera" component={Camera}/>
       </Stack.Navigator>
  )
}

class App extends Component {
  constructor(){
    super();
    this.state={
      signature:null,
      isLoggedIn:false,
      user:''
    }
  }

  componentDidMount(){
     auth().onAuthStateChanged((user)=>{
       if(user){
         this.setState({
           isLoggedIn:true,
           user:user
         })
       }else{
         this.setState({
           isLoggedIn:false
         })
       }
     })
     SplashScreen.hide();
  }
  
  render(){
  const {user,isLoggedIn}=this.state;
  return (
    <NavigationContainer>
     {
      isLoggedIn
       ?
      (<HomeNavigator/>)
      :
       (<LoginHandler/>)
     }
    </NavigationContainer>
  );
}
}




export default App;
