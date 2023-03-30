/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Ionicons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { style } from "../style/style";

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

function Homescreen({ navigation }: any): JSX.Element {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>Settings Screen!</Text>
        <Ionicons name="md-settings-outline" size={80} color="#006600" />
      </View>
    </>
  );
}

export default Homescreen;
