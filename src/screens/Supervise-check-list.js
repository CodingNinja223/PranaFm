import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Switch,ScrollView,Button,Alert,Dimensions,Picker} from 'react-native';
import Signature from "react-native-signature-canvas";
import RNSmtpMailer from "react-native-smtp-mailer";
import RNFS from 'react-native-fs';
import CheckBox from '@react-native-community/checkbox';
import Camera from '../component/camera';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Mailer from 'react-native-mail';
import YesNoBool from './YesNoBool';
class SuperviseCheckList extends Component{
    constructor(){
        super();
        this.state={
            signature:null,
            site:'',
            inspectionDate:new Date().toLocaleString(),
            clientDetails:'',
            siteVisit:'',
            ASIB:'',
            scope:'',
            ApprovedCivil:'',
            supervisorYes:false,
            supervisorNo:new YesNoBool(false),
            supervisorComments:'',
            issuesraised:'',
            warningIssuedYes:false,
            warningIssuedNo:new YesNoBool(false),
            comments:'',
            supervisorName:'',
            MeetContractor:false,
            MeetContractorNo:new YesNoBool(false),
            ProgressPerContractor:false,
            ProgressPerContractorNo:new YesNoBool(false),
            ContractorCommunications:'',
            selectedValue:'Select email'
        }
    }

