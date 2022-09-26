import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import React, { useEffect, useState, Component } from "react";

export default function App() {

  const[Nome] = useState("Maria");
  const[Idade] = useState("19");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput style={styles.input} placeholder="Dados de Maria"/>
      <Button title="Validar Dados" onPress={() => {alert('Dados de Maria') }}  />
      <Text>
      Meu nome é {Nome} e eu tenho {Idade}
        
      </Text>





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

  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "purple",
    padding: 10,

  }
});
