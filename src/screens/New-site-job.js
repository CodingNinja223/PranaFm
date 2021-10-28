import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,Switch,Image,Button,Alert,Dimensions,Picker} from 'react-native';
import RNSmtpMailer from "react-native-smtp-mailer";
import RNFS from 'react-native-fs';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux'
import {Camera} from '../redux/camera/camera.actions'
import Mailer from 'react-native-mail';


class NewSiteJob extends Component{
    constructor({image}){
        super();
        this.state={
            signature:null,
            site:'',
            InspectionDate:'',
            ClientContactDetails:'',
            ProjectProgress:'',
            ProjectPlan:'',
            QualityOfWork:false,
            ProgressOfWork:false,
            HouseKeeping:false,
            SafetyBoards:false,
            WorkSiteComments:'',
            MeetContractor:false,
            ProgressPerContractor:false,
            date: new Date().toLocaleString(),
            date1: new Date().toLocaleString(),
            box:image,
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
        const {site,ClientContactDetails,ProjectProgress,ProjectPlan,selectedValue}=this.state;        
        //  await firestore().collection('Site Job')
        // .add({
        //   Site:site,
        //   InspectionDate:this.state.date,
        //   ClientContactDetails:ClientContactDetails,
        //   ProjectProgress:ProjectProgress,
        //   ProjectPlan:ProjectPlan
        // })

        
       
        // const user = auth().currentUser;

         

        Mailer.mail({
          subject: 'Site Check List',
          recipients: [`${selectedValue}`],
          ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
          body:  `
                <div style="border:1px solid black;border-radius:30px;">             
                <h1 style="text-align:center;">Site Check List</h1>
                
                <div style="padding:30px;background-color:#ADD8E6;">
                <h4 >Site:</h4> 
                </div>
  
               <div style="padding:30px"> ${site}</div>
  
                <div  style="padding:30px;background-color:#ADD8E6;">
                <h4>Inspection Date:</h4> 
                </div>
  
                <div style="padding:30px;">
                <p >${this.state.date}</p>
                </div>
  
                <div style="background-color:#ADD8E6;color:black;padding:30px;">
                <h4 >Client Contact Details:</h4> 
                </div>
  
                <div style="padding:30px;">
                <p>${this.state.ClientContactDetails}</p>
                </div>
  
                <div style="background-color:#ADD8E6;color:black;padding:30px;">
                <h4>Check progress of project(Scope of work):</h4>
                </div>
  
                <div style="padding:30px">${this.state.ProjectProgress}</div>
  
                <div style="background-color:#ADD8E6;color:black;padding:30px;">
                <h4 >Project Plan/Timeline:</h4> 
                </div>
  
                <div style="padding:30px">
                <p>${this.state.ProjectPlan}</p>
                </div>
  
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
          "New Site Job",
          "Form Sent",
        );

        // RNSmtpMailer.sendMail({
        //   mailhost: "smtp.wiggletunes.co.za",
        //   port: "587",
        //   ssl: false, 
        //   username: "transport@wiggletunes.co.za",
        //   password: "WigTr@123%_12",
        //   fromName:"coder@wiggledigital.co.za", 
        //   replyTo:"coder@wiggledigital.co.za", 
        //   recipients: `${selectedValue},coder@wiggledigital.co.za`,
        //   subject: "Site Check List",
        //   htmlBody: 
        //      `
        //       <div style="border:1px solid black;border-radius:30px;">             
        //       <h1 style="text-align:center;">Site Check List</h1>
              
        //       <div style="padding:30px;background-color:#ADD8E6;">
        //       <h4 >Site:</h4> 
        //       </div>

        //      <div style="padding:30px"> ${site}</div>

        //       <div  style="padding:30px;background-color:#ADD8E6;">
        //       <h4>Inspection Date:</h4> 
        //       </div>

        //       <div style="padding:30px;">
        //       <p >${this.state.date}</p>
        //       </div>

        //       <div style="background-color:#ADD8E6;color:black;padding:30px;">
        //       <h4 >Client Contact Details:</h4> 
        //       </div>

        //       <div style="padding:30px;">
        //       <p>${this.state.ClientContactDetails}</p>
        //       </div>

        //       <div style="background-color:#ADD8E6;color:black;padding:30px;">
        //       <h4>Check progress of project(Scope of work):</h4>
        //       </div>

        //       <div style="padding:30px">${this.state.ProjectProgress}</div>

        //       <div style="background-color:#ADD8E6;color:black;padding:30px;">
        //       <h4 >Project Plan/Timeline:</h4> 
        //       </div>

        //       <div style="padding:30px">
        //       <p>${this.state.ProjectPlan}</p>
        //       </div>

        //       </div>
        //   `,
        //   attachmentPaths:[
        //     RNFS.DocumentDirectoryPath + '/test.jpg'
        //   ]
        // })
        //   .then(success => console.log(success))
        //   .catch(err => console.log('There was an error',err));
  
        console.log('There form was sent');
      }


    render(){
       console.log(this.state.QualityOfWork);
       console.log("This is from 'redux",this.state.box);
        const {signature}=this.state;
        const style = `.m-signature-pad--footer
        .button {
          background-color: red;
          color: #FFF;
        }`;
        const {width, height} = Dimensions.get('window')
       console.log(this.state.selectedValue)
        return(
          <ScrollView contentContainerStyle={styles.container}>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                   <Text style={{fontWeight:'bold',fontSize:20}}>Site Check List</Text>
                   <View style={{backgroundColor:'black',width:350,height:1}}/>
                   <View style={{marginVertical:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
                      <Text>Site:</Text>
                   </View>
                   <TextInput 
                     value={this.state.site}
                     onChangeText={(e)=>this.setState({site:e})}
                     style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                    </View>
                    <View style={{marginVertical:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
                      <Text>Inspection Date:</Text>
                      <Text>{}</Text>
                   </View>
                   <TextInput 
                     value={this.state.date1}
                     onChangeText={(e)=>this.setState({InspectionDate:e})}
                     style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                    </View>
                    <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
                      <Text>Client Contact Details:</Text>
                   </View>
                   <TextInput 
                     keyboardType="numeric"
                     value={this.state.ClientContactDetails}
                     onChangeText={(e)=>this.setState({ClientContactDetails:e})}
                     style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                    
                    </View>
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
              <Text style={{fontWeight:'bold',fontSize:15}}>Check progress of project (Scope of work)</Text>
                   <View style={{backgroundColor:'black',width:350,height:1}}/>

                   <View style={{marginVertical:10}}>
                        <TextInput
                         value={this.state.ProjectProgress}
                          onChangeText={(e)=>this.setState({ProjectProgress:e})}
                          placeholder="Comments"
                          style={{backgroundColor:'#eeeff4',borderRadius:10,textAlignVertical: 'top'}}
                          numberOfLines={8}
                          multiline={true}
                        />
                   </View>
                   
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
              <Text style={{fontWeight:'bold',fontSize:15}}>Project Plan/Timelines</Text>
                   <View style={{backgroundColor:'black',width:350,height:1}}/>

                   <View style={{marginVertical:10}}>
                        <TextInput
                        value={this.state.ProjectPlan}
                        onChangeText={(e)=>this.setState({ProjectPlan:e})}
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
                <Picker.Item label="projectsKZN@pranaFM.com" value="projectsKZN@pranaFM.com" />
                <Picker.Item label="projectsCTN@pranaFM.com" value="projectsCTN@pranaFM.com" />
              </Picker>
                          
              </View>         
               <View style={{marginVertical:5}}>
                   <Button title="Take Picture" color="#006bb4" onPress={()=>{
                       this.props.navigation.navigate('Camera')
                   }}/>
              </View>  
              <Text>{this.props.image}</Text>
              <View style={{marginVertical:15}}>
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
    preview: {
        width: 335,
        height: 114,
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
      },
      previewText: {
        color: "#FFF",
        fontSize: 14,
        height: 40,
        lineHeight: 40,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#69B2FF",
        width: 120,
        textAlign: "center",
        marginTop: 10
      }
})

const mapDispatchToProps=dispatch=>({
  addCamera:item=>dispatch(Camera(item))
})

const mapStateToProps = (state) => ({ image: state.image })

export default connect(mapStateToProps,mapDispatchToProps)(NewSiteJob);