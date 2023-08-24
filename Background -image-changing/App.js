import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground,Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
     <ImageBackground
      style= {{flex:1}}
      source={require('./assets/background.jpg')
      }
      style={{
          width: 330,
          height: 500,
          padding:30,
        }}
      >
      <center><h1>Hello world</h1>
      <br/>
      <Image source={require('./assets/snack-icon.png')} style={{height:100,width:100}}/>
      </center>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
