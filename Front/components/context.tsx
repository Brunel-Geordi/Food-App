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
import React, { useState, useContext, createContext, useEffect } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Command from "./command";

export const UserContext = createContext(null);
function Context(props): JSX.Element {
  const [token, setToken] = useState(null);
  const [id_user, setID] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const storage = async () => {
      try {
        if (token && name && name) {
          await AsyncStorage.setItem("token", token);
          await AsyncStorage.setItem("user", String(id_user));
          await AsyncStorage.setItem("name", String(name));
          return;
        }
        const _token = await AsyncStorage.getItem("token");
        const _user = await AsyncStorage.getItem("user");
        const _name = await AsyncStorage.getItem("name");
        setToken(_token);
        setID(_user);
        setName(_name);
      } catch (error) {
        console.log(error);
      }
    };
    storage();
  }, [token, id_user, name]);

  return (
    <UserContext.Provider value={{ token, setToken, id_user, setID, name, setName }}>
      {props.children}
    </UserContext.Provider>
  );
}
export default Context;
