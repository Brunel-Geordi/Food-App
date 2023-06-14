/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUp from "./signup";
import Login from "./login";
import { style } from "../style/style";
function Connexion({ navigation }: any): JSX.Element {
  const [selectedOption, setSelectedOption] = useState(null);

  const signIn = () => {
    setSelectedOption(false);
  };
  const signUp = () => {
    setSelectedOption(true);
  };
  return (
    <SafeAreaProvider
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {!selectedOption ? (
        <SafeAreaView>
          <Login />
          <View style={style.sign}>
            <Text>Pas encore de compte ?</Text>
            <TouchableOpacity onPress={signUp}>
              <Text
                style={{
                  color: "blue",
                  fontStyle: "italic",
                }}
              >
                cliquez ici
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <SignUp />
          <View style={style.sign}>
            <Text>Déjà un Compte ?</Text>
            <TouchableOpacity onPress={signIn}>
              <Text
                style={{
                  color: "blue",
                  fontStyle: "italic",
                }}
              >
                cliquez ici
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
}

export default Connexion;
