/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext, useState } from "react";
import { View } from "react-native";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUp from "./signup";
import Login from "./login";
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
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <View style={{ margin: 30 }}>
            <SignUp/>
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
