import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,Switch,ScrollView,Button,Alert,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNSmtpMailer from "react-native-smtp-mailer";
import auth from '@react-native-firebase/auth';
import RNFS from 'react-native-fs';
import Mailer from 'react-native-mail';
import YesNoBool from './YesNoBool';
class TankCheckList extends Component{
    constructor(){
        super();
        this.state={
          site:'',
          InspectionDate:new Date().toLocaleString(),
          ClientDate:'',
          ApprovedTank:'',
          ASIB:'',
          ScopeOfWork:'',
          CorrectFireYes:false,
          CorrectFireNo:new YesNoBool(false),
          CorrectFirePercentage:'',
          CorrectFireComments:'',
          hatchInstalledYes:false,
          hatchInstalledNo:new YesNoBool(false),
          hatchInstalledPercentage:'',
          hatchInstalledComments:'',
          ladderInstalledYes:false,
          ladderInstalledNo:new YesNoBool(false),
          ladderInstalledPercentage:'',
          ladderInstalledComments:'',
          suctionYes:false,
          suctionNo:new YesNoBool(false),
          suctionPercentage:'',
          suctionComments:'',
          VortexYes:false,
          VortexNo:new YesNoBool(false),
          VortexPercentage:'',
          VortexComments:'',
          manwayInstalledYes:false,
          manwayInstalledNo:new YesNoBool(false),
          manwayInstalledPercentage:'',
          manwayInstalledComments:'',
          overflowInstalledYes:false,
          overflowInstalledNo:new YesNoBool(false),
          overflowInstalledPercentage:'',
          overflowInstalledComments:'',
          infillBypassYes:false,
          infillbypassNo:new YesNoBool(false),
          infillBypassPercentage:'',
          infillBypassComments:'',
          controlValveInstalledYes:false,
          controlValveInstalledNo:new YesNoBool(false),
          controlValveInstalledPercentage:'',
          controlValveInstalledComments:'',
          ancillariesYes:false,
          ancillariesNo:new YesNoBool(false),
          ancillariesPercentage:'',
          ancillariesComments:'',
          BoltsYes:false,
          BoltsNo:new YesNoBool(false),
          BoltsPercentage:'',
          BoltsComments:'',
          indicatorInstalledYes:false,
          indicatorInstalledNo:new YesNoBool(false),
          indicatorPercentage:'',
          indicatorComments:'',
          fullPointMarkedYes:false,
          fullPointMarkedNo:new YesNoBool(false),
          fullPointMarkedPercentage:'',
          fullPointMarkedComments:'',
          siteLeftCleanYes:false,
          siteLeftCleanNo:new YesNoBool(false),
          siteLeftCleanPercentage:'',
          siteLeftCleanComments:'',
          tankCleanYes:false,
          tankCleanNo:new YesNoBool(false),
          tankCleanPercentage:'',
          tankCleanComments:'',
          suctionHeightYes:false,
          suctionHeightNo:new YesNoBool(false),
          suctionHeightPercentage:'',
          suctionHeightComment:'',
          drainCompleteYes:false,
          drainCompleteNo:new YesNoBool(false),
          drainCompletePercentage:'',
          drainCompleteComments:'',
          notes:'',
          selectedValue:'Select email'
        }
    }

