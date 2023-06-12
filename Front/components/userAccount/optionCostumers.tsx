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
import React, { useContext, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Linking,
} from "react-native";
import { UserContext } from "../context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  EvilIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
  Feather,
} from "@expo/vector-icons";

function Costumers({ navigation }: any): JSX.Element {
  useEffect(() => {}, []);

  const gitHub = () => {
    Linking.openURL("https://github.com/Brunel-Geordi/Food-App");
  };
  const gitLab = () => {
    Linking.openURL("https://gitlab.com/Gampio_GB/");
  };
  const linkedin = () => {
    Linking.openURL("https://www.linkedin.com/in/geordi-brunel-gampio");
  };
  const connected = useContext(UserContext);
  return (
    <SafeAreaProvider>
      <View
        style={{
          paddingVertical: 45,
          backgroundColor: "#316CB2",
          marginBottom: 15,
          borderRadius: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            connected.disconnect();
          }}
          style={{ alignItems: "flex-end", paddingEnd: 20 }}
        >
          <Entypo name="log-out" size={30} color="white" />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <EvilIcons name="user" size={150} color="white" />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              marginTop: 10,
              color: "white",
            }}
          >
            {connected.name}
          </Text>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "grey",
          }}
          onPress={() => navigation.push("ListComand")}
        >
          <Feather name="check-circle" size={25} color="black" />
          <Text style={{ fontSize: 18, marginVertical: 10 }}>
            {" "}
            Mes commandes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notre carte™")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "grey",
          }}
        >
          <MaterialCommunityIcons name="food" size={25} color="black" />
          <Text style={{ fontSize: 18, marginVertical: 10 }}> Commander</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "grey",
          }}
        >
          <MaterialCommunityIcons name="crown" size={25} color="black" />
          <Text style={{ fontSize: 18, marginVertical: 10 }}>
            {" "}
            Mes points de fidelités
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "grey",
          }}
          onPress={() => navigation.navigate("Panier")}
        >
          <FontAwesome name="shopping-basket" size={25} color="black" />
          <Text style={{ fontSize: 18, marginVertical: 10 }}> Mon panier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "grey",
          }}
        >
          <Ionicons name="ios-settings-sharp" size={25} color="black" />
          <Text style={{ fontSize: 18, marginVertical: 10 }}> Paramètre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "grey",
          }}
        >
          <MaterialCommunityIcons name="information" size={25} color="black" />
          <Text style={{ fontSize: 18, marginVertical: 10 }}> A propos</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{ alignItems: "center", paddingBottom: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={gitHub}>
            <AntDesign name="github" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={gitLab}>
            <AntDesign name="gitlab" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingHorizontal: 10 }}
            onPress={linkedin}
          >
            <AntDesign name="linkedin-square" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: "center", paddingVertical: 5 }}>
          Version 1.0.0
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

export default Costumers;
