import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value="Texto Padrão"/>
      <TextInput style={styles.input} placeholder="Texto Mutável"/>
      <TextInput style={styles.input} secureTextEntry={true} />
      <TextInput style={styles.input} disabled={true}  />
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
  input:{
   height: 40,
   margin: 12,
   borderWidth: 1,
   borderColor: "red",
   padding: 10,
  }