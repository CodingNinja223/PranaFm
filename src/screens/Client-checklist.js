import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Switch,ScrollView,Button,Alert,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNSmtpMailer from "react-native-smtp-mailer";
import auth from '@react-native-firebase/auth';
import RNFS from 'react-native-fs';
import Mailer from 'react-native-mail';
import YesNoBool from './YesNoBool';
class ClientChecklist extends Component{
    constructor(){
        super();
        this.state={
          site:'',
          inspectionDate:new Date().toLocaleString(),
          clientDetails:'',
          moreSprinklerYes:false,
          moreSprinklerNo:new YesNoBool(false),
          moreSprinklerPercentage:'',
          moreSprinklerComments:'',
          categoryHeightsYes:false,
          categoryHeightsNo:new YesNoBool(false),
          categoryHeightPercentage:'',
          categoryHeightComments:'',
          stockExteriorYes:false,
          stockExteriorNo:new YesNoBool(false),
          stockExteriorPercentage:'',
          stockExteriorComments:'',
          palletsYes:false,
          palletsNo:new YesNoBool(false),
          palletsPercentage:'',
          palletsComments:'',
          roofInsultationYes:false,
          roofInsultationNo:new YesNoBool(false),
          roofInsultationPercentage:'',
          roofInsultationComments:'',
          rackingYes:false,
          rackingNo:new YesNoBool(false),
          rackingPercentage:'',
          rackingComments:'',
          blockStorageYes:false,
          blockStorageNo:new YesNoBool(false),
          blockStoragePercentage:'',
          blockStorageComments:'',
          noStockStoredYes:false,
          noStockStoredNo:new YesNoBool(false),
          noStockStoredPercentage:'',
          noStockStoredComments:'',
          notes:'',
          selectedValue:'Select email'
        }
    }

