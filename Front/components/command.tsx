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

function Command({ navigation, route }): JSX.Element {
  return (
    <>
      <Text>Je suis le {route.params?.option}</Text>
    </>
  );
}

export default Command;
