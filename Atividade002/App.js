import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider, Appbar, Avatar, TextInput, HelperText } from 'react-native-paper';


export default function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [botao, setBotao] = useState(base);
  const [apresentaTxt, setApresentaTxt] = useState(area);
  const [carregando, setCarregando] = useState(altura);
  var area = (base*altura)/2;

  const validateAll = () => {
    console.log(base);
    //setBase(base"5")
    setBase(parseInt(base))
    //base => setBase(base)
    console.log(altura);
    //setAltura(altura"2")
    setAltura(parseInt(altura))
    //altura => setAltura(altura)
    console.log(area);
    setArea(parseInt(area))

  }
  

  return (
    <View style={styles.container}>
      {/* inicio campo base */}
      <Text style={styles.labelText}>Base:</Text>
      <TextInput style={styles.inputText} placeholder="Base" onChangeText={base => setBase(base)} />{"\n"}
      {/* fim campo base */}
      {/* inicio campo Altura */}
      <Text style={styles.labelText}>Altura:</Text>
      <TextInput style={styles.inputText} placeholder="Altura" onChangeText={altura => setAltura(altura)} />{"\n"} 
      {/* fim campo Altura */}
      {/* inicio campo Area */}
      <Text style={styles.labelText}>Area:</Text>
      {/* fim campo Area */} 
      <Button title="Cálculo de Area" style={styles.buttonstyle} onPress={() => {validateAll();}} color="#6200EE" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonstyle: {
    marginTop: 10,
  },  
  inputText: {
    width: 200, height: 40, backgroundColor: 'powderblue'
  },  
});