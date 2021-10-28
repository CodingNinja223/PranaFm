import React,{Component} from 'react';
import {View,Text,StyleSheet,ScrollView,TextInput,Switch,Button,Alert,Dimensions,Picker} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import RNSmtpMailer from "react-native-smtp-mailer";
import auth from '@react-native-firebase/auth';
import Mailer from 'react-native-mail';
import YesNoBool from './YesNoBool';



class FireAuditChecklist extends Component{
    constructor(){
        super();
        this.state={
            date:new Date().toLocaleString(),
            auditSite:'',
            clientContactDetail:'',
            RiskCategory:'',
            DesignDensity:'',
            DesignPressure:'',
            DesignFlows:'',
            WaterSupply:'',
            FireSprinklerYes: false,
            FireSprinklerNo:new YesNoBool(false),
            FireGasYes:false,
            FireGasNo:new YesNoBool(false),
            FireDetectionYes:false,
            FireDetectionNo:new YesNoBool(false),
            FireDetectionSystemYes:false,
            FireDetectionSystemNo:new YesNoBool(false),
            FireHydrantYes:false,
            FireHydrantYes1:false,
            FireHydrant1No:new YesNoBool(false),
            FireHydrantNo:new YesNoBool(false),
            FirePumpsYes:false,
            FirePumpsNo:new YesNoBool(false),
            FireWaterTanksYes:false,
            FireWaterTanksNo:new YesNoBool(false),
            FireSeperationYes:false,
            FireSeperationNo:new YesNoBool(false),
            FireEscapeDoorsYes:false,
            FireEscapeDoorsNo:new YesNoBool(false),
            FireEscapeDoorsPushYes:false,
            FireEscapeDoorsPushNo:new YesNoBool(false),
            FireExitProcedureYes:false,
            FireExitProcedureNo:new YesNoBool(false),
            FireExitRoutesYes:false,
            FireExiteRoutesNo:new YesNoBool(false),
            FoamSystemYes:false,
            FoamSystemNo:new YesNoBool(false),
            ventilationSystemYes:false,
            ventilationSystemNo:new YesNoBool(false),
            FireExtinguishersYes:false,
            FireExtinguishersNo:new YesNoBool(false),
            FireExtinguishersdate:new Date().toLocaleString(),
            FireExtinguishersquantity:'',
            DCPYes:false,
            DCPNo:new YesNoBool(false),
            DCPDate:new Date().toLocaleString(),
            DCPQuantity:'',
            DCP9Yes:false,
            DCP9No:new YesNoBool(false),
            DCP9Date:new Date().toLocaleString(),
            DCP9Quantity:'',
            CO2Yes:false,
            CO2No:new YesNoBool(false),
            CO2Date:new Date().toLocaleString(),
            CO2Quantity:'',
            fireCabinetYes:false,
            fireCabinetNo:new YesNoBool(false),
            fireCabinetDate:new Date().toLocaleString(),
            fireCabinetQuantity:'',
            FireHoseReelsYes:false,
            FireHoseReelsNo:new YesNoBool(false),
            FireHoseReelsDate:new Date().toLocaleString(),
            FireHoseReelsQuantity:'',
            FireHydrantYes:false,
            FireHydrantNo:new YesNoBool(false),
            FireHydrantDate:new Date().toLocaleString(),
            FireHydrantQuantity:'',
            layFlatHosesYes:false,
            layFlatHosesNo:new YesNoBool(false),
            layFlatHosesDate:new Date().toLocaleString(),
            layFlatHosesQuantity:'',
            BoxesYes:false,
            BoxesNo:new YesNoBool(false),
            PressureYes:false,
            PressureNo:new YesNoBool(false),
            AccessibilityEquipmentYes:false,
            AccessibilityEquipmentNo:new YesNoBool(false),
            FireRingMainsYes:false,
            FireRingMainsNo:new YesNoBool(false),
            FireRegisterYes:false,
            FireRegisterNo:new YesNoBool(false),
            FireAidKitsYes:false,
            FireAidkitsNo:new YesNoBool(false),
            FireAidKitsQuantity:'',
            FireProceduresYes:false,
            FireProcedureNo:new YesNoBool(false),
            AssemblyPointsYes:false,
            AssemblyPointsNo:new YesNoBool(false),
            AssemblyPointsQuantity:'',
            smokingAreasYes:false,
            smokingAreasNo:new YesNoBool(false),
            smokingAreasQuantity:'',
            pipeIdentification:'',
            condition:'',
            sprinklerHeadsYes:false,
            sprinklerHeadsNo:new YesNoBool(false),
            cleanYes:false,
            cleanNo:new YesNoBool(false),
            SprinklerHeadType:'',
            SprinklerPressureYes:false,
            SprinklerPressureNo:new YesNoBool(false),
            SprinklerKPA:'',
            SprinklerValvesYes:false,
            SprinklerValvesNo:new YesNoBool(false),
            ServiceDate:new Date().toLocaleString(),
            SparesBoxYes:false,
            SpareBoxNo:new YesNoBool(false),
            SprinklerBlocksPlanYes:false,
            SprinklerBlocksPlanNo:new YesNoBool(false),
            SprinklerPumpYes:false,
            SprinklerPumpNo:new YesNoBool(false),
            TankYes:false,
            TankNo:new YesNoBool(false),
            SpecifyPumpYes:false,
            SpecifyPumpNo:new YesNoBool(false),
            StorageHeight:'',
            roofHeight:'',
            ExistingYes:false,
            ExistingNo:new YesNoBool(false),
            Quantity:'',
            ExistingDYes:false,
            ExistingDNo:new YesNoBool(false),
            ReceivingAreasYes:false,
            ReceivingAreasNo:new YesNoBool(false),
            StorageShedsYes:false,
            StorageShedsNo:new YesNoBool(false),
            PackagingAreasYes:false,
            PackagingAreasNo:new YesNoBool(false),
            OrdinaryHazard:'',
            HighHazard:'',
            StorageShedsYes:false,
            StorageShedsNo:new YesNoBool(false),
            AddressableSystemYes:false,
            AddressableSystemNo:new YesNoBool(false),
            BeamDetectionYes:false,
            BeamdetectionNo:new YesNoBool(false),
            VestaSystemYes:false,
            VestaSystemNo:new YesNoBool(false),
            ServerRoomYes:false,
            ServerRoomNo:new YesNoBool(false),
            BoilerRoomYes:false,
            BoilerRoomNo:new YesNoBool(false),
            TransformerRoomYes:false,
            TransformerRoomNo:new YesNoBool(false),
            GeneratorRoomYes:false,
            GeneratorRoomNo:new YesNoBool(false),
            OtherYes:false,
            OtherNo:new YesNoBool(false),
            SafetyYes:false,
            SafetyNo:new YesNoBool(false),
            ABSYes:false,
            ABSNo:new YesNoBool(false),
            PhotoLuminescentYes:false,
            PhotoLuminescentNo:new YesNoBool(false),
            AdequateYes:false,
            AdequateNo:new YesNoBool(false),
            stackingHeightYes:false,
            stackingHeightNo:new YesNoBool(false),
            freeStandingYes:false,
            freesStandingNo:new YesNoBool(false),
            BlockStackingYes:false,
            BlockStackingNo:new YesNoBool(false),
            RackSelfYes:false,
            RackSelfNo:new YesNoBool(false),
            PalletStackingYes:false,
            PalletStackingNo:new YesNoBool(false),
            DemarcationYes:false,
            DemarcationNo:new YesNoBool(false),
            Electrical:'',
            DbBoxCondition:'',
            ElectricalNotes:'',
            LightsYes:'',
            LightsNo:'',
            CoveredYes:false,
            CoveredNo:new YesNoBool(false),
            LEDYes:false,
            LEDNo:new YesNoBool(false),
            BuildingStructureType:'',
            HouseKeepCondition:false,
            HouseKeepConditionNo:new YesNoBool(false),
            DistanceToNearest:'',
            ServiceDateSprinkler:new Date().toLocaleString(),
            selectedValue:'Select email'
          }
    }


   

