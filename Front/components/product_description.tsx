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
import React, { useEffect, useState, useRef } from "react";
import { Text, View, Button, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Panier from "./panier";

function Description({ navigation }: any): JSX.Element {
  useEffect(() => {
    fetchUserData();
    fetchUserData2()
  }, []);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [openDrink, setOpenDrink] = useState(false);

  const [selectedSnack, setSelectedSnack] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);

  const [products, setBurgers] = useState([]);
  const [drink, setDrink] = useState([]);

  const [snack, setSnack] = useState([]);


  const fetchUserData = () => {
    fetch(`http://192.168.175.67:5000/boisson`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newOptions = data.map((product) => ({
          label: product.name,
          value: product.image,
        }));
        // console.log("new options:", newOptions);
        setDrink([{ label: "", value: null }, ...newOptions]);
        setBurgers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUserData2 = () => {
    fetch(`http://192.168.175.67:5000/snack`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newOptions = data.map((product) => ({
          label: product.name,
          value: product.image,
        }));
        // console.log("new options:", newOptions);
        setSnack([{ label: "", value: null }, ...newOptions]);
        setBurgers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <SafeAreaProvider>
      <View style={{ margin: 10 }} />
        <DropDownPicker
          open={openDrink}
          value={selectedDrink}
          items={drink}
          setOpen={setOpenDrink}
          setValue={setSelectedDrink}
          placeholder="Choisir une boison"
        />
        {selectedDrink && (
          <Image
            source={{
              uri: `http://192.168.175.67:5000/image/${selectedDrink}`,
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

        <View style={{ margin: 15 }} />

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
        />
        {selectedDrink && (
          <Image
            source={{
              uri: `http://192.168.175.67:5000/image/${selectedSnack}`,
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
      <Button title="Ajouter au panier" onPress={() => navigation.navigate("Panier")}/>
    </>
  );
}

export default Description;
