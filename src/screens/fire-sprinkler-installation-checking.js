import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Switch,ScrollView,Button,Alert,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import RNSmtpMailer from "react-native-smtp-mailer";
import auth from '@react-native-firebase/auth';
import Mailer from 'react-native-mail';
import YesNoBool from './YesNoBool';
class FireSprinklerInstallationChecking extends Component{
    constructor(){
        super();
        this.state={
          site:'',
          inspectionDate:new Date().toLocaleString(),
          ClientDetailsYes:'',
          ApprovedICV:'',
          ASIB:'',
          ScopeOfWorked:'',
          SpareSprinklersYes:false,
          SpareSprinklersNo:new YesNoBool(false),
          SpareSprinklerspercentage:'',
          SpareSprinklersComments:'',
          ConventionalYes:false,
          ConventionalNo:new YesNoBool(false),
          ConventionalPercentage:'',
          ConventionalComments:'',
          HighYes:false,
          HighNo:new YesNoBool(false),
          HighPercentage:'',
          HighComments:'',
          DrencherSystemYes:false,
          DrencherSystemNo:new YesNoBool(false),
          DrencherPercentage:'',
          DrencherComments:'',
          ESFRYes:false,
          ESFRNo:new YesNoBool(false),
          ESFRComments:'',
          ESFRPercentage:'',
          ValvesInstalledYes:false,
          ValvesInstalledNo:new YesNoBool(false),
          ValvesInstalledComments:'',
          ValvesInstalledPercentage:'',
          MainsInstalledYes:false,
          MainInstalledNo:new YesNoBool(false),
          MainInstalledPercentage:'',
          MainInstalledComments:'',
          howManyRangersYes:false,
          howManyRangersNo:new YesNoBool(false),
          howManyRangersPercentage:'',
          howManyRangersComments:'',
          infillLineYes:false,
          infillLineNo:new YesNoBool(false),
          infillLinePercentage:'',
          infillLineComments:'',
          RoofInstallationYes:false,
          RoofINstallationNo:new YesNoBool(false),
          roofInstallationPercentage:'',
          roofInstallationComments:'',
          rackingInstallationYes:false,
          rackingInstallationNo:new YesNoBool(false),
          rackingPercentage:'',
          rackingComments:'',
          bracketsYes:false,
          bracketsNo:new YesNoBool(false),
          bracketPercentage:'',
          bracketComments:'',
          beltsYes:false,
          beltsNo:new YesNoBool(false),
          beltsPercentage:'',
          beltsComments:'',
          ApprovedICVYes:false,
          ApprovedICVNo:new YesNoBool(false),
          CorrectFireYes:false,
          CorrectFireNo:new YesNoBool(false),
          ICVChamberYes:false,
          ICVChamberNo:new YesNoBool(false),
          Notes:'',
          selectedValue:'Select email'
        }
    }


