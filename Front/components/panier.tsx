/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import {
  Text,
  Button,
} from "react-native";

function Panier({ navigation}: any): JSX.Element {
  
    return (
      <>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Text>Je suis dans </Text>
        {/* <Text>{Data()}</Text> */}
      </>
    );
}

export default Panier