import React , {useState} from "react";
import {Button, Text, View, StyleSheet, TextInput,Switch} from "react-native";

export default function App () {

  const [isEnabled,setisEnabled]= useState(null);
  const [imagen_uno,setImagen1]= useState(null);
  
  const nombre = <Text style ={[styles.bigBlue]}>Alvaro</Text>;
  const apellidos = <Text style ={[styles.bigBlue]}>Carrasco Garcia</Text>;
  const [edad,setEdad] = useState(null);
  const [Texto,setTexto] = useState(null);
  const [Validacion,setValidacion] = useState(false);
  
  const resultado = () => {
    if (edad == 18) {
      
    } else {
      styles.resultado.color ='blue'
      setTexto(
        <Text style={{color:'blue'}}>
        Es mayor de edad
        </Text>
      )
    }
  }

  return (
    <View style ={[styles.aplicacion]}>
      <Text style ={[styles.titulo]}>FORMULARIO</Text>
      <View style ={[styles.contenedor_datos]}>
      <Text>Nombre:</Text>
        <TextInput style ={[styles.cuadrotexto]}
        placeholder="Nombre" 
        onChangeText={edad => setEdad(edad)}
        value={edad}
      />
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Text>Apellidos:</Text>
        <TextInput style ={[styles.cuadrotexto]}
        placeholder="Apellidos" 
        onChangeText={edad => setEdad(edad)}
        value={edad}
      />
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Text>Edad:</Text>
        <TextInput style ={[styles.cuadrotexto]}
        placeholder="Edad" 
        onChangeText={edad => setEdad(edad)}
        value={edad}
      />
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Text>Correo Electronico:</Text>
        <TextInput style ={[styles.cuadrotexto]}
        placeholder="Correo electronico" 
        onChangeText={edad => setEdad(edad)}
        value={edad}
      />
      </View>
      <Text>Genero</Text>
      <View style ={[styles.contenedor_genero]}>
        <Text>HOMBRE</Text>
        <Switch
          trackColor={{false:'green',true:'yellow'}}
          thumbColor={isEnabled ? 'blue':'red'}
          onValueChange={()=>setisEnabled(previousState=>!previousState)}
          value={isEnabled}
          imagen_uno = {isEnabled ? imagen_uno:null}
          />
        <Text>MUJER</Text>
      </View>
      <View style ={[styles.contenedor_datos]}>
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

  titulo:{
    fontSize:50,
    color:'black',
  },

  aplicacion:{
    alignItems:"center",
    flex:1,
    backgroundColor:"white",
  },
  contenedor_datos:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:20,
  },
  contenedor_genero:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    //flex:1,
    padding:20,
    borderWidth:10,
    borderColor:"#FA0505",
    borderRadius:50,
  },

  cuadrotexto:{
    backgroundColor:"white",
    color:'white',
    borderColor:'grey',
    borderWidth:1,
    width:200,
  },
});