    send=async()=>{
     
      const {
        site,
        inspectionDate,
        clientDetails,
        moreSprinklerYes,
        moreSprinklerNo,
        moreSprinklerPercentage,
        moreSprinklerComments,
        categoryHeightsYes,
        categoryHeightsNo,
        categoryHeightPercentage,
        categoryHeightComments,
        stockExteriorYes,
        stockExteriorNo,
        stockExteriorPercentage,
        stockExteriorComments,
        palletsYes,
        palletsNo,
        palletsPercentage,
        palletsComments,
        roofInsultationYes,
        roofInsultationNo,
        roofInsultationPercentage,
        roofInsultationComments,
        rackingYes,
        rackingNo,
        rackingPercentage,
        rackingComments,
        blockStorageYes,
        blockStorageNo,
        blockStoragePercentage,
        blockStorageComments,
        noStockStoredYes,
        noStockStoredNo,
        noStockStoredPercentage,
        noStockStoredComments,
        notes,
        selectedValue
      }=this.state;

      // await firestore().collection('Client checklist')
      // .add({
      //   site:site,
      //   inspectionDate:inspectionDate,
      //   clientDetails:clientDetails,
      //   moreSprinklerYes:moreSprinklerYes,
      //   moreSprinklerPercentage:moreSprinklerPercentage,
      //   moreSprinklerComments:moreSprinklerComments,
      //   categoryHeightsYes:categoryHeightsYes,
      //   categoryHeightPercentage:categoryHeightPercentage,
      //   categoryHeightComments:categoryHeightComments,
      //   stockExteriorYes:stockExteriorYes,
      //   stockExteriorPercentage:stockExteriorPercentage,
      //   stockExteriorComments:stockExteriorComments,
      //   palletsYes:palletsYes,
      //   palletsPercentage:palletsPercentage,
      //   palletsComments:palletsComments,
      //   roofInsultationYes:roofInsultationYes,
      //   roofInsultationPercentage:roofInsultationPercentage,
      //   roofInsultationComments:roofInsultationComments,
      //   rackingYes:rackingYes,
      //   rackingPercentage:rackingPercentage,
      //   rackingComments:rackingComments,
      //   blockStorageYes:blockStorageYes,
      //   blockStoragePercentage:blockStoragePercentage,
      //   blockStorageComments:blockStorageComments,
      //   noStockStoredYes:noStockStoredYes,
      //   noStockStoredPercentage:noStockStoredPercentage,
      //   noStockStoredComments:noStockStoredComments,
      //   notes:notes
      // })

     
      // const user = auth().currentUser;

      Mailer.mail({
        subject: 'Client Checklist',
        recipients: [`${selectedValue}`],
        ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
        body: `
        <h1>ClIENT CHECK LIST</h1>
        <div style="padding:30px;background-color:#ADD8E6;">Site:</div>
        <div style="padding:30px;">${site}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Inspection Date:</div>
        <div style="padding:30px;">${inspectionDate}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Client Details:</div>
        <div style="padding:30px;">${clientDetails}</div>

        <h1>Storage</h1>
        <div style="padding:30px;background-color:#ADD8E6;">1m or more from sprinklers</div>
        <div style="padding:30px;">${moreSprinklerNo.value}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        <div style="padding:30px;">${moreSprinklerPercentage}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        <div style="padding:30px;">${moreSprinklerComments}</div>
      
        <div style="padding:30px;background-color:#ADD8E6;">Category heights enforced</div>
        <div style="padding:30px;">${categoryHeightsNo.value}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        <div style="padding:30px;">${categoryHeightPercentage}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        <div style="padding:30px;">${categoryHeightComments}</div>
      
        <div style="padding:30px;background-color:#ADD8E6;">Stock on exterior or buildings require Drencher System</div>
        <div style="padding:30px">${stockExteriorNo.value}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        <div style="padding:30px;">${stockExteriorPercentage}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        <div style="padding:30px;">${stockExteriorComments}</div>

        <div style="padding:30px;background-color:#ADD8E6;">Pallets and cardboards storage protected</div>
         <div style="padding:30px;">${palletsNo.value}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        <div style="padding:30px;">${palletsPercentage}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        <div style="padding:30px;">${palletsComments}</div>

        <div style="padding:30px;background-color:#ADD8E6;">Roof Insulation</div>
        <div style="padding:30px;">${roofInsultationNo.value}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        <div style="padding:30px;">${roofInsultationPercentage}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        <div style="padding:30px;">${roofInsultationComments}</div>

        <div style="padding:30px;background-color:#ADD8E6;">Racking 1m space between racks and protection</div>
        <div style="padding:30px;">${rackingNo.value}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        <div style="padding:30px;">${rackingPercentage}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        <div style="padding:30px;">${rackingComments}</div>

        <div style="padding:30px;background-color:#ADD8E6;">150m 2x2,4m block storage - if required</div>
        <div style="padding:30px;">${ blockStorageNo.value}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        <div style="padding:30px;">${blockStoragePercentage}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        <div style="padding:30px;">${blockStorageComments}</div>

        <div style="padding:30px;background-color:#ADD8E6;">No.value Stock stored under stairways</div>
        <div style="padding:30px;">${noStockStoredNo.value}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        <div style="padding:30px;">${noStockStoredPercentage}</div>
        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        <div style="padding:30px;">${noStockStoredComments}</div>


        <div style="padding:30px;background-color:#ADD8E6;">Notes</div>
        <div style="padding:30px;">${notes}</div>
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
        'this is the form',
        'the form was sent'
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
        //     <h1>ClIENT CHECK LIST</h1>
        //     <div style="padding:30px;background-color:#ADD8E6;">Site:</div>
        //     <div style="padding:30px;">${site}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Inspection Date:</div>
        //     <div style="padding:30px;">${inspectionDate}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Client Details:</div>
        //     <div style="padding:30px;">${clientDetails}</div>

        //     <h1>Storage</h1>
        //     <div style="padding:30px;background-color:#ADD8E6;">1m or more from sprinklers</div>
        //     <div style="padding:30px;">${moreSprinklerYes}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //     <div style="padding:30px;">${moreSprinklerPercentage}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //     <div style="padding:30px;">${moreSprinklerComments}</div>
          
        //     <div style="padding:30px;background-color:#ADD8E6;">Category heights enforced</div>
        //     <div style="padding:30px;">${categoryHeightsYes}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //     <div style="padding:30px;">${categoryHeightPercentage}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //     <div style="padding:30px;">${categoryHeightComments}</div>
          
        //     <div style="padding:30px;background-color:#ADD8E6;">Stock on exterior or buildings require Drencher System</div>
        //     <div style="padding:30px">${stockExteriorYes}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //     <div style="padding:30px;">${stockExteriorPercentage}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //     <div style="padding:30px;">${stockExteriorComments}</div>

        //     <div style="padding:30px;background-color:#ADD8E6;">Pallets and cardboards storage protected</div>
        //      <div style="padding:30px;">${palletsYes}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //     <div style="padding:30px;">${palletsPercentage}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //     <div style="padding:30px;">${palletsComments}</div>

        //     <div style="padding:30px;background-color:#ADD8E6;">Roof Insulation</div>
        //     <div style="padding:30px;">${roofInsultationYes}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //     <div style="padding:30px;">${roofInsultationPercentage}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //     <div style="padding:30px;">${roofInsultationComments}</div>

        //     <div style="padding:30px;background-color:#ADD8E6;">Racking 1m space between racks and protection</div>
        //     <div style="padding:30px;">${rackingYes}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //     <div style="padding:30px;">${rackingPercentage}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //     <div style="padding:30px;">${rackingComments}</div>

        //     <div style="padding:30px;background-color:#ADD8E6;">150m 2x2,4m block storage - if required</div>
        //     <div style="padding:30px;">${blockStorageYes}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //     <div style="padding:30px;">${blockStoragePercentage}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //     <div style="padding:30px;">${blockStorageComments}</div>

        //     <div style="padding:30px;background-color:#ADD8E6;">No Stock stored under stairways</div>
        //     <div style="padding:30px;">${noStockStoredYes}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //     <div style="padding:30px;">${noStockStoredPercentage}</div>
        //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //     <div style="padding:30px;">${noStockStoredComments}</div>


        //     <div style="padding:30px;background-color:#ADD8E6;">Notes</div>
        //     <div style="padding:30px;">${notes}</div>





          
        //     `,
        //   attachmentPaths: [
        //     RNFS.DocumentDirectoryPath + '/test.jpg'
        //   ]// required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
        // })
        //   .then(success => console.log(success))
        //   .catch(err => console.log(err));
      console.log('It was clicked')
    }


    render(){
      const {width, height} = Dimensions.get('window')
        return(
          <ScrollView contentContainerStyle={styles.container}>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>CLIENT CHECK LIST</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1,marginHorizontal:5}}/>

                  <View style={{marginVertical:5}}>
                    <Text>Site</Text>
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
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>Storage</Text>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>1m or more from sprinklers</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.moreSprinklerYes}
                                   onValueChange={(val) =>{
                                   const change= this.state.moreSprinklerNo.flip();    
                                    this.setState({
                                     moreSprinklerYes:val,
                                    moreSprinklerNo:change
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
                             value={this.state.moreSprinklerPercentage}
                             onChangeText={val=>this.setState({moreSprinklerPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.moreSprinklerComments}
                             onChangeText={(val)=>this.setState({ moreSprinklerComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>Category heights enforced</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.categoryHeightsYes}
                                 onValueChange={(val) =>{
                                 const change= this.state.categoryHeightsNo.flip();    
                                this.setState({categoryHeightsYes:val,
                                 categoryHeightsNo:change
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
                             value={this.state.categoryHeightPercentage}
                             onChangeText={(val)=>this.setState({categoryHeightPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.categoryHeightComments}
                             onChangeText={(val)=>this.setState({categoryHeightComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                        <Text>Stock on exterior or buildings</Text>
                        <Text>require Drencher Systems</Text>
                        </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.stockExteriorYes}
                                 onValueChange={(val) =>{
                                  const change= this.state.stockExteriorNo.flip();  
                                  this.setState({stockExteriorYes:val,
                                   stockExteriorNo:change
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
                             value={this.state.stockExteriorPercentage}
                             onChangeText={(val)=>this.setState({stockExteriorPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.stockExteriorComments}
                             onChangeText={(val)=>this.setState({stockExteriorComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Pallets and cardboards </Text>
                       <Text>storage protected</Text>
                       </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.palletsYes}
                                  onValueChange={(val) =>{
                                   const change= this.state.palletsNo.flip();   
                                  this.setState({ palletsYes:val,
                                  palletsNo:change
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
                             value={this.state.palletsPercentage}
                             onChangeText={(val)=>this.setState({palletsPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.palletsComments}
                             onChangeText={(val)=>this.setState({palletsComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>Roof insulation</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.roofInsultationYes}
                                  onValueChange={(val) =>{
                                  const change= this.state.roofInsultationNo.flip();   
                                  this.setState({ roofInsultationYes:val,
                                   roofInsultationNo:change
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
                             value={this.state.roofInsultationPercentage}
                             onChangeText={(val)=>this.setState({roofInsultationPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.roofInsultationComments}
                             onChangeText={(val)=>this.setState({roofInsultationComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                        <Text>Racking 1m space between</Text>
                        <Text>racks and protection</Text>
                        </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.rackingYes}
                                  onValueChange={(val) =>{
                                  const change= this.state.rackingNo.flip(); 
                                  this.setState({ rackingYes:val,
                                  rackingNo:change
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
                             value={this.state.rackingPercentage}
                             onChangeText={(val)=>this.setState({rackingPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.rackingComments}
                             onChangeText={(val)=>this.setState({ rackingComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       
                       <View>
                       <Text>150m 2x2, 4m </Text>
                       <Text>block storage - if required</Text>
                       </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.blockStorageYes}
                                   onValueChange={(val) =>{
                                       const change= this.state.blockStorageNo.flip(); 
                                    this.setState({ blockStorageYes:val,
                                    blockStorageNo:change
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
                             value={this.state.blockStoragePercentage}
                             onChangeText={(val)=>this.setState({blockStoragePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.blockStorageComments}
                             onChangeText={(val)=>this.setState({blockStorageComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <Text>No stock stored</Text>
                            <Text>under stairways</Text>
                        </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.noStockStoredYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.noStockStoredNo.flip(); 
                                   this.setState({ 
                                    noStockStoredYes:val,
                                   noStockStoredNo:change
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
                             value={this.state.noStockStoredPercentage}
                             onChangeText={(val)=>this.setState({noStockStoredPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.noStockStoredComments}
                             onChangeText={(val)=>this.setState({ noStockStoredComments:val})}
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

export default ClientChecklist;