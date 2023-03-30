/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { style } from "../style/style";

import {
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
} from "react-native";

function Connexion({ navigation }: any): JSX.Element {
  const [nom, onChangeText] = React.useState("");
  const [prenom, onChange] = React.useState("");
  const [mdp] = React.useState("");
  const [mail] = React.useState("");
  const isSet = nom && prenom;
  return (
    <>
      <SafeAreaView>
        <ScrollView style={{ margin: 30 }}>
          <Text style={style.text}>Nom :</Text>
          <TextInput
            placeholder=" Entre ton nom ici"
            style={style.inputText}
            onChangeText={onChangeText}
            value={nom}
          />
          <Text style={style.text}>Prénom :</Text>
          <TextInput
            placeholder="Entre ton prenom ici"
            style={style.inputText}
            onChangeText={onChange}
            value={prenom}
          />
          <Text style={style.msg}>
            Ceci est un test, mais ne rentre pas de fausse informations sous
            peine d'avertissement
          </Text>
          {isSet && (
            <Text style={style.msg}>
              Tu t'appelles :{" "}
              <Text style={style.text}>
                {nom} {prenom}
              </Text>
            </Text>
          )}
        </ScrollView>
      </SafeAreaView>

      {/* Formulaire d'inscription */}
      <SafeAreaView>
        <ScrollView style={{ margin: 30 }}>
          <Text style={style.text}>Nom :</Text>
          <TextInput
            placeholder="Nom"
            style={style.inputText}
            onChangeText={onChangeText}
            value={nom}
          />
          <Text style={style.text}>Prénom :</Text>
          <TextInput
            placeholder="Prenom"
            style={style.inputText}
            onChangeText={onChange}
            value={prenom}
          />

          <Text style={style.text}>Addresse mail :</Text>
          <TextInput
            placeholder="Email"
            style={style.inputText}
            onChangeText={onChange}
            value={mail}
          />

          <Text style={style.text}>Mot de passe :</Text>
          <TextInput
            placeholder="Mot de passe"
            style={style.inputText}
            onChangeText={onChange}
            secureTextEntry={true}
            value={mdp}
          />

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Connexion;
