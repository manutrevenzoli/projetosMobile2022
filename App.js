import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { Text, View,StyleSheet,Button,Modal,Pressable ,Icon } from 'react-native';
import { Provider ,Appbar, Avatar,TextInput } from 'react-native-paper';


export default function App() {
  const [firstName, setFirstNameText] = React.useState('');
  const [lastName, setLastNameText] = React.useState(null);
  const [email,setEmailText] = React.useState(null);
  const [password, setPasswordText] = React.useState(null); 
 
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Nome</Text>
      <TextInput style={styles.InputText}
      label="Nome"
      
      placeholder="Informe o seu Nome"onChangeText={firstName => setFirstNameText(firstName)} />
      <StatusBar style="auto" />
      
<Text style={styles.labelText}>Sobrenome</Text>
<TextInput style={styles.inputText}
label="Sobrenome"
placeholder="Informe o sobrenome" onChangeText={lastName => setLastNameText(lastName)} />

<Text style={styles.labelText}>Email:</Text>
<TextInput style={styles.inputText}
label="E-mail"
placeholder="Informe seu e-mail" onChangeText={email => setEmailText(email)}  />

<Text style={styles.labelText}>Senha:</Text>
<TextInput style={styles.inputText}
label="Senha"
secureTextEntry={true}
placeholder="Informe sua senha" onChangeText={passoword => setPasswordText(passoword)} />

<Button title="Submit" style={styles.buttonstyle} color="#6200EE" />

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
  labelText:{
    marginTop:10,
    marginBotton:5,
  },
});
