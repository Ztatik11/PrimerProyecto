import React , {useState} from "react";
import {Button, Text, View, StyleSheet, TextInput,Image, Switch} from "react-native";

export default function App () {


  const [isEnabled,setisEnabled]= useState(null);
  const [imagen_uno,setImagen1]= useState(
  <Image
    style = {[styles.imagen]}
    source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} 
  />);
  const styles = StyleSheet.create({
  
    imagen: {
      width: 200,
      height: 200,
      opacity: 1,
    },
  
    View:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:"center",
      backgroundColor:"white",
    },
  });

  return (
    
    <View style ={[styles.View]}>
      <View style ={[styles.View]}>

        <Switch
        trackColor={{false:'green',true:'yellow'}}
        thumbColor={isEnabled ? 'blue':'red'}
        onValueChange={()=>setisEnabled(previousState=>!previousState)}
        value={isEnabled}
        imagen_uno = {isEnabled ? imagen_uno:null}
        />

        <Image
          style = {[styles.imagen]}
          source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} 
        />

        <Image
          style = {[styles.imagen]}
          source = {require("./Imagenes/mondongo.jpeg")}
        
        />
        <Image
          style = {[styles.imagen]}
          source={{uri :"https://media.tenor.com/xlydCKGNv9kAAAAC/funny-meme.gif"}}
        
        />
      </View>
    </View>
  );
}



