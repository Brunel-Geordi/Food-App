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
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { setStatus } from "../../services/get";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { updateStatus } from "../../services/update";

function Validation({ navigation }: any): JSX.Element {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [status, setNewStatus] = useState([
    "En attente",
    "En preparation",
    "Terminé",
    "Retiré",
  ]);
  useEffect(() => {
    getData();
  }, [data]);
  const getData = async () => {
    const dataList = await setStatus();
    setData(dataList);
  };
  return (
    <SafeAreaProvider style={{ backgroundColor: "#C8B1B1" }}>
      <View style={{borderBottomWidth: 2, borderBottomColor: 'grey', alignItems: "center", padding: 15}}>
        <Text style={{fontWeight: "900", fontSize: 20}}>
          Nombre total de commandes : {data.length}
        </Text>
      </View>
      <ScrollView>
        {data.length > 0 &&
          data.map((list) => (
            <View key={list.id} style={styles.view}>
              <View
                style={{
                  borderBottomWidth: 2,
                  paddingVertical: 5,
                  alignItems: "center",
                  borderColor: "#ccc",
                }}
              >
                <Text>{list.date}</Text>
              </View>
              <View style={{ paddingVertical: 5 }}>
                <Text>
                  {list.qte}
                  {"x  "}
                  {list.name}
                </Text>
                {list.boisson && list.snack && (
                  <View>
                    <Text>
                      {list.qte}
                      {"x  "}
                      {list.boisson}
                    </Text>
                    <Text>
                      {list.qte}
                      {"x  "}
                      {list.snack}
                    </Text>
                  </View>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 5,
                }}
              >
                {status.map((label) => (
                  <TouchableOpacity
                    key={label}
                    style={[
                      styles.optionButton,
                      list.status === label && styles.selectedOptionButton,
                      list.status === label &&
                        selectedOption === label &&
                        styles.selectedOptionButton,
                    ]}
                    onPress={() => {
                      updateStatus(label, list.id), setSelectedOption(label);
                    }}
                  >
                    <Text>{label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default Validation;

const styles = StyleSheet.create({
  optionButton: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  selectedOptionButton: {
    borderWidth: 1,
    backgroundColor: "green",
    borderColor: "yellow",
  },
  optionText: {
    color: "#333",
    fontSize: 16,
  },
  view: {
    borderWidth: 1.5,
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#E8E2E2",
  },
});
