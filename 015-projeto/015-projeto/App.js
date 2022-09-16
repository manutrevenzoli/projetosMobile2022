import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { Text, View,StyleSheet,Button,Modal,Pressable ,Icon } from 'react-native';
import { Provider ,Appbar, Avatar,TextInput } from 'react-native-paper';


export default function App() {
  const [firstName, setFirstNameText] = React.useState('');
  const [lastName, setLastNameText] = React.useState('');
  const [email,setEmailText] = React.useState('');
  const [password, setPasswordText] = React.useState(''); 
  const [msgErr, setmsgErrText] = useState ('');

  const validateAll = () => 
  {
    console.log("Validando form");
    validateStrSize(firstName);
    validateStrSize(lastName);
    validateStrSize(email);
    validateStrSize(password);
  }

  const validateStrSize = (text) =>
  {
    if(text.length <= 3 ){
      console.log("Campo preenchido incorretamente.")
      setmsgErrText("Campo preenchido incorretamente.")
      return false;
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Nome:</Text>
      <TextInput style={styles.inputText}
      label="Nome"
      placeholder="Informe o seu Nome"
      onChangeText={firstName =>   setFirstNameText(firstName)} />
     <Text style={styles.labelText}>Sobrenome:</Text>
      <TextInput style={styles.inputText}
      label="Sobrenome"
      placeholder="Informe o sobrenome" onChangeText={lastName => setLastNameText(lastName)} />


<Text style={styles.labelText}>Email:</Text>
<TextInput style={styles.inputText}
label="E-mail"
placeholder="Informe seu e-mail" onChangeText={email => setEmailText(email)} />
 

<Text style={styles.labelText}>Senha:</Text>
<TextInput style={styles.inputText}
label="Senha"
secureTextEntry={true}
placeholder="Informe sua senha" onChangeText={password => setPasswordText(password)} />
<Button title="Submit"  onPress={() => validateAll()} style={styles.buttonstyle} color="orange" />
<Text>{msgErr}</Text>
</View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputText:{
    height: 45,
    marginBottom:10,
  },

  labelText:{
    marginTop: 10,
    marginBottom: 5,
  },
  buttonstyle:{
    margin: 10,
  },
});
