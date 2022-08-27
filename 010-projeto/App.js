import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <view style={styles.separator} />
}

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
    <View>
      <Button title="Aperte aqui" onPress={() => {alert('Simples') }}  />
      </View>
      <Separator />
     
      <View>
         <Text style={styles.title}>
           Adjust the color in a way that looks standard on each platform. On IOS, the color prop controls the color of the text. On android, the color adjusts the background color of the button.
           </Text>
           <Button
           title= "Aperte aqui"
           color= "#f194ff"
           onPress={() => {alert('Button with adjusted color pressed')}}
           />
           </View>
           <Separator />
           <View>
            <Text style={styles.title}>
              All interaction for the component are disabled.
              </Text>
              <Button
              title="Aperte aqui"
              disabled 
           onPress={() => {alert('Cannot press this one')}}
           /> 
      </View>
      <Separator/>
      <View>
          <Text style={styles.title}>
                   This layout strategy lets the title define the width of the button.
                   </Text>
                   <View style={styles.fixToText}>
                    <Button
                    title="Botão esquerdo"
                    onPress={() => {alert('Left button pressed')}}
                    />
                    <Button
                    title="Botão direito"
                    onPress={() => {alert('Right button pressed')}}
                    />
                    </View>
                    </View>
                    <Separator />
                    <Separator />
                    <Separator />
                    </SafeAreaView>
  );
    }
    const styles = StyleSheet.create({ 
      container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
          },
          title: {
            textAlign: 'center',
            marginVertical: 8,
          },
          fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
        },
      });



  
