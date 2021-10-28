import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,TextInput,Switch,Button,Picker} from 'react-native';
import auth from '@react-native-firebase/auth';
import Mailer from 'react-native-mail';
class SprinklerInstallationCheckList extends Component{
    constructor(){
        super();
        this.state={
           site:'',
           inspectionDate:new Date().toLocaleString(),
           clientDetails:'',
           approvedSprinkler:'',
           ASIB:'',
           scopeOfWork:'',
           safetyVestsYes:false,
           safetyVestsNo:false,
           conventionalYes:false,
           conventionalNo:false,
           highMediumYes:false,
           highMediumNo:false,
           DrencherYes:false,
           DrencherNo:false,
           ESFRYes:false,
           ESFRNo:false,
           HowManyValvesYes:false,
           HowManyValvesNo:false,
           HowManyRangersYes:false,
           HowmanyRangersNo:false,
           infillYes:false,
           infillNo:false,
           roofInstalledYes:false,
           roofInstalledNo:false,
           rackingInstallationYes:false,
           rackingInstallationNo:false,
           bracketsBeenInstalledYes:false,
           bracketsBeenInstalledNo:false,
           beltsBeenInstalledYes:false,
           beltsBeeninstalledNo:false,
           notes:'',
           selectedValue:'Select email'
        }
    }


