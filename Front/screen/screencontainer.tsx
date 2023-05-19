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
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./drawerscreen";
import Panier from "../components/panier";
import Tabnav from "./tabscreen";
import Description from "../components/product_description";
import { createStackNavigator } from "@react-navigation/stack";

function Screen(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const Modal = createStackNavigator();

  return (
    <NavigationContainer>
      <Modal.Navigator>
        <Modal.Screen
          name="Tabnav"
          component={Tabnav}
          options={{ headerShown: false}}
        />
        <Modal.Screen
          name="Panier"
          component={Panier}
          options={{ headerTitleAlign: "center" }}
        />

        <Modal.Screen
          name="Drawer"
          component={Drawer}
          options={{ headerShown: false }}
        />
        <Modal.Group screenOptions={{presentation:"modal"}}>
          <Modal.Screen
            name="Menu"
            component={Description}
            options={{headerShown:false}}
          />
        </Modal.Group>
      </Modal.Navigator>
    </NavigationContainer>
  );
}

export default Screen;
