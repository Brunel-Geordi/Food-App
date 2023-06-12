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
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import Command from "../components/command";

function Drawer({ navigation }): JSX.Element {
  const Draw = createDrawerNavigator();
  return (
    <Draw.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#C8B1B1",
        drawerActiveTintColor: "#792D2D",
        sceneContainerStyle: { backgroundColor: "#C8B1B1" },
        headerStyle: {
          backgroundColor: "#C8B1B1",
          borderBottomWidth: 3,
        },
      }}
    >
      <Draw.Screen
        name="Tous nos produits"
        component={Command}
        initialParams={{ option: "all" }}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="restaurant" size={size} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Draw.Screen
        name="Menus"
        component={Command}
        initialParams={{ option: "menus" }}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Draw.Screen
        name="Sandwitchs"
        component={Command}
        initialParams={{ option: "burgers" }}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="hamburger" size={size} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Draw.Screen
        name="Boissons"
        initialParams={{ option: "boissons" }}
        component={Command}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="drink" size={size} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Draw.Screen
        name="Snacks"
        initialParams={{ option: "snacks" }}
        component={Command}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="french-fries"
              size={size}
              color={color}
            />
          ),
          headerTitleAlign: "center",
        }}
      />
      <Draw.Screen
        name="Desserts"
        initialParams={{ option: "desserts" }}
        component={Command}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="cookie-bite" size={size} color={color} />
          ),
          headerTitleAlign: "center",
        }}
      />
    </Draw.Navigator>
  );
}

export default Drawer;