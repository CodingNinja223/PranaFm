import React,{Component} from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,Switch,Button,Alert,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNSmtpMailer from "react-native-smtp-mailer";
import RNFS from 'react-native-fs';
import Mailer from 'react-native-mail';
import auth from '@react-native-firebase/auth';
import YesNoBool from './YesNoBool';
class SprinklerPumpRoomCheckList extends Component{
    constructor(){
        super();
        this.state={
           site:'',
           inspectionDate:new Date().toLocaleString(),
           ClientDetail:'',
           ApprovedPump:'',
           ASIB:'',
           ScopeOfWorked:'',
           fuelTankYes:false,
           fuelTankNo:new YesNoBool(false),
           fuelTankPercentage:'',
           fuelTankComments:'',
           pumpRoomValveYes:false,
           pumpRoomValveNo:new YesNoBool(false),
           pumpRoomValvePercentage:'',
           pumpRoomValveComments:'',
           engineOilYes:false,
           engineOilNo:new YesNoBool(false),
           engineOilPercentage:'',
           engineOilComments:'',
           heatExchangeYes:false,
           heatExchangeNo:new YesNoBool(false),
           heatExchangePercentage:'',
           heatExchangeComments:'',
           tankSuctionYes:false,
           tankSuctionNo:new YesNoBool(false),
           tankSuctionPercentage:'',
           tankSuctionComments:'',
           tankInfillValvesYes:false,
           tankInfillValvesNo:new YesNoBool(false),
           tankInfillValvesPercentage:'',
           tankInfillValvesComments:'',
           tankLevelYes:false,
           tankLevelNo:new YesNoBool(false),
           tankLevelPercentage:'',
           tankLevelComments:'',
           deliverylineconnectedYes:false,
           deliverylineconnectedNo:new YesNoBool(false),
           deliverylineconnectedPercentage:'',
           deliverylineconnectedComments:'',
           tankFloatYes:false,
           tankFloatNo:new YesNoBool(false),
           tankFloatPercentage:'',
           tankFloatComments:'',
           batteryTerminalYes:false,
           batteryTerminalNo:new YesNoBool(false),
           batteryTerminalPercentage:'',
           batteryTerminalComments:'',
           lightsOnYes:false,
           lightsOnNo:new YesNoBool(false),
           lightsPercentage:'',
           lightsComments:'',
           startArrangementYes:false,
           startArrangementNo:new YesNoBool(false),
           startArrangementPercentage:'',
           startArrangementComments:'',
           autoStartYes:false,
           autoStartNo:new YesNoBool(false),
           autoStartPercentage:'',
           autoStartComments:'',
           blockPlansYes:false,
           blockPlansNo:new YesNoBool(false),
           blockPlansPercentage:'',
           blockPlansComments:'',
           pressureGaugesYes:false,
           pressureGaugesNo:new YesNoBool(false),
           pressureGaugesPercentage:'',
           pressureGaugesComments:'',
           flowSwitchYes:false,
           flowSwitchNo:new YesNoBool(false),
           flowSwitchPercentage:'',
           flowSwitchComments:'',
           supportsBeenYes:false,
           supportsBeenNo:new YesNoBool(false),
           supportBeenPercentage:'',
           supportBeenComments:'',
           exhaustSupportYes:false,
           exhaustSupportNo:new YesNoBool(false),
           exhaustSupportPercentage:'',
           exhaustSupportComment:'',
           paintingCompletedYes:false,
           paintingCompletedNo:new YesNoBool(false),
           paintingCompletedPercentage:'',
           paintingCompletedComments:'',
           coolingLineYes:false,
           coolingLineNo:new YesNoBool(false),
           coolingLinePercentage:'',
           coolingLineComments:'',
           pumpBeensecuredYes:false,
           pumpBeensecuredNo:new YesNoBool(false),
           pumpBeensecuredPercentage:'',
           pumpBeensecuredComments:'',
           dieselOnSiteYes:false,
           dieselOnSiteNo:new YesNoBool(false),
           dieselOnSitePercentage:'',
           dieselOnSiteComments:'',
           coolinglineInstalledYes:false,
           coolinglineInstalledNo:new YesNoBool(false),
           coolinglineInstalledPercentage:'',
           coolingLineInstalledComments:'',
           boltsLooseYes:false,
           boltsLooseNo:new YesNoBool(false),
           boltsLoosePercentage:'',
           boltsLooseComments:'',
           pumpOperationalYes:false,
           pumpOperationalNo:new YesNoBool(false),
           pumpOperationalPercentage:'',
           pumpOperationalComments:'',
           signageInstalledYes:false,
           signageInstalledNo:new YesNoBool(false),
           signageInstalledPercentage:'',
           signageInstalledComments:'',
           anyLeaksYes:false,
           anyLeaksNo:new YesNoBool(false),
           anyLeaksPercentage:'',
           anyLeaksComments:'',
           PlinthInstalledYes:false,
           PlinthInstalledNo:new YesNoBool(false),
           PlinthInstalledPercentage:'',
           PlinthInstalledComments:'',
           rainwaterGutterYes:false,
           rainwaterGutterNo:new YesNoBool(false),
           rainwaterGutterPercentage:'',
           rainwaterGutterComments:'',
           DBBoxYes:false,
           DBBoxNo:new YesNoBool(false),
           DBBoxPercentage:'',
           DBBOXComments:'',
           sprinklerProtectedYes:false,
           sprinklerProtectedNo:new YesNoBool(false),
           sprinklerProtectePercentage:'',
           sprinklerProtecteComments:'',
           TestCompletedPassYes:false,
           TestCompletedPassNo:new YesNoBool(false),
           TestCompletedPassPercentage:'',
           TestCompletedPassComments:'',
           PumpTestedYes:false,
           PumpTestedNo:new YesNoBool(false),
           PumpTestedPercentage:'',
           PumpTestedComments:'',
           allAsibTagsYes:false,
           allAsibTagsNo:new YesNoBool(false),
           allAsibTagsPercentage:'',
           allAsibTagsComments:'',
           Notes:'',
          selectedValue:'Select email'
        }
    }

