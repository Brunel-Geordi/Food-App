/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from "react";
import {
  Text,
  Button,
  Alert
} from "react-native";
import { style } from "../style/style";
import Connexion from "./connexion";

function Compte({ navigation }: any): JSX.Element {
  // const [nom, onChangeText] = React.useState("");
  // const [prenom, onChange] = React.useState("");
  // const [mdp] = React.useState("");
  // const [mail] = React.useState("");
  // const isSet = nom && prenom;
  return (
    <>
        <Text>Je suis la page de parametrage</Text>
        <Button
        title="Me connecter"
        onPress={() => Connexion(true)}    
        accessibilityLabel="Learn more about this purple button"
        />
        <Button
        // onPress={onPressLearnMore}
        title="M'inscrire"
        onPress={() => Connexion(false)}    
        />
    </>
  );
}

export default Compte;
