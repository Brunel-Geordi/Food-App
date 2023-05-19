/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext, useState } from "react";
import { style } from "../style/style";
import { View, ImageBackground } from "react-native";

import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { apiUrl } from "../services/get";
import { UserContext } from "./context";
import Spinner from "react-native-loading-spinner-overlay/lib";

function Connexion({ navigation }: any): JSX.Element {
  const [selectedOption, setSelectedOption] = useState(null);
  const connected = useContext(UserContext);

  const getUsers = async (source: string) => {
    if (logMail && logPass) {
      try {
        const response = await fetch(
          `${apiUrl}${source}?&mail=${logMail}&password=${logPass}`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getUser = async (endPoint: string) => {
    const user = await getUsers(endPoint);
    if (user) {
      const token = user.map((us: { token: String }) => us.token);
      const id = user.map((us: { id: String }) => us.id);
      const name = user.map((us: { name: String }) => us.name);
      connected.setToken(token[0]);
      connected.setID(id);
      connected.setName(name[0]);
    }
  };
  const signIn = () => {
    setSelectedOption(true);
  };
  const signUp = () => {
    setSelectedOption(false);
  };
  const callApi = async () => {
    const queryString = `name=${nom}&mail=${mail}&password=${pass}`;
    const response = await fetch(`${apiUrl}users?${queryString}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const result = response.json();
    return result;
  };

  const [logPass, setlogPass] = React.useState(null);
  const [logMail, setlogMail] = React.useState(null);

  const [nom, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [pass, setPass] = React.useState("");
  return (
    <SafeAreaProvider
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {/* <Spinner visible={true} textContent={'Chargement...'}/> */}

      {/* <ImageBackground source={require('../Food/test.jpg')} style={{
                  width: 370,
                  height: 650,
                  alignSelf: "center",
                  justifyContent: "center",
                }}> */}
      <TouchableOpacity
        onPress={signIn}
        style={{
          alignItems: "center",
          backgroundColor: "#316CB2",
          width: 250,
          height: 50,
          justifyContent: "center",
          borderRadius: 8,
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "",
            fontSize: 20,
          }}
        >
          Me connecter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={signUp}
        style={{
          alignItems: "center",
          backgroundColor: "#316CB2",
          width: 250,
          height: 50,
          justifyContent: "center",
          borderRadius: 8,
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "",
            fontSize: 20,
          }}
        >
          M'inscrire
        </Text>
      </TouchableOpacity>
      {selectedOption ? (
        <SafeAreaView>
          <View style={{ margin: 30 }}>
            <Text>Connection</Text>
            <Text style={style.text}>Mail </Text>
            <TextInput
              placeholder=" Entrez votre adresse mail "
              style={style.inputText}
              onChangeText={setlogMail}
              value={logMail}
            />
            <Text style={style.text}>Mot de passe </Text>
            <TextInput
              placeholder="Entrez votre mot de passe"
              style={style.inputText}
              onChangeText={setlogPass}
              secureTextEntry={true}
              value={logPass}
            />
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#316CB2",
                width: 250,
                height: 50,
                justifyContent: "center",
                borderRadius: 8,
                marginVertical: 5,
              }}
              onPress={() => getUser("users")}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "",
                  fontSize: 20,
                }}
              >
                Valider
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : selectedOption === false ? (
        <SafeAreaView>
          {/* Formulaire d'inscription */}
          <View style={{ margin: 30 }}>
            <Text>Créer un compte</Text>
            <Text style={style.text}>Nom </Text>
            <TextInput
              placeholder="Entrez votre nom"
              style={style.inputText}
              onChangeText={setName}
              value={nom}
            />
            <Text style={style.text}>Adresse mail </Text>
            <TextInput
              placeholder="Entrez votre adresse mail"
              style={style.inputText}
              onChangeText={setMail}
              value={mail}
            />

            <Text style={style.text}>Mot de passe </Text>
            <TextInput
              placeholder="Entrez votre mot de passe"
              style={style.inputText}
              onChangeText={setPass}
              secureTextEntry={true}
              value={pass}
            />
            <TouchableOpacity
              style={{
                alignItems: "center",
                backgroundColor: "#316CB2",
                width: 250,
                height: 50,
                justifyContent: "center",
                borderRadius: 8,
                marginVertical: 5,
              }}
              onPress={callApi}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "",
                  fontSize: 20,
                }}
              >
                Valider
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <></>
      )}
    </SafeAreaProvider>
  );
}

export default Connexion;
