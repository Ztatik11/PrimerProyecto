
import React , {useState} from "react";
import {Button, Text, View, StyleSheet, TextInput} from "react-native";

export default function App () {
  
  const nombre = "Alvaro";
  const apellidos = "Carrasco Garcia";
  const [edad,setEdad] = useState(null);
  

  return (
    
    <View>
      <View  style ={[styles.View]}>
      <Text> Mi nombre es </Text>
      <Text style ={[styles.bigBlue]}>{nombre} {apellidos} </Text>
      </View>

      <View style ={[styles.View]}>
        <Text>Escribe aqui tu edad</Text>
        
        <TextInput id='cuadro_texto' style ={[styles.cuadrotexto]} 
        placeholder="Edad" 
        keyboardType="numeric"
        
        />
        
      </View>

      <View>

      </View>

      <View>
      <Button
          onPress={() => {
            getInputValue();
            console.log({edad});
          }}
          title={"Finalizar"}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  View:{
    padding:50,
    textAlign:"right",
  },

  cuadrotexto:{
    backgroundColor:"white",
  },

  bigBlue: {
    color: 'blue',
  },
  red: {
    color: 'red',
  },

  boton_finalizar: {
    backgroundColor: 'red',
    padding: 100,
  }
});