    send=async()=>{

    const {
      signature,
      site,
      inspectionDate,
      clientDetails,
      siteVisit,
      ASIB,
      scope,
      supervisorYes,
      supervisorNo,
      supervisorComments,
      issuesraised,
      warningIssuedYes,
      warningIssuedNo,
      comments,
      supervisorName,
      MeetContractor,
      ProgressPerContractor,
      ContractorCommunications,
      ApprovedCivil,
      selectedValue
    }=this.state;

      //   await firestore().collection('Supervise Check List')
      //  .add({
      //   signature:signature,
      //   site:site,
      //   inspectionDate:inspectionDate,
      //   clientDetails:clientDetails,
      //   siteVisit:siteVisit,
      //   ASIB:ASIB,
      //   scope:scope,
      //   supervisorYes:supervisorYes,
      //   supervisorNo:supervisorNo,
      //   supervisorComments:supervisorComments,
      //   issuesraised:issuesraised,
      //   warningIssuedYes:warningIssuedYes,
      //   warningIssuedNo:warningIssuedNo,
      //   comments:comments,
      //   supervisorName:supervisorName,
      //   MeetContractor:MeetContractor,
      //   ProgressPerContractor:ProgressPerContractor,
      //   ContractorCommunications:ContractorCommunications,
      //   ApprovedCivil:ApprovedCivil
      //  })

   
    //    const user = auth().currentUser;
    Mailer.mail({
      subject: 'Supervise Checklist',
      recipients: [`${selectedValue}`],
      ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
      body:`
       Site:
       ${this.state.site}
       <br/>
       <br/>
       Inspection Date:
       ${this.state.inspectionDate}
       <br/>
       <br/>
       Client Details:
       ${this.state.clientDetails}
       <br/>
       <br/>
       Site Visit:
       ${this.state.siteVisit}
       <br/>
       <br/>
       Approved Civil Drawings:
       ${this.state.ApprovedCivil}
       <br/>
       <br/>
       SANS/ASIB:
       ${this.state.ASIB}
       <br/>
       <br/>
       Scope of work Approved:
       ${this.state.scope}
       <br/>
       <br/>
       Supervisor on site:
       ${this.state.supervisorNo.value}
       <br/>
       <br/>
       Supervisor comments:
       ${this.state.supervisorComments}
       <br/>
       <br/>
       Issued raised:
       ${this.state.issuesraised}
       <br/>
       <br/>
       Warning issued:
       ${this.state.warningIssuedNo.value}
       <br/>
       <br/>
       Warning Comments:
       ${this.state.comments}
       <br/>
       <br/>
       Supervisor Name:
       ${this.state.supervisorName}
       <br/>
       <br/>
       Meet with contractor and update accordingly:
       ${this.state.MeetContractorNo.value}
       <br/>
       <br/>
       Progress as per Contractor:
       ${this.state.ProgressPerContractorNo.value}
       <br/>
       <br/>
       Progress comments:
       ${this.state.ContractorCommunications}
       <br/>
       <br/>
       Signature
       <img src="${this.state.signature}"/>      
      
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
      'The form was sent'
    )

        // RNSmtpMailer.sendMail({
        //   mailhost: "smtp.wiggletunes.co.za",
        //   port: "587",
        //   ssl: false, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
        //   username: "transport@wiggletunes.co.za",
        //   password: "WigTr@123%_12",
        //   fromName:"coder@wiggledigital.co.za", // optional
        //   replyTo: "coder@wiggledigital.co.za", // optional
        //   recipients:`${this.state.selectedValue}`,
        //   subject: "Site Check List",
        //   htmlBody: "<h1>header</h1><p>body</p>",
        //   attachmentPaths: [
        //     RNFS.ExternalDirectoryPath + "/image.jpg",
        //     RNFS.DocumentDirectoryPath + "/test.txt",
        //     RNFS.DocumentDirectoryPath + "/test2.csv",
        //     RNFS.DocumentDirectoryPath + "/pdfFile.pdf",
        //     RNFS.DocumentDirectoryPath + "/zipFile.zip",
        //     RNFS.DocumentDirectoryPath + "/image.png"
        //   ], // optional
        //   attachmentNames: [
        //     "image.jpg",
        //     "firstFile.txt",
        //     "secondFile.csv",
        //     "pdfFile.pdf",
        //     "zipExample.zip",
        //     "pngImage.png"
        //   ], // required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
        // })
        //   .then(success => console.log(success))
        //   .catch(err => console.log(err));
          console.log('It was clicked')
    }

    handleSignature = signature => {
        console.log(signature);
        this.setState({
            signature:signature
        })
      };
    
      handleEmpty = () => {
        console.log('Empty');
      }

       cam=()=>{
           return(
               <Camera/>
           )
       }

    render(){
        const {signature}=this.state;
        const style = `.m-signature-pad--footer
        .button {
          background-color: red;
          color: #FFF;
        }`;
        const {width, height} = Dimensions.get('window')
        return(
          <ScrollView contentContainerStyle={styles.container}>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>Supervise check-list</Text>
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
                        onChangeText={e=>this.setState({clientDetails:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>Site visit:</Text>
                    <TextInput 
                         value={this.state.siteVisit}
                         onChangeText={(e)=>this.setState({siteVisit:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>Approved Civil Drawings:</Text>
                    <TextInput 
                         value={this.state.ApprovedCivil}
                         onChangeText={(e)=>this.setState({ApprovedCivil:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>SANS/ASIB</Text>
                    <TextInput 
                    value={this.state.ASIB}
                        onChangeText={e=>this.setState({ASIB:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>Scope of work Approved:</Text>
                    <TextInput 
                    value={this.state.scope}
                        onChangeText={e=>this.setState({scope:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>Supervisor Check list</Text>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <Text>Supervisor on site</Text>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.supervisorYes}
                                   onValueChange={(val) =>{
                                     const change= this.state.supervisorNo.flip();  
                                    this.setState({ supervisorYes:val,
                                      supervisorNo:change
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
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.supervisorComments}
                             onChangeText={(val)=>this.setState({ supervisorComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text style={{fontWeight:'bold'}}>Issues Raised with supersvisor</Text>
                  </View>
                  <View style={{marginVertical:10}}>
                        <TextInput
                          value={this.state.issuesraised}
                          onChangeText={(e)=>this.setState({issuesraised:e})}
                          style={{backgroundColor:'#eeeff4',borderRadius:10,textAlignVertical: 'top'}}
                          numberOfLines={8}
                          multiline={true}
                        />
                   </View>
                   <View style={{marginVertical:10,backgroundColor:'red',padding:10,borderRadius:10}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{marginVertical:10}}>
                             <Text style={{color:'white'}}>Warning Issued</Text>
                         </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.warningIssuedYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.warningIssuedNo.flip(); 
                                  this.setState({warningIssuedYes:val,
                                   warningIssuedNo:change
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
                       <Text style={{color:'white'}}>Comments</Text>
                                <TextInput 
                                 value={this.state.comments}
                                 onChangeText={(val)=>this.setState({comments:val})}
                                 style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                                 style={{backgroundColor:'#eeeff4',borderRadius:10,textAlignVertical: 'top'}}
                                 numberOfLines={8}
                                 multiline={true}
                                />
                                </View>
                   </View>
                   <View style={{marginVertical:10}}>
                         <Text>Supervisor's name</Text>
                         <TextInput
                          value={this.state.supervisorName}
                          onChangeText={(e)=>this.setState({supervisorName:e})}
                          style={{borderBottomWidth:1}}
                         
                         />
                   </View>
                   <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                      }}>
              <Text style={{fontWeight:'bold',fontSize:15}}>Contractor Communications</Text>
                   <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                          <View>
                          <Text>Meet with Contractor and update</Text>  
                          <Text>accordingly</Text>
                          </View>
                           <View style={{flexDirection:'row'}}>
                           <CheckBox
                            value={this.state.MeetContractor}
                            onValueChange={(newValue)=>{
                                const change= this.state.MeetContractorNo.flip(); 
                              this.setState({MeetContractor:newValue,
                              MeetContractorNo:change
                              })
                            
                            }}
                            disabled={false}
                            // value={toggleCheckBox}
                            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                          </View> 
                       </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>  
                           <Text>Progress as per Contractor</Text>  
                           <View style={{flexDirection:'row'}}>
                           <CheckBox
                            value={this.state.ProgressPerContractor}
                            onValueChange={(newValue)=>{
                                const change= this.state.ProgressPerContractorNo.flip(); 
                              this.setState({ProgressPerContractor:newValue,
                               ProgressPerContractorNo:change
                              })
                            
                            }}
                            disabled={false}
                            // value={toggleCheckBox}
                            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                          </View> 
                       </View>
                       </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                       
                   <View style={{marginVertical:5}}>
                      
                       <TextInput
                         value={this.state.ContractorCommunications}
                         onChangeText={(e)=>{this.setState({ContractorCommunications:e})}}
                        placeholder="Comments"
                          style={{backgroundColor:'#eeeff4',borderRadius:10,textAlignVertical: 'top'}}
                          numberOfLines={8}
                          multiline={true}
                        />
                   </View>
                    
         </View>    
                   <View style={{marginVertical:10}}>
                            <Text style={{marginVertical:5}}>Signatures:</Text>
                            <View style={{ flex: 1 }}>
                               
                                <View>
                                        <Signature
                                        style={{height:400,width:360}}
                                        onOK={this.handleSignature}
                                        onEmpty={this.handleEmpty}
                                        descriptionText="Sign"
                                        clearText="Clear"
                                        confirmText="Save"
                                        webStyle={style}
                                        />
                                  
                                </View>
                               
                        </View>
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

export default SuperviseCheckList;