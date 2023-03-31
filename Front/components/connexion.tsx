/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { style } from "../style/style";
import {useState} from 'react'

import {
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  Button
} from "react-native";

function Connexion({ navigation}: any): JSX.Element {
const [selectedOption, setSelectedOption] = useState(null);

const signIn = () =>{
  setSelectedOption(true);
}
const signUp = () =>{
  setSelectedOption(false);

}

const callApi = async () => {
  const queryString = `name=${nom}&email=${mail}&password=${pass}`;
  const response = await fetch(`http://10.139.0.14:4548/users?${queryString}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
};


  const [nom, setName ] = React.useState("");
  const [mail, setMail ] = React.useState("");
  const [pass, setPass] = React.useState("");

  // const [pass] = React.useState("");
  // const [mail] = React.useState("");
  return (
    <>
          <Button
          title="Me connecter"
          onPress={signIn}
          />
          <Button
          title="M'inscrire"
          onPress={signUp}
          /> 
      {selectedOption ? (
        <SafeAreaView>
          <ScrollView style={{ margin: 30 }}>
            <Text>Connection</Text>
            <Text style={style.text}>Mail </Text>
            <TextInput
              placeholder=" Entrez votre adresse mail "
              style={style.inputText}
              onChangeText={setMail}
              value={mail}
            />
            <Text style={style.text}>Mot de passe </Text>
            <TextInput
              placeholder="Entrez votre mot de passe"
              style={style.inputText}
              onChangeText={setPass}
              value={pass}
            />
            <Pressable>
              <Text>M'inscrire</Text>
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      ) : selectedOption===false ?  (
        <SafeAreaView>
          {/* Formulaire d'inscription */}
          <ScrollView style={{ margin: 30 }}>
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
            <Button
            title="Valider"
            onPress={callApi}
            />

          </ScrollView>
        </SafeAreaView>
      ):(<></>)
    }
    </>
  );
}

export default Connexion;
