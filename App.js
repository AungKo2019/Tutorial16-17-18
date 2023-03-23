import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Abouts from './screens/about';
import reviewDetail from './screens/reviewDetail';
import * as Font from 'expo-font';
import { useState } from 'react';
import {AppLoading} from 'expo';
import React,{useCallback} from 'react';
import { useFonts } from 'expo-font';

  // const getFonts= () =>  Font.loadAsync({
  //   'Nunito-BlackItalic1234567':require('./assets/fonts/Nunito-BlackItalic.ttf'),
  //   'Nunito-Black':require('./assets/fonts/Nunito-Black.ttf'),
  //   'Nunito-BoldItalic':require('./assets/fonts/Nunito-BoldItalic.ttf'),
  //   'Nunito-Regular':require('./assets/fonts/Nunito-Regular.ttf'),
  //   'Nunito-Bold':require('./assets/fonts/Nunito-Bold.ttf')
  // });



export default function App() {

  const [fontsloaded]=useFonts({
    'Nunito-BlackItalic1234567':require('./assets/fonts/Nunito-BlackItalic.ttf'),
    'Nunito-Black':require('./assets/fonts/Nunito-Black.ttf'),
    'Nunito-BoldItalic':require('./assets/fonts/Nunito-BoldItalic.ttf'),
    'Nunito-Regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold':require('./assets/fonts/Nunito-Bold.ttf')
  });

  const onLayoutRootView= useCallback(async ()=> {
    if(fontsloaded) {
      //await SplashScreen.hideAsync();
      console.log('Font Loaded');
      // return (
      //       <Home/>
      //      );
    }
  },[fontsloaded]);
  if (!fontsloaded){
    console.log('Not Loaded');
    // return(
    //     <AppLoading
    //       startAsync={getFonts}
    //       //onFinish={()=>setFontsloaded(true)}
    //     />
    //     )

    //return null;
  }

    return (
      <Home/>
     );
  // const [fontsloaded,setFontsloaded]=useState(false);
  // const [fontsLoaded] = useFonts({
  
  //       'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf'),
  //       'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
  // });

 


  // if(fontsloaded){
  //   return (
  //     <Home/>
  //    );
  // }else {
  //   return(
  //   <AppLoading
  //     startAsync={getFonts}
  //     onFinish={()=>setFontsloaded(true)}
  //   />
  //   )
    
  //}
  

}