   sendForm=async()=>{
      const {selectedValue}=this.state;
      // await firestore().collection('Fire Audit checklist')
      // .add({
      //   date: this.state.date,
      //   auditSite:this.state.auditSite,
      //   clientContactDetail:this.state.clientContactDetail,
      //   RiskCategory:this.state.RiskCategory,
      //   DesignDensity:this.state.DesignDensity,
      //   DesignPressure:this.state.DesignPressure,
      //   DesignFlows:this.state.DesignFlows,
      //   WaterSupply:this.state.WaterSupply,
      //   FireSprinklerYes:this.state.FireSprinklerYes,
      //   FireGasYes:this.state.FireGasYes,
      //   FireDetectionNo:this.state.FireDetectionNo,
      //   FireHydrantYes:this.state.FireHydrantYes,
      //   FirePumpsYes:this.state.FirePumpsYes,
      //   FireWaterTanksYes:this.state.FireWaterTanksYes,
      //   FireSeperationYes:this.state.FireSeperationYes,
      //   FireEscapeDoorsYes:this.state.FireEscapeDoorsYes,
      //   FireEscapeDoorsPushYes:this.state.FireEscapeDoorsPushYes,
      //   FireExitProcedureYes:this.state.FireExitProcedureYes,
      //   FireExitRoutesYes:this.state.FireExitRoutesYes,
      //   FoamSystemYes:this.state.FoamSystemYes,
      //   ventilationSystemYes:this.state.ventilationSystemYes,
      //   FireExtinguishersYes:this.state.FireExtinguishersYes,
      //   FireExtinguishersdate:this.state.FireExtinguishersdate,
      //   FireExtinguishersquantity:this.state.FireExtinguishersquantity,
      //   DCPYes:this.state.DCPYes,
      //   DCPDate:this.state.DCPDate,
      //   DCPQuantity:this.state.DCPQuantity,
      //   DCP9Yes:this.state.DCP9Yes,
      //   DCP9Date:this.state.DCPDate,
      //   DCP9Quantity:this.state.DCP9Quantity,
      //   CO2Yes:this.state.CO2Yes,
      //   CO2Date:this.state.CO2Date,
      //   CO2Quantity:this.state.CO2Quantity,
      //   fireCabinetYes:this.state.fireCabinetYes,
      //   fireCabinetDate:this.state.fireCabinetDate,
      //   fireCabinetQuantity:this.state.fireCabinetQuantity,
      //   FireHoseReelsYes:this.state.FireHoseReelsYes,
      //   FireHoseReelsDate:this.state.FireHoseReelsDate,
      //   FireHoseReelsQuantity:this.state.FireHoseReelsQuantity,
      //   FireHydrantYes:this.state.FireHydrantYes,
      //   FireHydrantDate:this.state.FireHydrantDate,
      //   FireHydrantQuantity:this.state.FireHydrantQuantity,
      //   layFlatHosesYes:this.state.layFlatHosesYes,
      //   layFlatHosesDate:this.state.layFlatHosesDate,
      //   layFlatHosesQuantity:this.state.layFlatHosesQuantity,
      //   BoxesYes:this.state.BoxesYes,
      //   PressureYes:this.state.PressureYes,
      //   AccessibilityEquipmentYes:this.state.AccessibilityEquipmentYes,
      //   FireRingMainsYes:this.state.FireRingMainsYes,
      //   FireRegisterYes:this.state.FireRegisterYes,
      //   FireAidKitsYes:this.state.FireAidKitsYes,
      //   FireAidKitsQuantity:this.state.FireAidKitsQuantity,
      //   FireProceduresYes:this.state.FireProceduresYes,
      //   AssemblyPointsYes:this.state.AssemblyPointsYes,
      //   AssemblyPointsQuantity:this.state.AssemblyPointsQuantity,
      //   smokingAreasYes:this.state.smokingAreasYes,
      //   smokingAreasQuantity:this.state.smokingAreasQuantity,
      //   pipeIdentification:this.state.pipeIdentification,
      //   condition:this.state.condition,
      //   sprinklerHeadsYes:this.state.sprinklerHeadsYes,
      //   cleanYes:this.state.cleanYes,
      //   SprinklerHeadType:this.state.SprinklerHeadType,
      //   SprinklerPressureYes:this.state.SprinklerPressureYes,
      //   SprinklerKPA:this.state.SprinklerKPA,
      //   SprinklerValvesYes:this.state.SprinklerValvesYes,
      //   ServiceDate:this.state.ServiceDate,
      //   SparesBoxYes:this.state.SparesBoxYes,
      //   SprinklerBlocksPlanYes:this.state.SprinklerBlocksPlanYes,
      //   SprinklerPumpYes:this.state.SprinklerPumpYes,
      //   SprinklerPumpHouse:this.state.ServiceDateSprinkler,
      //   TankYes:this.state.TankYes,
      //   SpecifyPumpYes:this.state.SpecifyPumpYes,
      //   StorageHeight:this.state.StorageHeight,
      //   roofHeight:this.state.roofHeight,
      //   ExistingYes:this.state.ExistingYes,
      //   Quantity:this.state.Quantity,
      //   ExistingDYes:this.state.ExistingYes,
      //   ReceivingAreasYes:this.state.ReceivingAreasYes,
      //   StorageShedsYes:this.state.StorageShedsYes,
      //   PackagingAreasYes:this.state.PackagingAreasYes,
      //   OrdinaryHazard:this.state.OrdinaryHazard,
      //   HighHazard:this.state.HighHazard,
      //   StorageShedsYes:this.state.StorageShedsYes,
      //   StorageShedsNo:this.state.StorageShedsNo,
      //   AddressableSystemYes:this.state.AddressableSystemYes,
      //   BeamDetectionYes:this.state.BeamDetectionYes,
      //   VestaSystemYes:this.state.VestaSystemYes,
      //   ServerRoomYes:this.state.ServerRoomYes,
      //   BoilerRoomYes:this.state.BoilerRoomYes,
      //   TransformerRoomYes:this.state.TransformerRoomYes,
      //   GeneratorRoomYes:this.state.GeneratorRoomYes,
      //   OtherYes:this.state.OtherYes,
      //   FireDetectionSystemYes:this.state.FireDetectionSystemYes
      // })


      Mailer.mail({
        subject: 'Fire audit checklist',
        recipients: [`${selectedValue}`],
        ccRecipients: [`${(selectedValue ==='projectsJHB@pranaFM.com' ? 'energy@pranaFM.com, mariska@pranaFM.com, Laura@pranafM.com': selectedValue ==='projectsKZN@pranaFM.com' ? 'energy@pranaFM.com, anand@pranaFM.com':selectedValue ==='projectsCTN@pranaFM.com' ? 'energy@pranaFM.com, mahomed@pranaFM.com': null )}`],
        body:  `
        <div style="border:1px solid black;border-radius:30px;"> 
        <h1 style="text-align:center;">Fire Audit Checklist</h1>
        <h1  style="text-align:center;">Comprehensive Audit Report Checklist</h1>
        <div style="padding:30px;background-color:#ADD8E6;">
         <h4>Audit Site</h4>
        </div>
        <div style="padding:30px">
         ${this.state.auditSite}
        </div>
        <div style="padding:30px;background-color:#ADD8E6;">
        <h4>Audit Date</h4>
        </div>
        <div style="padding:30px">
        ${this.state.date}
        </div>

        <div style="padding:30px;background-color:#ADD8E6;">
        <h4>Client Contact Details</h4>
        </div>

        <div style="padding:30px">
        ${this.state.clientContactDetail}
        </div>

        <h1 style="text-align:center;">Checklist</h1>

        <div style="padding:30px;background-color:#ADD8E6;">
        <h4>Risk Category</h4>
        </div>
        <div style="padding:30px">
        ${this.state.RiskCategory}
        </div>
        <div style="padding:30px;background-color:#ADD8E6;">
        <h4>Design Density</h4>
        </div>
        <div style="padding:30px">
        ${this.state.DesignDensity}
        </div>
        <div style="padding:30px;background-color:#ADD8E6;">
        <h4>Design Pressure</h4>
        </div>
        <div style="padding:30px">
        ${this.state.DesignPressure}
        </div>
        <div style="padding:30px;background-color:#ADD8E6;">
        <h4>Design flows litres per min:</h4>
        </div>
        <div style="padding:30px">
        ${this.state.DesignFlows}
        </div>
        <div style="padding:30px;background-color:#ADD8E6;">
        <h4>Water Supply</h4>
        </div>
        <div style="padding:30px">
        ${this.state.WaterSupply}
        </div>

        <h1 style="text-align:center;">Fire Protection</h1>
        
        <h4>Fire Sprinkler System</h4>: ${this.state.FireSprinklerNo.value}
        <h4>Fire Gas Suppression System: ${this.state.FireGasNo.value}
        <h4>Fire Detection System</h4>: ${this.state.FireDetectionNo.value}
        <h4>Fire hydrant</h4>: ${this.state.FireHydrant1No.value}
        <h4>Fire Pumps</h4>: ${this.state.FirePumpsNo.value}
        <h4>Fire Water Tanks</h4>: ${this.state.FireWaterTanksNo.value}
        <h4>Fire Seperation</h4>: ${this.state.FireSeperationNo.value}
        <h4>Fire Escape Doors</h4>: ${this.state.FireEscapeDoorsNo.value}
        <h4>Fire Escape Doors Push Bar</h4>: ${this.state.FireEscapeDoorsPushNo.value}
        <h4>Fire Exit Procedure</h4>: ${this.state.FireExitProcedureNo.value}
        <h4>Fire Exit Routes</h4>: ${this.state.FireExiteRoutesNo.value}
        <h4>Foam System</h4>: ${this.state.FoamSystemNo.value}
        <h4>Ventilation System</h4>:${this.state.ventilationSystemNo.value}


        <h1>Portable Fire Protection</h1>
        <h4>Fire Extinguishers</h4>:${this.state.FireExtinguishersNo.value}
        <h4>Date</h4>:${this.state.FireExtinguishersdate}
        <h4>Quantity</h4>:${this.state.FireExtinguishersquantity}

        <h4>4.5kg DCP</h4>:${this.state.DCPNo.value}
        <h4>Date</h4>: ${this.state.DCPDate}
        <h4>Quantity</h4>: ${this.state.DCPQuantity}

        <h4>9kg DCP</h4>: ${this.state.DCP9No.value}
        <h4>Date</h4>: ${this.state.DCPDate}
        <h4>Quantity</h4>: ${this.state.DCP9Quantity}      
        
        <h4>CO2</h4>:${this.state.CO2No.value}
        <h4>Date</h4>:${this.state.CO2Date}
        <h4>Quantity</h4>:${this.state.CO2Quantity}

        <h4>Fire Cabinets</h4>:${this.state.fireCabinetNo.value}
        <h4>Date</h4:${this.state.fireCabinetDate}
        <h4>Quantity</h4>: ${this.state.fireCabinetQuantity}

        <h4>Fire Hose Reels</h4>:${this.state.FireHoseReelsNo.value}
        <h4>Date</h4>:${this.state.FireHoseReelsDate}
        <h4>Quantity</h4>:${this.state.FireHoseReelsQuantity}

        <h4>Fire Hydrants</h4>: ${this.state.FireHydrantNo.value}
        <h4>Date</h4>:${this.state.FireHydrantDate}
        <h4>Quantity</h4>:${this.state.FireHydrantQuantity}

        <h4>layflat Hoses</h4>: ${this.state.layFlatHosesNo.value}
        <h4>Date</h4>: ${this.state.layFlatHosesDate}
        <h4>Quantity</h4>:${this.state.layFlatHosesQuantity}

        <h4>Boxes</h4>:${this.state.BoxesNo.value}
        <h4>Pressure Guages</h4>: ${this.state.PressureNo.value}
        <h4>Accessibility to equipment</h4>: ${this.state.AccessibilityEquipmentNo.value}
        <h4>Fire Ring mains</h4>: ${this.state.FireRingMainsNo.value}
        <h4>Fire Register</h4>: ${this.state.FireRegisterNo.value}
        <h4>Fire Aid kits</h4>: ${this.state.FireAidkitsNo.value}
        <h4>Quantity</h4>: ${this.state.FireAidKitsQuantity}
        <h4>Fire Procedure</h4>: ${this.state.FireProcedureNo.value}
        <h4>Assembly Points</h4>:${this.state.AssemblyPointsNo.value}
        <h4>Quantity</h4>:${this.state.AssemblyPointsQuantity}
        <h4>Smoking Areas</h4>: ${this.state.smokingAreasNo.value}

        <h1>CheckList</h1>
        <h4>Piping Identification</h4>:${this.state.pipeIdentification}
        <h4>Condition</h4>: ${this.state.condition}
        <h4>Sprinkler Heads</h4>: ${this.state.sprinklerHeadsNo.value}
        <h4>Clean<h4>:${this.state.cleanNo.value}
        <h4>Sprinkler Head Type</h4>:${this.state.SprinklerHeadType}
        <h4>Sprinkler pressure test required</h4>:${this.state.SprinklerPressureNo.value}
        <h4>Sprinkler KPA</h4>: ${this.state.SprinklerKPA}
        <h4>Sprinkler Valves</h4>: ${this.state.SprinklerValvesNo.value}
        <h4>Service Date</h4>: ${this.state.ServiceDate}
        <h4>Spare Box</h4>: ${this.state.SpareBoxNo.value}
        <h4>Sprinkler Block Plans</h4>: ${this.state.SprinklerBlocksPlanNo.value}
        <h4>Sprinkler Pump House</h4>: ${this.state.SprinklerPumpNo.value}
        <h4>Service Date</h4>:${this.state.ServiceDateSprinkler}
        <h4>Tank</h4>:${this.state.TankNo.value}
        <h4>Specify Pump and Tank make and Condition</h4>:${this.state.SpecifyPumpNo.value}
        <h4>Storage Height</h4>:${this.state.StorageHeight}
        <h4>Roof Height</h4>:${this.state.roofHeight}
        <h4>Existing adjoining doorways to offices, Ablutions,First Aid, Canteen, Store Rooms, Consumable Stores</h4>:${this.state.ExistingNo.value}
        <h4>Quantity</h4>:${this.state.Quantity}
        <h4>Existing:Despatch Areas</h4>: ${this.state.ExistingDNo.value}
        <h4>Recieving Areas</h4>:${this.state.ReceivingAreasNo.value}
        <h4>Storage Sheds</h4>:${this.state.StorageShedsNo.value}
        <h4>Packaging Areas</h4>:${this.state.AddressableSystemNo.value}
        
        <h1>All above that are not in the main building/ premises that will require protection</h1>
        <h4>Ordinary hazard<h4>:${this.state.OrdinaryHazard}
        <h4>High Hazard</h4>: ${this.state.HighHazard}

        <h1>Fire Detection System</h1>
        <h4>Fire Detection System</h4>: ${this.state.FireDetectionSystemNo.value}
        <h4>Addressable System</h4>: ${this.state.AddressableSystemNo.value}
        <h4>Beam Detection</h4>: ${this.state.BeamdetectionNo.value}
        <h4>Vesta System</h4>: ${this.state.VestaSystemNo.value}

        <h1>Gas Suppression System in the following Areas</h1>
        <h4>Server Room</h4>:${this.state.ServerRoomNo.value}
        <h4>Boiler room</h4>:${this.state.BoilerRoomNo.value}
        <h4>Transformer Room</h4>:${this.state.TransformerRoomNo.value}
        <h4>Generator Room</h4>: ${this.state.GeneratorRoomNo.value}
        <h4>Other</h4>:${this.state.OtherNo.value}
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
        'Fire audit checklist',
        'Form was sent'
      )



      // const user = auth().currentUser;
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
      //     htmlBody: `
      //     <div style="border:1px solid black;border-radius:30px;"> 
      //     <h1 style="text-align:center;">Fire Audit Checklist</h1>
      //     <h1  style="text-align:center;">Comprehensive Audit Report Checklist</h1>
      //     <div style="padding:30px;background-color:#ADD8E6;">
      //      <h4>Audit Site</h4>
      //     </div>
      //     <div style="padding:30px">
      //      ${this.state.auditSite}
      //     </div>
      //     <div style="padding:30px;background-color:#ADD8E6;">
      //     <h4>Audit Date</h4>
      //     </div>
      //     <div style="padding:30px">
      //     ${this.state.date}
      //     </div>

      //     <div style="padding:30px;background-color:#ADD8E6;">
      //     <h4>Client Contact Details</h4>
      //     </div>

      //     <div style="padding:30px">
      //     ${this.state.clientContactDetail}
      //     </div>

      //     <h1 style="text-align:center;">Checklist</h1>

      //     <div style="padding:30px;background-color:#ADD8E6;">
      //     <h4>Risk Category</h4>
      //     </div>
      //     <div style="padding:30px">
      //     ${this.state.RiskCategory}
      //     </div>
      //     <div style="padding:30px;background-color:#ADD8E6;">
      //     <h4>Design Density</h4>
      //     </div>
      //     <div style="padding:30px">
      //     ${this.state.DesignDensity}
      //     </div>
      //     <div style="padding:30px;background-color:#ADD8E6;">
      //     <h4>Design Pressure</h4>
      //     </div>
      //     <div style="padding:30px">
      //     ${this.state.DesignPressure}
      //     </div>
      //     <div style="padding:30px;background-color:#ADD8E6;">
      //     <h4>Design flows litres per min:</h4>
      //     </div>
      //     <div style="padding:30px">
      //     ${this.state.DesignFlows}
      //     </div>
      //     <div style="padding:30px;background-color:#ADD8E6;">
      //     <h4>Water Supply</h4>
      //     </div>
      //     <div style="padding:30px">
      //     ${this.state.WaterSupply}
      //     </div>

      //     <h1 style="text-align:center;">Fire Protection</h1>
          
      //     <h4>Fire Sprinkler System</h4>: ${this.state.FireSprinklerYes}
      //     <h4>Fire Gas Suppression System: ${this.state.FireGasYes}
      //     <h4>Fire Detection System</h4>: ${this.state.FireDetectionNo}
      //     <h4>Fire hydrant</h4>: ${this.state.FireHydrantYes}
      //     <h4>Fire Pumps</h4>: ${this.state.FirePumpsYes}
      //     <h4>Fire Water Tanks</h4>: ${this.state.FireWaterTanksYes}
      //     <h4>Fire Seperation</h4>: ${this.state.FireSeperationYes}
      //     <h4>Fire Escape Doors</h4>: ${this.state.FireEscapeDoorsYes}
      //     <h4>Fire Escape Doors Push Bar</h4>: ${this.state.FireEscapeDoorsPushYes}
      //     <h4>Fire Exit Procedure</h4>: ${this.state.FireExitProcedureYes}
      //     <h4>Fire Exit Routes</h4>: ${this.state.FireExitRoutesYes}
      //     <h4>Foam System</h4>: ${this.state.FoamSystemYes}
      //     <h4>Ventilation System</h4>:${this.state.ventilationSystemYes}


      //     <h1>Portable Fire Protection</h1>
      //     <h4>Fire Extinguishers</h4>:${this.state.FireExtinguishersYes}
      //     <h4>Date</h4>:${this.state.FireExtinguishersdate}
      //     <h4>Quantity</h4>:${this.state.FireExtinguishersquantity}

      //     <h4>4.5kg DCP</h4>:${this.state.DCPYes}
      //     <h4>Date</h4>: ${this.state.DCPDate}
      //     <h4>Quantity</h4>: ${this.state.DCPQuantity}

      //     <h4>9kg DCP</h4>: ${this.state.DCP9Yes}
      //     <h4>Date</h4>: ${this.state.DCPDate}
      //     <h4>Quantity</h4>: ${this.state.DCP9Quantity}      
          
      //     <h4>CO2</h4>:${this.state.CO2Yes}
      //     <h4>Date</h4>:${this.state.CO2Date}
      //     <h4>Quantity</h4>:${this.state.CO2Quantity}

      //     <h4>Fire Cabinets</h4>:${this.state.fireCabinetYes}
      //     <h4>Date</h4:${this.state.fireCabinetDate}
      //     <h4>Quantity</h4>: ${this.state.fireCabinetQuantity}

      //     <h4>Fire Hose Reels</h4>:${this.state.FireHoseReelsYes}
      //     <h4>Date</h4>:${this.state.FireHoseReelsDate}
      //     <h4>Quantity</h4>:${this.state.FireHoseReelsQuantity}

      //     <h4>Fire Hydrants</h4>: ${this.state.FireHydrantYes}
      //     <h4>Date</h4>:${this.state.FireHydrantDate}
      //     <h4>Quantity</h4>:${this.state.FireHydrantQuantity}

      //     <h4>layflat Hoses</h4>: ${this.state.layFlatHosesNo}
      //     <h4>Date</h4>: ${this.state.layFlatHosesDate}
      //     <h4>Quantity</h4>:${this.state.layFlatHosesQuantity}

      //     <h4>Boxes</h4>:${this.state.BoxesYes}
      //     <h4>Pressure Guages</h4>: ${this.state.PressureYes}
      //     <h4>Accessibility to equipment</h4>: ${this.state.AccessibilityEquipmentYes}
      //     <h4>Fire Ring mains</h4>: ${this.state.FireRingMainsYes}
      //     <h4>Fire Register</h4>: ${this.state.FireRegisterYes}
      //     <h4>Fire Aid kits</h4>: ${this.state.FireAidKitsYes}
      //     <h4>Quantity</h4>: ${this.state.FireAidKitsQuantity}
      //     <h4>Fire Procedure</h4>: ${this.state.FireProceduresYes}
      //     <h4>Assembly Points</h4>:${this.state.AssemblyPointsYes}
      //     <h4>Quantity</h4>:${this.state.AssemblyPointsQuantity}
      //     <h4>Smoking Areas</h4>: ${this.state.smokingAreasYes}

      //     <h1>CheckList</h1>
      //     <h4>Piping Identification</h4>:${this.state.pipeIdentification}
      //     <h4>Condition</h4>: ${this.state.condition}
      //     <h4>Sprinkler Heads</h4>: ${this.state.sprinklerHeadsYes}
      //     <h4>Clean<h4>:${this.state.cleanYes}
      //     <h4>Sprinkler Head Type</h4>:${this.state.SprinklerHeadType}
      //     <h4>Sprinkler pressure test required</h4>:${this.state.SprinklerPressureYes}
      //     <h4>Sprinkler KPA</h4>: ${this.state.SprinklerKPA}
      //     <h4>Sprinkler Valves</h4>: ${this.state.SprinklerValvesYes}
      //     <h4>Service Date</h4>: ${this.state.ServiceDate}
      //     <h4>Spare Box</h4>: ${this.state.SparesBoxYes}
      //     <h4>Sprinkler Block Plans</h4>: ${this.state.SprinklerBlocksPlanYes}
      //     <h4>Sprinkler Pump House</h4>: ${this.state.SprinklerPumpYes}
      //     <h4>Service Date</h4>:${this.state.ServiceDateSprinkler}
      //     <h4>Tank</h4>:${this.state.TankYes}
      //     <h4>Specify Pump and Tank make and Condition</h4>:${this.state.SpecifyPumpYes}
      //     <h4>Storage Height</h4>:${this.state.StorageHeight}
      //     <h4>Roof Height</h4>:${this.state.roofHeight}
      //     <h4>Existing adjoining doorways to offices, Ablutions,First Aid, Canteen, Store Rooms, Consumable Stores</h4>:${this.state.ExistingYes}
      //     <h4>Quantity</h4>:${this.state.Quantity}
      //     <h4>Existing:Despatch Areas</h4>: ${this.state.ExistingYes}
      //     <h4>Recieving Areas</h4>:${this.state.ReceivingAreasYes}
      //     <h4>Storage Sheds</h4>:${this.state.StorageShedsYes}
      //     <h4>Packaging Areas</h4>:${this.state.AddressableSystemYes}
          
      //     <h1>All above that are not in the main building/ premises that will require protection</h1>
      //     <h4>Ordinary hazard<h4>:${this.state.OrdinaryHazard}
      //     <h4>High Hazard</h4>: ${this.state.HighHazard}

      //     <h1>Fire Detection System</h1>
      //     <h4>Fire Detection System</h4>: ${this.state.FireDetectionSystemYes}
      //     <h4>Addressable System</h4>: ${this.state.AddressableSystemYes}
      //     <h4>Beam Detection</h4>: ${this.state.BeamDetectionYes}
      //     <h4>Vesta System</h4>: ${this.state.VestaSystemYes}

      //     <h1>Gas Suppression System in the following Areas</h1>
      //     <h4>Server Room</h4>:${this.state.ServerRoomYes}
      //     <h4>Boiler room</h4>:${this.state.BoilerRoomYes}
      //     <h4>Transformer Room</h4>:${this.state.TransformerRoomYes}
      //     <h4>Generator Room</h4>: ${this.state.GeneratorRoomYes}
      //     <h4>Other</h4>:${this.state.OtherYes}
      //     </div>
      //     `,
      //     attachmentPaths: [
      //       RNFS.DocumentDirectoryPath + '/test.jpg'
      //     ], 
      //   })
      //     .then(success => console.log(success))
      //     .catch(err => console.log(err));
      console.log('It was clicked')
   }

    render(){
      console.log(this.state.FireDetectionNo.value);
      const {width, height} = Dimensions.get('window')
        return(
          <ScrollView contentContainerStyle={styles.container}>
              <View style={{
                       padding:10,
                       backgroundColor:'white',
                       width:width,
                       marginVertical:10
              }}>
                 <Text style={{fontWeight:'bold',fontSize:15}}>Comprehensive Audit Report Checklist</Text>
                 <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  <View style={{marginVertical:5}}>
                      <Text style={{marginLeft:3,marginVertical:3}}>Audit Site:</Text>
                      <TextInput 
                       value={this.state.auditSite}
                       onChangeText={(val)=>this.setState({auditSite:val})}
                       style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text style={{marginLeft:3}}>Audit Date:</Text>
                      <TextInput
                       value={this.state.date}
                        onChangeText={(val)=>this.setState({date:val})}
                        style={{backgroundColor:'#006bb4',borderRadius:10}}
                      />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text style={{marginLeft:3,marginVertical:3}}>Client Contact Details:</Text>
                      <TextInput 
                         keyboardType="numeric"
                      value={this.state.clientContactDetail}
                      onChangeText={(val)=>this.setState({clientContactDetail:val})}
                      style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                  </View>
              </View>
              <View style={{
                        padding:10,
                        backgroundColor:'white',
                        width:width,
                        marginVertical:10
              }}>
                 <Text style={{fontWeight:'bold',fontSize:15}}>Checklist</Text>
                 <View style={{backgroundColor:'black',width:width,height:1}}/>
                  <View style={{marginVertical:5}}>
                      <Text style={{marginLeft:3,marginVertical:3}}>Risk Category:</Text>
                      <TextInput 
                       value={this.state.RiskCategory}
                       onChangeText={(val=>this.setState({RiskCategory:val}))}
                      style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text style={{marginLeft:3,marginVertical:3}}>Design Density:</Text>
                      <TextInput 
                        value={this.state.DesignDensity}
                        onChangeText={(val=>this.setState({DesignDensity:val}))}
                       style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text style={{marginLeft:3,marginVertical:3}}>Design Pressure:</Text>
                      <TextInput 
                       value={this.state.DesignPressure}
                       onChangeText={val=>this.setState({DesignPressure:val})}
                     style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text style={{marginLeft:3,marginVertical:3}}>Design flows litres per min:</Text>
                      <TextInput 
                        value={this.state.DesignFlows}
                        onChangeText={val=>this.setState({DesignFlows:val})}
                     style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                  </View>
                  <View style={{marginVertical:5}}>
                      <Text style={{marginLeft:3,marginVertical:3}}>Water Supply:</Text>
                      <TextInput 
                      value={this.state.WaterSupply}
                      onChangeText={val=>this.setState({WaterSupply:val})}
                     style={{backgroundColor:'#006bb4',borderRadius:10}}
                    />
                  </View>
              </View>
              <View style={{
                     padding:10,
                     backgroundColor:'white',
                     width:width,
                     marginVertical:10
              }}>
                 <Text style={{fontSize:15,fontWeight:'bold'}}>Fire Protection</Text>
                 <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Sprinkler System</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireSprinklerYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.FireSprinklerNo.flip();
                                   console.log(change,"its changed")
                                   this.setState({
                                     FireSprinklerYes:val,
                                     FireSprinklerNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
  
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Gas Suppression System</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.FireGasYes}
                                  onValueChange={(val) => {
                                   const change= this.state.FireGasNo.flip();
                                    this.setState({
                                      FireGasYes:val,
                                      FireGasNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Detection System</Text>
                         <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireDetectionYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.FireDetectionNo.flip();
                                   this.setState({
                                     FireDetectionYes:val,
                                     FireDetectionNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Hydrant</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.FireHydrantYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.FireHydrant1No.flip();
                                    this.setState({
                                      FireHydrantYes:val,
                                      FireHydrant1No:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Pumps</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FirePumpsYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.FirePumpsNo.flip();
                                   this.setState({
                                     FirePumpsYes:val,
                                     FirePumpsNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Water Tanks</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireWaterTanksYes}
                                 onValueChange={(val) =>{
                                     const change= this.state.FireWaterTanksNo.flip();
                                   this.setState({
                                     FireWaterTanksYes:val,
                                     FireWaterTanksNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Seperation</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.FireSeperationYes}
                                  onValueChange={(val) =>{
                                   const change= this.state.FireSeperationNo.flip();
                                    this.setState({
                                      FireSeperationYes:val,
                                      FireSeperationNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Escape Doors</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.FireEscapeDoorsYes}
                                   onValueChange={(val) =>{
                                    const change= this.state.FireEscapeDoorsNo.flip();

                                    this.setState({
                                      FireEscapeDoorsYes:val,
                                      FireEscapeDoorsNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Escape Doors Push Bar</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireEscapeDoorsPushYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.FireEscapeDoorsPushNo.flip();
                                   this.setState({
                                     FireEscapeDoorsPushYes:val,
                                    FireEscapeDoorsPushNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
  
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Exit Procedures</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireExitProcedureYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.FireExitProcedureNo.flip();

                                   this.setState({
                                     FireExitProcedureYes:val,
                                     FireExitProcedureNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>

                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Exit Routes</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.FireExitRoutesYes}
                                onValueChange={(val) =>{
                                 const change= this.state.FireExiteRoutesNo.flip();
                                  this.setState({
                                    FireExitRoutesYes:val,
                                    FireExiteRoutesNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Foam System</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.FoamSystemYes}
                                  onValueChange={(val) =>{
                                  const change= this.state.FoamSystemNo.flip();
                                  this.setState({
                                    FoamSystemYes:val,
                                    FoamSystemNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/>
  
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Ventilation System</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.ventilationSystemYes}
                                 onValueChange={(val) =>{
                                  const change= this.state.ventilationSystemNo.flip();
                                   this.setState({
                                   ventilationSystemYes:val,
                                   ventilationSystemNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
              </View>
              <View style={{
                       padding:10,
                       backgroundColor:'white',
                       width:width,
                       marginVertical:10
              }}>
                 <Text style={{fontWeight:'bold'}}>Portable Fire Protection</Text>
                 <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                 <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Extinguishers</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireExtinguishersYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.FireExtinguishersNo.flip();

                                   this.setState({
                                   FireExtinguishersYes:val,
                                   FireExtinguishersNo:change
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
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <TextInput
                              value={this.state.FireExtinguishersdate}
                              onChangeText={(val)=>{                                
                                this.setState({
                                  FireExtinguishersdate:val
                                })
                              }}
                              style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="Date"
                            />
                        </View>  
                        <View>
                            <TextInput
                               value={this.state.FireExtinguishersquantity}
                               onChangeText={(val)=>{
                                this.setState({
                                  FireExtinguishersquantity:val,
                          
                                })
                               
                               
                               }}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>4.5kg  DCP</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.DCPYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.DCPNo.flip();              
                                    this.setState({DCPYes:val,
                                    DCPNo:change
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
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <TextInput
                               value={this.state.DCPDate}
                               onChangeText={(val)=>this.setState({DCPDate:val})}
                              style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="Date"
                            />
                        </View>  
                        <View>
                            <TextInput
                               value={this.state.DCPQuantity}
                               onChangeText={(val)=>this.setState({DCPQuantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View> 
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>9kg DCP</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.DCP9Yes}
                                onValueChange={(val) =>{
                                  const change= this.state.DCP9No.flip();  
                                  
                                  
                                this.setState({ 
                                  DCP9Yes:val,
                                  DCP9No:change
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
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <TextInput
                              value={this.state.DCP9Date}
                              onChangeText={(val)=>this.setState({DCP9Date:val})} 
                              style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="Date"
                            />
                        </View>  
                        <View>
                            <TextInput
                                value={this.state.DCP9Quantity}
                                onChangeText={(val)=>this.setState({ DCP9Quantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>CO2</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.CO2Yes}
                                 onValueChange={(val) =>{
                                    const change= this.state.CO2No.flip();  
  
                                   this.setState({
                                     CO2Yes:val,
                                   CO2No:change
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
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <TextInput
                               value={this.state.CO2Date}
                               onChangeText={(val)=>this.setState({CO2Date:val})}
                              style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="Date"
                            />
                        </View>  
                        <View>
                            <TextInput
                                value={this.state.CO2Quantity}
                                onChangeText={(val)=>this.setState({CO2Quantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View> 
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Cabinets</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.fireCabinetYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.fireCabinetNo.flip();  
                           
                                   this.setState({
                                     fireCabinetYes:val,
                                   fireCabinetNo:change
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
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <TextInput
                              value={this.state.fireCabinetDate}
                              onChangeText={(val)=>this.setState({fireCabinetDate:val})}
                              style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="Date"
                            />
                        </View>  
                        <View>
                            <TextInput
                                value={this.state.fireCabinetQuantity}
                                onChangeText={(val)=>this.setState({fireCabinetQuantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Hose Reels</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.FireHoseReelsYes}
                                onValueChange={(val) =>{
                                   const change= this.state.FireHoseReelsNo.flip(); 

                                  
                                  this.setState({
                                    FireHoseReelsYes:val,
                                    FireHoseReelsNo:change
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
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <TextInput
                               value={this.state.FireHoseReelsDate}
                               onChangeText={(val)=>this.setState({ FireHoseReelsDate:val})}
                              style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="Date"
                            />
                        </View>  
                        <View>
                            <TextInput
                               value={this.state.FireHoseReelsQuantity}
                               onChangeText={(val)=>this.setState({FireHoseReelsQuantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View> 
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Hydrants</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireHydrantYes1}
                                 onValueChange={(val) =>{
                                   const change= this.state.FireHydrantNo.flip();                
                                   this.setState({
                                     FireHydrantYes1:val,
                                     FireHydrantNo:change
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
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <TextInput
                               value={this.state.FireHydrantDate}
                               onChangeText={(val)=>this.setState({FireHydrantDate:val})}
                              style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="Date"
                            />
                        </View>  
                        <View>
                            <TextInput
                                value={this.state.FireHydrantQuantity}
                                onChangeText={(val)=>this.setState({ FireHydrantQuantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Layflat Hoses</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.layFlatHosesYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.layFlatHosesNo.flip();           
                                   
                                   this.setState({
                                     layFlatHosesYes:val,
                                     layFlatHosesNo:change
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
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View>
                            <TextInput
                               value={this.state.layFlatHosesDate}
                               onChangeText={(val)=>this.setState({layFlatHosesDate:val})}
                              style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="Date"
                            />
                        </View>  
                        <View>
                            <TextInput
                                value={this.state.layFlatHosesQuantity}
                                onChangeText={(val)=>this.setState({layFlatHosesQuantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View> 
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Boxes</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.BoxesYes}
                                onValueChange={(val) =>{
                                  const change= this.state.BoxesNo.flip();      
                                  
                                this.setState({BoxesYes:val,
                                BoxesNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Pressure Guages</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.PressureYes}
                                 onValueChange={(val) =>{
                                  const change= this.state.PressureNo.flip();     
                                
                                this.setState({
                                  PressureYes:val,
                                  PressureNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Accessibility to equipment</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.AccessibilityEquipmentYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.AccessibilityEquipmentNo.flip(); 
                                    
                                    this.setState({
                                      AccessibilityEquipmentYes:val,
                                     AccessibilityEquipmentNo:change
                                    
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Ring Mains</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireRingMainsYes}
                                 onValueChange={(val) =>{
                                     const change= this.state.FireRingMainsNo.flip();
                                   
                                   this.setState({
                                     FireRingMainsYes:val,
                                   FireRingMainsNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Register</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireRegisterYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.FireRegisterNo.flip();
                                   
                                   this.setState({
                                     FireRegisterYes:val,
                                     FireRegisterNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Aid Kits</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireAidKitsYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.FireAidkitsNo.flip();  

                                   this.setState({FireAidKitsYes:val,
                                    FireAidkitsNo:change
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
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <TextInput
                                value={this.state.FireAidKitsQuantity}
                                onChangeText={(val)=>this.setState({ FireAidKitsQuantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Fire Procedures</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.FireProceduresYes}
                                 onValueChange={(val) =>{
                                    const change= this.state.FireProcedureNo.flip();          
                                   
                                   this.setState({FireProceduresYes:val,
                                   FireProcedureNo:change
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
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Assembly Points</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.AssemblyPointsYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.AssemblyPointsNo.flip();       
                                    this.setState({AssemblyPointsYes:val,
                                    AssemblyPointsNo:change
                                    
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
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <TextInput
                                value={this.state.AssemblyPointsQuantity}
                                onChangeText={(val)=>this.setState({AssemblyPointsQuantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
                  <View style={{marginVertical:5}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Smoking Areas</Text>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.smokingAreasYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.smokingAreasNo.flip();         
                                   
                                   this.setState({
                                     smokingAreasYes:val,
                                     smokingAreasNo:change
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
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <TextInput
                               value={this.state.smokingAreasQuantity}
                                onChangeText={(val)=>this.setState({smokingAreasQuantity:val})}
                               style={{borderBottomWidth:1,borderBottomColor:'black',marginVertical:10,width:150}}
                              placeholder="QTY"
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                  </View>
              </View>
              <View style={{
                        padding:10,
                        backgroundColor:'white',
                        width:width,
                        marginVertical:10
              }}>
                 <Text style={{fontSize:15,fontWeight:'bold'}}>Checklist</Text>
                 <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                <View style={{justifyContent:'space-around',marginVertical:10}}>
                       <View style={{marginVertical:5}}>
                           <Text>Piping Identification</Text>
                           <TextInput 
                             value={this.state.pipeIdentification}
                             onChangeText={(e)=>this.setState({pipeIdentification:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                            />
                       </View>
                       <View style={{marginVertical:5}}>
                           <Text >Condition</Text>
                           <TextInput 
                            value={this.state.condition}
                            onChangeText={(e)=>this.setState({condition:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                            />
                       </View>
                </View>
                <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                <View style={{flexDirection:'row',justifyContent:'space-around',marginVertical:10}}>
                       <View>
                           <Text style={{textAlign:'center'}}>Sprinkler Head Type</Text>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.sprinklerHeadsYes}
                                  onValueChange={(val) =>{
                                     const change= this.state.sprinklerHeadsNo.flip();         
                                    
                                    this.setState({
                                       sprinklerHeadsYes:val,
                                      sprinklerHeadsNo:change
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
                           <Text style={{textAlign:'center'}}>Clean</Text>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.cleanYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.cleanNo.flip();  
                                    
                                    this.setState({cleanYes:val,
                                    cleanNo:change
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
                </View>
                <View style={{backgroundColor:'black',width:'100%',height:1}}/> 
                <View style={{marginVertical:5}}>
                    <Text style={{fontSize:15}}>Sprinkler Head Type</Text>
                    <TextInput 
                         value={this.state.SprinklerHeadType}
                         onChangeText={(e)=>this.setState({SprinklerHeadType:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10}}
                            />
                </View>
                <View style={{marginVertical:5}}>
                     <View style={{justifyContent:'space-between'}}>
                         <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
                           <Text >Sprinkler pressure </Text>  
                           <Text >test required</Text>
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.SprinklerPressureYes}
                                  onValueChange={(val) =>{
                                       const change= this.state.SprinklerPressureNo.flip();  
                                    this.setState({
                                      SprinklerPressureYes:val,
                                      SprinklerPressureNo:change
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
                         <View style={{marginVertical:10}}>
                             <Text >Sprinkler KPA:</Text>
                             <TextInput 
                               value={this.state.SprinklerKPA}
                               onChangeText={(e)=>this.setState({SprinklerKPA:e})}
                              style={{backgroundColor:'#006bb4',borderRadius:10}}
                            />
                         </View>
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/> 

                </View>
                <View style={{marginVertical:5}}>
                     <View style={{justifyContent:'space-between'}}>
                         <View style={{marginVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
                           <Text >Sprinkler Valves test required</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.SprinklerValvesYes}
                                  onValueChange={(val) =>{
                                     const change= this.state.SprinklerValvesNo.flip();  

                                    this.setState({SprinklerValvesYes:val,
                                    SprinklerValvesNo:change
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
                         <View style={{marginVertical:10}}>
                             <Text>Service Date:</Text>
                             <TextInput 
                              value={this.state.ServiceDate}
                              onChangeText={(e)=>this.setState({ServiceDate:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10}}
                            />
                         </View>
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/> 

                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <Text >Spares Box</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.SparesBoxYes}
                                  onValueChange={(val) =>{
                                     const change= this.state.SpareBoxNo.flip(); 
                                    this.setState({
                                      SparesBoxYes:val,
                                     SpareBoxNo:change
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
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/> 

                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <Text >Sprinkler Blocks Plans</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                    value={this.state.SprinklerBlocksPlanYes}
                                    onValueChange={(val) =>{
                                       const change= this.state. SprinklerBlocksPlanNo.flip(); 
                                      
                                      this.setState({
                                        SprinklerBlocksPlanYes:val,
                                       SprinklerBlocksPlanNo:change
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
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/> 

                </View>
                <View style={{marginVertical:5}}>
                     <View style={{justifyContent:'space-between'}}>
                         <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <Text>Sprinkler Pump House</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.SprinklerPumpYes}
                                 onValueChange={(val) =>{
                                 const change= this.state.SprinklerPumpNo.flip();   
                                 this.setState({
                                   SprinklerPumpYes:val,
                                   SprinklerPumpNo:change
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
                            <Text>Service Date</Text>
                            <TextInput
                            value={this.state.ServiceDateSprinkler}
                            onChangeText={(val)=>this.setState({ServiceDateSprinkler:val})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                            />
                         </View>
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/> 

                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <Text >Tanks</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.TankYes}
                                 onValueChange={(val) =>{
                                const change= this.state.TankNo.flip();      
                                   
                                this.setState({
                                  TankYes:val,
                                 TankNo:change
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
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/> 

                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                           <Text >Specify Pump and Tank Make and Condition</Text>  
                           <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.SpecifyPumpYes}
                                 onValueChange={(val) =>{
                                       const change= this.state.SpecifyPumpNo.flip();     
                                   this.setState({
                                     SpecifyPumpYes:val,
                                     SpecifyPumpNo:change
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
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1}}/> 

                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View>
                           <Text >Storage Height</Text>  
                           <TextInput 
                            value={this.state.StorageHeight}
                            onChangeText={(e)=>this.setState({StorageHeight:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                            />
                         </View>
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 

                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row'}}>
                         <View>
                           <Text >Roof Height</Text>  
                           <TextInput 
                            value={this.state.roofHeight}
                            onChangeText={(e)=>this.setState({roofHeight:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                            />
                         </View>
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                     <View>
                         <Text  style={{fontWeight:"bold"}}>Where goods of differing categories are stored within the same area, it is the stack height limitations of the goods with the highest category that will apply</Text>
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                     <View>
                         <Text>Existing adjoining doorways to Offices, Ablutions, First Aid, Canteen, Store Rooms, Consumable Stores</Text>
                         <View style={{justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row',marginVertical:10}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                   value={this.state.ExistingYes}
                                   onValueChange={(val) =>{
                                   const change= this.state.ExistingNo.flip();       
                                     
                                  this.setState({
                                    ExistingYes:val,
                                  ExistingNo:change
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
                          <View style={{marginVertical:10}}>
                              <Text style={{marginVertical:5}}>Quantity</Text>
                              <TextInput 
                               value={this.state.Quantity}
                               onChangeText={(e)=>this.setState({Quantity:e})}
                              style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                              />
                          </View>
                         </View>
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text  >Existing:despatch Areas</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.ExistingDYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.ExistingDNo.flip();       
                                     
                                    this.setState({
                                      ExistingDYes:val,
                                      ExistingDNo:change
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
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text  >Receiving Areas</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.ReceivingAreasYes}
                                 onValueChange={(val) =>{
                                     const change= this.state.ReceivingAreasNo.flip(); 
                                   this.setState({
                                     ReceivingAreasYes:val,
                                     ReceivingAreasNo:change
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
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text  >Storage Sheds</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.StorageShedsYes}
                                 onValueChange={(val) =>{
                                   
                                     const change= this.state.StorageShedsNo.flip(); 
                                   this.setState({StorageShedsYes:val,
                                   StorageShedsNo:change
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
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text >Packaging Areas</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                    value={this.state.PackagingAreasYes}
                                    onValueChange={(val) =>{
                                       const change= this.state.PackagingAreasNo.flip(); 
                                      this.setState({  PackagingAreasYes:val,
                                      PackagingAreasNo:change
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
                     </View>
                     <Text style={{fontWeight:'bold'}}>All above areas that are not in the main building</Text>
                     <Text style={{fontWeight:'bold'}}>premises that will require protection</Text>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                     <View >
                         <Text  >% Ordinary Hazard</Text>
                         <View >
                         <TextInput 
                            value={this.state.OrdinaryHazard}
                            onChangeText={(e)=>this.setState({OrdinaryHazard:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                            />
                         </View>
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                     <View >
                         <Text  >% High Hazard</Text>
                         <View >  
                         <TextInput 
                              value={this.state.HighHazard}
                              onChangeText={(e)=>this.setState({HighHazard:e})}
                            style={{backgroundColor:'#006bb4',borderRadius:10,width:'100%'}}
                            />
                         </View>
                         <Text style={{marginTop:5}}>Stack height signs not less than 500 mm by 500 mm in size must be prominently displayed at the maximum level of the allowable storage height in all storage and process risk areas.</Text>
                     </View>
                     <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
              </View>
              <View style={{
                         padding:10,
                         backgroundColor:'white',
                         width:'100%',
                         marginVertical:10
              }}>
                  <Text style={{fontWeight:"bold",fontSize:15}}>Fire Detection System</Text>
                  <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                <View style={{marginVertical:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text  >Fire Detection System</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.FireDetectionSystemYes}
                                  onValueChange={(val) =>{
                                    const change= this.state.FireDetectionSystemNo.flip(); 
                                    
                                    this.setState({
                                      FireDetectionSystemYes:val,
                                      FireDetectionSystemNo:change
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
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text >Addressable System</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.AddressableSystemYes}
                                onValueChange={(val) =>{
                                const change= this.state.AddressableSystemNo.flip();   
                                this.setState({
                                  AddressableSystemYes:val,
                                  AddressableSystemNo:change
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
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text >Beam Detection</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.BeamDetectionYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.BeamdetectionNo.flip(); 
                                   
                                   this.setState({BeamDetectionYes:val,
                                   BeamdetectionNo:change
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
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text >Vesta System</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.VestaSystemYes}
                                  onValueChange={(val) =>{
                                      const change= this.state.VestaSystemNo.flip(); 
                                    this.setState({
                                      VestaSystemYes:val,
                                      VestaSystemNo:change
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
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                  <Text style={{fontWeight:"bold",fontSize:15}}>Gas suppression System in the following Areas</Text>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Server Room</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.ServerRoomYes}
                                 onValueChange={(val) =>{
                                   const change= this.state.ServerRoomNo.flip();    
                                   
                                this.setState({ServerRoomYes:val,
                                ServerRoomNo:change
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
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text >Boiler Room</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.BoilerRoomYes}
                                 onValueChange={(val) =>{
                                  const change= this.state.BoilerRoomNo.flip();     

                                   this.setState({
                                     BoilerRoomYes:val,
                                     BoilerRoomNo:change
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
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text  >Transformer Room</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                  value={this.state.TransformerRoomYes}
                                  onValueChange={(val) =>{
                                   const change= this.state.TransformerRoomNo.flip();      
                                  this.setState({TransformerRoomYes:val,
                                  TransformerRoomNo:change
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
                    </View>
                    <View style={{backgroundColor:'black',width:width,height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text>Generator Room</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                 value={this.state.GeneratorRoomYes}
                                 onValueChange={(val) =>{
                                      const change= this.state.GeneratorRoomNo.flip(); 
                                   this.setState({GeneratorRoomYes:val,
                                     GeneratorRoomNo:change
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
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
                </View>
                <View style={{marginVertical:5}}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <Text >Other</Text>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                         <View style={{flexDirection:'row'}}>
                               <View style={{flexDirection:'row'}}>
                               <Switch
                                value={this.state.OtherYes}
                                onValueChange={(val) =>{
                                  
                                 const change= this.state.GeneratorRoomNo.flip();   
                                this.setState({OtherYes:val,
                                GeneratorRoomNo:change
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
                    </View>
                    <View style={{backgroundColor:'black',width:'100%',height:1,marginVertical:5}}/> 
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
                    <Button title="Send" color="#006bb4" onPress={()=>this.sendForm()}/>
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

export default FireAuditChecklist;


