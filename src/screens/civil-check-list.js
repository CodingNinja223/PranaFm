import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Switch,ScrollView,Button,Alert,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import RNSmtpMailer from "react-native-smtp-mailer";
import auth from '@react-native-firebase/auth';
import Mailer from 'react-native-mail';
import YesNoBool from './YesNoBool';
class CivilCheckList extends Component{
    constructor(){
        super();
        this.state={
            Site:'',
            InspectionDate:new Date().toLocaleString(),
            ClientDetails:'',
            ApprovedCivilDrawings:'',
            ASIB:'',
            ScopeOfWorkApproved:'',
            ApprovedfireSprinklerSystemYes:false,
            ApprovedfireSprinklerSystemNo:new YesNoBool(false),
            ApprovedfireSprinklerSystemPercentage:'',
            ApprovedfireSprinklerSystemComment:'',
            windowfireSprinklerSystemYes:false,
            windowfireSprinklerSystemNo:new YesNoBool(false),
            windowfireSprinklerSystemPercentage:'',
            windowfireSprinklerSystemComments:'',
            correctfireSprinklerSystemYes:false,
            correctfireSprinklerSystemNo:new YesNoBool(false),
            correctfireSprinklerSystemPercentage:'',
            correctfireSprinklerSystemComments:'',
            fluoresentFireSprinklerYes:false,
            fluoresentFireSprinklerNo:new YesNoBool(false),
            fluoresentFireSprinklerPercentage:'',
            fluoresentFireSprinklerComments:'',
            PumphouseFireSprinklerYes:false,
            PumphouseFireSprinklerNo:new YesNoBool(false),
            PumphouseFireSprinklerPercentage:'',
            PumphouseFireSprinklerComments:'',
            SignageFireSprinklerYes:false,
            SignageFireSprinklerNo:new YesNoBool(false),
            SignageFireSprinklerPercentage:'',
            SignageFireSprinklerComments:'',
            ApprovedPumpFireSprinklerYes:false,
            ApprovedPumpFireSprinklerNo:new YesNoBool(false),
            ApprovedPumpFireSprinklerPercentage:'',
            ApprovedPumpFireSprinklerComments:'',
            DCPFireSprinklerYes:false,
            DCPFireSprinklerNo:new YesNoBool(false),
            DCPComments:'',
            DCPPercentage:'',
            EngineerFireSprinklerYes:false,
            EngineerFireSprinklerNo:new YesNoBool(false),
            EngineerFireSprinklerPercentage:'',
            EngineerFireSprinklerComments:'',
            ApprovedICVYes:false,
            ApprovedICVNo:new YesNoBool(false),
            ApprovedICVPercentage:'',
            ApprovedICVComments:'',
            correctFireYes:false,
            correctFireNo:new YesNoBool(false),
            correctFirePercentage:'',
            correctFireComments:'',
            ICVChamberYes:false,
            ICVChamberNo:new YesNoBool(false),
            ICVChamberPercentage:'',
            ICVChamberComments:'',
            SprinklerSystemSpecify:'',
            fireDetectionSpecify:'',
            Notes:'',
            selectedValue:'Select email'

        }
    }

