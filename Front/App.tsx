/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
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
import { Text } from "react-native";
import Panier from "./components/panier";
import {Tabnav, Drawer} from "./components/navigation"
// import { Data } from "./components/database";
// import { Data } from "./components/database";

/**
 * Initialisation des principaux ecran de navigation de l'application
 * @returns 
 */
function App(): JSX.Element {

  const Stack = createNativeStackNavigator();
  return (
    <>
    {/* <Text>{Data()}</Text>
    <Data /> */}
    {/* <Data /> */}
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
            options={{ presentation: "containedModal"}}
          />
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}



export default App;
