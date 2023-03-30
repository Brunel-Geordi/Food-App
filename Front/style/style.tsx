/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";


import {
  ScrollView,
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Modal,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";


export const style = StyleSheet.create({
    inputText: {
      borderBottomWidth: 1,
      borderBottomColor: "green",
      paddingBottom: 5,
    },
    text: {
      fontWeight: "bold",
      marginTop: 20,
    },
    msg: {
      fontStyle: "italic",
      marginTop: 20,
    },
    panier:{
        paddingHorizontal: 20,
    },
    bouton:{
      backgroundColor:"none"
    }
  });