import React from "react";
import { StyleSheet,Text,View } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:24,
    },
    text:{
        fontSize:24,
        fontFamily:'Nunito-Regular'
    }

})
