import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-Permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class Booktransaction extends React.Component {

  constructor(){
    super()
    this.state={
      hasCameraPermissions:null,
      scanned: false,
      scannedData:"",
      buttonState:"normal",

    }
    
  }
   
   getCameraPermissions=async()=>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermissions:status==="granted"
      }) 
   }

   handlebarcodescanned = async({type,data})=>{
     thi.setState({
       scansned:true,
       scannedData:data,
       buttonState:"normal",

     })
   }
    render(){
      const hasCameraPermissions=this.state.hasCameraPermissions;
      const scanned = this.state.scanned;
      const buttonState= this.state.buttonState;
    if(buttonState==="clicked" && hasCameraPermissions){
      return(

          <BarCodeScanner 
          onBarCodeScanned={scanned?undefined:this.handlebarcodescanned }
          />
          
      )

    }
    else if(buttonState==="normal") {
    
    return (
      <View style={styles.container}>
        <Text style = {styles.displayText}>{hasCameraPermissions === true ? this.state.scannedData:"request Camera Permissions"}</Text> 
    

      <TouchableOpacity 
      onPress = {this.getCameraPermissions}
      style = {styles.scanButton}>
        <Text style = {styles.buttonText}>Scan QR code</Text>
      </TouchableOpacity>
      </View>
    )};
  }}
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    
    displayText:{ fontSize: 15, textDecorationLine: 'underline' },
    scanButton:{ backgroundColor: '#2196F3', padding: 10, margin: 10 },
    buttonText:{ fontSize: 20, }
    
  });
  