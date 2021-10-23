import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import * as Google from "expo-google-app-auth";
import firebase from "firebase";
export default class LoginScreen extends Component{
    render(){
        return(
            <View
            style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
            <Text>Login Sceen</Text>
            </View>
    
        )
    }    
    }
