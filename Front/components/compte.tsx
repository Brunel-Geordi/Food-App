/*
 *      _______         __         ___        ____   ______     __      ___
 *    /   _____|      /    \      |   \      /    | |   __  \  |  |   /     \
 *   /   /           /  /\  \     |    \    /     | |  |__|  | |  |  /   _   \
 *  |   |  ____     /  /__\  \    |  |\  \ /  /|  | |  _____/  |  | |   |  |  |
 *  |   |  |__ |   /   ____   \   |  |  \___/  |  | |  |       |  | |   |_ |  |
 *   \  \ _ |  |  /   /    \   \  |  |         |  | |  |       |  |  \       /
 *    \ _______| /__ /      \   \ |__|         |__| |__|       |__|   \ ___ /
 *
 *
 *      ________    _ _______      ___        _____       _____      __          _____     _____     __      __   __     __   _______   __
 *    /   ______|  |   ______|   /     \     |  __  \    |      \   |  |        |  __  \  |  __  \  |  |    |  | |  \   |  | |   ____| |  |
 *   /   /         |  |__       /   __   \   | |__|  |   |   __  \  |  |        | |__|  | | |__|  | |  |    |  | |   \  |  | |  |__    |  |
 *  |   |   _____  |     |     |   |  |   |  |     _/    |  |  \  | |  |   __   |     _/  |     _/  |  |    |  | |    \ |  | |     |   |  |
 *  |   |  |__  |  |   __|     |   |__|   |  |  __  \    |  |__/  | |  |  |__|  |  __  \  |  __  \  |  |    |  | |  |\ \|  | |   __|   |  |
 *   \   \ _ |  |  |  |______   \        /   | |  \  \   |       /  |  |        | |__|  | | |  \  \ |   \__/   | |  | \    | |  |____  |  |____
 *     \ _______|  |_________|    \ ___ /    |_|   \__\  |______/   |__|        |______/  |_|   \__\ \________/  |__|  \___| |_______| |_______|
 *
 */
import React, { useContext, useRef, useState } from "react";
import { Text, Button, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { style } from "../style/style";
import Connexion from "./connexion";
import { UserContext } from "./context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

function Compte({ navigation }: any): JSX.Element {
  const connected = useContext(UserContext);
  // const [loading, setLoading] = useState(connected.name && connected.token && connected.id_user)

  const disconnect = async () => {
    connected.setToken(null);
    connected.setID(null);
    connected.setName(null);
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('user')
    await AsyncStorage.removeItem('name')
  };
  return (
    <View>
    {/* <Spinner visible={loading} textContent={'Chargement...'} /> */}
      <Text>Bienvenu {connected.name}</Text>
      <TouchableOpacity
        onPress={() => {
          disconnect();
        }}
        style={{
          alignItems: "center",
          backgroundColor: "#316CB2",
          width: 100,
          height: 50,
          justifyContent: "center",
          borderRadius: 8,
          marginVertical: 5,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontFamily: "" }}>
          Deconnecter
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Compte;
