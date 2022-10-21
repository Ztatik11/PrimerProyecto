
import React , {useState} from "react";
import {Button, Text, View, StyleSheet} from "react-native";

export default function App () {
  const [count, setCount] = useState(0);
  const [count10, setCount10] = useState(0);
  return (
    <View>
      <View>
        <Button
          onPress={() => {
            setCount(count+1)
          }}
          title={"Cuenta"}
        />
        <Text>Cada vez que pulse, suma 1 al contador</Text>
      </View>
      <View>
        <Button
          onPress={() => {
            setCount10(count10+10)
          }}
          title={"Cuenta"}
        />
        <Text>Cada vez que pulse, suma 10 al contador</Text>
      </View>
      <View>
        <Button style={[styles.boton_reset]}
          onPress={() => {
            setCount(0)
            setCount10(0)
          }}
          title={"Cuenta"}
        />
        <Text style={[styles.red,styles.bigBlue]}>Resetea el contador+count</Text>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
  },
  red: {
    color: 'red',
  },

  boton_reset: {
    backgroundColor: 'red',
    padding: 100,
  }
});

