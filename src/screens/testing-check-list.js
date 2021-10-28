import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Switch,ScrollView,Button,Alert,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNSmtpMailer from "react-native-smtp-mailer";
import RNFS from 'react-native-fs';
import auth from '@react-native-firebase/auth';
import Mailer from 'react-native-mail';
import YesNoBool from './YesNoBool';
class TestingCheckList extends Component{
    constructor(){
        super();
        this.state={
          site:'',
          InspectionDate:new Date().toLocaleString(),
          ClientDetails:'',
          testingCertifications:'',
          ASIB:'',
          ScopeOfWork:'',
          pressureTestYes:false,
          pressureTestNo:new YesNoBool(false),
          pressureTestPressure:'',
          pressureTestComments:'',
          pressureTestPassedYes:false,
          pressureTestPassedNo:new YesNoBool(false),
          pressureTestPassedPercentage:'',
          pressureTestPassedComments:'',
          waterPressureYes:false,
          waterPressureNo:new YesNoBool(false),
          waterPressurePercentage:'',
          waterPressureComment:'',
          allLeaksYes:false,
          allLeaksNo:new YesNoBool(false),
          allLeaksPercentage:'',
          allLeakComments:'',
          waterpressureTestedYes:false,
          waterpressuretestedNo:new YesNoBool(false),
          waterpressureTestedPercentage:'',
          waterpressureTestedComments:'',
          pumpTestedYes:false,
          pumpTestedNo:new YesNoBool(false),
          pumpTestedPercentage:'',
          pumpTestedComments:'',
          notes:'',
          selectedValue:'Select email'
        }
    }