    send=async()=>{
       const {
         site,
         inspectionDate,
         ClientDetailsYes,
         ApprovedICV,
         ASIB,
         ScopeOfWorked,
         SpareSprinklersYes,
         SpareSprinklersNo,
         SpareSprinklerspercentage,
         SpareSprinklersComments,
         ConventionalYes,
         ConventionalNo,
         ConventionalPercentage,
         ConventionalComments,
         HighYes,
         HighNo,
         HighPercentage,
         HighComments,
         DrencherSystemYes,
         DrencherSystemNo,
         DrencherPercentage,
         DrencherComments,
         ESFRYes,
         ESFRNo,
         ESFRComments,
         ESFRPercentage,
         ValvesInstalledYes,
         ValvesInstalledNo,
         ValvesInstalledComments,
         ValvesInstalledPercentage,
         MainsInstalledYes,
         MainInstalledNo,
         MainInstalledPercentage,
         MainInstalledComments,
         howManyRangersYes,
         howManyRangersNo,
         howManyRangersPercentage,
         howManyRangersComments,
         infillLineYes,
         infillLineNo,
         infillLinePercentage,
         infillLineComments,
         RoofInstallationYes,
         RoofINstallationNo,
         rackingInstallationYes,
         rackingInstallationNo,
         rackingPercentage,
         rackingComments,
         bracketsYes,
         bracketsNo,
         bracketPercentage,
         bracketComments,
         beltsYes,
         beltsNo,
         beltsPercentage,
         beltsComments,
         roofInstallationPercentage,
         roofInstallationComments,
         Notes,
         selectedValue
       }=this.state;
      // await firestore().collection('Fire Sprinkler installation Check list')
      // .add({
      //    site:site,
      //    inspectionDate:inspectionDate,
      //    ClientDetailsYes:ClientDetailsYes,
      //    ApprovedICV:ApprovedICV,
      //    ASIB:ASIB,
      //    ScopeOfWorked:ScopeOfWorked,
      //    SpareSprinklersYes:SpareSprinklersYes,
      //    SpareSprinklerspercentage:SpareSprinklerspercentage,
      //    SpareSprinklersComments:SpareSprinklersComments,
      //    ConventionalYes:ConventionalYes,
      //    ConventionalPercentage:ConventionalPercentage,
      //    ConventionalComments:ConventionalComments,
      //    HighYes:HighYes,
      //    HighPercentage:HighPercentage,
      //    HighComments:HighComments,
      //    DrencherSystemYes:DrencherSystemYes,
      //    DrencherPercentage:DrencherPercentage,
      //    DrencherComments:DrencherComments,
      //    ESFRYes:ESFRYes,
      //    ESFRComments:ESFRComments,
      //    ESFRPercentage:ESFRPercentage,
      //    ValvesInstalledYes:ValvesInstalledYes,
      //    ValvesInstalledComments:ValvesInstalledComments,
      //    ValvesInstalledPercentage:ValvesInstalledPercentage,
      //    MainsInstalledYes:MainsInstalledYes,
      //    MainInstalledPercentage:MainInstalledPercentage,
      //    MainInstalledComments:MainInstalledComments,
      //    howManyRangersYes:howManyRangersYes,
      //    howManyRangersPercentage:howManyRangersPercentage,
      //    howManyRangersComments:howManyRangersComments,
      //    infillLineYes:infillLineYes,
      //    infillLinePercentage:infillLinePercentage,
      //    infillLineComments:infillLineComments,
      //    RoofInstallationYes:RoofInstallationYes,
      //    rackingInstallationYes:rackingInstallationYes,
      //    rackingPercentage:rackingPercentage,
      //    rackingComments:rackingComments,
      //    bracketsYes:bracketsYes,
      //    bracketPercentage:bracketPercentage,
      //    bracketComments:bracketComments,
      //    beltsYes:beltsYes,
      //    beltsPercentage:beltsPercentage,
      //    beltsComments:beltsComments,
      //    roofInstallationPercentage:roofInstallationPercentage,
      //    roofInstallationComments:roofInstallationComments,
      //    Notes:Notes
      // })

     
      // console.log('This is sent');
      // const user = auth().currentUser;

      Mailer.mail({
         subject: 'Fire sprinkler checklist',
         recipients: [`${selectedValue}`],
         ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
         body:  `
         <div style="border:1px solid black;border-radius:30px;">

          <h1>FIRE SPRINKLER SYSTEM CHECK LIST</h1>

          <div style="padding:30px;background-color:#ADD8E6;">Site</div>
          <div style="padding:30px;">${site}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Inspection Date</div>
          <div style="padding:30px;"> ${inspectionDate}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Client Details</div>
          <div style="padding:30px;"> ${ClientDetailsYes}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Approved Sprinkler System Drawings</div>
          <div style="padding:30px;">${ApprovedICV}</div>
          <div style="padding:30px;background-color:#ADD8E6;">SANS-10287/ASIB</div>
          <div style="padding:30px;">${ASIB}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Scope of Work</div>
          <div style="padding:30px;">${ScopeOfWorked}</div>

          <h1>FIRE SPRINKLER SYSTEM CHECK LIST</h1>
          <div style="padding:30px;background-color:#ADD8E6;">What type of system has been installed</div>
          <div style="padding:30px;">${SpareSprinklersNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">percentage</div>
          <div style="padding:30px;">${SpareSprinklerspercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${SpareSprinklersComments}</div>


          <div style="padding:30px;background-color:#ADD8E6;">Conventional</div>
          <div style="padding:30px;">${ConventionalNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Perentage</div>
          <div style="padding:30px;">${ConventionalPercentage}</div>
          <div style="style="padding:30px;background-color:#ADD8E6;>Comments</div>
          <div style="padding:30px;">${ConventionalComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;>High - Medium - Low Risk</div>
          <div style="padding:30px;">${HighNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${HighPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments<div>
          <div style="padding:30px;">${HighComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Drencher System</div>
          <div style="padding:30px;">${DrencherSystemNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${DrencherPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">comments</div>
          <div style="padding:30px;">${DrencherComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">ESFR</div>
          <div style="padding:30px;">${ESFRNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${ESFRComments}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${ESFRPercentage}</div>


          <div style="padding:30px;background-color:#ADD8E6;">How many Valves installed</div>
          <div style="padding:30px;">${ValvesInstalledNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${ValvesInstalledComments}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
           <div style="padding:30px;background-color:#ADD8E6;">${ValvesInstalledPercentage}</div>

          <div style="padding:30px;background-color:#ADD8E6;">How many mains have been installed</div>
          <div style="padding:30px;">${MainInstalledNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${MainInstalledPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${MainInstalledComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">How many rangers have been installed</div>
          <div style="padding:30px;">${howManyRangersNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${howManyRangersPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${howManyRangersComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Infill line installed</div>
          <div style="padding:30px;">${infillLineNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${infillLinePercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${infillLineComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Roof Installation</div>
          <div style="padding:30px;">${RoofINstallationNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${roofInstallationPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${roofInstallationComments}</div>


          <div style="padding:30px;background-color:#ADD8E6;">Is there racking installation</div>
          <div style="padding:30px;">${ rackingInstallationNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${rackingPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${rackingComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Has all brackets been installed</div>
          <div style="padding:30px;">${bracketsNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;background-color:#ADD8E6;">${bracketPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${bracketComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Has all brackets been installed</div>
          <div style="padding:30px;">${beltsNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${beltsPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${beltsComments}</div>


          <div style="padding:30px;background-color:#ADD8E6;">NOTES</div>
          <div style="padding:30px;">${Notes}</div>
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
         'Fire sprinkler installation check list',
         'Form Sent'
      );


      //  RNSmtpMailer.sendMail({
      //     mailhost: "smtp.wiggletunes.co.za",
      //     port: "587",
      //     ssl: false, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      //     username: "transport@wiggletunes.co.za",
      //     password: "WigTr@123%_12",
      //     fromName:"coder@wiggledigital.co.za", // optional
      //     replyTo: "coder@wiggledigital.co.za", // optional
      //     recipients:`${this.state.selectedValue}`,
      //     subject: "Site Check List",
      //     htmlBody: `
      //     <div style="border:1px solid black;border-radius:30px;">

      //      <h1>FIRE SPRINKLER SYSTEM CHECK LIST</h1>

      //      <div style="padding:30px;background-color:#ADD8E6;">Site</div>
      //      <div style="padding:30px;">${site}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Inspection Date</div>
      //      <div style="padding:30px;"> ${inspectionDate}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Client Details</div>
      //      <div style="padding:30px;"> ${ClientDetailsYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Approved Sprinkler System Drawings</div>
      //      <div style="padding:30px;">${ApprovedICV}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">SANS-10287/ASIB</div>
      //      <div style="padding:30px;">${ASIB}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Scope of Work</div>
      //      <div style="padding:30px;">${ScopeOfWorked}</div>

      //      <h1>FIRE SPRINKLER SYSTEM CHECK LIST</h1>
      //      <div style="padding:30px;background-color:#ADD8E6;">What type of system has been installed</div>
      //      <div style="padding:30px;">${SpareSprinklersYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">percentage</div>
      //      <div style="padding:30px;">${SpareSprinklerspercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${SpareSprinklersComments}</div>


      //      <div style="padding:30px;background-color:#ADD8E6;">Conventional</div>
      //      <div style="padding:30px;">${ConventionalYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Perentage</div>
      //      <div style="padding:30px;">${ConventionalPercentage}</div>
      //      <div style="style="padding:30px;background-color:#ADD8E6;>Comments</div>
      //      <div style="padding:30px;">${ConventionalComments}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;>High - Medium - Low Risk</div>
      //      <div style="padding:30px;">${HighYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${HighPercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments<div>
      //      <div style="padding:30px;">${HighComments}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;">Drencher System</div>
      //      <div style="padding:30px;">${DrencherSystemYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${DrencherPercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">comments</div>
      //      <div style="padding:30px;">${DrencherComments}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;">ESFR</div>
      //      <div style="padding:30px;">${ESFRYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${ESFRComments}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${ESFRPercentage}</div>


      //      <div style="padding:30px;background-color:#ADD8E6;">How many Valves installed</div>
      //      <div style="padding:30px;">${ValvesInstalledYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${ValvesInstalledComments}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">${ValvesInstalledPercentage}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;">How many mains have been installed</div>
      //      <div style="padding:30px;">${MainsInstalledYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${MainInstalledPercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${MainInstalledComments}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;">How many rangers have been installed</div>
      //      <div style="padding:30px;">${howManyRangersYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${howManyRangersPercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${howManyRangersComments}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;">Infill line installed</div>
      //      <div style="padding:30px;">${infillLineYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${infillLinePercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${infillLineComments}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;">Roof Installation</div>
      //      <div style="padding:30px;">${RoofInstallationYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${roofInstallationPercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${roofInstallationComments}</div>


      //      <div style="padding:30px;background-color:#ADD8E6;">Is there racking installation</div>
      //      <div style="padding:30px;">${rackingInstallationYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${rackingPercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${rackingComments}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;">Has all brackets been installed</div>
      //      <div style="padding:30px;">${bracketsYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">${bracketPercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${bracketComments}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;">Has all brackets been installed</div>
      //      <div style="padding:30px;">${beltsYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${beltsPercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${beltsComments}</div>

      //      <div style="padding:30px;background-color:#ADD8E6;">Has all belts been installed</div>
      //      <div style="padding:30px;">${beltsYes}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${beltsPercentage}</div>
      //      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //      <div style="padding:30px;">${beltsComments}</div>


      //      <div style="padding:30px;background-color:#ADD8E6;">NOTES</div>
      //      <div style="padding:30px;">${Notes}</div>
      //      </div>



          
          
          
      //     `,
      //     attachmentPaths: [
      //       RNFS.DocumentDirectoryPath + '/test.jpg'
      //     ] 
      //   })
      //     .then(success => console.log(success))
      //     .catch(err => console.log(err));
          console.log('It was clicked')
    }

    render(){
       const {width,height}=Dimensions.get('window');
        return(
          <ScrollView  contentContainerStyle={styles.container}>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>FIRE SPRINKLER SYSTEM CHECKLIST</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   <View style={{marginVertical:5}}>
                      <Text>Site:</Text>
                      <TextInput 
                        value={this.state.site}
                        onChangeText={(e)=>this.setState({site:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                      <Text>Inspection Date:</Text>
                      <TextInput
                           value={this.state.inspectionDate}
                           onChangeText={(e)=>this.setState({inspectionDate:e})} 
                        style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                      <Text>Client Details:</Text>
                      <TextInput 
                             keyboardType="numeric"
                          value={this.state.ClientDetailsYes}
                          onChangeText={(e)=>this.setState({ClientDetailsYes:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                      <Text>Approved ICV Drawings:</Text>
                      <TextInput 
                           value={this.state.ApprovedICV}
                           onChangeText={(e)=>this.setState({ApprovedICV:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                      <Text>SANS-10287/ASIB:</Text>
                      <TextInput 
                          value={this.state.ASIB}
                          onChangeText={(e)=>this.setState({ ASIB:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                       />
                   </View>
                   <View style={{marginVertical:5}}>
                      <Text>Scope of work Approved:</Text>
                      <TextInput 
                           value={this.state.ScopeOfWorked}
                           onChangeText={(e)=>this.setState({ScopeOfWorked:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                       />
                   </View>
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>FIRE SPRINKLER SYSTEM CHECK LIST</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  <View style={{marginVertical:5}}>
                     <Text>What type of system has been installed</Text>
                    
                     
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>Conventional</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.ConventionalYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.ConventionalNo.flip();
  
                                    this.setState({ConventionalYes:val,
                                     ConventionalNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.ConventionalPercentage}
                             onChangeText={(val)=>this.setState({ConventionalPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ConventionalComments}
                             onChangeText={(val)=>this.setState({ConventionalComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                     
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>High - Medium - Low Risk</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.HighYes}
                                 onValueChange={(val) =>{
                                  const change= this.state.HighNo.flip();  
                                    this.setState({ HighYes:val,
                                    HighNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.HighPercentage}
                             onChangeText={val=>this.setState({ HighPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.HighComments}
                             onChangeText={(val)=>this.setState({HighComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>Drencher System</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.DrencherSystemYes}
                                onValueChange={(val) =>{
                                  const change= this.state.DrencherSystemNo.flip();   
                                   this.setState({ DrencherSystemYes:val,
                                   DrencherSystemNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.DrencherPercentage}
                             onChangeText={val=>this.setState({ DrencherPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.DrencherComments}
                             onChangeText={val=>this.setState({DrencherComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>ESFR</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.ESFRYes}
                                 onValueChange={(val) =>{
                                const change= this.state.ESFRNo.flip();      
                                    this.setState({
                                    ESFRYes:val,
                                    ESFRNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.ESFRPercentage}
                             onChangeText={(val)=>this.setState({ESFRPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ESFRComments}
                             onChangeText={val=>this.setState({ESFRComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>Valves installed</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.ValvesInstalledYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.ValvesInstalledNo.flip(); 
                                    this.setState({ValvesInstalledYes:val,
                                    ValvesInstalledNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.ValvesInstalledPercentage}
                             onChangeText={(val)=>this.setState({ ValvesInstalledPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ValvesInstalledComments}
                             onChangeText={val=>this.setState({ValvesInstalledComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                     
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>Mains have been installed</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.MainsInstalledYes}
                                 onValueChange={(val) =>{
                                      const change= this.state.MainInstalledNo.flip();
                                    this.setState({ MainsInstalledYes:val,
                                      MainInstalledNo:change
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
                        <View>
                           <View style={{marginVertical:5}}>
                              <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                              <TextInput 
                               value={this.state.MainInstalledPercentage}
                               onChangeText={(val)=>this.setState({ MainInstalledPercentage:val})}
                              style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                              />
                           </View>
                           <View style={{marginVertical:5}}>
                              <Text style={{fontWeight:'bold'}}>Comments</Text>
                              <TextInput 
                                value={this.state.MainInstalledComments}
                                onChangeText={val=>this.setState({MainInstalledComments:val})}
                              style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                              />
                           </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>                
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>Rangers have been installed</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.howManyRangersYes}
                                 onValueChange={(val) =>{
                                        const change= this.state.howManyRangersNo.flip();  
                                    this.setState({howManyRangersYes:val,
                                    howManyRangersNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.howManyRangersPercentage}
                             onChangeText={(val)=>this.setState({howManyRangersPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.howManyRangersComments}
                             onChangeText={(val)=>this.setState({ howManyRangersComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                    
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>infill line installed</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.infillLineYes}
                                onValueChange={(val) =>{
                                 const change= this.state.infillLineNo.flip();    
                                   this.setState({infillLineYes:val,
                                   infillLineNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.infillLinePercentage}
                             onChangeText={(val)=>this.setState({ infillLinePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.infillLineComments}
                             onChangeText={(val)=>this.setState({ infillLineComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                     
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>Roof installation</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.RoofInstallationYes}
                                onValueChange={(val) =>{
                                    const change= this.state.RoofINstallationNo.flip();     
                                   this.setState({RoofInstallationYes:val,
                                    RoofINstallationNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.roofInstallationPercentage}
                             onChangeText={(val)=>this.setState({roofInstallationPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.roofInstallationComments}
                             onChangeText={(val)=>this.setState({ roofInstallationComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                     
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>Is there racking installation</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.rackingInstallationYes}
                                 onValueChange={(val) =>{
                                  const change= this.state.rackingInstallationNo.flip();  
                                 this.setState({
                                 rackingInstallationYes:val,
                                 rackingInstallationNo:change
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
                             onChangeText={val=>this.setState({rackingComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                    
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>Has all brackets been installed</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.bracketsYes}
                                 onValueChange={(val) =>{
                                    
                                 const change= this.state.bracketsNo.flip();    
                                 this.setState({bracketsYes:val,
                                 bracketsNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.bracketPercentage}
                             onChangeText={(val)=>this.setState({bracketPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.bracketComments}
                             onChangeText={val=>this.setState({bracketComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                     
                  </View>
                  <View style={{marginVertical:5}}>
                     <Text>Has all belts been installed</Text>
                     <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.beltsYes}
                                 onValueChange={(val) =>{
                                     const change= this.state.beltsNo.flip();       
                                 this.setState({
                                    beltsYes:val,
                                 beltsNo:change
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
                        <View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>% Percentage</Text>
                           <TextInput 
                             value={this.state.beltsPercentage}
                             onChangeText={(val)=>this.setState({beltsPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.beltsComments}
                             onChangeText={(val)=>this.setState({beltsComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                     
                  </View>
               
                  <View style={{marginVertical:10}}>
                      <Text>Notes:</Text>
                        <TextInput
                          value={this.state.Notes}
                          onChangeText={(e)=>this.setState({Notes:e})}
                          placeholder="Notes"
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
                   <Button title="Send" color="#006bb4" onPress={()=>this.send()}/>
              </View>
          </ScrollView >
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

export default FireSprinklerInstallationChecking;