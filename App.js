
import React , {useState} from "react";
import {Button, Text, View, StyleSheet, TextInput,} from "react-native";

export default function App () {
  
  const nombre = "Alvaro";
  const apellidos = "Carrasco Garcia";
  const [edad,setEdad] = useState(null);
  const [Texto,setTexto] = useState(null);
  
  const resultado = () => {
    if (edad == 18) {
      styles.resultado.color ='red'
      setTexto(
        <Text style ={[styles.resultado]}>
        Acaba de ser mayor de edad
        </Text>
      )
      

    } else if (edad < 18) {
      styles.resultado.color ='green'
      setTexto(
        <Text style ={[styles.resultado]}>
        Es menor de edad
        </Text> 
      )
      

    } else {
      styles.resultado.color ='blue'
      setTexto(
        <Text style ={[styles.resultado]}>
        Es mayor de edad
        </Text>
      )
      
    }
    
  }

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
        onChangeText={edad => setEdad(edad)}
        value={edad}
        
        />
        
      </View>
      
      <View>
        <Button
            onPress={resultado}
            title={"Finalizar"}
        />
        <Text>{Texto}</Text>
        <Text>{styles.resultado.color}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

  View:{
    padding:50,
    textAlign:"center",
  },

  cuadrotexto:{
    backgroundColor:"white",
  },

  bigBlue: {
    color: 'blue',
  },
  resultado: {
    textAlign:"center",
    position: "relative",
    right: 100,
    color: 'red',
  },

  green: {
    color: 'green',
  },

  boton_finalizar: {
    backgroundColor: 'red',
    padding: 100,
    width: 3,
    height: 4,
  }
});