    send=async()=>{

    const {    
    site,
    InspectionDate,
    ClientDetails,
    testingCertifications,
    ASIB,
    ScopeOfWork,
    pressureTestYes,
    pressureTestNo,
    pressureTestPressure,
    pressureTestComments,
    pressureTestPassedYes,
    pressureTestPassedNo,
    pressureTestPassedPercentage,
    pressureTestPassedComments,
    waterPressureYes,
    waterPressureNo,
    waterPressurePercentage,
    waterPressureComment,
    allLeaksYes,
    allLeaksNo,
    allLeaksPercentage,
    allLeakComments,
    waterpressureTestedYes,
    waterpressuretestedNo,
    waterpressureTestedPercentage,
    waterpressureTestedComments,
    pumpTestedYes,
    pumpTestedNo,
    pumpTestedPercentage,
    pumpTestedComments,
    notes,
    selectedValue
  }=this.state;



      // await firestore().collection('Testing Check List')
      // .add({
      //   site:site,
      //   InspectionDate:InspectionDate,
      //   ClientDetails:ClientDetails,
      //   testingCertifications:testingCertifications,
      //   ASIB:ASIB,
      //   ScopeOfWork:ScopeOfWork,
      //   pressureTestYes:pressureTestYes,
      //   pressureTestPressure:pressureTestPressure,
      //   pressureTestComments:pressureTestComments,
      //   pressureTestPassedYes:pressureTestPassedYes,
      //   pressureTestPassedPercentage:pressureTestPassedPercentage,
      //   pressureTestPassedComments:pressureTestPassedComments,
      //   waterPressureYes:waterPressureYes,
      //   waterPressurePercentage:waterPressurePercentage,
      //   waterPressureComment:waterPressureComment,
      //   allLeaksYes:allLeaksYes,
      //   allLeaksPercentage:allLeaksPercentage,
      //   allLeakComments:allLeakComments,
      //   waterpressureTestedYes:waterpressureTestedYes,
      //   waterpressureTestedPercentage:waterpressureTestedPercentage,
      //   waterpressureTestedComments:waterpressureTestedComments,
      //   pumpTestedYes:pumpTestedYes,
      //   pumpTestedPercentage:pumpTestedPercentage,
      //   pumpTestedComments:pumpTestedComments,
      //   notes:notes
      // })

     
      // const user = auth().currentUser;
      Mailer.mail({
        subject: 'Testing checklist',
        recipients: [`${selectedValue}`],
        ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
        body:`
        <div style="border:1px solid black;border-radius:30px;">
        <h1>TESTING CHECK LIST</h1>
        
         <div style="padding:30px;background-color:#ADD8E6;">Site</div>
         <div style="padding:30px;">${site}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Inspection Date</div>
        <div style="padding:30px;">${InspectionDate}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Client Details</div>
        <div style="padding:30px;">${ClientDetails}</div>
        <div div style="padding:30px;background-color:#ADD8E6;">Testing Certifications</div>
        <div style="padding:30px;">${testingCertifications}</div>
        <div style="padding:30px;background-color:#ADD8E6;">SANS/ASIB</div>
        <div style="padding:30px;">${ASIB}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Scope of work Approved</div>
        <div style="padding:30px;">${ScopeOfWork}</div>


        <h1>Testing Check List</h1>
         <div style="padding:30px;background-color:#ADD8E6;">Pressure Test instiated:</div>
         <div style="padding:30px;">${pressureTestNo.value}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
         <div style="padding:30px;">${pressureTestPressure}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
         <div style="padding:30px;">${pressureTestComments}</div>

         <div style="padding:30px;background-color:#ADD8E6;">Pressure Test passed:</div>
         <div style="padding:30px;">${pressureTestPassedNo.value}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
         <div style="padding:30px;">${pressureTestPassedPercentage}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
         <div style="padding:30px;">${pressureTestPassedComments}</div>

         <div style="padding:30px;background-color:#ADD8E6;">Water pressure test 24 hours:</div>
         <div style="padding:30px;background-color:#ADD8E6;">${waterPressureNo.value}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
         <div style="padding:30px;">${waterPressurePercentage}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
         <div style="padding:30px;"${waterPressureComment}</div>

         <div style="padding:30px;background-color:#ADD8E6;">All leaks repaired:</div>
         <div style="padding:30px;"> ${allLeaksNo.value}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
         <div style="padding:30px;">${allLeaksPercentage}<div>
         <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
         <div style="padding:30px;">${allLeakComments}</div>

         <div style="padding:30px;background-color:#ADD8E6;">Water pressure tested at 1600kpa 1/2 hours</div>
          <div style="padding:30px;">${waterpressuretestedNo.value}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
         <div style="padding:30px;">${waterpressureTestedPercentage}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
         <div style="padding:30px;">${waterpressureTestedComments}</div>

         
         <div style="padding:30px;background-color:#ADD8E6;">Pump Tested (ASIB)</div>
         <div style="padding:30px;">${pumpTestedNo.value}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
         <div style="padding:30px;">${pumpTestedPercentage}</div>
         <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
         <div style="padding:30px;">${pumpTestedComments}</div>

         <div style="padding:30px;background-color:#ADD8E6;">Notes:</div>
         <div style="padding:30px;">${notes}</div>
         </div>

        `,
        customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
        isHTML: true,
        attachments: [{
          // Specify either `path` or `uri` to indicate where to find the file data.
          // The API used to create or locate the file will usually indicate which it returns.
          // An absolute path will look like: /cacheDir/photos/some image.jpg
          // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
          path: RNFS.DocumentDirectoryPath + '/pranafm.jpg', // The absolute path of the file from which to read data.
          uri: '', // The uri of the file from which to read the data.
          // Specify either `type` or `mimeType` to indicate the type of data.
          type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
          mimeType: '', // - use only if you want to use custom type
          name: '', // Optional: Custom filename for attachment
        }]
      }, (error, event) => {
        Alert.alert(
          error,
          event,
          [
            {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
            {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
          ],
          { cancelable: true }
        )
      });

      Alert.alert(
        'This is a form',
        'Form was sent'
      )

      // RNSmtpMailer.sendMail({
      //   mailhost: "smtp.wiggletunes.co.za",
      //   port: "587",
      //   ssl: false, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      //   username: "transport@wiggletunes.co.za",
      //   password: "WigTr@123%_12",
      //   fromName:"coder@wiggledigital.co.za", // optional
      //   replyTo: "coder@wiggledigital.co.za", // optional
      //   recipients: `${this.state.selectedValue}`,
      //   subject: "Site Check List",
      //   htmlBody: `
      //   <div style="border:1px solid black;border-radius:30px;">
      //   <h1>TESTING CHECK LIST</h1>
        
      //    <div style="padding:30px;background-color:#ADD8E6;">Site</div>
      //    <div style="padding:30px;">${site}</div>
      //   <div style="padding:30px;background-color:#ADD8E6;">Inspection Date</div>
      //   <div style="padding:30px;">${InspectionDate}</div>
      //   <div style="padding:30px;background-color:#ADD8E6;">Client Details</div>
      //   <div style="padding:30px;">${ClientDetails}</div>
      //   <div div style="padding:30px;background-color:#ADD8E6;">Testing Certifications</div>
      //   <div style="padding:30px;">${testingCertifications}</div>
      //   <div style="padding:30px;background-color:#ADD8E6;">SANS/ASIB</div>
      //   <div style="padding:30px;">${ASIB}</div>
      //   <div style="padding:30px;background-color:#ADD8E6;">Scope of work Approved</div>
      //   <div style="padding:30px;">${ScopeOfWork}</div>


      //   <h1>Testing Check List</h1>
      //    <div style="padding:30px;background-color:#ADD8E6;">Pressure Test instiated:</div>
      //    <div style="padding:30px;">${pressureTestYes}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //    <div style="padding:30px;">${pressureTestPressure}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //    <div style="padding:30px;">${pressureTestComments}</div>

      //    <div style="padding:30px;background-color:#ADD8E6;">Pressure Test passed:</div>
      //    <div style="padding:30px;">${pressureTestPassedYes}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //    <div style="padding:30px;">${pressureTestPassedPercentage}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //    <div style="padding:30px;">${pressureTestPassedComments}</div>

      //    <div style="padding:30px;background-color:#ADD8E6;">Water pressure test 24 hours:</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">${waterPressureYes}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //    <div style="padding:30px;">${waterPressurePercentage}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //    <div style="padding:30px;"${waterPressureComment}</div>

      //    <div style="padding:30px;background-color:#ADD8E6;">All leaks repaired:</div>
      //    <div style="padding:30px;"> ${allLeaksYes}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //    <div style="padding:30px;">${allLeaksPercentage}<div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //    <div style="padding:30px;">${allLeakComments}</div>

      //    <div style="padding:30px;background-color:#ADD8E6;">Water pressure tested at 1600kpa 1/2 hours</div>
      //     <div style="padding:30px;">${waterpressureTestedYes}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //    <div style="padding:30px;">${waterpressureTestedPercentage}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //    <div style="padding:30px;">${waterpressureTestedComments}</div>

         
      //    <div style="padding:30px;background-color:#ADD8E6;">Pump Tested (ASIB)</div>
      //    <div style="padding:30px;">${pumpTestedYes}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //    <div style="padding:30px;">${pumpTestedPercentage}</div>
      //    <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //    <div style="padding:30px;">${pumpTestedComments}</div>

      //    <div style="padding:30px;background-color:#ADD8E6;">Notes:</div>
      //    <div style="padding:30px;">${notes}</div>
      //    </div>

      //   `,
      //   attachmentPaths: [
      //     RNFS.DocumentDirectoryPath + '/test.jpg'
      //   ]  
      // })
      //   .then(success => console.log(success))
      //   .catch(err => console.log('There was an error',err));
    }

    render(){
      console.log(this.state);
      const {width, height} = Dimensions.get('window')
        return(
          <ScrollView contentContainerStyle={styles.container}>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>TESTING CHECK LIST</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1,marginHorizontal:5}}/>
                  <View style={{marginVertical:5}}>
                    <Text>Site</Text>
                    <TextInput 
                         value={this.state.site}
                         onChangeText={(e)=>this.setState({ site:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>Inspection Date:</Text>
                    <TextInput 
                         value={this.state.InspectionDate}
                         onChangeText={(e)=>this.setState({InspectionDate:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>Client Details:</Text>
                    <TextInput 
                         keyboardType="numeric"
                         value={this.state.ClientDetails}
                         onChangeText={(e)=>this.setState({ClientDetails:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>Testing Certifications:</Text>
                    <TextInput 
                         value={this.state.testingCertifications}
                         onChangeText={(e)=>this.setState({testingCertifications:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>SANS / ASIB</Text>
                    <TextInput 
                         value={this.state.ASIB}
                         onChangeText={(e)=>this.setState({ASIB:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>Scope of work Approved:</Text>
                    <TextInput 
                         value={this.state.ScopeOfWork}
                         onChangeText={(e)=>this.setState({ ScopeOfWork:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>Testing Checklist</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1,marginHorizontal:5}}/>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>Pressure Test initiated</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.pressureTestYes}
                                  onValueChange={(val) =>{
                                  const change= this.state.pressureTestNo.flip();  
                                  this.setState({pressureTestYes:val,
                                    pressureTestNo:change
                                  })
                                
                                }}
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
                             value={this.state.pressureTestPressure}
                             onChangeText={(val)=>this.setState({ pressureTestPressure:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.pressureTestComments}
                             onChangeText={(val)=>this.setState({ pressureTestComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>Pressure Test passed</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.pressureTestPassedYes}
                                 onValueChange={(val) =>{
                                  const change= this.state.pressureTestNo.flip();   
                                  this.setState({pressureTestPassedYes:val,
                                    pressureTestPassedNo:change
                                  })
                                
                                
                                }}
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
                             value={this.state.pressureTestPassedPercentage}
                             onChangeText={(val)=>this.setState({ pressureTestPassedPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.pressureTestPassedComments}
                             onChangeText={val=>this.setState({ pressureTestPassedComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>Water pressure test 24 hours</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.waterPressureYes}
                                 onValueChange={(val) =>{
                                  const change= this.state.waterPressureNo.flip();   
                                  this.setState({waterPressureYes:val,
                                    waterPressureNo:change
                                  })
                                
                                
                                }}
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
                             value={this.state.waterPressurePercentage}
                             onChangeText={(val)=>this.setState({waterPressurePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.waterPressureComment}
                             onChangeText={(val)=>this.setState({ waterPressureComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>All leaks repaired</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.allLeaksYes}
                                 onValueChange={(val) =>{
                                  const change= this.state.allLeaksNo.flip();   
                                  this.setState({ allLeaksYes:val,
                                    allLeaksNo:change
                                  })
                                }}
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
                             value={this.state.allLeaksPercentage}
                             onChangeText={(val)=>this.setState({ allLeaksPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.allLeakComments}
                             onChangeText={(val)=>this.setState({ allLeakComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Water pressure tested at</Text>
                        <Text>1600kpa 1/2 hours</Text>
                       </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.waterpressureTestedYes}
                                  onValueChange={(val) =>{
                                   const change= this.state.waterpressuretestedNo.flip();   
                                  this.setState({waterpressureTestedYes:val,
                                    waterpressuretestedNo:change
                                  })
                                
                                
                                }}
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
                             value={this.state.waterpressureTestedPercentage}
                             onChangeText={(val)=>this.setState({ waterpressureTestedPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.waterpressureTestedComments}
                             onChangeText={(val)=>this.setState({ waterpressureTestedComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            
                       <Text>Pump Tested (ASIB)</Text>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.pumpTestedYes}
                                   onValueChange={(val) =>{
                                    const change= this.state.pumpTestedNo.flip();   
                                    this.setState({ pumpTestedYes:val,
                                      pumpTestedNo:change
                                    })
                                  }}
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
                             value={this.state.pumpTestedPercentage}
                             onChangeText={(val)=>this.setState({pumpTestedPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.pumpTestedComments}
                            onChangeText={val=>this.setState({pumpTestedComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:10}}>
                      <Text style={{fontWeight:'bold',fontSize:15}}>Notes</Text>
                        <TextInput
                          value={this.state.notes}
                          onChangeText={(e)=>this.setState({notes:e})}
                          placeholder="Comments"
                          style={{backgroundColor:'#eeeff4',borderRadius:10,textAlignVertical: 'top'}}
                          numberOfLines={8}
                          multiline={true}
                        />
                   </View>
                  
              </View>
              <View style={{flexDirection:'row',margin:10}}>
                <Text style={{textAlign:'center',fontSize:15,marginTop:15}}>Select Email</Text>
                <Text>{'  '}</Text>
                <Text>{'  '}</Text>
                <Text>{'  '}</Text>
                <Picker
                selectedValue={this.state.selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})}
              >
                <Picker.Item label="Select email" value="Select email" />
                <Picker.Item label="projectsJHB@pranaFM.com" value="projectsJHB@pranaFM.com" />
                <Picker.Item label="projectsKZN@pranafm.com" value="projectsKZN@pranaFM.com" />
                <Picker.Item label="projectsCTN@pranaFM.com" value="projectsCTN@pranaFM.com" />
              </Picker>
                          
              </View>
              <View style={{marginVertical:5}}>
                   <Button title="Take Picture" color="#006bb4" onPress={()=>{
                       this.props.navigation.navigate('Camera')
                   }}/>
              </View>
              <View style={{marginVertical:5}}>
                   <Button title="Send Form" color="#006bb4" onPress={()=>this.send()}/>
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

export default TestingCheckList;