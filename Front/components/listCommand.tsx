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
import React, { useEffect, useState, useContext } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import { getList } from "../services/get";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { UserContext } from "./context";

function List({ navigation }: any): JSX.Element {
  const [data, setData] = useState([]);
  const [jauge, setJauge] = useState(100);
  const connected = useContext(UserContext);
  useEffect(() => {
    getData();
  }, [data.length]);
  const getData = async () => {
    const dataList = await getList(connected.id_user);
    setData(dataList);
  };
  return (
    <SafeAreaProvider>
      <ScrollView>
        {data.length > 0 &&
          data.map((list) => (
            <View
              key={list.id}
              style={{
                borderWidth: 1.5,
                margin: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: "#E8E2E2",
              }}
            >
              <Text>
                {list.qte}
                {"x  "}
                {list.name}
              </Text>
              {list.boisson && list.snack && (
                <View>
                  <Text>{list.boisson}</Text>
                  <Text>{list.snack}</Text>
                </View>
              )}
              <View style={styles.container}>
                <Text>{list.status}</Text>
                {list.status !== "Retiré" && (
                  <View style={styles.progressBar}>
                    <Animated.View
                      style={{ backgroundColor: "#8BED4F", width: `${jauge}%` }}
                    />
                  </View>
                )}
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: "#E8E2E2",
    padding: 8,
  },
  progressBar: {
    height: 15,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});