    send=async()=>{
   const {
    Site,
    InspectionDate,
    ClientDetails,
    ApprovedCivilDrawings,
    ASIB,
    ScopeOfWorkApproved,
    ApprovedfireSprinklerSystemYes,
    ApprovedfireSprinklerSystemNo,
    ApprovedfireSprinklerSystemPercentage,
    ApprovedfireSprinklerSystemComment,
    windowfireSprinklerSystemYes,
    windowfireSprinklerSystemNo,
    windowfireSprinklerSystemPercentage,
    windowfireSprinklerSystemComments,
    correctfireSprinklerSystemYes,
    correctfireSprinklerSystemNo,
    correctfireSprinklerSystemPercentage,
    correctfireSprinklerSystemComments,
    fluoresentFireSprinklerYes,
    fluoresentFireSprinklerNo,
    fluoresentFireSprinklerPercentage,
    fluoresentFireSprinklerComments,
    PumphouseFireSprinklerYes,
    PumphouseFireSprinklerNo,
    PumphouseFireSprinklerPercentage,
    PumphouseFireSprinklerComments,
    SignageFireSprinklerYes,
    SignageFireSprinklerNo,
    SignageFireSprinklerPercentage,
    SignageFireSprinklerComments,
    ApprovedPumpFireSprinklerYes,
    ApprovedPumpFireSprinklerNo,
    ApprovedPumpFireSprinklerPercentage,
    ApprovedPumpFireSprinklerComments,
    DCPFireSprinklerYes,
    DCPFireSprinklerNo,
    DCPComments,
    DCPPercentage,
    EngineerFireSprinklerYes,
    EngineerFireSprinklerNo,
    EngineerFireSprinklerPercentage,
    EngineerFireSprinklerComments,
    ApprovedICVYes,
    ApprovedICVNo,
    ApprovedICVPercentage,
    ApprovedICVComments,
    correctFireYes,
    correctFireNo,
    correctFirePercentage,
    correctFireComments,
    ICVChamberYes,
    ICVChamberNo,
    ICVChamberPercentage,
    ICVChamberComments,
    SprinklerSystemSpecify,
    fireDetectionSpecify,
    Notes,
    selectedValue
   }=this.state;
        // await firestore().collection('Civil Check List')
        // .add({
        //     Site:Site,
        //     InspectionDate:InspectionDate,
        //     ClientDetails:ClientDetails,
        //     ApprovedCivilDrawings:ApprovedCivilDrawings,
        //     ASIB:ASIB,
        //     ScopeOfWorkApproved:ScopeOfWorkApproved,
        //     ApprovedfireSprinklerSystemYes:ApprovedPumpFireSprinklerYes,
        //     ApprovedfireSprinklerSystemPercentage:ApprovedfireSprinklerSystemPercentage,
        //     ApprovedfireSprinklerSystemComment:ApprovedfireSprinklerSystemComment,
        //     windowfireSprinklerSystemYes: windowfireSprinklerSystemYes,
        //     windowfireSprinklerSystemPercentage:windowfireSprinklerSystemPercentage,
        //     windowfireSprinklerSystemComments:windowfireSprinklerSystemComments,
        //     correctfireSprinklerSystemYes:correctfireSprinklerSystemYes,
        //     correctfireSprinklerSystemPercentage:correctfireSprinklerSystemPercentage,
        //     correctfireSprinklerSystemComments:correctfireSprinklerSystemComments,
        //     fluoresentFireSprinklerYes:fluoresentFireSprinklerYes,
        //     fluoresentFireSprinklerPercentage:fluoresentFireSprinklerPercentage,
        //     fluoresentFireSprinklerComments:fluoresentFireSprinklerComments,
        //     PumphouseFireSprinklerYes:PumphouseFireSprinklerYes,
        //     PumphouseFireSprinklerPercentage:PumphouseFireSprinklerPercentage,
        //     PumphouseFireSprinklerComments: PumphouseFireSprinklerComments,
        //     SignageFireSprinklerYes: SignageFireSprinklerYes,
        //     SignageFireSprinklerPercentage: SignageFireSprinklerPercentage,
        //     SignageFireSprinklerComments:SignageFireSprinklerComments,
        //     ApprovedPumpFireSprinklerYes: ApprovedPumpFireSprinklerYes,
        //     ApprovedPumpFireSprinklerPercentage: ApprovedPumpFireSprinklerPercentage,
        //     ApprovedPumpFireSprinklerComments:ApprovedPumpFireSprinklerComments,
        //     DCPFireSprinklerYes:DCPFireSprinklerYes,
        //     DCPComments:  DCPComments,
        //     DCPPercentage:DCPPercentage,
        //     EngineerFireSprinklerYes:EngineerFireSprinklerYes,
        //     EngineerFireSprinklerPercentage:EngineerFireSprinklerPercentage,
        //     EngineerFireSprinklerComments:EngineerFireSprinklerComments,
        //     ApprovedICVYes:ApprovedICVYes,
        //     ApprovedICVPercentage:ApprovedICVPercentage,
        //     ApprovedICVComments:ApprovedICVComments,
        //     correctFireYes:correctFireYes,
        //     correctFirePercentage:correctFirePercentage,
        //     correctFireComments:correctFireComments,
        //     ICVChamberYes:ICVChamberYes,
        //     ICVChamberPercentage:ICVChamberPercentage,
        //     ICVChamberComments:ICVChamberComments,
        //     SprinklerSystemSpecify:SprinklerSystemSpecify,
        //     fireDetectionSpecify:fireDetectionSpecify,
        //     Notes:Notes
        // })

      
        // const user = auth().currentUser;
        Mailer.mail({
          subject: 'Civil Check List',
          recipients: [`${selectedValue}`],
          ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
          body: `
          
          <div style="border:1px solid black;border-radius:30px;">

          <h1>CIVIL CHECK LIST</h1>


          <div style="padding:30px;background-color:#ADD8E6;">Site</div>
          <div style="padding:30px;">${Site}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Inspection Date</div>
          <div style="padding:30px;">${InspectionDate}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Client Details</div>
          <div style="padding:30px;">${ClientDetails}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Approved Civil Details</div>
          <div style="padding:30px;">${ApprovedCivilDrawings}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Building Code-0400 / ASIB</div>
          <div style="padding:30px;">${ASIB}</div>
          <div style="padding:30px;">Scope of work Approved</div>
          <div style="padding:30px;">${ScopeOfWorkApproved}</div>


          <h1>Pump Room Civil</h1>


          <div style="padding:30px;background-color:#ADD8E6;">Approved Pump House Building drawings</div>:
          <div style="padding:30px;">${ApprovedfireSprinklerSystemNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;background-color:#ADD8E6;">${ApprovedfireSprinklerSystemPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${ApprovedfireSprinklerSystemComment}</div>

           <div style="padding:30px;background-color:#ADD8E6;">Is there a window installed</div>
           <div style="padding:30px;">${ windowfireSprinklerSystemNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${windowfireSprinklerSystemPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${windowfireSprinklerSystemComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Is there correct fire door installed</div>
          <div style="padding:30px;">${correctfireSprinklerSystemNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
           <div style="padding:30px;">${correctfireSprinklerSystemPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${correctfireSprinklerSystemComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Are there florescent lights installed</div>
          <div style="padding:30px;">${fluoresentFireSprinklerNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${fluoresentFireSprinklerPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${fluoresentFireSprinklerComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Signage notice - Key for pump house location installed</div>
          <div style="padding:30px;">${SignageFireSprinklerNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${SignageFireSprinklerPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${SignageFireSprinklerComments}</div>


          <h1>Tank Civils</h1>
          
          <div style="padding:30px;background-color:#ADD8E6;">Approved Tank Foundation Drawings</div>
          <div style="padding:30px;">${ApprovedPumpFireSprinklerNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;background-color:#ADD8E6;">${ApprovedPumpFireSprinklerPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
         <div style="padding:30px;">${ApprovedPumpFireSprinklerComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">DCP Testing complete on foundation / ground</div>
          <div style="padding:30px;">${DCPFireSprinklerNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${DCPPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${ DCPComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Engineer Sign Off</div>
          <div style="padding:30px;">${EngineerFireSprinklerNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div div style="padding:30px;">${EngineerFireSprinklerPercentage}</div>
          <div div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div div style="padding:30px;">${EngineerFireSprinklerComments}</div>

          <h1>ICV Chamber Civils</h1>
          <div div style="padding:30px;background-color:#ADD8E6;">Approved ICV Champer drawings</div>
          <div div style="padding:30px;">${ApprovedICVNo.value}</div>
          <div div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div div style="padding:30px;">${ApprovedICVPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${ApprovedICVComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Correct Fire Door installed</div>
          <div style="padding:30px;">${correctFireNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px;">${correctFirePercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${correctFireComments}</div>

          <div style="padding:30px;background-color:#ADD8E6;">ICV Chamber sprinkler protected</div>
          <div style="padding:30px;">${ICVChamberNo.value}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
          <div style="padding:30px">${ICVChamberPercentage}</div>
          <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
          <div style="padding:30px;">${ICVChamberComments}</div>

          <h1>Sprinkler System Civil</h1>
          <div style="padding:30px;background-color:#ADD8E6;">Specify</div>
          <div style="padding:30px;">${SprinklerSystemSpecify}</div>
          
          <h1>Fire Detection System Civils</h1>
          <div style="padding:30px;background-color:#ADD8E6;">Specify<div>
          <div style="padding:30px;">${fireDetectionSpecify}</div>

          <div style="padding:30px;background-color:#ADD8E6;">Notes</div>
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
          'Civil Check List',
          'The form is sent'
      );
        
        // RNSmtpMailer.sendMail({
        //   mailhost: "smtp.wiggletunes.co.za",
        //   port: "587",
        //   ssl: false, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
        //   username: "transport@wiggletunes.co.za",
        //   password: "WigTr@123%_12",
        //   fromName:"coder@wiggledigital.co.za", // optional
        //   replyTo: "coder@wiggledigital.co.za", // optional
        //   recipients: `${selectedValue}`,
        //   subject: "Site Check List",
        //   htmlBody: `
          
        //   <div style="border:1px solid black;border-radius:30px;">

        //   <h1>CIVIL CHECK LIST</h1>


        //   <div style="padding:30px;background-color:#ADD8E6;">Site</div>
        //   <div style="padding:30px;">${Site}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Inspection Date</div>
        //   <div style="padding:30px;">${InspectionDate}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Client Details</div>
        //   <div style="padding:30px;">${ClientDetails}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Approved Civil Details</div>
        //   <div style="padding:30px;">${ApprovedCivilDrawings}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Building Code-0400 / ASIB</div>
        //   <div style="padding:30px;">${ASIB}</div>
        //   <div style="padding:30px;">Scope of work Approved</div>
        //   <div style="padding:30px;">${ScopeOfWorkApproved}</div>


        //   <h1>Pump Room Civil</h1>


        //   <div style="padding:30px;background-color:#ADD8E6;">Approved Pump House Building drawings</div>:
        //   <div style="padding:30px;">${ApprovedPumpFireSprinklerYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">${ApprovedfireSprinklerSystemPercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div style="padding:30px;">${ApprovedfireSprinklerSystemComment}</div>

        //    <div style="padding:30px;background-color:#ADD8E6;">Is there a window installed</div>
        //    <div style="padding:30px;">${ windowfireSprinklerSystemYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div style="padding:30px;">${windowfireSprinklerSystemPercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div style="padding:30px;">${windowfireSprinklerSystemComments}</div>

        //   <div style="padding:30px;background-color:#ADD8E6;">Is there correct fire door installed</div>
        //   <div style="padding:30px;">${correctfireSprinklerSystemYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //    <div style="padding:30px;">${correctfireSprinklerSystemPercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div style="padding:30px;">${correctfireSprinklerSystemComments}</div>

        //   <div style="padding:30px;background-color:#ADD8E6;">Are there florescent lights installed</div>
        //   <div style="padding:30px;">${fluoresentFireSprinklerYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div style="padding:30px;">${fluoresentFireSprinklerPercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div style="padding:30px;">${fluoresentFireSprinklerComments}</div>

        //   <div style="padding:30px;background-color:#ADD8E6;">Signage notice - Key for pump house location installed</div>
        //   <div style="padding:30px;">${SignageFireSprinklerYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div style="padding:30px;">${SignageFireSprinklerPercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div style="padding:30px;">${SignageFireSprinklerComments}</div>


        //   <h1>Tank Civils</h1>
          
        //   <div style="padding:30px;background-color:#ADD8E6;">Approved Tank Foundation Drawings</div>
        //   <div style="padding:30px;">${ApprovedPumpFireSprinklerYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">${ApprovedPumpFireSprinklerPercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //  <div style="padding:30px;">${ApprovedPumpFireSprinklerComments}</div>

        //   <div style="padding:30px;background-color:#ADD8E6;">DCP Testing complete on foundation / ground</div>
        //   <div style="padding:30px;">${DCPFireSprinklerYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div style="padding:30px;">${DCPPercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div style="padding:30px;">${ DCPComments}</div>

        //   <div style="padding:30px;background-color:#ADD8E6;">Engineer Sign Off</div>
        //   <div style="padding:30px;">${EngineerFireSprinklerYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div div style="padding:30px;">${EngineerFireSprinklerPercentage}</div>
        //   <div div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div div style="padding:30px;">${EngineerFireSprinklerComments}</div>

        //   <h1>ICV Chamber Civils</h1>
        //   <div div style="padding:30px;background-color:#ADD8E6;">Approved ICV Champer drawings</div>
        //   <div div style="padding:30px;">${ApprovedICVYes}</div>
        //   <div div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div div style="padding:30px;">${ApprovedICVPercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div style="padding:30px;">${ApprovedICVComments}</div>

        //   <div style="padding:30px;background-color:#ADD8E6;">Correct Fire Door installed</div>
        //   <div style="padding:30px;">${correctFireYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div style="padding:30px;">${correctFirePercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div style="padding:30px;">${correctFireComments}</div>

        //   <div style="padding:30px;background-color:#ADD8E6;">ICV Chamber sprinkler protected</div>
        //   <div style="padding:30px;">${ICVChamberYes}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
        //   <div style="padding:30px">${ICVChamberPercentage}</div>
        //   <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
        //   <div style="padding:30px;">${ICVChamberComments}</div>

        //   <h1>Sprinkler System Civil</h1>
        //   <div style="padding:30px;background-color:#ADD8E6;">Specify</div>
        //   <div style="padding:30px;">${SprinklerSystemSpecify}</div>
          
        //   <h1>Fire Detection System Civils</h1>
        //   <div style="padding:30px;background-color:#ADD8E6;">Specify<div>
        //   <div style="padding:30px;">${fireDetectionSpecify}</div>

        //   <div style="padding:30px;background-color:#ADD8E6;">Notes</div>
        //   <div style="padding:30px;">${Notes}</div>
        // </div>
          
        //   `,
        //   attachmentPaths: [
        //     RNFS.DocumentDirectoryPath + '/test.jpg'
        //   ] 
        //  })
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
                 <Text style={{fontWeight:'bold',fontSize:15}}>CIVIL CHECK LIST</Text>
                 <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  <View style={{marginVertical:5}}>
                      <Text>Site:</Text>
                      <TextInput 
                         value={this.state.Site}
                         onChangeText={(newVal)=>this.setState({Site:newVal})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Inspection Date:</Text>
                      <TextInput 
                        value={this.state.InspectionDate}
                        onChangeText={(val)=>this.setState({InspectionDate:val})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Client Details:</Text>
                      <TextInput
                         keyboardType="numeric" 
                        value={this.state.ClientDetails}
                        onChangeText={(newVal)=>this.setState({ClientDetails:newVal})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Approved Civil Drawings:</Text>
                      <TextInput 
                         value={this.state.ApprovedCivilDrawings}
                         onChangeText={(newVal)=>this.setState({ApprovedCivilDrawings:newVal})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Building Code-0400 / ASIB:</Text>
                      <TextInput 
                         value={this.state.ASIB}
                         onChangeText={(newVal)=>this.setState({ASIB:newVal})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Scope of work Approved:</Text>
                      <TextInput 
                         value={this.state.ScopeOfWorkApproved}
                         onChangeText={(newval)=>this.setState({ScopeOfWorkApproved:newval})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                  </View>
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>Pump Room Civils</Text>
                  <View style={{marginVertical:5}}>
                      <Text>Approved Pump House Building drawings</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.ApprovedfireSprinklerSystemYes}
                                onValueChange={(val) => {
                                  const change= this.state.ApprovedfireSprinklerSystemNo.flip(); 
                                  this.setState({ApprovedfireSprinklerSystemYes:val,
                                  ApprovedfireSprinklerSystemNo:change
                                  })
                                
                                }}
                                disabled={false}
                                activeText={'On'}
                                inActiveText={'Off'}
                                backgroundActive={'green'}
                                backgroundInactive={'red'}
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
                                value={this.state.ApprovedfireSprinklerSystemPercentage}
                                onChangeText={(val)=>this.setState({ApprovedfireSprinklerSystemPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ApprovedfireSprinklerSystemComment}
                             onChangeText={(val)=>this.setState({ ApprovedfireSprinklerSystemComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Is there a window installed</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.windowfireSprinklerSystemYes}
                                  onValueChange={(val) => {
                                    const change= this.state.windowfireSprinklerSystemNo.flip(); 
                                    this.setState({windowfireSprinklerSystemYes:val,
                                    windowfireSprinklerSystemNo:change
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
                             value={this.state.windowfireSprinklerSystemPercentage}
                             onChangeText={(val)=>this.setState({windowfireSprinklerSystemPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.windowfireSprinklerSystemComments}
                             onChangeText={val=>this.setState({windowfireSprinklerSystemComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Is the correct fire door installed</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.correctfireSprinklerSystemYes}
                                 onValueChange={(val) => {
                                    const change= this.state.correctfireSprinklerSystemNo.flip();
                                   this.setState({correctfireSprinklerSystemYes:val,
                                   correctfireSprinklerSystemNo:change
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
                             value={this.state.correctfireSprinklerSystemPercentage}
                             onChangeText={(val)=>this.setState({correctfireSprinklerSystemPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.correctfireSprinklerSystemComments}
                             onChangeText={val=>this.setState({correctfireSprinklerSystemComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Are there fluoresent lights installed</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                                   <Switch
                                   value={this.state.fluoresentFireSprinklerYes}
                                   onValueChange={(val) => {
                                    const change= this.state.fluoresentFireSprinklerNo.flip();
                                     this.setState({fluoresentFireSprinklerYes:val,
                                     fluoresentFireSprinklerNo:change
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
                             value={this.state.fluoresentFireSprinklerPercentage}
                             onChangeText={(val)=>this.setState({fluoresentFireSprinklerPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.fluoresentFireSprinklerComments}
                             onChangeText={(val)=>this.setState({ fluoresentFireSprinklerComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Pump House external signage installed</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                    value={this.state.PumphouseFireSprinklerYes}
                                 onValueChange={(val) =>{ 
                                    const change= this.state.PumphouseFireSprinklerNo.flip(); 
                                   this.setState({
                                     PumphouseFireSprinklerYes:val,
                                   PumphouseFireSprinklerNo:change
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
                             value={this.state.PumphouseFireSprinklerPercentage}
                             onChangeText={(val)=>this.setState({PumphouseFireSprinklerPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.PumphouseFireSprinklerComments}
                             onChangeText={(val)=>this.setState({PumphouseFireSprinklerComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Signage notice - Key for pump house location installed</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                    value={this.state.SignageFireSprinklerYes}
                                    onValueChange={(val) =>{ 
                                      const change= this.state.SignageFireSprinklerNo.flip();    
                                      this.setState({ SignageFireSprinklerYes:val,
                                      SignageFireSprinklerNo:change
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
                             value={this.state.SignageFireSprinklerPercentage}
                             onChangeText={(val)=>this.setState({SignageFireSprinklerPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.SignageFireSprinklerComments}
                             onChangeText={(val)=>this.setState({ SignageFireSprinklerComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                       <Text style={{fontWeight:'bold',fontSize:15}}>Tank Civils</Text>
                       <View style={{marginVertical:5}}>
                      <Text>Approved Pump House Building drawings</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.ApprovedPumpFireSprinklerYes}
                                   onValueChange={(val) => {
                                      const change= this.state. ApprovedPumpFireSprinklerNo.flip();    
                                     this.setState({ ApprovedPumpFireSprinklerYes:val,
                                       ApprovedPumpFireSprinklerNo:change
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
                             value={this.state.ApprovedPumpFireSprinklerPercentage}
                             onChangeText={(val)=>this.setState({ ApprovedPumpFireSprinklerPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ApprovedPumpFireSprinklerComments}
                             onChangeText={(val)=>this.setState({ApprovedPumpFireSprinklerComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>DCP Testing complete on foundation / ground</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                    value={this.state.DCPFireSprinklerYes}
                                    onValueChange={(val) =>{ 
                                       const change= this.state.DCPFireSprinklerNo.flip(); 
                                      this.setState({DCPFireSprinklerYes:val,
                                        DCPFireSprinklerNo:change
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
                             value={this.state.DCPComments}
                             onChangeText={(val=>this.setState({ DCPComments:val}))}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.DCPPercentage}
                             onChangeText={(val)=>this.setState({DCPPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text>Engineer sign Off</Text>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                     
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                    value={this.state.EngineerFireSprinklerYes}
                                    onValueChange={(val) => {
                                       const change= this.state.EngineerFireSprinklerNo.flip(); 
                                      this.setState({EngineerFireSprinklerYes:val,
                                       EngineerFireSprinklerNo:change
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
                             value={this.state.EngineerFireSprinklerPercentage}
                             onChangeText={val=>this.setState({EngineerFireSprinklerPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.EngineerFireSprinklerComments}
                             onChangeText={(val)=>this.setState({ EngineerFireSprinklerComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  </View>
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>ICV Chamber Civils</Text>
                  <View style={{marginVertical:5}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text>Approved ICV Chamber drawings</Text>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                                <Switch
                                        value={this.state.ApprovedICVYes}
                                        onValueChange={(val) =>{ 
                                           const change= this.state.ApprovedICVNo.flip(); 
                                          this.setState({ ApprovedICVYes:val,
                                          ApprovedICVNo:change
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
                             value={this.state.ApprovedICVPercentage}
                             onChangeText={(val)=>this.setState({ ApprovedICVPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ApprovedICVComments}
                             onChangeText={(val)=>this.setState({ ApprovedICVComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                    </View>
                    <View style={{marginVertical:5}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Correct Fire Door installed</Text>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flexDirection:'row'}}>
                                    <Switch
                                        value={this.state.correctFireYes}
                                        onValueChange={(val) => {
                                             const change= this.state.correctFireNo.flip(); 
                                          this.setState({ correctFireYes:val,
                                           correctFireNo:change
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
                             value={this.state.correctFirePercentage}
                             onChangeText={(val)=>this.setState({correctFirePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.correctFireComments}
                             onChangeText={(val)=>this.setState({ correctFireComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                    </View>
                    <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>ICV Chamber sprinkler protected</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.ICVChamberYes}
                                    onValueChange={(val) => {
                                       const change= this.state.ICVChamberNo.flip(); 
                                      this.setState({
                                        ICVChamberYes:val,
                                      ICVChamberNo:change
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
                             value={this.state.ICVChamberPercentage}
                             onChangeText={(val)=>this.setState({ ICVChamberPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ICVChamberComments}
                             onChangeText={(val)=>this.setState({ICVChamberComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                    </View>
                    <View style={{marginVertical:5,padding:5}}>
                        <View style={{marginVertical:10}}>
                             <Text style={{fontWeight:'bold',fontSize:15}}>Sprinkler System Civils</Text>
                        </View>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                   
                     <View style={{marginVertical:5}}>
                     <Text>Please specify if any</Text>
                      <TextInput
                         value={this.state.SprinklerSystemSpecify}
                         onChangeText={(e)=>this.setState({SprinklerSystemSpecify:e})}
                        style={{padding:20,borderBottomWidth:1}}
                      />
                     </View>
                      
                    </View>
                    <View style={{marginVertical:5}}>
                        <Text style={{fontWeight:'bold'}}>Fire Detection System Civils</Text>
                        <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                    </View>
                    <View style={{marginVertical:5}}>
                     <Text>Please specify if any</Text>
                      <TextInput
                         value={this.state.fireDetectionSpecify}
                         onChangeText={(e)=>this.setState({ fireDetectionSpecify:e})}
                        style={{padding:20,borderBottomWidth:1}}
                      />
                     </View>
                     <View style={{marginVertical:10}}>
                        <Text style={{fontWeight:'bold'}}>Notes:</Text>
                        <TextInput
                          value={this.state.Notes}
                          onChangeText={(e)=>this.setState({Notes:e})}
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
                   <Button title="Send" color="#006bb4" onPress={()=>this.send()}/>
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

export default CivilCheckList;