import React,{Component} from 'react';
import {View,Switch,Text,StyleSheet,TextInput,ScrollView,Button,Alert,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import RNSmtpMailer from "react-native-smtp-mailer";
import auth from '@react-native-firebase/auth';
import Signature from "react-native-signature-canvas";
import Mailer from 'react-native-mail';
import YesNoBool from './YesNoBool';

class HealthSafetyChecklist extends Component{
    constructor(){
        super();
        this.state={
           site:'',
           inspectionDate:new Date().toLocaleString(),
           ClientDetails:'',
           Covid19Yes:false,
           Covid19No:new YesNoBool(false),
           Covid19Comment:'',
           ScreeningYes:false,
           ScreeningNo:new YesNoBool(false),
           ScreeningComment:'',
           SanitizationOnsiteYes:false,
           SanitizationOnsiteNo:new YesNoBool(false),
           SanitizationOnsiteComment:'',
           SafeDistanceYes:false,
           SafeDistanceNo:new YesNoBool(false),
           SafeDistanceComment:'',
           PranaFmSafetyYes:false,
           PranaFmSafetyNo:new YesNoBool(false),
           PranaFmSafetyComment:'',
           HardHatYes:false,
           HardHatNo:new YesNoBool(false),
           HardHatComment:'',
           SafetyShoesYes:false,
           SafetyShoesNo:new YesNoBool(false),
           SafetyShoesComment:'',
           HarnessesYes:false,
           HarnessesNo:new YesNoBool(false),
           HarnessesComments:'',
           APPYes:false,
           APPNo:new YesNoBool(false),
           APPComments:'',
           BoomLiftYes:false,
           BoomLiftNo:new YesNoBool(false),
           BoomComments:'',
           SafetyFileYes:false,
           SafetyFileNo:new YesNoBool(false),
           SafetyFileComments:'',
           ClientPersonnelYes:false,
           ClientPersonnelNo:new YesNoBool(false),
           ClientPersonnelComments:'',
           DrillingWeldingYes:false,
           DrillingWeldingNo:new YesNoBool(false),
           DrillingWeldingComments:'',
           SiteBeenLeftYes:false,
           SiteBeenLeftNo:new YesNoBool(false),
           SiteBeenLeftComment:'',
           HaveAreasYes:false,
           HaveAreasNo:new YesNoBool(false),
           HaveAreasComment:'',
           IsTheMaterialYes:false,
           IsTheMaterialNo:new YesNoBool(false),
           IsTheMaterailComments:'',
           PranaFmBoardsOnSiteYes:false,
           PranaFmBoardsOnSiteNo:new YesNoBool(false),
           PranaFmBoardsOnSiteComments:'',
           CautionSignsYes:false,
           CaustionSignNo:new YesNoBool(false),
           CaustionComments:'',
           CautionCivilWorkYes:false,
           CautionCivilWorkNo:new YesNoBool(false),
           CautionCivilWorkComment:'',
           ProjectQuality:'',
           warningIssuedYes:false,
           warningIssuedNo:new YesNoBool(false),
           comments:'',
           selectedValue:'Select email',
           supervisorName:'',
           signature:null
        }
    }


    send=async()=>{
       const {
        site,
        inspectionDate,
        ClientDetails,
        Covid19Yes,
        Covid19No,
        Covid19Comment,
        ScreeningYes,
        ScreeningNo,
        ScreeningComment,
        SanitizationOnsiteYes,
        SanitizationOnsiteNo,
        SanitizationOnsiteComment,
        SafeDistanceYes,
        SafeDistanceNo,
        SafeDistanceComment,
        PranaFmSafetyYes,
        PranaFmSafetyNo,
        PranaFmSafetyComment,
        HardHatYes,
        HardHatNo,
        HardHatComment,
        SafetyShoesYes,
        SafetyShoesNo,
        SafetyShoesComment,
        HarnessesYes,
        HarnessesNo,
        HarnessesComments,
        APPYes,
        APPNo,
        APPComments,
        BoomLiftYes,
        BoomLiftNo,
        BoomComments,
        SafetyFileYes,
        SafetyFileNo,
        SafetyFileComments,
        ClientPersonnelYes,
        ClientPersonnelNo,
        ClientPersonnelComments,
        DrillingWeldingYes,
        DrillingWeldingNo,
        DrillingWeldingComments,
        SiteBeenLeftYes,
        SiteBeenLeftNo,
        SiteBeenLeftComment,
        HaveAreasYes,
        HaveAreasNo,
        HaveAreasComment,
        IsTheMaterialYes,
        IsTheMaterialNo,
        IsTheMaterailComments,
        PranaFmBoardsOnSiteYes,
        PranaFmBoardsOnSiteNo,
        PranaFmBoardsOnSiteComments,
        CautionSignsYes,
        CaustionSignNo,
        CaustionComments,
        CautionCivilWorkYes,
        CautionCivilWorkNo,
        CautionCivilWorkComment,
        ProjectQuality,
        supervisorName,
        warningIssuedYes,
        comments,
        signature,
        selectedValue
       }=this.state;
      // await firestore().collection('Health and Safety checklist')
      // .add({
      //   site:site,
      //   inspectionDate:inspectionDate,
      //   ClientDetails:ClientDetails,
      //   Covid19Yes:Covid19Yes,
      //   Covid19Comment:Covid19Comment,
      //   ScreeningYes:ScreeningYes,
      //   ScreeningComment:ScreeningComment,
      //   SanitizationOnsiteYes:SanitizationOnsiteYes,
      //   SanitizationOnsiteComment:SanitizationOnsiteComment,
      //   SafeDistanceYes:SafeDistanceYes,
      //   SafeDistanceComment:SafeDistanceComment,
      //   PranaFmSafetyYes:PranaFmSafetyYes,
      //   PranaFmSafetyComment:PranaFmSafetyComment,
      //   HardHatYes:HardHatYes,
      //   HardHatComment:HardHatComment,
      //   SafetyShoesYes:SafetyShoesYes,
      //   SafetyShoesComment:SafetyShoesComment,
      //   HarnessesYes:HarnessesYes,
      //   HarnessesComments:HarnessesComments,
      //   APPYes:APPYes,
      //   APPComments:APPComments,
      //   BoomLiftYes:BoomLiftYes,
      //   BoomComments:BoomComments,
      //   SafetyFileYes:SafetyFileYes,
      //   SafetyFileComments:SafetyFileComments,
      //   ClientPersonnelYes:ClientPersonnelYes,
      //   ClientPersonnelComments:ClientPersonnelComments,
      //   DrillingWeldingYes:DrillingWeldingYes,
      //   DrillingWeldingComments:DrillingWeldingComments,
      //   SiteBeenLeftYes:SiteBeenLeftYes,
      //   SiteBeenLeftComment:SiteBeenLeftComment,
      //   HaveAreasYes:HaveAreasYes,
      //   HaveAreasComment:HaveAreasComment,
      //   IsTheMaterialYes:IsTheMaterialYes,
      //   IsTheMaterailComments:IsTheMaterailComments,
      //   PranaFmBoardsOnSiteYes:PranaFmBoardsOnSiteYes,
      //   PranaFmBoardsOnSiteComments:PranaFmBoardsOnSiteComments,
      //   CautionSignsYes:CautionSignsYes,
      //   CaustionComments:CaustionComments,
      //   CautionCivilWorkYes:CautionCivilWorkYes,
      //   CautionCivilWorkComment:CautionCivilWorkComment,
      //   ProjectQuality:ProjectQuality,
      //   warningIssued:warningIssuedYes,
      //   comments:comments,
      //   supervisorName:supervisorName,
      //   signature:signature
      // })

      // const user = auth().currentUser;
      

     
      Mailer.mail({
        subject: 'Health Safety Checklist',
        recipients: [`${selectedValue}`],
        ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
        body:  `
              <div style="border:1px solid black;border-radius:30px;">             
              <h1 style="text-align:center;">HEALTH & SAFETY CHECK LIST</h1>
              
              <div style="padding:30px;background-color:#ADD8E6;">
              <h4 >Site:</h4> 
              </div>

             <div style="padding:30px"> ${this.state.site}</div>

              <div  style="padding:30px;background-color:#ADD8E6;">
              <h4>Inspection Date:</h4> 
              </div>

              <div style="padding:30px;">
              <p >${this.state.inspectionDate}</p>
              </div>

              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h4 >Client Contact Details:</h4> 
              </div>

              <div style="padding:30px;">
              <p>${this.state.ClientDetails}</p>
              </div>


              <h1>Approved</h1>
              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h4>Face Mask On:</h4>
              </div>

              <div style="padding:30px">${this.state.Covid19No.value}</div>

              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h4 >Screening:</h4> 
              </div>

              <div style="padding:30px">
              <p>${this.state.ScreeningNo.value}</p>
              </div>

               <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h4 >Sanitization onsite:</h4> 
              </div>

                <div style="padding:30px">
              <p>${this.state.SanitizationOnsiteNo.value}</p>
              </div>

              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h4 >Safe Distance between workers:</h4> 
              </div>

                  <div style="padding:30px">
              <p>${this.state.SafeDistanceNo.value}</p>
              </div>

               <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Prana Precaution Onsite:</h1> 
              </div>

              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Prana FM Safety Vests:</h1> 
              </div>

                <div style="padding:30px">
              <p>${this.state.PranaFmSafetyNo.value}</p>
              </div>

              
              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Hard Hat:</h1> 
              </div>

                <div style="padding:30px">
              <p>${this.state.HardHatNo.value}</p>
              </div>

              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Safety Shoes:</h1> 
              </div>

               <div style="padding:30px">
              <p>${this.state.SafetyShoesNo.value}</p>
              </div>

              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Harnesses:</h1> 
              <p>${this.state.HarnessesNo.value}</p>
              </div>

               <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >All PPE precautions as per site requirement:</h1> 
              <p>${this.state.APPNo.value}</p>
              </div>

               <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Boom Lift Safety(Operation training certification):</h1> 
              <p>${this.state.BoomLiftNo.value}</p>
              </div>

               <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Safety File Onsite and Approved:</h1> 
              <p>${this.state.SafetyFileNo.value}</p>
              </div>
              
              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Client Personnel Safety:</h1> 
              <p>${this.state.ClientPersonnelNo.value}</p>
              </div>

               <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Drillling Welding and Grinding - Precautions - Hot works permit:</h1> 
              <p>${this.state.DrillingWeldingNo.value}</p>
              </div>

              <h1>Site</h1>

              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Has the site been left clean:</h1> 
              <p>${this.state.SiteBeenLeftNo.value}</p>
              </div>

              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Have areas been marked with danger tape:</h1> 
              <p>${this.state.HaveAreasNo.value}</p>
              </div>

                <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Is the materials/stock left secure onsite:</h1> 
              <p>${this.state.IsTheMaterialNo.value}</p>
              </div>

                <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Is there Prana FM site boards onsite:</h1> 
              <p>${this.state.PranaFmBoardsOnSiteNo.value}</p>
              </div>

                <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Are there caution signs put onsite for Boom Lift operation:</h1> 
              <p>${this.state.CaustionSignNo.value}</p>
              </div>

               <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Are there caution signs put up around the civil working areas:</h1> 
              <p>${this.state.CautionCivilWorkNo.value}</p>
              </div>

               <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Project Quality of works</h1> 
              </div>

              <div style="background-color:#ADD8E6;color:black;padding:30px;">
              <h1 >Warning issued:</h1> 
              <p>${this.state.warningIssuedNo.value}</p>
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
        'Health Safety Checklist',
        'Form was sent'
      )

      // RNSmtpMailer.sendMail({
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
      //      <div style="border:1px solid black;border-radius:30px;">

      //        <h1>HEALTH & SAFETY CHECK LIST</h1>

      //        <h4>Site</h4>:${site}
      //        <h4>Inspection Date</h4>:${inspectionDate}
      //        <h4>Client Details</h4>:${ClientDetails}


      //        <h1>COVID - 19 Protocol</h1>
      //        <div style="padding:30px;background-color:#ADD8E6;">Face Mask On</div>
      //        <div style="padding:30px;">${Covid19Yes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment</div>
      //        <div style="padding:30px;">${Covid19Comment}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Screening</div>
      //        <div style="padding:30px;">${ScreeningYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment</div>
      //        <div style="padding:30px;">${ScreeningComment}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Sanitization onsite</div>
      //        <div style="padding:30px;">${SanitizationOnsiteYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment</div>
      //        <div style="padding:30px;">${SanitizationOnsiteComment}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Safe Distance between workers</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">${SafeDistanceYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //        <div style="padding:30px;">${SafeDistanceComment}</div>

      //        <h1>Safety Precautions Onsite</h1>
      //        <div style="padding:30px;background-color:#ADD8E6;">Prana FM Safety Vests</div>
      //        <div style="padding:30px;"> ${PranaFmSafetyYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">comments</div>
      //        <div style="padding:30px;">${PranaFmSafetyComment}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Hard Hat</div>
      //        <div style="padding:30px;">${HardHatYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment</div>
      //        <div style="padding:30px;">${HardHatComment}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Safety Shoes</div>
      //        <div style="padding:30px;">${SafetyShoesYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment</div>
      //        <div style="padding:30px;">${SafetyShoesComment}</div>

             
      //        <div style="padding:30px;background-color:#ADD8E6;">Harnesses</div>
      //        <div style="padding:30px;">${HarnessesYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //        <div style="padding:30px;">${HarnessesComments}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">All PPE precautions as per site requirements</div>
      //        <div style="padding:30px;">${APPYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment<div>
      //        <div style="padding:30px;">${APPComments}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Boom Lift Safety(Operation Training certification)</div>
      //        <div style="padding:30px">${BoomLiftYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //        <div style="padding:30px;">${BoomComments}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Safety File Onsite and Approved</div>
      //        <div style="padding:30px;">${SafetyFileYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment</div>
      //        <div style="padding:30px;">${SafetyFileComments}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Client Personnel Safety</div>
      //        <div style="padding:30px">${ClientPersonnelYes}<div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //        <div style="padding:30px">${ClientPersonnelComments}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Drilling, Welding and Grinding - Precautions - Hot works permit</div>
      //        <div style="padding:30px;">${DrillingWeldingYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment</div>
      //        <div style="padding:30px;">${DrillingWeldingComments}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Site</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Has the site been left clean</div>
      //        <div style="padding:30px;">${SiteBeenLeftYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //        <div style="padding:30px;">${SiteBeenLeftComment}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Have areas been marked with danger tape</div>
      //        <div style="padding:30px;">${HaveAreasYes}</div
      //        <h4>Comments</h4>:${HaveAreasComment}

      //        <div style="padding:30px;background-color:#ADD8E6;">Is the materials/stock left secure onsite</div>
      //        <div style="padding:30px;">${IsTheMaterialYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment<div>
      //        <div style="padding:30px;">${IsTheMaterailComments}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Is there Prana Fm site boards onsite</div>
      //        <div style="padding:30px;">${PranaFmBoardsOnSiteYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //        <div style="padding:30px;">${PranaFmBoardsOnSiteComments}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Are there caution signs put up onsite for Boom Lift operation</div>
      //        <div style="padding:30px;">${CautionSignsYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment</div>
      //        <div style="padding:30px;">${CaustionComments}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Are there caution signs put up around the civil working areas</div>
      //        <div style="padding:30px">${CautionCivilWorkYes}</div>
      //        <div style="padding:30px;background-color:#ADD8E6;">Comment</div>
      //        <div style="padding:30px;">${CautionCivilWorkComment}</div>

      //        <div style="padding:30px;background-color:#ADD8E6;">Project Quality of Works</div>
      //         <div style="padding:30px;">${ProjectQuality}</div>
          
      //        <div style="padding:30px;background-color:#ADD8E6;">Signature</div>
      //         <div style="padding:30px">${signature}</div>
      //        </div>
      //     `,
      //     attachmentPaths: [
      //       RNFS.DocumentDirectoryPath + '/test.jpg'
      //     ]
      //   })
      //     .then(success => console.log(success))
      //     .catch(err => console.log(err));
      console.log('It was clicked')

    }

    handleSignature = signature => {
      console.log(signature);
      this.setState({
          signature:signature
      })
    };
  

    render(){
      console.log(this.state);
      const {width, height} = Dimensions.get('window');
      const style = `.m-signature-pad--footer
        .button {
          background-color: red;
          color: #FFF;
        }`;
        return(
          <ScrollView contentContainerStyle={styles.container}>
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>HEALTH & SAFETY CHECK LIST</Text>
                      <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                 <View style={{marginVertical:5}}>
                    <Text style={{marginLeft:5}}>Site:</Text>    
                    <TextInput 
                        value={this.state.site}
                        onChangeText={(e)=>this.setState({site:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                       />
                 </View> 
                 <View style={{marginVertical:5}}>
                    <Text style={{marginLeft:5}}>Inspection Date:</Text>    
                    <TextInput 
                         value={this.state.inspectionDate}
                         onChangeText={(e)=>this.setState({inspectionDate:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                       />
                 </View> 
                 <View style={{marginVertical:5}}>
                    <Text style={{marginLeft:5}}>Client Details:</Text>    
                    <TextInput 
                         keyboardType="numeric"
                         value={this.state.ClientDetails}
                         onChangeText={(e)=>this.setState({ClientDetails:e})}
                        style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                       />
                 </View> 
             </View>
             <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                <Text style={{fontWeight:"bold",fontSize:15}}>COVID - 19 Protocol</Text>
                <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Face Mask On</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.Covid19Yes}
                                  onValueChange={(val) =>{
                                     const change= this.state.Covid19No.flip();

                                    this.setState({
                                      Covid19Yes:val,
                                    Covid19No:change
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
                        <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.Covid19Comment}
                             onChangeText={(val)=>this.setState({Covid19Comment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Screening</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.ScreeningYes}
                                  onValueChange={(val) =>{
                                      const change= this.state.ScreeningNo.flip();
                                    this.setState({ScreeningYes:val,
                                    ScreeningNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.ScreeningComment}
                             onChangeText={(val)=>this.setState({ScreeningComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Sanitization onsite</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.SanitizationOnsiteYes}
                                onValueChange={(val) =>{
                                  const change= this.state.SanitizationOnsiteNo.flip();
                                this.setState({ SanitizationOnsiteYes:val,
                                SanitizationOnsiteNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.SanitizationOnsiteComment}
                             onChangeText={(val)=>this.setState({SanitizationOnsiteComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Safe Distance between workers</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.SafeDistanceYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.SafeDistanceNo.flip();
                                   this.setState({ SafeDistanceYes:val,
                                   SafeDistanceNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.SafeDistanceComment}
                             onChangeText={(val)=>this.setState({ SafeDistanceComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
             </View>
             <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                <Text style={{fontWeight:'bold',fontSize:15}}>Safety Precautions Onsite</Text>
                <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Prana FM Safety Vests</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.PranaFmSafetyYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.PranaFmSafetyNo.flip(); 
                                  this.setState({ PranaFmSafetyYes:val,
                                   PranaFmSafetyNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                            value={this.state.PranaFmSafetyComment}
                            onChangeText={(val)=>this.setState({ PranaFmSafetyComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Hard Hat</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.HardHatYes}
                                 onValueChange={(val) =>{
                                     const change= this.state.HardHatNo.flip(); 
                                    this.setState({  HardHatYes:val,
                                    HardHatNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.HardHatComment}
                             onChangeText={(val)=>this.setState({HardHatComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Safety Shoes</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.SafetyShoesYes}
                                onValueChange={(val) =>{
                                   const change= this.state.SafetyShoesNo.flip(); 
                                  this.setState({SafetyShoesYes:val,
                                  SafetyShoesNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.SafetyShoesComment}
                             onChangeText={(val)=>this.setState({SafetyShoesComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Harnesses</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.HarnessesYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.HarnessesNo.flip(); 
                                   this.setState({HarnessesYes:val,
                                   HarnessesNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.HarnessesComments}
                             onChangeText={(val)=>this.setState({ HarnessesComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View >
                           <Text>All PPE precautions as per site requirements</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.APPYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.HarnessesNo.flip(); 
                                   this.setState({APPYes:val,
                                   APPNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.APPComments}
                             onChangeText={(val)=>this.setState({APPComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View >
                           <Text>Boom Lift Safety(Operation Training certification)</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.BoomLiftYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.BoomLiftNo.flip(); 
                                    this.setState({ BoomLiftYes:val,
                                    BoomLiftNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.BoomComments}
                             onChangeText={(val)=>this.setState({BoomComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View >
                           <Text>Safety File Onsite and Approved</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.SafetyFileYes}
                                  onValueChange={(val) =>{
                                     const change= this.state.SafetyFileNo.flip(); 
                                    this.setState({
                                    SafetyFileYes:val,
                                    SafetyFileNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.SafetyFileComments}
                             onChangeText={(val)=>this.setState({SafetyFileComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View >
                           <Text>Client Personnel Safety</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.ClientPersonnelYes}
                                   onValueChange={(val) =>{
                                       const change= this.state.ClientPersonnelNo.flip(); 
                                     this.setState({ClientPersonnelYes:val,
                                       ClientPersonnelNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.ClientPersonnelComments}
                             onChangeText={(val)=>this.setState({ClientPersonnelComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
                <View style={{marginVertical:5}}>
                       <View >
                           <Text>Drilling, Welding and Grinding - Precautions - Hot works permit</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.DrillingWeldingYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.DrillingWeldingNo.flip(); 
                                   this.setState({DrillingWeldingYes:val,
                                   DrillingWeldingNo:change
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
                       <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.DrillingWeldingComments}
                             onChangeText={(val)=>this.setState({DrillingWeldingComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                </View>
             </View>
             <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                 <Text style={{fontWeight:'bold',fontSize:15}}>Site</Text>
                 <View style={{marginVertical:5}}>
                   <View  >
                           <Text>Has the site been left clean</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.SiteBeenLeftYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.SiteBeenLeftNo.flip();
                                   this.setState({ SiteBeenLeftYes:val,
                                   SiteBeenLeftNo:change
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
                    <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.SiteBeenLeftComment}
                             onChangeText={(val)=>this.setState({SiteBeenLeftComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                 </View>
                 <View style={{marginVertical:5}}>
                   <View  >
                           <Text>have areas been marked with danger tape</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.HaveAreasYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.HaveAreasNo.flip();
                                   this.setState({HaveAreasYes:val,
                                   HaveAreasNo:change
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
                    <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.HaveAreasComment}
                             onChangeText={(val)=>this.setState({ HaveAreasComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                 </View>
                 <View style={{marginVertical:5}}>
                   <View  >
                           <Text>Is the materials/stock left secure onsite</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.IsTheMaterialYes}
                                 onValueChange={(val) =>{
                                      const change= this.state.IsTheMaterialNo.flip();
                                   this.setState({IsTheMaterialYes:val,
                                   IsTheMaterialNo:change
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
                    <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.IsTheMaterailComments}
                             onChangeText={(val)=>this.setState({ IsTheMaterailComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                 </View>
                 <View style={{marginVertical:5}}>
                   <View  >
                           <Text>Is there Prana FM site boards onsite</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.PranaFmBoardsOnSiteYes}
                                  onValueChange={(val) =>{
                                       const change= this.state.PranaFmBoardsOnSiteNo.flip();
                                    this.setState({ PranaFmBoardsOnSiteYes:val,
                                     PranaFmBoardsOnSiteNo:change
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
                    <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.PranaFmBoardsOnSiteComments}
                             onChangeText={(val)=>this.setState({PranaFmBoardsOnSiteComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                 </View>
                 <View style={{marginVertical:5}}>
                   <View  >
                           <Text>Are there caution signs put up onsite for Boom Lift operation</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.CautionSignsYes}
                                  onValueChange={(val) =>{
                                     const change= this.state.CaustionSignNo.flip();
                                    this.setState({ CautionSignsYes:val,
                                    CaustionSignNo:change
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
                    <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.CaustionComments}
                             onChangeText={(val)=>this.setState({CaustionComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                 </View>
                 <View style={{marginVertical:5}}>
                   <View  >
                           <Text>Are there caution signs put up around the civil working areas</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.CautionCivilWorkYes}
                                 onValueChange={(val) =>{
                                   
                                   const change= this.state.CautionCivilWorkNo.flip();
                                   this.setState({  CautionCivilWorkYes:val,
                                   CautionCivilWorkNo:change
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
                    <View style={{marginVertical:5}}>
                           <TextInput 
                             value={this.state.CautionCivilWorkComment}
                             onChangeText={(val)=>this.setState({CautionCivilWorkComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                 </View>
                 
              </View>
       
              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>




                  <Text style={{fontWeight:'bold'}}>Project Quality of Works</Text>

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
                  <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  <View style={{marginVertical:10}}>
                        <TextInput
                           value={this.state.ProjectQuality}
                           onChangeText={(e)=>this.setState({ProjectQuality:e})}
                           placeholder="Notes"
                          style={{backgroundColor:'#eeeff4',borderRadius:10,textAlignVertical: 'top'}}
                          numberOfLines={8}
                          multiline={true}
                        />
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

export default HealthSafetyChecklist;

