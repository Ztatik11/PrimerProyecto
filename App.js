import React , {useState} from "react";
import {Button, Text, View, StyleSheet, TextInput,Switch} from "react-native";

export default function App () {

  const [isEnabled,setisEnabled]= useState(null);
  const [imagen_uno,setImagen1]= useState(null);
  const reglas = {
    solo_texto : /[a-zA-ZÁ-ÿ]+$/,
    solo_numeros : /[0-9]+$/,
    correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-z]+$/,
  }

  const [datos,setDatos] =useState({
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    genero: '',
  })

  const [Validacion,setValidacion] = useState(false);
  
  const validacion_campo_texto = (valor_formulario) => {
    if (reglas.solo_texto.test(valor_formulario)) {
      setValidacion(true)
    } else {
      setValidacion(false)
    }
  }

  const validacion_campo_numerico = (valor_formulario) => {
    if (reglas.solo_numeros.test(valor_formulario)) {
      setValidacion(true)
    } else {
      setValidacion(false)
    }
  }

  const validacion_campo_correo = (valor_formulario) => {
    if (reglas.correo.test(valor_formulario)) {
      setValidacion(true)
    } else {
      setValidacion(false)
    }
  }

  return (
    <View style ={[styles.aplicacion]}>
      <Text style ={[styles.titulo]}>FORMULARIO</Text>
      <View style ={[styles.contenedor_datos]}>
      <Text>Nombre:</Text>
        <TextInput style ={[styles.cuadrotexto]}
        name="nombre"
        placeholder="Nombre" 
        onChangeText={validacion_campo_texto()}
        value={nombre}
      />
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Text>Apellidos:</Text>
        <TextInput style ={[styles.cuadrotexto]}
        name="apellidos"
        placeholder="Apellidos" 
        onChangeText={edad => setEdad(edad)}
        value={edad}
      />
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Text>Edad:</Text>
        <TextInput style ={[styles.cuadrotexto]}
        name="edad"
        placeholder="Edad" 
        onChangeText={edad => setEdad(edad)}
        value={edad}
      />
      </View>
      <View style ={[styles.contenedor_datos]}>
      <Text>Correo Electronico:</Text>
        <TextInput style ={[styles.cuadrotexto]}
        name="correo"
        placeholder="Correo electronico" 
        onChangeText={correo => setEdad(edad)}
        value={correo}
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