    send=async()=>{

  const {
    site,
    InspectionDate,
    ClientDate,
    ApprovedTank,
    ASIB,
    ScopeOfWork,
    CorrectFireYes,
    CorrectFireNo,
    CorrectFirePercentage,
    CorrectFireComments,
    hatchInstalledYes,
    hatchInstalledNo,
    hatchInstalledPercentage,
    hatchInstalledComments,
    ladderInstalledYes,
    ladderInstalledNo,
    ladderInstalledPercentage,
    ladderInstalledComments,
    suctionYes,
    suctionNo,
    suctionPercentage,
    suctionComments,
    VortexYes,
    VortexNo,
    VortexPercentage,
    VortexComments,
    manwayInstalledYes,
    manwayInstalledNo,
    manwayInstalledPercentage,
    manwayInstalledComments,
    overflowInstalledYes,
    overflowInstalledNo,
    overflowInstalledPercentage,
    overflowInstalledComments,
    infillBypassYes,
    infillbypassNo,
    infillBypassPercentage,
    infillBypassComments,
    controlValveInstalledYes,
    controlValveInstalledNo,
    controlValveInstalledPercentage,
    controlValveInstalledComments,
    ancillariesYes,
    ancillariesNo,
    ancillariesPercentage,
    ancillariesComments,
    BoltsYes,
    BoltsNo,
    BoltsPercentage,
    BoltsComments,
    indicatorInstalledYes,
    indicatorInstalledNo,
    indicatorPercentage,
    indicatorComments,
    fullPointMarkedYes,
    fullPointMarkedNo,
    fullPointMarkedPercentage,
    fullPointMarkedComments,
    siteLeftCleanYes,
    siteLeftCleanNo,
    siteLeftCleanPercentage,
    siteLeftCleanComments,
    tankCleanYes,
    tankCleanNo,
    tankCleanPercentage,
    tankCleanComments,
    suctionHeightYes,
    suctionHeightNo,
    suctionHeightPercentage,
    suctionHeightComment,
    drainCompleteYes,
    drainCompleteNo,
    drainCompletePercentage,
    drainCompleteComments,
    notes,
    selectedValue
  }=this.state;


      // await firestore().collection('Tank Check list')
      // .add({
      //   site:site,
      //   InspectionDate:InspectionDate,
      //   ClientDate:ClientDate,
      //   ApprovedTank:ApprovedTank,
      //   ASIB:ASIB,
      //   ScopeOfWork:ScopeOfWork,
      //   CorrectFireYes:CorrectFireYes,
      //   CorrectFirePercentage:CorrectFirePercentage,
      //   CorrectFireComments:CorrectFireComments,
      //   hatchInstalledYes: hatchInstalledYes,
      //   hatchInstalledPercentage:hatchInstalledPercentage,
      //   hatchInstalledComments:hatchInstalledComments,
      //   ladderInstalledYes:ladderInstalledYes,
      //   ladderInstalledPercentage:ladderInstalledPercentage,
      //   ladderInstalledComments:ladderInstalledComments,
      //   suctionYes:suctionYes,
      //   suctionPercentage:suctionPercentage,
      //   suctionComments:suctionComments,
      //   VortexYes:VortexYes,
      //   VortexPercentage:VortexPercentage,
      //   VortexComments:VortexComments,
      //   manwayInstalledYes:manwayInstalledYes,
      //   manwayInstalledPercentage:manwayInstalledPercentage,
      //   manwayInstalledComments:manwayInstalledComments,
      //   overflowInstalledYes:overflowInstalledYes,
      //   overflowInstalledPercentage:overflowInstalledPercentage,
      //   overflowInstalledComments:overflowInstalledComments,
      //   infillBypassYes:infillBypassYes,
      //   infillBypassPercentage:infillBypassPercentage,
      //   infillBypassComments:infillBypassComments,
      //   controlValveInstalledYes:controlValveInstalledYes,
      //   controlValveInstalledPercentage:controlValveInstalledPercentage,
      //   controlValveInstalledComments:controlValveInstalledComments,
      //   ancillariesYes:ancillariesYes,
      //   ancillariesPercentage:ancillariesPercentage,
      //   ancillariesComments:ancillariesComments,
      //   BoltsYes:BoltsYes,
      //   BoltsPercentage:BoltsPercentage,
      //   BoltsComments:BoltsComments,
      //   indicatorInstalledYes:indicatorInstalledYes,
      //   indicatorPercentage:indicatorPercentage,
      //   indicatorComments:indicatorComments,
      //   fullPointMarkedYes:fullPointMarkedYes,
      //   fullPointMarkedPercentage:fullPointMarkedPercentage,
      //   fullPointMarkedComments:fullPointMarkedComments,
      //   siteLeftCleanYes:siteLeftCleanYes,
      //   siteLeftCleanPercentage:siteLeftCleanPercentage,
      //   siteLeftCleanComments:siteLeftCleanComments,
      //   tankCleanYes:tankCleanYes,
      //   tankCleanPercentage:tankCleanPercentage,
      //   tankCleanComments:tankCleanComments,
      //   suctionHeightYes:suctionHeightYes,
      //   suctionHeightPercentage:suctionHeightPercentage,
      //   suctionHeightComment:suctionHeightComment,
      //   drainCompleteYes:drainCompleteYes,
      //   drainCompletePercentage:drainCompletePercentage,
      //   drainCompleteComments:drainCompleteComments,
      //   notes:notes
      // })



  //      const user = auth().currentUser;

  Mailer.mail({
    subject: 'Tank Check List',
    recipients: [`${selectedValue}`],
    ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
    body: `
    <div style="border:1px solid black;border-radius:30px;">
      <h1>FIRE TANK CHECK LIST</h1>
      <div style="padding:30px;background-color:#ADD8E6;">Site<div>
      <div style="padding:30px;">${site}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Inspection Date:</div>
      <div style="padding:30px;">${InspectionDate}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Clients Details:</div>
      <div style="padding:30px;">${ClientDate}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Approved Tank Drawings:</div>
      <div style="padding:30px;">${ApprovedTank}</div>
      <div style="padding:30px;background-color:#ADD8E6;">SANS/ASIB:</div>
      <div style="padding:30px;">${ASIB}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Scope of work Approved</div>
      <div style="padding:30px;">${ScopeOfWork}</div>

      <h1>FIRE TANK CHECK LIST</h1>
      <div style="padding:30px;background-color:#ADD8E6;">Are all the plates installed correctly(Including ASIB Tags)</div>
      <div style="padding:30px;">${CorrectFireNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${CorrectFirePercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${CorrectFireComments}</div>
      
      <div style="padding:30px;background-color:#ADD8E6;">Is the hatch installed and locked:</div>
      <div style="padding:30px;">${hatchInstalledNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;background-color:#ADD8E6;">${hatchInstalledPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>:  
      <div style="padding:30px;">${hatchInstalledComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Is the cat ladder installed with railings:</div>
      <div style="padding:30px;">${ladderInstalledNo.value}</div>
      <div style="padding:30px;">Percentage:</div>
      <div style="padding:30px;">${ladderInstalledPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${ladderInstalledComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Is the suction c/w Vortex installed:</div>
       <div style="padding:30px;">${suctionNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${suctionPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${suctionComments}</div>   


      <div style="padding:30px;background-color:#ADD8E6;">Vortex correct size installed:</div>
      <div style="padding:30px;">${VortexNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${VortexPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${VortexComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Is the manway installed:</div>
      <div style="padding:30px;">${manwayInstalledNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${manwayInstalledPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${manwayInstalledComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Is the overflow installed:</div>
      <div style="padding:30px;">${overflowInstalledNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${overflowInstalledPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${overflowInstalledComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Is the infill bypass installed:</div>
      <div style="padding:30px;">${ infillbypassNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${infillBypassPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${infillBypassComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Control valves installed:</div>
      <div style="padding:30px;">${ controlValveInstalledNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${controlValveInstalledPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${controlValveInstalledComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Are all the ancillaries according to the drawings:</div>
      <div style="padding:30px;">${ancillariesNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${ancillariesPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${ancillariesComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Are all the bolts installed:</div>
      <div style="padding:30px;">${BoltsNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${BoltsPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;background-color:#ADD8E6;">${BoltsComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Is the level indicator installed:</div>
      <div style="padding:30px;">${indicatorInstalledNo.value}</div>
      <div style="padding:30px;">Percentage:</div>
      <div style="padding:30px;">${indicatorPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${indicatorComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">is the full point marked on the level indicator:</div>
      <div style="padding:30px;">${fullPointMarkedNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;background-color:#ADD8E6;">${fullPointMarkedPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div> 
      <div style="padding:30px;">${fullPointMarkedComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Are all the plates installed correctly(Including ASIB Tags)</div>
      <div style="padding:30px;">${CorrectFireNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${CorrectFirePercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px">${CorrectFireComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Was the site left clean</div>
      <div style="padding:30px;">${siteLeftCleanNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${siteLeftCleanPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${siteLeftCleanComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Is the tank clean:</div>
      <div style="padding:30px;">${tankCleanNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;"">Percentage:</div>
      <div style="padding:30px;">${tankCleanPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${tankCleanComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">is the suction height complete as per drawings:</div>
       <div style="padding:30px;">${suctionHeightNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      <div style="padding:30px;">${suctionHeightPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${suctionHeightComment}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Is the drain complete as per drawings:</div>
       <div style="padding:30px;">${drainCompleteNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
       <div style="padding:30px;">${drainCompletePercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${drainCompleteComments}</div>   

      <div style="padding:30px;background-color:#ADD8E6;">Notes</div>
      <div style="padding:30px;background-color:#ADD8E6;">Notes</div>
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
    'Tank Check List',
    'Form was sent'
  );


      //  RNSmtpMailer.sendMail({
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
      //     <div style="border:1px solid black;border-radius:30px;">
      //       <h1>FIRE TANK CHECK LIST</h1>
      //       <div style="padding:30px;background-color:#ADD8E6;">Site<div>
      //       <div style="padding:30px;">${site}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Inspection Date:</div>
      //       <div style="padding:30px;">${InspectionDate}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Clients Details:</div>
      //       <div style="padding:30px;">${ClientDate}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Approved Tank Drawings:</div>
      //       <div style="padding:30px;">${ApprovedTank}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">SANS/ASIB:</div>
      //       <div style="padding:30px;">${ASIB}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Scope of work Approved</div>
      //       <div style="padding:30px;">${ScopeOfWork}</div>

      //       <h1>FIRE TANK CHECK LIST</h1>
      //       <div style="padding:30px;background-color:#ADD8E6;">Are all the plates installed correctly(Including ASIB Tags)</div>
      //       <div style="padding:30px;">${CorrectFireYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${CorrectFirePercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${CorrectFireComments}</div>
            
      //       <div style="padding:30px;background-color:#ADD8E6;">Is the hatch installed and locked:</div>
      //       <div style="padding:30px;">${hatchInstalledYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">${hatchInstalledPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>:  
      //       <div style="padding:30px;">${hatchInstalledComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Is the cat ladder installed with railings:</div>
      //       <div style="padding:30px;">${ladderInstalledYes}</div>
      //       <div style="padding:30px;">Percentage:</div>
      //       <div style="padding:30px;">${ladderInstalledPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${ladderInstalledComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Is the suction c/w Vortex installed:</div>
      //        <div style="padding:30px;">${suctionYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${suctionPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${suctionComments}</div>   


      //       <div style="padding:30px;background-color:#ADD8E6;">Vortex correct size installed:</div>
      //       <div style="padding:30px;">${VortexYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${VortexPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${VortexComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Is the manway installed:</div>
      //       <div style="padding:30px;">${manwayInstalledYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${manwayInstalledPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${manwayInstalledComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Is the overflow installed:</div>
      //       <div style="padding:30px;">${overflowInstalledYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${overflowInstalledPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${overflowInstalledComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Is the infill bypass installed:</div>
      //       <div style="padding:30px;">${infillBypassYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${infillBypassPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${infillBypassComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Control valves installed:</div>
      //       <div style="padding:30px;">${controlValveInstalledYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${controlValveInstalledPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${controlValveInstalledComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Are all the ancillaries according to the drawings:</div>
      //       <div style="padding:30px;">${ancillariesYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${ancillariesPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${ancillariesComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Are all the bolts installed:</div>
      //       <div style="padding:30px;">${BoltsYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${BoltsPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">${BoltsComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Is the level indicator installed:</div>
      //       <div style="padding:30px;">${indicatorInstalledYes}</div>
      //       <div style="padding:30px;">Percentage:</div>
      //       <div style="padding:30px;">${indicatorPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${indicatorComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">is the full point marked on the level indicator:</div>
      //       <div style="padding:30px;">${fullPointMarkedYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">${fullPointMarkedPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div> 
      //       <div style="padding:30px;">${fullPointMarkedComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Are all the plates installed correctly(Including ASIB Tags)</div>
      //       <div style="padding:30px;">${CorrectFireYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${CorrectFirePercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px">${CorrectFireComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Was the site left clean</div>
      //       <div style="padding:30px;">${siteLeftCleanYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${siteLeftCleanPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${siteLeftCleanComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Is the tank clean:</div>
      //       <div style="padding:30px;">${tankCleanYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;"">Percentage:</div>
      //       <div style="padding:30px;">${tankCleanPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${tankCleanComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">is the suction height complete as per drawings:</div>
      //        <div style="padding:30px;">${suctionHeightYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //       <div style="padding:30px;">${suctionHeightPercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${suctionHeightComment}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Is the drain complete as per drawings:</div>
      //        <div style="padding:30px;">${drainCompleteYes}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Percentage:</div>
      //        <div style="padding:30px;">${drainCompletePercentage}</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //       <div style="padding:30px;">${drainCompleteComments}</div>   

      //       <div style="padding:30px;background-color:#ADD8E6;">Notes</div>
      //       <div style="padding:30px;background-color:#ADD8E6;">Notes</div>
      //       <div style="padding:30px;">${notes}</div>
      //       </div>
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
      const {width, height} = Dimensions.get('window');
        return(
          <ScrollView contentContainerStyle={styles.container}>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold'}}>FIRE TANK CHECK LIST</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                  <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Site:</Text>
                       <TextInput
                        value={this.state.site}
                        onChangeText={(e)=>this.setState({site:e})} 
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Inspection Date:</Text>
                       <TextInput 
                         value={this.state.InspectionDate}
                         onChangeText={(e)=>this.setState({InspectionDate:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2,}}>Client Details:</Text>
                       <TextInput 
                          keyboardType="numeric"
                         value={this.state.ClientDate}
                         onChangeText={(e)=>this.setState({ClientDate:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Approved Tank Drawings:</Text>
                       <TextInput 
                         value={this.state.ApprovedTank}
                         onChangeText={(e)=>this.setState({ApprovedTank:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>SANS / ASIB</Text>
                       <TextInput 
                         value={this.state.ASIB}
                         onChangeText={(e)=>this.setState({ASIB:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
                   <View style={{marginVertical:4}}>
                       <Text style={{marginVertical:2}}>Scope of work Approved:</Text>
                       <TextInput 
                        value={this.state.ScopeOfWork}
                        onChangeText={(e)=>this.setState({ScopeOfWork:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                       />
                   </View>
              </View>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>Fire Tank Checklist</Text>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Are all the plates installed</Text>
                       <Text> correctly (Including ASIB Tags)</Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.CorrectFireYes}
                                 onValueChange={(val) =>{
                                 const change= this.state.CorrectFireNo.flip();   
                                   this.setState({ 
                                     CorrectFireYes:val,
                                   CorrectFireNo:change
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
                             value={this.state.CorrectFirePercentage}
                             onChangeText={(val)=>this.setState({CorrectFirePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.CorrectFireComments}
                             onChangeText={(val)=>this.setState({CorrectFireComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the hatch installed </Text>
                       <Text>and locked</Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.hatchInstalledYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.hatchInstalledNo.flip(); 
                                    this.setState({hatchInstalledYes:val,
                                     hatchInstalledNo:change
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
                             value={this.state.hatchInstalledPercentage}
                             onChangeText={(val)=>this.setState({hatchInstalledPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.hatchInstalledComments}
                             onChangeText={(val)=>this.setState({hatchInstalledComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the cat ladder </Text>
                       <Text>installed with railings</Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.ladderInstalledYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.ladderInstalledNo.flip(); 
                                   this.setState({ladderInstalledYes:val,
                                   ladderInstalledNo:change
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
                             value={this.state.ladderInstalledPercentage}
                             onChangeText={(val)=>this.setState({ladderInstalledPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ladderInstalledComments}
                             onChangeText={(val)=>this.setState({ladderInstalledComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the suction c/w  </Text>
                       <Text>Vortex installed</Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.suctionYes}
                                 onValueChange={(val) =>{
                                     const change= this.state.suctionNo.flip(); 
                                   this.setState({ suctionYes:val,
                                    suctionNo:change
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
                             value={this.state.suctionPercentage}
                             onChangeText={(val)=>this.setState({suctionPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.suctionComments}
                             onChangeText={(val)=>this.setState({suctionComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>

                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Vortex correct size installed  </Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.VortexYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.VortexNo.flip(); 
                                    this.setState({VortexYes:val,
                                    VortexNo:change
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
                             value={this.state.VortexPercentage}
                             onChangeText={(val)=>this.setState({VortexPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.VortexComments}
                             onChangeText={(val)=>this.setState({VortexComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>

                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the manway installed </Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.manwayInstalledYes}
                                   onValueChange={(val) =>{
                                     const change= this.state.manwayInstalledNo.flip(); 
                                     this.setState({manwayInstalledYes:val,
                                     manwayInstalledNo:change
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
                             value={this.state.manwayInstalledPercentage}
                             onChangeText={(val)=>this.setState({manwayInstalledPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.manwayInstalledComments}
                             onChangeText={(val)=>this.setState({manwayInstalledComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the overflow installed </Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.overflowInstalledYes}
                                 onValueChange={(val) =>{
                                      const change= this.state.overflowInstalledNo.flip(); 
                                   this.setState({
                                       overflowInstalledYes:val,
                                      overflowInstalledNo:change
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
                             value={this.state.overflowInstalledPercentage}
                             onChangeText={(val)=>this.setState({overflowInstalledPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.overflowInstalledComments}
                             onChangeText={(val)=>this.setState({overflowInstalledComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the infill bypass installed </Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.infillBypassYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.infillbypassNo.flip(); 
                                    this.setState({infillBypassYes:val,
                                    infillbypassNo:change
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
                             value={this.state.infillBypassPercentage}
                             onChangeText={(val)=>this.setState({infillBypassPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.infillBypassComments}
                             onChangeText={(val)=>this.setState({infillBypassComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Control valves installed </Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.controlValveInstalledYes}
                                 onValueChange={(val) =>{
                                     const change= this.state.controlValveInstalledNo.flip();
                                   this.setState({
                                     controlValveInstalledYes:val,
                                     controlValveInstalledNo:change
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
                             value={this.state.controlValveInstalledPercentage}
                             onChangeText={(val)=>this.setState({ controlValveInstalledPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.controlValveInstalledComments}
                             onChangeText={(val)=>this.setState({ controlValveInstalledComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Are all the ancillaries </Text>
                       <Text>according to the drawings</Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                    value={this.state.ancillariesYes}
                                    onValueChange={(val) =>{
                                      const change= this.state.ancillariesNo.flip();
                                      this.setState({ancillariesYes:val,
                                      ancillariesNo:change
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
                             value={this.state.ancillariesPercentage}
                             onChangeText={(val)=>this.setState({ancillariesPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.ancillariesComments}
                             onChangeText={(val)=>this.setState({ancillariesComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Are all the bolts installed </Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.BoltsYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.BoltsNo.flip();
                                   this.setState({BoltsYes:val,
                                     BoltsNo:change
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
                             value={this.state.BoltsPercentage}
                             onChangeText={(val)=>this.setState({ BoltsPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.BoltsComments}
                             onChangeText={(val)=>this.setState({ BoltsComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the level indicator installed </Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.indicatorInstalledYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.indicatorInstalledNo.flip();
                                   this.setState({ indicatorInstalledYes:val,
                                   indicatorInstalledNo:change
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
                             value={this.state.indicatorPercentage}
                             onChangeText={(val)=>this.setState({indicatorPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.indicatorComments}
                             onChangeText={(val)=>this.setState({indicatorComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the full point marked </Text>
                       <Text>on the level indicator</Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.fullPointMarkedYes}
                                onValueChange={(val) =>{
                                    const change= this.state.fullPointMarkedNo.flip();
                                  this.setState({ 
                                    fullPointMarkedYes:val,
                                  fullPointMarkedNo:change
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
                             value={this.state.fullPointMarkedPercentage}
                             onChangeText={(val)=>this.setState({fullPointMarkedPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.fullPointMarkedComments}
                             onChangeText={(val)=>this.setState({fullPointMarkedComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Was the site left clean </Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.siteLeftCleanYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.siteLeftCleanNo.flip();
                                   this.setState({  siteLeftCleanYes:val,
                                      siteLeftCleanNo:change
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
                             value={this.state.siteLeftCleanPercentage}
                             onChangeText={(val)=>this.setState({siteLeftCleanPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.siteLeftCleanComments}
                             onChangeText={(val)=>this.setState({siteLeftCleanComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the tank clean </Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.tankCleanYes}
                                  onValueChange={(val) =>{
                                     const change= this.state.tankCleanNo.flip();
                                    this.setState({ tankCleanYes:val,
                                      tankCleanNo:change
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
                             value={this.state.tankCleanPercentage}
                             onChangeText={(val)=>this.setState({tankCleanPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.tankCleanComments}
                             onChangeText={(val)=>this.setState({tankCleanComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the suction height </Text>
                       <Text>complete as per drawings</Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.suctionHeightYes}
                                 onValueChange={(val) =>{
                                        const change= this.state.suctionHeightNo.flip();
                                   this.setState({suctionHeightYes:val,
                                    suctionHeightNo:change
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
                             value={this.state.suctionHeightPercentage}
                             onChangeText={(val)=>this.setState({suctionHeightPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.suctionHeightComment}
                             onChangeText={(val)=>this.setState({suctionHeightComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <View>
                       <Text>Is the drain </Text>
                       <Text>complete as per drawings</Text>
                       </View>
                        
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.drainCompleteYes}
                                 onValueChange={(val) =>{
                                      const change= this.state.drainCompleteNo.flip();
                                   this.setState({drainCompleteYes:val,
                                    drainCompleteNo:change
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
                             value={this.state.drainCompletePercentage}
                             onChangeText={(val)=>this.setState({drainCompletePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.drainCompleteComments}
                             onChangeText={(val)=>this.setState({drainCompleteComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   </View>
                   <View style={{marginHorizontal:5}}>
                       <Text style={{fontWeight:'bold',fontSize:23}}>Notes</Text>
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

export default TankCheckList;