    render(){
        return(
          <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.card}>
                  <Text style={{fontWeight:'bold'}}>FIRE SPRINKLER SYSTEM CHECK LIST</Text>
                  <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   <View style={{marginVertical:5}}>
                       <Text>Site:</Text>
                       <TextInput
                         value={this.state.site}
                          onChangeText={(e)=>this.setState({site:e})} 
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                       <Text>Inspection Date:</Text>
                       <TextInput 
                        value={this.state.inspectionDate}
                        onChangeText={(e)=>this.setState({inspectionDate:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                       <Text>Client Details:</Text>
                       <TextInput 
                          keyboardType="numeric"
                        value={this.state.clientDetails}
                        onChangeText={(e)=>this.setState({clientDetails:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                       <Text>Approved Sprinkler System Drawings:</Text>
                       <TextInput 
                         value={this.state.approvedSprinkler}
                         onChangeText={(e)=>this.setState({approvedSprinkler:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                       <Text>ASIB / None - ASIB:</Text>
                       <TextInput 
                         value={this.state.ASIB}
                         onChangeText={(e)=>this.setState({ASIB:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                       <Text>Scope of work Approved:</Text>
                       <TextInput 
                         value={this.state.scopeOfWork}
                         onChangeText={(e)=>this.setState({scopeOfWork:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
              </View>
              <View style={styles.card}>
                   <Text style={{fontWeight:'bold',fontSize:15}}>FIRE SPRINKLER SYSTEM CHECK LIST</Text>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Safety Vests</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.safetyVestsYes}
                                   onValueChange={(val) =>this.setState({safetyVestsYes:val})}
                                   disabled={false}
                                   activeText={'On'}
                                   inActiveText={'Off'}
                                   backgroundActive={'green'}
                                   backgroundInactive={'gray'}
                                   circleActiveColor={'#30a566'}
                                   circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Conventional</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.conventionalYes}
                                   onValueChange={(val) =>this.setState({conventionalYes:val})}
                                   disabled={false}
                                   activeText={'On'}
                                   inActiveText={'Off'}
                                   backgroundActive={'green'}
                                   backgroundInactive={'gray'}
                                   circleActiveColor={'#30a566'}
                                   circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>High - Medium - Low Risk</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.highMediumYes}
                                  onValueChange={(val) =>this.setState({highMediumYes:val})}
                                  disabled={false}
                                  activeText={'On'}
                                  inActiveText={'Off'}
                                  backgroundActive={'green'}
                                  backgroundInactive={'gray'}
                                  circleActiveColor={'#30a566'}
                                  circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Drencher System</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.DrencherYes}
                                   onValueChange={(val) =>this.setState({DrencherYes:val})}
                                   disabled={false}
                                   activeText={'On'}
                                   inActiveText={'Off'}
                                   backgroundActive={'green'}
                                   backgroundInactive={'gray'}
                                   circleActiveColor={'#30a566'}
                                   circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>ESFR</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.ESFRYes}
                                   onValueChange={(val) =>this.setState({ESFRYes:val})}
                                   disabled={false}
                                   activeText={'On'}
                                   inActiveText={'Off'}
                                   backgroundActive={'green'}
                                   backgroundInactive={'gray'}
                                   circleActiveColor={'#30a566'}
                                   circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Valves installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.HowManyValvesYes}
                                   onValueChange={(val) =>this.setState({HowManyValvesYes:val})}
                                   disabled={false}
                                   activeText={'On'}
                                   inActiveText={'Off'}
                                   backgroundActive={'green'}
                                   backgroundInactive={'gray'}
                                   circleActiveColor={'#30a566'}
                                   circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Mains have been installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.HowManyValvesYes}
                                   onValueChange={(val) =>this.setState({HowManyValvesYes:val})}
                                   disabled={false}
                                   activeText={'On'}
                                   inActiveText={'Off'}
                                   backgroundActive={'green'}
                                   backgroundInactive={'gray'}
                                   circleActiveColor={'#30a566'}
                                   circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>How many rangers have been installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.HowManyRangersYes}
                                  onValueChange={(val) =>this.setState({HowManyRangersYes:val})}
                                  disabled={false}
                                  activeText={'On'}
                                  inActiveText={'Off'}
                                  backgroundActive={'green'}
                                  backgroundInactive={'gray'}
                                  circleActiveColor={'#30a566'}
                                  circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Infill line installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.infillYes}
                                  onValueChange={(val) =>this.setState({infillYes:val})}
                                  disabled={false}
                                  activeText={'On'}
                                  inActiveText={'Off'}
                                  backgroundActive={'green'}
                                  backgroundInactive={'gray'}
                                  circleActiveColor={'#30a566'}
                                  circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Roof installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.roofInstalledYes}
                                   onValueChange={(val) =>this.setState({roofInstalledYes:val})}
                                   disabled={false}
                                   activeText={'On'}
                                   inActiveText={'Off'}
                                   backgroundActive={'green'}
                                   backgroundInactive={'gray'}
                                   circleActiveColor={'#30a566'}
                                   circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>is there racking installation</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.rackingInstallationYes}
                                   onValueChange={(val) =>this.setState({rackingInstallationYes:val})}
                                   disabled={false}
                                   activeText={'On'}
                                   inActiveText={'Off'}
                                   backgroundActive={'green'}
                                   backgroundInactive={'gray'}
                                   circleActiveColor={'#30a566'}
                                   circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Has all brackets been installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.bracketsBeenInstalledYes}
                                   onValueChange={(val) =>this.setState({bracketsBeenInstalledYes:val})}
                                   disabled={false}
                                   activeText={'On'}
                                   inActiveText={'Off'}
                                   backgroundActive={'green'}
                                   backgroundInactive={'gray'}
                                   circleActiveColor={'#30a566'}
                                   circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Has all belts been installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.beltsBeenInstalledYes}
                                  onValueChange={(val) =>this.setState({beltsBeenInstalledYes:val})}
                                  disabled={false}
                                  activeText={'On'}
                                  inActiveText={'Off'}
                                  backgroundActive={'green'}
                                  backgroundInactive={'gray'}
                                  circleActiveColor={'#30a566'}
                                  circleInActiveColor={'#000000'}
                                />
                                </View>
                          </View> 
                       </View>
                       <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:350}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:350,height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <Text style={{fontWeight:'bold'}}>Notes</Text>
                        
                       <TextInput
                          value={this.state.notes}
                          onChangeText={(e)=>this.setState({notes:e})}
                          placeholder="Notes"
                          style={{backgroundColor:'#eeeff4',borderRadius:10,textAlignVertical: 'top'}}
                          numberOfLines={8}
                          multiline={true}
                        />
                   </View>
              </View>
              <View style={{marginVertical:5}}>
                   <Button title="Take Picture" color="#006bb4" onPress={()=>{
                       this.props.navigation.navigate('Camera')
                   }}/>
              </View>
          </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        padding:10,
        backgroundColor:'white',
        width:380,
        marginVertical:10
      }
})

export default SprinklerInstallationCheckList;