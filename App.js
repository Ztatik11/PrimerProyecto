
import React , {useState} from "react";
import {Button, Text, View, StyleSheet, TextInput,} from "react-native";

export default function App () {
  
  const nombre = <Text style ={[styles.bigBlue]}>Alvaro</Text>;
  const apellidos = <Text style ={[styles.bigBlue]}>Carrasco Garcia</Text>;
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
    
    <View style ={[styles.View]}>
      <View style ={[styles.View]}>
      <Text style ={[styles.Texto]}> Mi nombre es {nombre} y mis apellidos son {apellidos}</Text>
      
      </View>
      
      <View style ={[styles.View]}>
        <Text style ={[styles.Texto]}>Escribe aqui tu edad:</Text>
        
        <TextInput style ={[styles.cuadrotexto]} 
        placeholder="Edad" 
        keyboardType="numeric"
        onChangeText={edad => setEdad(edad)}
        value={edad}
        
        />
        
      </View>
      
      <View style ={[styles.View]}>
        <Button
            onPress={resultado}
            title={"Finalizar"}
        />
        <Text>{Texto}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({

  Texto:{
    color:'black'
  },

  View:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:"center",
    backgroundColor:"white",
  },

  cuadrotexto:{
    backgroundColor:"white",
    color:'grey',
    borderColor:'grey',
    borderWidth:1,
    width:300,
    
  },

  bigBlue: {
    color: 'blue',
  },
  resultado: {
    textAlign:"center",
    position: "relative",
    right: 100,
    color: 'red',
    fontSize:15
  },

  boton_finalizar: {
    backgroundColor: 'red',
    padding: 100,
    width: 3,
    height: 4,
  }
});

