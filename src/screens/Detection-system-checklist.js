import React,{Component} from 'react';
import {View,Text,StyleSheet,Switch,TextInput,ScrollView,Button,Alert,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNSmtpMailer from "react-native-smtp-mailer";
import RNFS from 'react-native-fs';
import auth from '@react-native-firebase/auth';
import Mailer from 'react-native-mail';
import YesNoBool from './YesNoBool';
class DetectionSystemChecklist extends Component{
    constructor(){
        super();
        this.state={
           site:'',
           inspectionDate:new Date().toLocaleString(),
           ClientDetails:'',
           Approved:'',
           ApprovedPlanPercentage:'',
           ApprovedPlanComments:'',
           ASIB:'',
           Scope:'',
           ApprovedPlanYes:false,
           ApprovedPlanNo:new YesNoBool(false),
           alarmPanelComponentsYes:false,
           alarmPanelComponentsNo:new YesNoBool(false),
           alarmPanelComponentsPercentage:'',
           alarmPanelComponentsComments:'',
           panelLocationYes:false,
           panelLocationNo:new YesNoBool(false),
           panelLocationPercentage:'',
           panelLocationComments:'',
           zonesProperlyYes:false,
           zonesProperlyNo:new YesNoBool(false),
           zonesProperlyPercentage:'',
           zonesProperlyComments:'',
           fireAlarmYes:false,
           fireAlarmNo:new YesNoBool(false),
           fireAlarmPercentage:'',
           fireAlarmComments:'',
           powerlightYes:false,
           powerlightNo:new YesNoBool(false),
           powerlightPercentage:'',
           powerlightComment:'',
           fireAlarmAccesibilityYes:false,
           fireAlarmAccesibilityNo:new YesNoBool(false),
           fireAlarmAccesibilityPercentage:'',
           fireAlarmAccesibilityComments:'',
           powerLightOnYes:false,
           powerLightOnNo:new YesNoBool(false),
           powerLightPercentage:'',
           powerLightComment:'',
           fireAlarmAccessibiltyYes:false,
           fireAlarmAccessibiltyNo:new YesNoBool(false),
           fireAlarmAccessibiltyPercenatge:'',
           fireAlarmAccessibiltyComments:'',
           pointYes:false,
           pointNo:new YesNoBool(false),
           pointPercentage:'',
           pointComments:'',
           BeamYes:false,
           BeamNo:new YesNoBool(false),
           BeamPercentage:'',
           Beamcomment:'',
           VesdaYes:false,
           VesdaNo:new YesNoBool(false),
           VesdaPercentage:'',
           VesdaComment:'',
           GasYes:false,
           GasNo:new YesNoBool(false),
           GasPercentage:'',
           GasComment:'',
           gastypeYes:false,
           gastypeNo:new YesNoBool(false),
           gastypePercentage:'',
           gastypeComment:'',
           serverRoomYes:false,
           serverRoomNo:new YesNoBool(false),
           serverRoomPercentage:'',
           serverRoomComments:'',
           subStationsAccountedYes:false,
           subStationsAccountedNo:new YesNoBool(false),
           subStationsAccountedPercentage:'',
           subStationsAccountedComments:'',
           Notes:'',
           selectedValue:'Select email'
        }
    }

    send=async()=>{
      const {
         site,
         inspectionDate,
         ClientDetails,
         Approved,
         ApprovedPlanPercentage,
         ApprovedPlanComments,
         ASIB,
         Scope,
         ApprovedPlanYes,
         ApprovedPlanNo,
         alarmPanelComponentsYes,
         alarmPanelComponentsNo,
         alarmPanelComponentsPercentage,
         alarmPanelComponentsComments,
         panelLocationYes,
         panelLocationNo,
         panelLocationPercentage,
         panelLocationComments,
         zonesProperlyYes,
         zonesProperlyNo,
         zonesProperlyPercentage,
         zonesProperlyComments,
         fireAlarmYes,
         fireAlarmNo,
         fireAlarmPercentage,
         fireAlarmComments,
         powerlightYes,
         powerlightNo,
         powerlightPercentage,
         powerlightComment,
         fireAlarmAccesibilityYes,
         fireAlarmAccesibilityNo,
         fireAlarmAccesibilityPercentage,
         fireAlarmAccesibilityComments,
         powerLightOnYes,
         powerLightOnNo,
         powerLightPercentage,
         powerLightComment,
         fireAlarmAccessibiltyYes,
         fireAlarmAccessibiltyNo,
         fireAlarmAccessibiltyPercenatge,
         fireAlarmAccessibiltyComments,
         pointYes,
         pointNo,
         pointPercentage,
         pointComments,
         BeamYes,
         BeamNo,
         BeamPercentage,
         Beamcomment,
         VesdaYes,
         VesdaNo,
         VesdaPercentage,
         VesdaComment,
         GasYes,
         GasNo,
         GasPercentage,
         GasComment,
         gastypeYes,
         gastypeNo,
         gastypePercentage,
         gastypeComment,
         serverRoomYes,
         serverRoomNo,
         serverRoomPercentage,
         serverRoomComments,
         subStationsAccountedYes,
         subStationsAccountedNo,
         subStationsAccountedPercentage,
         subStationsAccountedComments,
         Notes,
         selectedValue


      }=this.state;



      // await firestore().collection('Detection System Checklist')
      // .add({
      //    site:site,
      //    inspectionDate:inspectionDate,
      //    ClientDetails:ClientDetails,
      //    Approved:Approved,
      //    ApprovedPlanPercentage:ApprovedPlanPercentage,
      //    ApprovedPlanComments:ApprovedPlanComments,
      //    ASIB:ASIB,
      //    Scope:Scope,
      //    ApprovedPlanYes:ApprovedPlanYes,
      //    alarmPanelComponentsYes:alarmPanelComponentsYes,
      //    alarmPanelComponentsPercentage:alarmPanelComponentsPercentage,
      //    alarmPanelComponentsComments:alarmPanelComponentsComments,
      //    panelLocationYes:panelLocationYes,
      //    panelLocationPercentage:panelLocationPercentage,
      //    panelLocationComments:panelLocationComments,
      //    zonesProperlyYes:zonesProperlyYes,
      //    zonesProperlyPercentage:zonesProperlyPercentage,
      //    zonesProperlyComments:zonesProperlyComments,
      //    fireAlarmYes:fireAlarmYes,
      //    fireAlarmPercentage:fireAlarmPercentage,
      //    fireAlarmComments:fireAlarmComments,
      //    powerlightYes:powerlightYes,
      //    powerlightPercentage:powerlightPercentage,
      //    powerlightComment:powerlightComment,
      //    fireAlarmAccesibilityYes:fireAlarmAccesibilityYes,
      //    fireAlarmAccesibilityPercentage:fireAlarmAccesibilityPercentage,
      //    fireAlarmAccesibilityComments:fireAlarmAccesibilityComments,
      //    powerLightOnYes:powerLightOnYes,
      //    powerLightPercentage:powerLightPercentage,
      //    powerLightComment:powerLightComment,
      //    fireAlarmAccessibiltyYes:fireAlarmAccessibiltyYes,
      //    fireAlarmAccessibiltyPercenatge:fireAlarmAccessibiltyPercenatge,
      //    fireAlarmAccessibiltyComments:fireAlarmAccessibiltyComments,
      //    pointYes:pointYes,
      //    pointPercentage:pointPercentage,
      //    pointComments:pointComments,
      //    BeamYes:BeamYes,
      //    BeamPercentage:BeamPercentage,
      //    Beamcomment:Beamcomment,
      //    VesdaYes:VesdaYes,
      //    VesdaPercentage:VesdaPercentage,
      //    VesdaComment:VesdaComment,
      //    GasYes: GasYes,
      //    GasPercentage:GasPercentage,
      //    GasComment:GasComment,
      //    gastypeYes:gastypeYes,
      //    gastypePercentage:gastypePercentage,
      //    gastypeComment:gastypeComment,
      //    serverRoomYes:serverRoomYes,
      //    serverRoomPercentage:serverRoomPercentage,
      //    serverRoomComments:serverRoomComments,
      //    subStationsAccountedYes:subStationsAccountedYes,
      //    subStationsAccountedPercentage:subStationsAccountedPercentage,
      //    subStationsAccountedComments:subStationsAccountedComments,
      //    Notes:Notes
      // })


  

   Mailer.mail({
      subject: 'Detection System Checklist',
      recipients: [`${selectedValue}`],
      ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
      body:`
          
      <h1>FIRE DETECTION SYSTEM CHECK LIST</h1>
      <div style="padding:30px;background-color:#ADD8E6;">Site</div>
      <div style="padding:30px;">${site}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Inspection Date:</div>
      <div style="padding:30px;">${inspectionDate}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Client Details:</div>
      <div style="padding:30px;">${ClientDetails}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Approved Detection System Drawings:</div>
      <div style="padding:30px;">${Approved}</div>
      <div style="padding:30px;background-color:#ADD8E6;">SANS-1039:</div>
      <div style="padding:30px;">${ASIB}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Scope of worked approved:</div>
      <div>${Scope}</div>

      <h1>fire Detection System Check list</h1>

      <div style="padding:30px;background-color:#ADD8E6;">Approved Plan/Drawings</div>
      <div style="padding:30px;">${Approved}<dv>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${ApprovedPlanPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${ApprovedPlanComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Fire Alarm panel and components match approved plans</div>
      <div style="padding:30px;">${ApprovedPlanNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${ApprovedPlanPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${ApprovedPlanComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Panel location same as plans and zone map</div>
      <div style="padding:30px;">${panelLocationNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${panelLocationPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${panelLocationComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Zones are properly identified on the panel</div>
      <div style="padding:30px;">${zonesProperlyNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${zonesProperlyPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${zonesProperlyComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Fire Alarm accessibility devises</div>
      <div style="padding:30px;">${fireAlarmNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${fireAlarmPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${fireAlarmComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Power light on and in no.valuermal condition</div>
      <div style="padding:30px;">${powerlightNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${powerlightPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${powerlightComment}</div>
      

      <div style="padding:30px;background-color:#ADD8E6;">Back-up Power supply installed</div>
      <div style="padding:30px;">${fireAlarmAccesibilityNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${fireAlarmAccessibiltyPercenatge}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${fireAlarmAccessibiltyComments}</div>


      <div style="padding:30px;background-color:#ADD8E6;">Point</div>
      <div style="padding:30px;">${pointNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${pointPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${pointComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Beam</div>
      <div style="padding:30px;">${BeamNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${BeamPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${Beamcomment}</div>

      <div style="padding:30px;background-color:#ADD8E6;">VESDA</div>
      <div style="padding:30px;">${VesdaNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${VesdaPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${VesdaComment}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Gas</div>
      <div style="padding:30px;">${GasNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${GasPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      <div style="padding:30px;">${GasComment}</div>

      <div style="padding:30px;background-color:#ADD8E6;">What type of gas has been installed</div>
      <div style="padding:30px;">${ gastypeNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${gastypePercentage}</div>
      <div style="padding:30px;">Comments:</div>
      <div style="padding:30px;background-color:#ADD8E6;">${gastypeComment}

      <h1>Operational</h1>
      <h4>Is all server rooms accounted for</h4>:${serverRoomNo.value}
      <h4>Percentage:</h4>${serverRoomPercentage}
      <h4>Comments:</h4>${serverRoomComments}

      <h4>Approved Plan/Drawings</h4>:${subStationsAccountedNo.value}
      <h4>Percentage:</h4>${subStationsAccountedPercentage}
      <h4>Comments:</h4>${subStationsAccountedComments}

      <h1>Notes</h1>:${Notes}
      
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
      'This is the form',
      'The form is sent'
   )

   // const user = auth().currentUser;
      //   RNSmtpMailer.sendMail({
      //     mailhost: "smtp.wiggletunes.co.za",
      //     port: "587",
      //     ssl: false, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      //     username: "transport@wiggletunes.co.za",
      //     password: "WigTr@123%_12",
      //     fromName:"coder@wiggledigital.co.za", // optional
      //     replyTo: "coder@wiggledigital.co.za", // optional
      //     recipients: `${this.state.selectedValue}`,
      //     subject: "Site Check List",
      //     htmlBody:`
          
      //     <h1>FIRE DETECTION SYSTEM CHECK LIST</h1>
      //     <div style="padding:30px;background-color:#ADD8E6;">Site</div>
      //     <div style="padding:30px;">${site}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Inspection Date:</div>
      //     <div style="padding:30px;">${inspectionDate}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Client Details:</div>
      //     <div style="padding:30px;">${ClientDetails}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Approved Detection System Drawings:</div>
      //     <div style="padding:30px;">${Approved}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">SANS-1039:</div>
      //     <div style="padding:30px;">${ASIB}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Scope of worked approved:</div>
      //     <div>${Scope}</div>

      //     <h1>fire Detection System Check list</h1>

      //     <div style="padding:30px;background-color:#ADD8E6;">Approved Plan/Drawings</div>
      //     <div style="padding:30px;">${Approved}<dv>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${ApprovedPlanPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${ApprovedPlanComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Fire Alarm panel and components match approved plans</div>
      //     <div style="padding:30px;">${ApprovedPlanYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${ApprovedPlanPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${ApprovedPlanComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Panel location same as plans and zone map</div>
      //     <div style="padding:30px;">${panelLocationYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${panelLocationPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${panelLocationComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Zones are properly identified on the panel</div>
      //     <div style="padding:30px;">${zonesProperlyYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${zonesProperlyPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${zonesProperlyComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Fire Alarm accessibility devises</div>
      //     <div style="padding:30px;">${fireAlarmYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${fireAlarmPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${fireAlarmComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Power light on and in normal condition</div>
      //     <div style="padding:30px;">${powerlightYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${powerlightPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${powerlightComment}</div>
          

      //     <div style="padding:30px;background-color:#ADD8E6;">Back-up Power supply installed</div>
      //     <div style="padding:30px;">${fireAlarmAccessibiltyYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${fireAlarmAccessibiltyPercenatge}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${fireAlarmAccessibiltyComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Cabling Correct installed</div>
      //     <div style="padding:30px;">${fireAlarmAccessibiltyComments}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${fireAlarmAccessibiltyComments}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${fireAlarmAccessibiltyComments}</div> 
        

      //     <div style="padding:30px;background-color:#ADD8E6;">What type of system has been installed</div>
      //     <div style="padding:30px;">${fireAlarmAccessibiltyComments}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${fireAlarmAccessibiltyComments}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${fireAlarmAccessibiltyComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Point</div>
      //     <div style="padding:30px;">${pointYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${pointPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${pointComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Beam</div>
      //     <div style="padding:30px;">${BeamYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${BeamPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${Beamcomment}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">VESDA</div>
      //     <div style="padding:30px;">${VesdaYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${VesdaPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${VesdaComment}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Gas</div>
      //     <div style="padding:30px;">${ GasYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${GasPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments:</div>
      //     <div style="padding:30px;">${GasComment}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">What type of gas has been installed</div>
      //     <div style="padding:30px;">${gastypeYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //     <div style="padding:30px;">${gastypePercentage}</div>
      //     <div style="padding:30px;">Comments:</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">${gastypeComment}

      //     <h1>Operational</h1>
      //     <h4>Is all server rooms accounted for</h4>:${serverRoomYes}
      //     <h4>Percentage:</h4>${serverRoomPercentage}
      //     <h4>Comments:</h4>${serverRoomComments}

      //     <h4>Approved Plan/Drawings</h4>:${subStationsAccountedYes}
      //     <h4>Percentage:</h4>${subStationsAccountedPercentage}
      //     <h4>Comments:</h4>${subStationsAccountedComments}

      //     <h1>Notes</h1>:${Notes}
          
      //     `,
      //     attachmentPaths: [
      //       RNFS.DocumentDirectoryPath + '/test.jpg'
      //     ]  // required in android, these are renames of original files. in ios filenames will be same as specified in path. In a ios-only application, no need to define it
      //   })
      //     .then(success => console.log(success))
      //     .catch(err => console.log(err));
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
                    <Text>inspection Date:</Text>
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
                         value={this.state.ClientDetails}
                         onChangeText={(e)=>this.setState({ClientDetails:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>Approved Detection System Drawings:</Text>
                    <TextInput 
                        value={this.state.Approved}
                        onChangeText={(e)=>this.setState({Approved:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>SANS-1039:</Text>
                    <TextInput 
                        value={this.state.ASIB}
                        onChangeText={(e)=>this.setState({ASIB:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
                  <View style={{marginVertical:5}}>
                    <Text>Scope of work Approved:</Text>
                    <TextInput 
                         value={this.state.Scope}
                         onChangeText={(e)=>this.setState({Scope:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                        />
                  </View>
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>FIRE DETECTION SYSTEM CHECK LIST</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1,marginHorizontal:10}}/>

              <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>Approved Plan / Drawings</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.ApprovedPlanYes}
                                  onValueChange={(val) =>{
                                     const change= this.state.ApprovedPlanNo.flip(); 
                                     this.setState({
                                       ApprovedPlanYes:val,
                                     ApprovedPlanNo:change
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
                             value={this.state.ApprovedPanPercentage}
                             onChangeText={val=>this.setState({ApprovedPlanPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ApprovedPlanComments}
                             onChangeText={(val)=>this.setState({ApprovedPlanComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View>
                        <Text>Fire Alarm panel and </Text>
                        <Text>components match </Text>
                        <Text>approved plans</Text>
                      </View>
                  
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.alarmPanelComponentsYes}
                                 onValueChange={(val) =>{
                                 const change= this.state.alarmPanelComponentsNo.flip();  
                                 this.setState({alarmPanelComponentsYes:val,
                                   alarmPanelComponentsNo:change
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
                             value={this.state.alarmPanelComponentsPercentage}
                             onChangeText={(val)=>this.setState({alarmPanelComponentsPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.alarmPanelComponentsComments}
                             onChangeText={(val)=>this.setState({ alarmPanelComponentsComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View>
                        <Text>Panel location same as</Text>
                        <Text>plans and zone map</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                     value={this.state.panelLocationYes}
                                     onValueChange={(val) =>{
                                      const change= this.state.panelLocationNo.flip();    
                                        this.setState({panelLocationYes:val,
                                         panelLocationNo:change
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
                             value={this.state.panelLocationPercentage}
                             onChangeText={(val)=>this.setState({panelLocationPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.panelLocationComments}
                             onChangeText={(val)=>this.setState({ panelLocationComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View>
                            <Text>Zones are properly</Text>
                            <Text>identified on the panel</Text>
                      </View>
                   
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                    value={this.state.zonesProperlyYes}
                                    onValueChange={(val) =>{
                                     const change= this.state.zonesProperlyNo.flip();    
                                    this.setState({ 
                                       zonesProperlyYes:val,
                                     zonesProperlyNo:change
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
                             value={this.state.zonesProperlyPercentage}
                             onChangeText={(val)=>this.setState({zonesProperlyPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.zonesProperlyComments}
                             onChangeText={(val)=>this.setState({zonesProperlyComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View>
                            <Text>Fire Alarm accessibilty</Text>
                            <Text> devices (strobes) are proper </Text>
                            <Text>height and location</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.fireAlarmYes}
                                   onValueChange={(val) =>{
                                      const change= this.state.fireAlarmNo.flip();  
                                    this.setState({ 
                                    fireAlarmYes:val,
                                    fireAlarmNo:change
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
                             value={this.state.fireAlarmPercentage}
                             onChangeText={(val)=>this.setState({fireAlarmPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.fireAlarmComments}
                             onChangeText={(val)=>this.setState({ fireAlarmComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     <View>
                     <Text>Power light on and </Text>
                     <Text>in normal condition</Text>
                     </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.powerlightYes}
                                  onValueChange={(val) =>{
                                     const change= this.state.powerlightNo.flip();   
                                    this.setState({ powerlightYes:val,
                                    powerlightNo:change
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
                             value={this.state.powerlightPercentage}
                             onChangeText={(val)=>this.setState({powerlightPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.powerlightComment}
                             onChangeText={(val)=>this.setState({powerlightComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View> 
                      <Text>Back-up Power supply installed</Text>
                     
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.fireAlarmAccesibilityYes}
                                   onValueChange={(val) =>{
                                     const change= this.state.fireAlarmAccesibilityNo.flip();    
                                    this.setState({ 
                                    fireAlarmAccesibilityYes:val,
                                    fireAlarmAccesibilityNo:change
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
                             value={this.state.fireAlarmAccesibilityPercentage}
                             onChangeText={(val)=>this.setState({fireAlarmAccesibilityPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.fireAlarmAccesibilityComments}
                             onChangeText={(val)=>this.setState({fireAlarmAccesibilityComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text>Cabling Correctly installed</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.powerLightOnYes}
                                  onValueChange={(val) =>{
                                      const change= this.state.powerLightOnNo.flip();   
                                    this.setState({
                                    powerLightOnYes:val,
                                    powerLightOnNo:change
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
                             value={this.state.powerLightPercentage}
                             onChangeText={(val)=>this.setState({powerLightPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.powerLightComment}
                             onChangeText={(val)=>this.setState({powerLightComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View> 
                      <Text>What type of</Text>
                      <Text>system has been installed</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.fireAlarmAccessibiltyYes}
                                  onValueChange={(val) =>{
                                 const change= this.state.fireAlarmAccessibiltyNo.flip();    
                                 this.setState({fireAlarmAccessibiltyYes:val,
                                  fireAlarmAccessibiltyNo:change
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
                             value={this.state.fireAlarmAccessibiltyPercenatge}
                             onChangeText={(val)=>this.setState({  fireAlarmAccessibiltyPercenatge:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.fireAlarmAccessibiltyComments}
                             onChangeText={(val)=>this.setState({ fireAlarmAccessibiltyComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View> 
                      <Text>Point</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                      value={this.state.pointYes}
                                      onValueChange={(val) =>{
                                       const change= this.state.pointNo.flip();     
                                       this.setState({pointYes:val,
                                       pointNo:change
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
                             value={this.state.pointPercentage}
                             onChangeText={(val)=>this.setState({  pointPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.pointComments}
                             onChangeText={(val)=>this.setState({pointComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View> 
                      <Text>Beam</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                      value={this.state.BeamYes}
                                      onValueChange={(val) =>{
                                       const change= this.state.BeamNo.flip();      
                                       this.setState({
                                       BeamYes:val,
                                       BeamNo:change
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
                             value={this.state.BeamPercentage}
                             onChangeText={(val)=>this.setState({BeamPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.Beamcomment}
                             onChangeText={(val)=>this.setState({ Beamcomment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View> 
                      <Text>VESDA</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                      value={this.state.VesdaYes}
                                      onValueChange={(val) =>{
                                       const change= this.state.VesdaNo.flip();      
                                       this.setState({ VesdaYes:val,
                                       VesdaNo:change
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
                             value={this.state.VesdaPercentage}
                             onChangeText={(val)=>this.setState({VesdaPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.VesdaComment}
                             onChangeText={(val)=>this.setState({ VesdaComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View> 
                      <Text>Gas</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                      value={this.state.GasYes}
                                      onValueChange={(val) =>{
                                       const change= this.state.GasNo.flip();  
                                       this.setState({ 
                                       GasYes:val,
                                       GasNo:change
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
                             value={this.state.GasPercentage}
                             onChangeText={(val)=>this.setState({GasPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.GasComment}
                             onChangeText={(val)=>this.setState({GasComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View> 
                      <Text>What type of gas has been installed</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                      value={this.state.gastypeYes}
                                      onValueChange={(val) =>{
                                         const change= this.state.gastypeNo.flip();  
                                       this.setState({  gastypeYes:val,
                                       gastypeNo:change
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
                             value={this.state.gastypePercentage}
                             onChangeText={(val)=>this.setState({gastypePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.gastypeComment}
                             onChangeText={(val)=>this.setState({gastypeComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                       <Text style={{fontWeight:'bold',fontSize:18}}>Operations</Text>
                       <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>

                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View> 
                      <Text>Is all server rooms accounted for</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                      value={this.state.serverRoomYes}
                                      onValueChange={(val) =>{
                                      const change= this.state.serverRoomNo.flip();     
                                    this.setState({
                                     serverRoomYes:val,
                                    serverRoomNo:change
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
                             value={this.state.serverRoomPercentage}
                             onChangeText={(val)=>this.setState({serverRoomPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.serverRoomComments}
                             onChangeText={(val)=>this.setState({serverRoomComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View> 
                      <Text>Is all sub stations accounted for</Text>
                      </View>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                      value={this.state.subStationsAccountedYes}
                                      onValueChange={(val) =>{
                                         const change= this.state.subStationsAccountedNo.flip();  
                                       this.setState({ subStationsAccountedYes:val,
                                        subStationsAccountedNo:change
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
                             value={this.state.subStationsAccountedPercentage}
                             onChangeText={(val)=>this.setState({subStationsAccountedPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.subStationsAccountedComments}
                             onChangeText={(val)=>this.setState({subStationsAccountedComments:val})}
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
                   <Button title="Send Form" color="#006bb4" onPress={()=>this.send()}/>
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

export default DetectionSystemChecklist;