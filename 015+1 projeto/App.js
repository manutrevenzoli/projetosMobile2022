import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { Text, View, StyleSheet, Button, Modal, Pressable, Icon } from 'react-native';
import { Provider, Appbar, Avatar, TextInput } from 'react-native-paper';


export default function App() {
  const [firstName, setFirstNameText] = React.useState('');
  const [lastName, setLastNameText] = React.useState('');
  const [email, setEmailText] = React.useState('');
  const [password, setPasswordText] = React.useState('');
  const [msgErr, setmsgErrText] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const validateAll = () => {
    console.log("Validando form");
    validateStrSize(firstName);
    validateStrSize(lastName);
    validateStrSize(email);
    validateStrSize(password);
  }

  const validateStrSize = (text) => {
    if (text.length <= 3) {
      console.log("Campo preenchido incorretamente.")
      setmsgErrText("Campo preenchido incorretamente.")
      return false;
    }

    const validateMail = () => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      //console.log(text,reg.test(text));
       return !reg.test(email);
    };
  }


  return (

    <View style={styles.container}>
      {/* inicio campo nome */}
      <Text style={styles.labelText}>Nome:</Text>
      <TextInput style={styles.inputText}
        label="Nome"
        placeholder="Informe o seu Nome"
        onChangeText={firstName => setFirstNameText(firstName)} />
      {/* inicio campo sobrenome */}
      <Text style={styles.labelText}>Sobrenome:</Text>
      <TextInput style={styles.inputText}
        label="Sobrenome"
        placeholder="Informe o sobrenome" onChangeText={lastName => setLastNameText(lastName)}/>

      {/* fim campo sobrenome */}
      {/* inicio campo email */}
      <Text style={styles.labelText}>Email:</Text>
      <TextInput style={styles.inputText}
        label="E-mail"
        placeholder="Informe seu e-mail" onChangeText={email => setEmailText(email)}/>
      {/* fim campo email */}
      {/* inicio campo senha */}
      <Text style={styles.labelText}>Senha:</Text>
      <TextInput style={styles.inputText}
        label="Senha"
        secureTextEntry={secureTextEntry}
        placeholder="Informe sua senha" onChangeText={password => setPasswordText(password)} right={ <TextInput.Icon name="eye" onPress={() => {setSecureTextEntry(!secureTextEntry); return false;}} />} />
      {/* fim campo senha */}
      {/* inicio campo botao */}
      <Button title="Submit" onPress={() => validateAll()} style={styles.buttonstyle} color="purple" />
      <Text>{msgErr}</Text>
      {/* fim campo botao */}
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

  inputText: {
    height: 45,
    marginBottom: 10,
  },

  labelText: {
    marginTop: 10,
    marginBottom: 5,
  },
  buttonstyle: {
    margin: 10,
  },
});
