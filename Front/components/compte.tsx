/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef } from "react";
import {
  Text,
} from "react-native";

function Compte({ navigation }: any): JSX.Element {
  const [nom, onChangeText] = React.useState("");
  const [prenom, onChange] = React.useState("");
  const [mdp] = React.useState("");
  const [mail] = React.useState("");
  const isSet = nom && prenom;
  return (
    <>
        <Text>Je suis la page de parametrage</Text>
    </>
  );
}

export default Compte;