    send=async()=>{

      const {
         site,
         inspectionDate,
         ClientDetail,
         ApprovedPump,
         ASIB,
         ScopeOfWorked,
         fuelTankYes,
         fuelTankPercentage,
         fuelTankComments,
         pumpRoomValveYes,
         pumpRoomValvePercentage,
         pumpRoomValveComments,
         engineOilYes,
         engineOilPercentage,
         engineOilComments,
         heatExchangeYes,
         heatExchangePercentage,
         heatExchangeComments,
         tankSuctionYes,
         tankSuctionPercentage,
         tankSuctionComments,
         tankInfillValvesYes,
         tankInfillValvesPercentage,
         tankInfillValvesComments,
         tankLevelYes,
         tankLevelPercentage,
         tankLevelComments,
         deliverylineconnectedYes,
         deliverylineconnectedPercentage,
         deliverylineconnectedComments,
         tankFloatYes,
         tankFloatPercentage,
         tankFloatComments,
         batteryTerminalYes,
         batteryTerminalPercentage,
         batteryTerminalComments,
         lightsOnYes,
         lightsPercentage,
         lightsComments,
         startArrangementYes,
         startArrangementPercentage,
         startArrangementComments,
         autoStartYes,
         autoStartPercentage,
         autoStartComments,
         blockPlansYes,
         blockPlansPercentage,
         blockPlansComments,
         pressureGaugesYes,
         pressureGaugesPercentage,
         pressureGaugesComments,
         flowSwitchYes,
         flowSwitchPercentage,
         flowSwitchComments,
         supportsBeenYes,
         supportBeenPercentage,
         supportBeenComments,
         exhaustSupportYes,
         exhaustSupportPercentage,
         exhaustSupportComment,
         paintingCompletedYes,
         paintingCompletedPercentage,
         paintingCompletedComments,
         coolingLineYes,
         coolingLinePercentage,
         coolingLineComments,
         pumpBeensecuredYes,
         pumpBeensecuredPercentage,
         pumpBeensecuredComments,
         dieselOnSiteYes,
         dieselOnSitePercentage,
         dieselOnSiteComments,
         coolinglineInstalledYes,
         coolinglineInstalledPercentage,
         coolingLineInstalledComments,
         boltsLooseYes,
         boltsLoosePercentage,
         boltsLooseComments,
         pumpOperationalYes,
         pumpOperationalPercentage,
         pumpOperationalComments,
         signageInstalledYes,
         signageInstalledPercentage,
         signageInstalledComments,
         anyLeaksYes,
         anyLeaksPercentage,
         anyLeaksComments,
         PlinthInstalledYes,
         PlinthInstalledPercentage,
         PlinthInstalledComments,
         rainwaterGutterYes,
         rainwaterGutterPercentage,
         rainwaterGutterComments,
         DBBoxYes,
         DBBoxPercentage,
         DBBOXComments,
         sprinklerProtectedYes,
         sprinklerProtectePercentage,
         sprinklerProtecteComments,
         TestCompletedPassYes,
         TestCompletedPassPercentage,
         TestCompletedPassComments,
         PumpTestedYes,
         PumpTestedPercentage,
         PumpTestedComments,
         allAsibTagsYes,
         allAsibTagsPercentage,
         allAsibTagsComments,
         Notes,
         selectedValue
      }=this.state;


      // await firestore().collection('Sprinkler pump room check list')
      // .add({
      //    site:site,
      //    inspectionDate:inspectionDate,
      //    ClientDetail:ClientDetail,
      //    ApprovedPump:ApprovedPump,
      //    ASIB:ASIB,
      //    ScopeOfWorked:ScopeOfWorked,
      //    fuelTankYes:fuelTankYes,
      //    fuelTankPercentage:fuelTankPercentage,
      //    fuelTankComments:fuelTankComments,
      //    pumpRoomValveYes:pumpRoomValveYes,
      //    pumpRoomValvePercentage:pumpRoomValvePercentage,
      //    pumpRoomValveComments:pumpRoomValveComments,
      //    engineOilYes:engineOilYes,
      //    engineOilPercentage:engineOilPercentage,
      //    engineOilComments:engineOilComments,
      //    heatExchangeYes:heatExchangeYes,
      //    heatExchangePercentage:heatExchangePercentage,
      //    heatExchangeComments:heatExchangeComments,
      //    tankSuctionYes:tankSuctionYes,
      //    tankSuctionPercentage:tankSuctionPercentage,
      //    tankSuctionComments:tankSuctionComments,
      //    tankInfillValvesYes:tankInfillValvesYes,
      //    tankInfillValvesPercentage:tankInfillValvesPercentage,
      //    tankInfillValvesComments:tankInfillValvesComments,
      //    tankLevelYes:tankLevelYes,
      //    tankLevelPercentage:tankLevelPercentage,
      //    tankLevelComments:tankLevelComments,
      //    deliverylineconnectedYes:deliverylineconnectedYes,
      //    deliverylineconnectedPercentage:deliverylineconnectedPercentage,
      //    deliverylineconnectedComments:deliverylineconnectedComments,
      //    tankFloatYes:tankFloatYes,
      //    tankFloatPercentage:tankFloatPercentage,
      //    tankFloatComments:tankFloatComments,
      //    batteryTerminalYes:batteryTerminalYes,
      //    batteryTerminalPercentage:batteryTerminalPercentage,
      //    batteryTerminalComments:batteryTerminalComments,
      //    lightsOnYes:lightsOnYes,
      //    lightsPercentage:lightsPercentage,
      //    lightsComments:lightsComments,
      //    startArrangementYes:startArrangementYes,
      //    startArrangementPercentage:startArrangementPercentage,
      //    startArrangementComments:startArrangementComments,
      //    autoStartYes:autoStartYes,
      //    autoStartPercentage:autoStartPercentage,
      //    autoStartComments:autoStartComments,
      //    blockPlansYes:blockPlansYes,
      //    blockPlansPercentage:blockPlansPercentage,
      //    blockPlansComments:blockPlansComments,
      //    pressureGaugesYes:pressureGaugesYes,
      //    pressureGaugesPercentage:pressureGaugesPercentage,
      //    pressureGaugesComments:pressureGaugesComments,
      //    flowSwitchYes: flowSwitchYes,
      //    flowSwitchPercentage:flowSwitchPercentage,
      //    flowSwitchComments:flowSwitchComments,
      //    supportsBeenYes:supportsBeenYes,
      //    supportBeenPercentage:supportBeenPercentage,
      //    supportBeenComments:supportBeenComments,
      //    exhaustSupportYes:exhaustSupportYes,
      //    exhaustSupportPercentage:exhaustSupportPercentage,
      //    exhaustSupportComment:exhaustSupportComment,
      //    paintingCompletedYes:paintingCompletedYes,
      //    paintingCompletedPercentage:paintingCompletedPercentage,
      //    paintingCompletedComments:paintingCompletedComments,
      //    coolingLineYes:coolingLineYes,
      //    coolingLinePercentage:coolingLinePercentage,
      //    coolingLineComments:coolingLineComments,
      //    pumpBeensecuredYes:pumpBeensecuredYes,
      //    pumpBeensecuredPercentage:pumpBeensecuredPercentage,
      //    pumpBeensecuredComments:pumpBeensecuredComments,
      //    dieselOnSiteYes:dieselOnSiteYes,
      //    dieselOnSitePercentage:dieselOnSitePercentage,
      //    dieselOnSiteComments:dieselOnSiteComments,
      //    coolinglineInstalledYes:coolinglineInstalledYes,
      //    coolinglineInstalledPercentage:coolinglineInstalledPercentage,
      //    coolingLineInstalledComments:coolingLineInstalledComments,
      //    boltsLooseYes:boltsLooseYes,
      //    boltsLoosePercentage:boltsLoosePercentage,
      //    boltsLooseComments:boltsLooseComments,
      //    pumpOperationalYes:pumpOperationalYes,
      //    pumpOperationalPercentage:pumpOperationalPercentage,
      //    pumpOperationalComments:pumpOperationalComments,
      //    signageInstalledYes:signageInstalledYes,
      //    signageInstalledPercentage:signageInstalledPercentage,
      //    signageInstalledComments:signageInstalledComments,
      //    anyLeaksYes:anyLeaksYes,
      //    anyLeaksPercentage:anyLeaksPercentage,
      //    anyLeaksComments: anyLeaksComments,
      //    PlinthInstalledYes:PlinthInstalledYes,
      //    PlinthInstalledPercentage:PlinthInstalledPercentage,
      //    PlinthInstalledComments:PlinthInstalledComments,
      //    rainwaterGutterYes:rainwaterGutterYes,
      //    rainwaterGutterPercentage:rainwaterGutterPercentage,
      //    rainwaterGutterComments:rainwaterGutterComments,
      //    DBBoxYes:DBBoxYes,
      //    DBBoxPercentage:DBBoxPercentage,
      //    DBBOXComments:DBBOXComments,
      //    sprinklerProtectedYes:sprinklerProtectedYes,
      //    sprinklerProtectePercentage:sprinklerProtectePercentage,
      //    sprinklerProtecteComments:sprinklerProtecteComments,
      //    TestCompletedPassYes:TestCompletedPassYes,
      //    TestCompletedPassPercentage:TestCompletedPassPercentage,
      //    TestCompletedPassComments:TestCompletedPassComments,
      //    PumpTestedYes:PumpTestedYes,
      //    PumpTestedPercentage:PumpTestedPercentage,
      //    PumpTestedComments:PumpTestedComments,
      //    allAsibTagsYes:allAsibTagsYes,
      //    allAsibTagsPercentage:allAsibTagsPercentage,
      //    allAsibTagsComments:allAsibTagsComments,
      //    Notes:Notes
      // })


     
      
     const user = auth().currentUser;

     Mailer.mail({
      subject: 'Sprinkler pump room checklist',
      recipients: [`${selectedValue}`],
      ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
      body: `
      <div style="border:1px solid black;border-radius:30px;">
      <h1>SPRINKLER INSTALLATION PUMP ROOM CHECK LIST</h1>

      <div style="padding:30px;background-color:#ADD8E6;">Site:</div>
      <div style="padding:30px;">${site}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Inspection Date:</div>
      <div style="paddine:30px;">${inspectionDate}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Client Details</div>
      <div style="padding:30px;">${ClientDetail}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Approved Pump Drawings</div>
      <div style="padding:30px;">${ApprovedPump}</div>
      <div style="padding:30px;background-color:#ADD8E6;">SANS-10287/ASIB</div>
      <div style="padding:30px;">${ASIB}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Scope of work approved</div>
      <div style="padding:30px;">${ScopeOfWorked}</div> 

      <h1>Sprinkler Installation Pump Room Checklist</>
      <div style="padding:30px;background-color:#ADD8E6;">Is the fuel tank full of diesel</div>
      <div style="padding:30px;">${this.state.fuelTankNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${fuelTankPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${fuelTankComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are all pump room valves in the correct operating position</div>
       <div style="padding:30px;">${this.state.pumpRoomValveNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${pumpRoomValvePercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="paddnig:30px;">${pumpRoomValveComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the engine oil full</div>
      <div style="padding:30px;">${this.state.engineOilNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${engineOilPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div div style="padding:30px;"> ${engineOilComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the heat exchange/ radiator</div>
      <div style="padding:30px;">${this.state.heatExchangeNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${heatExchangePercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${heatExchangeComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are the tank suction valves fully open</div>
      <div style="padding:30px;">${this.state.tankSuctionNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${tankSuctionPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${tankSuctionComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are the tank infill valves fully open</div>
       <div style="padding:30px;">${this.state.tankInfillValvesNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${tankInfillValvesPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${tankInfillValvesComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are the tank level indicator operational</div>
      <div style="padding:30px;">${this.state.tankLevelNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${tankLevelPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${tankLevelComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the delivery line connected</div>
      <div style="padding:30px;">${this.state.deliverylineconnectedNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${deliverylineconnectedPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${deliverylineconnectedComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are the tank float valves operational</div>
      <div style="padding:30px;">${this.state.tankFloatNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${tankFloatPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${tankFloatComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are the battery terminals secure</div>
      <div style="padding:30px;">${this.state.batteryTerminalNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${batteryTerminalPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div div style="padding:30px;">${batteryTerminalComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are the lights on the panel operational</div>
      <div style="padding:30px;">${this.state.lightsOnNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${lightsPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30;">${lightsComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are the battery terminals secure</div>
      <div style="padding:30px;">${this.state.batteryTerminalNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${batteryTerminalPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${batteryTerminalComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the auto - start arrangement fully operational</div>
      <div style="padding:30px;">${this.state.startArrangementNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
       <div style="padding:30px;">${startArrangementPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${startArrangementComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the auto - start chart installed</div>
      <div style="padding:30px;">${this.state.autoStartNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${autoStartPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${autoStartComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Have the block plans been installed</div>
      <div style="padding:30px;"> ${this.state.blockPlansNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${blockPlansPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${blockPlansComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Correct pressure gauges installed</div>
      <div style="padding:30px;">${this.state.pressureGaugesNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${pressureGaugesPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${pressureGaugesComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the flow switch installed</div>
      <div style="padding:30px;">${ this.state.flowSwitchNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${flowSwitchPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${flowSwitchComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Has all supports been installed</div>
      <div style="padding:30;">${this.state.supportsBeenNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${supportBeenPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${supportBeenComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the exhaust support installed</div>
      <div style="padding:30px;">${this.state.exhaustSupportNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${exhaustSupportPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${exhaustSupportComment}</div>

      <div style="padding:30px;background-color:#ADD8E6;">All painting completed</div>
      <div style="padding:30px;">${this.state.paintingCompletedNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${paintingCompletedPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${paintingCompletedComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the cooling line installed</div>
      <div style="padding:30px;">${this.state.coolingLineNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${coolingLinePercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${coolingLineComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Has the pump been secured with concrete</div>
      <div style="padding:30px;">${ this.state.pumpBeensecuredNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${pumpBeensecuredPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${pumpBeensecuredComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the fuel tank full of diesel</div>
      <div style="padding:30px;">${this.state.dieselOnSiteNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${dieselOnSitePercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${dieselOnSiteComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is there a cooling line installed</div>
      <div style="padding:30px;">${this.state.coolinglineInstalledNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;background-color:#ADD8E6;">
      <div style="padding:30px;">${coolinglineInstalledPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${coolingLineInstalledComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are any bolts loose or missing</div>
       <div style="padding:30px;">${this.state.boltsLooseNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${boltsLoosePercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${boltsLooseComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Is the jockey pump operational</div>
      <div style="padding:30px;">${this.state.pumpOperationalNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${pumpOperationalPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${pumpOperationalComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are all the signage installed and visible</div>
      <div style="padding:30px;">${this.state.signageInstalledNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${signageInstalledPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${signageInstalledComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Are there any leaks</div>
      <div style="padding:30px;">${this.state.anyLeaksNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${anyLeaksPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;"> ${anyLeaksComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Plinth installed</div>
      <div style="padding:30px;">${this.state.PlinthInstalledNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${PlinthInstalledPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${PlinthInstalledComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Rainwater gutter installed</div>
      <div style="padding:30px;">${this.state.rainwaterGutterNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${rainwaterGutterPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${rainwaterGutterComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">DB Box installed</div>
      <div style="padding:30px;">${this.state.DBBoxNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${DBBoxPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${DBBOXComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Sprinkler Protected</div>
      <div style="padding:30px;">${this.state.sprinklerProtectedNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${sprinklerProtectePercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${sprinklerProtecteComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Flow Test completed and passed</div>
      <div style="padding:30px;">${this.state.TestCompletedPassNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${TestCompletedPassPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${TestCompletedPassComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">Pump Tested and passed</div>
      <div style="padding:30px;">${this.state.PumpTestedNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${PumpTestedPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${PumpTestedComments}</div>

      <div style="padding:30px;background-color:#ADD8E6;">All ASIB Tags</div>
      <div style="padding:30px;">${this.state.allAsibTagsNo.value}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      <div style="padding:30px;">${allAsibTagsPercentage}</div>
      <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      <div style="padding:30px;">${allAsibTagsComments}</div>

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
      'Fire Detection Check List',
      'Form was sent'
   );
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
      //     htmlBody:`
      //     <div style="border:1px solid black;border-radius:30px;">
      //     <h1>SPRINKLER INSTALLATION PUMP ROOM CHECK LIST</h1>

      //     <div style="padding:30px;background-color:#ADD8E6;">Site:</div>
      //     <div style="padding:30px;">${site}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Inspection Date:</div>
      //     <div style="paddine:30px;">${inspectionDate}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Client Details</div>
      //     <div style="padding:30px;">${ClientDetail}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Approved Pump Drawings</div>
      //     <div style="padding:30px;">${ApprovedPump}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">SANS-10287/ASIB</div>
      //     <div style="padding:30px;">${ASIB}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Scope of work approved</div>
      //     <div style="padding:30px;">${ScopeOfWorked}</div> 

      //     <h1>Sprinkler Installation Pump Room Checklist</>
      //     <div style="padding:30px;background-color:#ADD8E6;">Is the fuel tank full of diesel</div>
      //     <div style="padding:30px;">${fuelTankYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${fuelTankPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${fuelTankComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are all pump room valves in the correct operating position</div>
      //      <div style="padding:30px;">${pumpRoomValveYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${pumpRoomValvePercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="paddnig:30px;">${pumpRoomValveComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the engine oil full</div>
      //     <div style="padding:30px;">${engineOilYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${engineOilPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div div style="padding:30px;"> ${engineOilComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the heat exchange/ radiator</div>
      //     <div style="padding:30px;">${heatExchangeYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${heatExchangePercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${heatExchangeComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are the tank suction valves fully open</div>
      //     <div style="padding:30px;">${tankSuctionYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${tankSuctionPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${tankSuctionComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are the tank infill valves fully open</div>
      //      <div style="padding:30px;">${tankInfillValvesYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${tankInfillValvesPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${tankInfillValvesComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are the tank level indicator operational</div>
      //     <div style="padding:30px;">${tankLevelYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${tankLevelPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${tankLevelComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the delivery line connected</div>
      //     <div style="padding:30px;">${deliverylineconnectedYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${deliverylineconnectedPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${deliverylineconnectedComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are the tank float valves operational</div>
      //     <div style="padding:30px;">${tankFloatYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${tankFloatPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${tankFloatComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are the battery terminals secure</div>
      //     <div style="padding:30px;">${batteryTerminalYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${batteryTerminalPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div div style="padding:30px;">${batteryTerminalComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are the lights on the panel operational</div>
      //     <div style="padding:30px;">${lightsOnYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${lightsPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30;">${lightsComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are the battery terminals secure</div>
      //     <div style="padding:30px;">${batteryTerminalYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${batteryTerminalPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${batteryTerminalComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the auto - start arrangement fully operational</div>
      //     <div style="padding:30px;">${startArrangementYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //      <div style="padding:30px;">${startArrangementPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${startArrangementComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the auto - start chart installed</div>
      //     <div style="padding:30px;">${autoStartYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${autoStartPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${autoStartComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Have the block plans been installed</div>
      //     <div style="padding:30px;"> ${blockPlansYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${blockPlansPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${blockPlansComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Correct pressure gauges installed</div>
      //     <div style="padding:30px;">${pressureGaugesYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${pressureGaugesPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${pressureGaugesComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the flow switch installed</div>
      //     <div style="padding:30px;">${flowSwitchYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${flowSwitchPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${flowSwitchComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Has all supports been installed</div>
      //     <div style="padding:30;">${supportsBeenYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${supportBeenPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${supportBeenComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the exhaust support installed</div>
      //     <div style="padding:30px;">${exhaustSupportYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${exhaustSupportPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${exhaustSupportComment}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">All painting completed</div>
      //     <div style="padding:30px;">${paintingCompletedYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${paintingCompletedPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${paintingCompletedComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the cooling line installed</div>
      //     <div style="padding:30px;">${coolingLineYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${coolingLinePercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${coolingLineComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Has the pump been secured with concrete</div>
      //     <div style="padding:30px;">${pumpBeensecuredYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${pumpBeensecuredPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${pumpBeensecuredComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the fuel tank full of diesel</div>
      //     <div style="padding:30px;">${fuelTankYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${pumpBeensecuredPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${pumpBeensecuredComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is there spare diesel onsite</div>
      //     <div style="padding:30px;">${dieselOnSiteYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${dieselOnSitePercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${dieselOnSiteComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is there a cooling line installed</div>
      //     <div style="padding:30px;">${coolinglineInstalledYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">
      //     <div style="padding:30px;">${coolinglineInstalledPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${coolingLineInstalledComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are any bolts loose or missing</div>
      //      <div style="padding:30px;">${boltsLooseYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${boltsLoosePercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${boltsLooseComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Is the jockey pump operational</div>
      //     <div style="padding:30px;">${pumpOperationalYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${pumpOperationalPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${pumpOperationalComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are all the signage installed and visible</div>
      //     <div style="padding:30px;">${signageInstalledYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${signageInstalledPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${signageInstalledComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Are there any leaks</div>
      //     <div style="padding:30px;">${anyLeaksYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${anyLeaksPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;"> ${anyLeaksComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Plinth installed</div>
      //     <div style="padding:30px;">${PlinthInstalledYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${PlinthInstalledPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${PlinthInstalledComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Rainwater gutter installed</div>
      //     <div style="padding:30px;">${rainwaterGutterYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${rainwaterGutterPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${rainwaterGutterComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">DB Box installed</div>
      //     <div style="padding:30px;">${DBBoxYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${DBBoxPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${DBBOXComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Sprinkler Protected</div>
      //     <div style="padding:30px;">${sprinklerProtectedYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${sprinklerProtectePercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${sprinklerProtecteComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Flow Test completed and passed</div>
      //     <div style="padding:30px;">${TestCompletedPassYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${TestCompletedPassPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${TestCompletedPassComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Pump Tested and passed</div>
      //     <div style="padding:30px;">${PumpTestedYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${PumpTestedPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${PumpTestedComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">All ASIB Tags</div>
      //     <div style="padding:30px;">${allAsibTagsYes}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Percentage</div>
      //     <div style="padding:30px;">${allAsibTagsPercentage}</div>
      //     <div style="padding:30px;background-color:#ADD8E6;">Comments</div>
      //     <div style="padding:30px;">${allAsibTagsComments}</div>

      //     <div style="padding:30px;background-color:#ADD8E6;">Notes</div>
      //     <div style="padding:30px;">${Notes}</div>
      //    </div>
          
          
          
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
                  <Text style={{fontWeight:'bold'}}>SPRINKLER INSTALLATION PUMP</Text>
                  <Text style={{fontWeight:'bold'}}>ROOM CHECK LIST</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/>
                   <View style={{marginVertical:5}}>
                        <Text>Site:</Text>
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
                             value={this.state.ClientDetail}
                             onChangeText={(e)=>this.setState({ClientDetail:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10}}
                            />
                   </View>
                   <View style={{marginVertical:5}}>
                        <Text>Approved Pump Drawings:</Text>
                        <TextInput 
                            value={this.state.ApprovedPump}
                            onChangeText={(e)=>this.setState({ApprovedPump:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10}}
                            />
                   </View>
                   <View style={{marginVertical:5}}>
                        <Text>SANS-10287 / ASIB:</Text>
                        <TextInput 
                             value={this.state.ASIB}
                             onChangeText={(e)=>this.setState({ASIB:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10}}
                            />
                   </View>
                   <View style={{marginVertical:5}}>
                        <Text>Scope of work Approved:</Text>
                        <TextInput 
                             value={this.state.ScopeOfWorked}
                             onChangeText={(e)=>this.setState({ScopeOfWorked:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10}}
                            />
                   </View>
              </View>

              <View style={{padding:10,
                            backgroundColor:'white',
                            width:width,
                            marginVertical:10
                            }}>
                  <Text style={{fontWeight:'bold',fontSize:15}}>Sprinkler Installation Pump Room Checklist</Text>
                  <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                         <Text>Is the fuel tank full of diesel</Text>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                       value={this.state.fuelTankYes}
                                       onValueChange={(val) =>{
                                          const change= this.state.fuelTankNo.flip();    
                                       this.setState({fuelTankYes:val,
                                          fuelTankNo:change
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
                             value={this.state.fuelTankPercentage}
                             onChangeText={(val)=>this.setState({fuelTankPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.fuelTankComments}
                             onChangeText={(val)=>this.setState({fuelTankComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                          <View>
                          <Text>Are all pump room valves in</Text>
                           <Text>the correct operating position</Text>
                          </View>
                           
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.pumpRoomValveYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.pumpRoomValveNo.flip();        
                                 this.setState({pumpRoomValveYes:val,
                                    pumpRoomValveNo:change
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
                             value={this.state.pumpRoomValvePercentage}
                             onChangeText={(val)=>this.setState({pumpRoomValvePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             valkue={this.state.pumpRoomValveComments}
                             onChangeText={(val)=>this.setState({ pumpRoomValveComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Is the engine oil full</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.engineOilYes}
                                onValueChange={(val) =>{
                                 const change= this.state.engineOilNo.flip();       
                              this.setState({engineOilYes:val,
                                 engineOilNo:change
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
                             value={this.state.engineOilPercentage}
                             onChangeText={(val)=>this.setState({engineOilPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.engineOilComments}
                             onChangeText={(val)=>this.setState({engineOilComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                               <Text>Is the heat exchange </Text>  
                               <Text>/ radiator full</Text>
                           </View>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.heatExchangeYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.heatExchangeNo.flip();       
   
                                 this.setState({ heatExchangeYes:val,
                                    heatExchangeNo:change
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
                             value={this.state.heatExchangePercentage}
                             onChangeText={(val)=>this.setState({ heatExchangePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.heatExchangeComments}
                             onChangeText={(val)=>this.setState({ heatExchangeComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                                <Text>Are the tank suction</Text>
                                <Text>valves fully open</Text>  
                           </View>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.tankSuctionYes}
                                onValueChange={(val) =>{
                                 const change= this.state.tankSuctionNo.flip();            
                               this.setState({tankSuctionYes:val,
                                 tankSuctionNo:change
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
                             value={this.state.tankSuctionPercentage}
                             onChangeText={(val)=>this.setState({tankSuctionPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.tankSuctionComments}
                             onChangeText={(val)=>this.setState({tankSuctionComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                                <Text>Are the tank infill</Text>
                                <Text>valves fully open</Text>  
                           </View>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.tankInfillValvesYes}
                                onValueChange={(val) =>{
                                 const change= this.state.tankInfillValvesNo.flip();   
                                 this.setState({tankInfillValvesYes:val,
                                    tankInfillValvesNo:change
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
                             value={this.state.tankInfillValvesPercentage}
                             onChangeText={(val)=>this.setState({ tankInfillValvesPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.tankInfillValvesComments}
                             onChangeText={val=>this.setState({tankInfillValvesComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                               <Text>Are the tank</Text>  
                               <Text>level indicator operational</Text>
                           </View>
                           
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.tankLevelYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.tankLevelNo.flip();      
                                 this.setState({tankLevelYes:val,
                                    tankLevelNo:change
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
                             value={this.state.tankLevelPercentage}
                             onChangeText={(val)=>this.setState({tankLevelPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.tankLevelComments}
                             onChangeText={val=>this.setState({tankLevelComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Is the delivery line connected</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.deliverylineconnectedYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.deliverylineconnectedNo.flip();     
                                 this.setState({deliverylineconnectedYes:val,
                                    deliverylineconnectedNo:change
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
                             value={this.state.deliverylineconnectedPercentage}
                             onChangeText={(val)=>this.setState({deliverylineconnectedPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.deliverylineconnectedComments}
                             onChangeText={(val)=>this.setState({deliverylineconnectedComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                           <Text>Are the tank float</Text> 
                           <Text>valves operational</Text>
                           </View>
                          
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.tankFloatYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.tankFloatNo.flip();      
                                 this.setState({tankFloatYes:val,
                                    tankFloatNo:change
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
                             value={this.state.tankFloatPercentage}
                             onChangeText={(val)=>this.setState({tankFloatPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.tankFloatComments}
                             onChangeText={(val)=>this.setState({tankFloatComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                            <Text>Are the battery</Text>
                            <Text>terminals secure</Text> 
                           </View>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.batteryTerminalYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.batteryTerminalNo.flip();       
                                 this.setState({batteryTerminalYes:val,
                                    batteryTerminalNo:change
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
                             value={this.state.batteryTerminalPercentage}
                             onChangeText={(val)=>this.setState({  batteryTerminalPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.batteryTerminalComments}
                             onChangeText={(val)=>this.setState({ batteryTerminalComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                                <Text>Are the lights on</Text>
                                <Text>the panel operational</Text> 
                           </View>
                            
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.lightsOnYes}
                                   onValueChange={(val) =>{
                                    const change= this.state.lightsOnNo.flip();            
                                    this.setState({ lightsOnYes:val,
                                       lightsOnNo:change
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
                             value={this.state.lightsPercentage}
                             onChangeText={(val)=>this.setState({lightsPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.lightsComments}
                             onChangeText={(val)=>this.setState({lightsComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                          <View>
                          <Text>Is the auto - start arrangement</Text>
                           <Text> fully operational</Text>  
                          </View>
                           
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.startArrangementYes}
                                  onValueChange={(val) =>{
                                 const change= this.state.startArrangementNo.flip();   
                                 this.setState({startArrangementYes:val,
                                    startArrangementNo:change
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
                             value={this.state.startArrangementPercentage}
                             onChangeText={(val)=>this.setState({startArrangementPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.startArrangementComments}
                             onChangeText={(val)=>this.setState({startArrangementComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                           <Text>Is the auto -</Text>  
                           <Text>start chart installed</Text>
                           </View>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.autoStartYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.autoStartNo.flip();       
                                    this.setState({ autoStartYes:val,
                                       autoStartNo:change
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
                             value={this.state.autoStartPercentage}
                             onChangeText={(val)=>this.setState({ autoStartPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.autoStartComments}
                             onChangeText={(val)=>this.setState({ autoStartComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                              <Text>Have the block plans been installed with logo?</Text> 
                              {/* <Text>plans been installed</Text> */}
                           </View>
                          
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.blockPlansYes}
                                   onValueChange={(val) =>{
                                    const change= this.state.blockPlansNo.flip();            
                                    this.setState({blockPlansYes:val,
                                       blockPlansNo:change
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
                             value={this.state.blockPlansPercentage}
                             onChangeText={(val)=>this.setState({blockPlansPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.blockPlansComments}
                             onChangeText={(val)=>this.setState({blockPlansComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                               <Text>Correct pressure</Text>
                               <Text>gauges installed</Text>  
                           </View>
                          
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.pressureGaugesYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.pressureGaugesNo.flip(); 
                                    this.setState({ pressureGaugesYes:val,
                                       pressureGaugesNo:change
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
                             value={this.state.pressureGaugesPercentage}
                             onChangeText={(val)=>this.setState({ pressureGaugesPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.pressureGaugesComments}
                             onChangeText={(val)=>this.setState({pressureGaugesComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                                <Text>Is the flow</Text>
                                <Text>switch installed</Text> 
                           </View>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.flowSwitchYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.flowSwitchNo.flip(); 
                                    this.setState({flowSwitchYes:val,
                                       flowSwitchNo:change
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
                             value={this.state.flowSwitchPercentage}
                             onChangeText={(val)=>this.setState({ flowSwitchPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.flowSwitchComments}
                             onChangeText={(val)=>this.setState({ flowSwitchComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                          <View>
                           <Text>Has all supports</Text>  
                           <Text>been installed</Text> 
                         </View> 
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.supportsBeenYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.supportsBeenNo.flip();    
                                 this.setState({supportsBeenYes:val,
                                    supportsBeenNo:change
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
                             value={this.state.supportBeenPercentage}
                             onChangeText={(val)=>this.setState({supportBeenPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.supportBeenComments}
                             onChangeText={(val)=>this.setState({  supportBeenComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                              <Text>Is the exhaust</Text> 
                              <Text>support installed</Text>
                           </View>
                           
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                     value={this.state.exhaustSupportYes}
                                     onValueChange={(val) =>{
                                       const change= this.state.exhaustSupportNo.flip();     
                                    this.setState({ exhaustSupportYes:val,
                                       exhaustSupportNo:change
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
                             value={this.state.exhaustSupportPercentage}
                             onChangeText={(val)=>this.setState({exhaustSupportPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.exhaustSupportComment}
                             onChangeText={(val)=>this.setState({exhaustSupportComment:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>All painting completed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.paintingCompletedYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.paintingCompletedNo.flip();     
                                    this.setState({paintingCompletedYes:val,
                                       paintingCompletedNo:change
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
                             value={this.state.paintingCompletedPercentage}
                             onChangeText={(val)=>this.setState({paintingCompletedPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.paintingCompletedComments}
                             onChangeText={(val)=>this.setState({paintingCompletedComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Is the cooling line installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.coolingLineYes}
                                   onValueChange={(val) =>{
                                    const change= this.state.coolingLineNo.flip();     
                                  this.setState({  coolingLineYes:val,
                                    coolingLineNo:change
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
                             value={this.state.coolingLinePercentage}
                             onChangeText={val=>this.setState({coolingLinePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.coolingLineComments}
                             onChangeText={(val)=>this.setState({coolingLineComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                          <View>
                            <Text>Has the pump been secured</Text>
                            <Text>with concrete</Text>  
                          </View> 
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                     value={this.state.pumpBeensecuredYes}
                                     onValueChange={(val) =>{
                                       const change= this.state.pumpBeensecuredNo.flip();      
                                    this.setState({ pumpBeensecuredYes:val,
                                       pumpBeensecuredNo:change
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
                             value={this.state.pumpBeensecuredPercentage}
                             onChangeText={val=>this.setState({pumpBeensecuredPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.pumpBeensecuredComments}
                             onChangeText={(val)=>this.setState({ pumpBeensecuredComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                        
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Is there spare diesel onsite</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.dieselOnSiteYes}
                                  onValueChange={(val) =>{
                                     
                                    const change= this.state.dieselOnSiteNo.flip();     
                                 this.setState({ dieselOnSiteYes:val,
                                    dieselOnSiteNo:change
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
                             value={this.state.dieselOnSitePercentage}
                             onChangeText={(val)=>this.setState({dieselOnSitePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.dieselOnSiteComments}
                             onChangeText={(val)=>this.setState({dieselOnSiteComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Is there a cooling line installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.coolinglineInstalledYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.coolinglineInstalledNo.flip();      
                                 this.setState({  coolinglineInstalledYes:val,
                                    coolinglineInstalledNo:change
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
                             value={this.state.coolinglineInstalledPercentage}
                             onChangeText={(val)=>this.setState({ coolinglineInstalledPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.coolingLineInstalledComments}
                             onChangeText={val=>this.setState({coolingLineInstalledComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Are any bolts loose or missing</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.boltsLooseYes}
                                onValueChange={(val) =>{
                                 const change= this.state.boltsLooseNo.flip();        
                              this.setState({ boltsLooseYes:val,
                                 boltsLooseNo:change
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
                             value={this.state.boltsLoosePercentage}
                             onChangeText={val=>this.setState({boltsLoosePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.boltsLooseComments}
                             onChangeText={(val)=>this.setState({boltsLooseComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Is the jockey pump operational</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.pumpOperationalYes}
                                onValueChange={(val) =>{
                                 const change= this.state.pumpOperationalNo.flip();           
                                    this.setState({ pumpOperationalYes:val,
                                       pumpOperationalNo:change
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
                             value={this.state.pumpOperationalPercentage}
                             onChangeText={(val)=>this.setState({  pumpOperationalPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.pumpOperationalComments}
                             onChangeText={(val)=>this.setState({pumpOperationalComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <View>
                                <Text>Are all signage installed</Text>
                                <Text>and visible</Text>  
                           </View>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.signageInstalledYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.signageInstalledNo.flip();       
                                 this.setState({ signageInstalledYes:val,
                                    signageInstalledNo:change
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
                             value={this.state.signageInstalledPercentage}
                             onChangeText={(val)=>this.setState({signageInstalledPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.signageInstalledComments}
                             onChangeText={(val)=>this.setState({signageInstalledComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Are there any leaks</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                     value={this.state.anyLeaksYes}
                                     onValueChange={(val) =>{
                                       const change= this.state.anyLeaksNo.flip();      
                                       this.setState({anyLeaksYes:val,
                                          anyLeaksNo:change
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
                             value={this.state.anyLeaksPercentage}
                             onChangeText={(val)=>this.setState({anyLeaksPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.anyLeaksComments}
                             onChangeText={(val)=>this.setState({anyLeaksComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Plinth installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.PlinthInstalledYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.PlinthInstalledNo.flip();      
                                 this.setState({ PlinthInstalledYes:val,
                                    PlinthInstalledNo:change
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
                             value={this.state.PlinthInstalledPercentage}
                             onChangeText={(val)=>this.setState({ PlinthInstalledPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.PlinthInstalledComments}
                             onChangeText={(val)=>this.setState({PlinthInstalledComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Rainwater gutter installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.rainwaterGutterYes}
                                   onValueChange={(val) =>{
                                    const change= this.state.rainwaterGutterNo.flip(); 
                                   this.setState({rainwaterGutterYes:val,
                                    rainwaterGutterNo:change
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
                             value={this.state.rainwaterGutterPercentage}
                             onChangeText={val=>this.setState({rainwaterGutterPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.rainwaterGutterComments}
                             onChangeText={(val)=>this.setState({rainwaterGutterComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>DB Box installed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.DBBoxYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.DBBoxNo.flip();     
                                 this.setState({ DBBoxYes:val,
                                    DBBoxNo:change
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
                             value={this.state.DBBoxPercentage}
                             onChangeText={(val)=>this.setState({DBBoxPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.DBBOXComments}
                             onChangeText={(val)=>this.setState({DBBOXComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Sprinkler Protected</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.sprinklerProtectedYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.sprinklerProtectedNo.flip();    
                                 this.setState({ sprinklerProtectedYes:val,
                                    sprinklerProtectedNo:change
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
                             value={this.state.sprinklerProtectePercentage}
                             onChangeText={(val)=>this.setState({sprinklerProtectePercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.sprinklerProtecteComments}
                             onChangeText={(val)=>this.setState({ sprinklerProtecteComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Flow Test completed and passed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                     value={this.state.TestCompletedPassYes}
                                     onValueChange={(val) =>{
                                       const change= this.state.TestCompletedPassNo.flip();        
                                       this.setState({ TestCompletedPassYes:val,
                                          TestCompletedPassNo:change
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
                             value={this.state.TestCompletedPassPercentage}
                             onChangeText={val=>this.setState({TestCompletedPassPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.TestCompletedPassComments}
                             onChangeText={val=>this.setState({TestCompletedPassComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>Pump Tested and passed</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.PumpTestedYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.PumpTestedNo.flip();     
                                    this.setState({ PumpTestedYes:val,
                                       PumpTestedNo:change
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
                             value={this.state.PumpTestedPercentage}
                             onChangeText={(val)=>this.setState({PumpTestedPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.PumpTestedComments}
                             onChangeText={val=>this.setState({ PumpTestedComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                   <View style={{marginVertical:5}}>
                       <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:5}}>
                           <Text>All Tags SANS/ASIB</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.allAsibTagsYes}
                                onValueChange={(val) =>{
                                 const change= this.state.allAsibTagsNo.flip();       
                                 this.setState({allAsibTagsYes:val,
                                    allAsibTagsNo:change
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
                             value={this.state.allAsibTagsPercentage}
                             onChangeText={(val)=>this.setState({allAsibTagsPercentage:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        <View style={{marginVertical:5}}>
                           <Text style={{fontWeight:'bold'}}>Comments</Text>
                           <TextInput 
                             value={this.state.allAsibTagsComments}
                             onChangeText={(val)=>this.setState({allAsibTagsComments:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                           />
                        </View>
                        </View>
                       <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                   </View>
                  
                   <View style={{marginVertical:10}}>
                        <Text style={{fontWeight:'bold'}}>Notes:</Text>
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

export default SprinklerPumpRoomCheckList;