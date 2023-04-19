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
import { Text, View, Button, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { imageUrl, dropSelction } from "../services/get";

function Description({ route, navigation }: any): JSX.Element {
  useEffect(() => {
    setOption();
  }, []);

  const { select, name, image } = route.params;
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [openDrink, setOpenDrink] = useState(false);
  const [selectedSnack, setSelectedSnack] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);

  const [drink, setDrink] = useState([]);
  const [snack, setSnack] = useState([]);

  const setOption = async () => {
    const data = await dropSelction(`snack`);
    const data1 = await dropSelction(`boisson`);
    setSnack(data);
    setDrink(data1);
  };
  return (
    <>
      <SafeAreaProvider>
        {select == "menu" ? (
          <SafeAreaProvider>
            <Text>{name}</Text>
            <Image
              source={{
                uri: `${imageUrl}${image}`,
              }}
              style={{
                width: 130,
                height: 120,
                alignSelf: "center",
                justifyContent: "center",
              }}
            />
            <View style={{ margin: 10 }} />
            <DropDownPicker
              open={openDrink}
              value={selectedDrink}
              items={drink}
              setOpen={setOpenDrink}
              setValue={setSelectedDrink}
              placeholder="Choisir une boison"
              style={{ borderColor: "transparent" }}
            />
            {selectedDrink && (
              <Image
                source={{
                  uri: `${imageUrl}${selectedDrink}`,
                }}
                style={{
                  marginTop: 12,
                  width: 140,
                  height: 120,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              />
            )}

            <View style={{ margin: 5 }} />

            <DropDownPicker
              open={openSnack}
              value={selectedSnack}
              items={snack}
              setOpen={setOpenSnack}
              setValue={setSelectedSnack}
              placeholder="Choisir une snack"
              disabled={!selectedDrink}
              disabledStyle={{ opacity: 0.5 }}
              zIndex={2000}
              zIndexInverse={2000}
              style={{ borderColor: "transparent" }}
            />
            {selectedDrink && (
              <Image
                source={{
                  uri: `${imageUrl}${selectedSnack}`,
                }}
                style={{
                  marginTop: 12,
                  width: 170,
                  height: 150,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              />
            )}
          </SafeAreaProvider>
        ) : (
          <View>
            <Text>{name}</Text>
            <Image
              source={{
                uri: `${imageUrl}${image}`,
              }}
              style={{
                width: 130,
                height: 120,
                alignSelf: "center",
                justifyContent: "center",
              }}
            />
          </View>
        )}
      </SafeAreaProvider>
      <Button
        title="Ajouter au panier"
        onPress={() => navigation.navigate("Panier")}
      />
    </>
  );
}
export default Description;
