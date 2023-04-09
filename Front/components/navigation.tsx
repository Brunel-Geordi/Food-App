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
  Entypo,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import "react-native-gesture-handler";
import Command from "./command";
import Homescreen from "./Home";
import Connexion from "./connexion";
import Compte from "./compte";
import { style } from "../style/style";
import { Button, Pressable, Text } from "react-native";

/**
 * Mise en place de la barre inferieur de navigation reliant les differentes options principales
 * de l'application
 * @param param0
 * @returns
 */
export function Tabnav({ navigation }): JSX.Element {
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
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="md-home"
              size={size}
              color={color}
            />
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
          /*tabBarBadge: 3,*/ tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="food"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Mon Compte"}
        component={Connexion}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="md-person-sharp"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/**
 * Mise en place de la draw barre pour le menu de commande avec affichage des produis par categories
 * @param param0
 * @returns
 */
export function Drawer({ navigation }): JSX.Element {
  const Draw = createDrawerNavigator();
  return (
    <Draw.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#C8B1B1",
        drawerActiveTintColor: "#792D2D",
        sceneContainerStyle: { backgroundColor: "#C8B1B1" },
      }}
    >
      <Draw.Screen
        name="Tous nos produits"
        component={Command}
        initialParams={{ option: "all" }}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons
              name="restaurant"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Draw.Screen
        name="Menus"
        component={Command}
        initialParams={{ option: "menu" }}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="food"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Draw.Screen
        name="Sandwitchs"
        component={Command}
        initialParams={{ option: "burgers" }}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5
              name="hamburger"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Draw.Screen
        name="Boissons"
        initialParams={{ option: "boisson" }}
        component={Command}
        options={{
          drawerIcon: ({color, size}) => (
            <Entypo
              name="drink"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Draw.Screen
        name="Snacks"
        initialParams={{ option: "snack" }}
        component={Command}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="french-fries"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Draw.Screen
        name="Desserts"
        initialParams={{ option: "dessert" }}
        component={Command}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5
              name="cookie-bite"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Draw.Navigator>
  );
}
