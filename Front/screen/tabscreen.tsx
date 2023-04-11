/*      _______         __         ___        ____   ______     __      ___
 *    /   _____|      /    \      |   \      /    | |   __  \  |  |   /     \
 *   /   /           /  /\  \     |    \    /     | |  |__|  | |  |  /   _   \
 *  |   |  ____     /  /__\  \    |  | \ \ / / |  | |  _____/  |  | |   |  |  |
 *  |   |  |__ |   /   ____   \   |  |  \___/  |  | |  |       |  | |   |_ |  |
 *   \  \ _ |  |  /   /    \   \  |  |         |  | |  |       |  |  \       /
 *    \ _______| /__ /      \   \ |__|         |__| |__|       |__|   \ ___ /
 *
 *      ________    _ _______      ___        _____       _____      __          _____     _____     __      __   __     __   _______   __
 *    /   ______|  |   ______|   /     \     |  __  \    |      \   |  |        |  __  \  |  __  \  |  |    |  | |  \   |  | |   ____| |  |
 *   /   /         |  |__       /   __   \   | |__|  |   |   __  \  |  |        | |__|  | | |__|  | |  |    |  | |   \  |  | |  |__    |  |
 *  |   |   _____  |     |     |   |  |   |  |     _/    |  |  \  | |  |   __   |     _/  |     _/  |  |    |  | |    \ |  | |     |   |  |
 *  |   |  |__  |  |   __|     |   |__|   |  |  __  \    |  |__/  | |  |  |__|  |  __  \  |  __  \  |  |    |  | |  |\ \|  | |   __|   |  |
 *   \   \ _ |  |  |  |______   \        /   | |  \  \   |       /  |  |        | |__|  | | |  \  \ |   \__/   | |  | \    | |  |____  |  |____
 *     \ _______|  |_________|    \ ___ /    |_|   \__\  |______/   |__|        |______/  |_|   \__\ \________/  |__|  \___| |_______| |_______|
 */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import Drawer from "./drawerscreen";
import "react-native-gesture-handler";
import Homescreen from "../components/Home";
import Connexion from "../components/connexion";
import { style } from "../style/style";
import { Pressable } from "react-native";

function Tabnav({ navigation }): JSX.Element {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: "#792D2D" }}
      sceneContainerStyle={{ backgroundColor: "#E4DADA" }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notre carte™"
        component={Drawer}
        options={{
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Panier")}
              style={style.panier}
            >
              <FontAwesome5 name="shopping-basket" size={26} color="black" />
            </Pressable>
          ),
          /*tabBarBadge: 3,*/ tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Mon Compte"}
        component={Connexion}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-person-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabnav;
