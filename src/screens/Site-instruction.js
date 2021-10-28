import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput, ScrollView,Button,Alert,Image,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import RNSmtpMailer from "react-native-smtp-mailer";
import auth from '@react-native-firebase/auth';
import Signature from "react-native-signature-canvas";
import Mailer from 'react-native-mail';

class SiteInstruction extends Component{
    constructor(){
        super();
        this.state={
           client:'',
           address:'',
           phone:'',
           contactPerson:'',
           project:'',
           vendor:'',
           orderNumber:'',
           date:new Date().toLocaleString(),
           SINumber:'',
           Description:'',
           labourHours:'',
           comments:'',
           representationName:'',
           signature:'',
           repPranaName:'',
           date2:new Date().toLocaleString(),
           sigPrana:'',
           datePrana:new Date().toLocaleString(),
           date3:new Date().toLocaleString(),
           signature:null,
           selectedValue:'Select email'
        }
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



    send=async()=>{

   const {
    client,
    address,
    phone,
    contactPerson,
    project,
    vendor,
    orderNumber,
    date,
    SINumber,
    Description,
    labourHours,
    comments,
    representationName,
    signature,
    repPranaName,
    date2,
    sigPrana,
    datePrana,
    date3,
    selectedValue
   }=this.state;


      // await firestore().collection('Site instruction')
      // .add({
      //     client:client,
      //     address:address,
      //     phone:phone,
      //     contactPerson:contactPerson,
      //     project:project,
      //     vendor:vendor,
      //     orderNumber:orderNumber,
      //     date:date,
      //     SINumber:SINumber,
      //     Description:Description,
      //     labourHours:labourHours,
      //     Comments:comments,
      //     representationName:representationName,
      //     signature:signature,
      //     repPranaName:repPranaName,
      //     sigPrana:sigPrana,
      //     datePrana:datePrana,
      //     date2:date2,
      //     date3:date3
      // })
     

  //     const user = auth().currentUser;

  Mailer.mail({
    subject: 'Site Instruction',
    recipients: [`${selectedValue}`],
    ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
    body:  `
    <div style="border:1px solid black;border-radius:30px;">

    <h1>Site Instruction</h1>
    <div style="padding:30px;background-color:#ADD8E6;">Client:</div>
    <div style="padding:30px;">${client}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Address:</div>
    <div style="padding:30px;">${address}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Phone:</div>
    <div style="padding:30px;">${phone}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Contact Person:</div>
    <div style="padding:30px;">${contactPerson}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Project:</div>
    <div style="padding:30px;">${project}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Vendor:</div>
    <div style="padding:30px;">${vendor}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Order Number:</div>
    <div style="padding:30px;">${orderNumber}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Date:</div>
    <div style="padding:30px;">${date}</div>
    <div style="padding:30px;background-color:#ADD8E6;">SI Number</div>
    <div style="padding:30px;">${SINumber}</div>
    <h1>Client Authorisation</h1>
    <div style="padding:30px;background-color:#ADD8E6;">Representation Name:</div>
    <div style="padding:30px;">${representationName}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Signature:</div>
    <div style="padding:30px;">${signature}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Date</div>:
    <div style="padding:30px;">${date2}</div>
    <h1>Prana FM</h1>
    <div style="padding:30px;background-color:#ADD8E6;">Representation name:</div>
    <div style="padding:30px;">${repPranaName}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Signature:</div>
    <div style="padding:30px;">${sigPrana}</div>
    <div style="padding:30px;background-color:#ADD8E6;">Date:</div>
    <div style="padding:30px;"${date3}</div>
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
    'this is the form',
    'the form was sent'
  )

        //  RNSmtpMailer.sendMail({
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

        //   <h1>Site Instruction</h1>
        //   <div style="padding:30px;background-color:#ADD8E6;">Client:</div>
        //   <div style="padding:30px;">${client}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Address:</div>
        //   <div style="padding:30px;">${address}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Phone:</div>
        //   <div style="padding:30px;">${phone}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Contact Person:</div>
        //   <div style="padding:30px;">${contactPerson}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Project:</div>
        //   <div style="padding:30px;">${project}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Vendor:</div>
        //   <div style="padding:30px;">${vendor}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Order Number:</div>
        //   <div style="padding:30px;">${orderNumber}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Date:</div>
        //   <div style="padding:30px;">${date}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">SI Number</div>
        //   <div style="padding:30px;">${SINumber}</div>
        //   <h1>Client Authorisation</h1>
        //   <div style="padding:30px;background-color:#ADD8E6;">Representation Name:</div>
        //   <div style="padding:30px;">${representationName}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Signature:</div>
        //   <div style="padding:30px;">${signature}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Date</div>:
        //   <div style="padding:30px;">${date2}</div>
        //   <h1>Prana FM</h1>
        //   <div style="padding:30px;background-color:#ADD8E6;">Representation name:</div>
        //   <div style="padding:30px;">${repPranaName}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Signature:</div>
        //   <div style="padding:30px;">${sigPrana}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Date:</div>
        //   <div style="padding:30px;"${date3}</div>
        //   </div>
        //   `,
        // attachmentPaths: [
        //   RNFS.DocumentDirectoryPath + '/test.jpg'
        // ]  // required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
        // })
        //   .then(success => console.log(success))
        //   .catch(err => console.log(err));
  console.log('It was clicked')
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
                  <Text style={{fontWeight:'bold',fontSize:20}}>Site Instruction</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                <View style={{marginVertical:5}}>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Client:</Text>
                       <TextInput 
                         value={this.state.client}
                         onChangeText={(e)=>this.setState({client:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Address:</Text>
                       <TextInput 
                        value={this.state.address}
                        onChangeText={(e)=>this.setState({address:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Phone:</Text>
                       <TextInput 
                          keyboardType="numeric"
                        value={this.state.phone}
                        onChangeText={(e)=>this.setState({phone:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Contact Person:</Text>
                       <TextInput 
                         value={this.state.contactPerson}
                         onChangeText={(e)=>this.setState({contactPerson:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Project:</Text>
                       <TextInput 
                       value={this.state.project}
                        onChangeText={(e)=>this.setState({project:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Vendor:</Text>
                       <TextInput 
                       value={this.state.vendor}
                        onChangeText={(e)=>this.setState({vendor:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Order Number:</Text>
                       <TextInput 
                        value={this.state.orderNumber}
                        onChangeText={(e)=>this.setState({orderNumber:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Date:</Text>
                       <TextInput 
                         value={this.state.date}
                         onChangeText={(e)=>this.setState({date:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>SI Number:</Text>
                       <TextInput 
                         value={this.state.SINumber}
                         onChangeText={(e)=>this.setState({SINumber:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                </View>
              </View>
              {/*This is the start of the Description labour*/}
               
              {/*This is the emd of the descriptin labour*/}
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:20}}>Client Authorisation</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                <View style={{marginVertical:5}}>
                <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Representation Name:</Text>
                       <TextInput 
                        value={this.state.representationName}
                        onChangeText={(e)=>this.setState({representationName:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   {/* <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Signature:</Text>
                          <View style={{ flex: 1 }}>
                              <View style={styles.preview}>
                              {signature ? (
                                  <Image
                                  resizeMode={"contain"}
                                  style={{ width: 335, height: 114 }}
                                  source={{ uri: signature }}
                                  />
                              ) : null}
                              </View>
                              <Signature
                              style={{width:'100%',height:400}}
                              onOK={this.handleSignature}
                              onEmpty={this.handleEmpty}
                              descriptionText="Sign"
                              clearText="Clear"
                              confirmText="Save"
                              webStyle={style}
                              />
                   </View>
                   </View> */}
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Date:</Text>
                       <TextInput
                         value={this.state.date2}
                         onChangeText={(e)=>this.setState({date2:e})} 
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                </View>
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:20}}>Prana FM</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                <View style={{marginVertical:5}}>
                <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Representation Name:</Text>
                       <TextInput 
                        value={this.state.repPranaName}
                        onChangeText={(e)=>this.setState({ repPranaName:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   {/* <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Signature:</Text>
                          <View style={{ flex: 1 }}>
                              <View style={styles.preview}>
                              {this.state.sigPrana ? (
                                  <Image
                                  resizeMode={"contain"}
                                  style={{ width: 335, height: 114 }}
                                  source={{ uri: this.state.sigPrana }}
                                  />
                              ) : null}
                              </View>
                              <Signature
                              style={{width:'100%',height:400}}
                              onOK={this.handleSignature}
                              onEmpty={this.handleEmpty}
                              descriptionText="Sign"
                              clearText="Clear"
                              confirmText="Save"
                              webStyle={style}
                              />
                   </View>
                   </View> */}
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Date:</Text>
                       <TextInput
                         value={this.state.date3}
                         onChangeText={(e)=>this.setState({date3:e})} 
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
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
    },
})

export default SiteInstruction;