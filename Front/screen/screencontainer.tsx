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
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./drawerscreen";
import Panier from "../components/panier";
import Tabnav from "./tabscreen";
import Description from "../components/product_description";
import { createStackNavigator } from "@react-navigation/stack";
import Compte from "../components/compte";
import List from "../components/listCommand";
import Validation from "../components/adminAccount/view_command";

function Screen(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabnav"
          component={Tabnav}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Panier"
          component={Panier}
          options={{ headerTitleAlign: "center" , headerLeft: null}}
        />
        <Stack.Screen
          name="Profil"
          component={Compte}
          options={{ headerTitleAlign: "center" , headerLeft: null}}
        />
        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Liste de commande"
          component={List}
          options={{headerTitleAlign: "center"}}
        />
        <Stack.Screen
          name="Validation"
          component={Validation}
          options={{headerTitleAlign: "center"}}
        />
        <Stack.Group screenOptions={{presentation:"modal"}}>
          <Stack.Screen
            name="Menu"
            component={Description}
            options={{headerShown:false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screen;
