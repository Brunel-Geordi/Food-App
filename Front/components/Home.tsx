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
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import { UserContext } from "./context";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Homescreen({ navigation }: any): JSX.Element {
  const connected = useContext(UserContext);
  return (
    <SafeAreaProvider>
      {connected.token && (
        <View style={style.cardView}>
          <Text style={style.fidelityPoint}>Mes points fedelity</Text>
          <View style={style.crownView}>
            <Text style={style.crownText}>{connected.fidelity} </Text>
            <MaterialCommunityIcons
              name="crown"
              size={30}
              color="gold"
              style={{ alignSelf: "center" }}
            />
          </View>
        </View>
      )}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#316CB2", fontSize: 40, fontWeight: "bold" }}>
          Home Screen
        </Text>
        <MaterialCommunityIcons name="egg-fried" size={250} color="#316CB2" />
      </View>
    </SafeAreaProvider>
  );
}

export default Homescreen;

const style = StyleSheet.create({
  cardView: {
    borderWidth: 2,
    margin: 30,
    borderRadius: 8,
    backgroundColor: "red",
    borderColor: "grey",
  },
  fidelityPoint: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "700",
  },
  crownText: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "700",
    color: "gold",
  },
  crownView: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
});
