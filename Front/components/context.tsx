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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUsers } from "../services/get";
import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext(null);

function Context(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal;
}): JSX.Element {
  const [token, setToken] = useState(null);
  const [id_user, setID] = useState(null);
  const [name, setName] = useState(null);
  const [role, setRole] = useState(null);
  const [fidelity, setFidelity] = useState(null);

  useEffect(() => {
    const storage = async () => {
      try {
        if (token) {
          await AsyncStorage.setItem("token", token);
          await AsyncStorage.setItem("user", String(id_user));
          await AsyncStorage.setItem("name", String(name));
          await AsyncStorage.setItem("role", String(role));
          await AsyncStorage.setItem("fidelity", String(fidelity));
          return;
        }
        const _token = await AsyncStorage.getItem("token");
        const _user = await AsyncStorage.getItem("user");
        const _name = await AsyncStorage.getItem("name");
        const _role = await AsyncStorage.getItem("role");
        const _fidelity = await AsyncStorage.getItem("fidelity");
        setToken(_token);
        setID(_user);
        setName(_name);
        setRole(_role);
        setFidelity(_fidelity);
      } catch (error) {
        return
      }
    };
    storage();
  }, [token, id_user, name, role, fidelity]);
  const getUser = async (mail: string, pass: string) => {
    const user = await getUsers(mail, pass);
    if (!user.hasOwnProperty("message")) {
      const[{token, id, name, role, fidelity}] = user
      setToken(token);
      setID(id);
      setName(name);
      setRole(role);
      setFidelity(fidelity);
      return;
    }
  };

const disconnect = async () => {
    setToken(null);
    setID(null);
    setName(null);
    setRole(null);
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("name");
    await AsyncStorage.removeItem("role");
    await AsyncStorage.removeItem("fidelity");
  };
  return (
    <UserContext.Provider
      value={{ token, getUser, disconnect, id_user, name, role, fidelity }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
export default Context;
