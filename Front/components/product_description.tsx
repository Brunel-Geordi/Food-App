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
import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { imageUrl, dropSelction } from "../services/get";
import {setPanier} from "../services/post";
import VirtualizedScrollView from "./test";
import { UserContext } from "./context";

function Description({ route, navigation }: any): JSX.Element {
  useEffect(() => {
    setOption();
  }, []);

  let [qte, setQuantity] = useState(1);

  const user = useContext(UserContext);

  const { select, name, image, price } = route.params;
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [openDrink, setOpenDrink] = useState(false);
  const [selectedSnack, setSelectedSnack] = useState(null);
  // const [label, setLabel] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);

  const [drink, setDrink] = useState([]);
  const [snack, setSnack] = useState([]);

  const sQuantity = (val: string) => {
    if (val == "+1") {
      setQuantity(qte + 1);
    } else if (qte > 1 && val == "-1") {
      setQuantity(qte - 1);
    } else {
      setQuantity(qte);
    }
  };
  async function setOption() {
    const selSnack = await dropSelction(`option`);
    const selDrink = await dropSelction(`boisson`);
    setSnack(selSnack);
    setDrink(selDrink);
  }

  return (
    <SafeAreaProvider>
    <TouchableOpacity><Text>X</Text></TouchableOpacity>
      <SafeAreaProvider>
        {select == "menu" ? (
          <SafeAreaProvider>
            <Text style={{fontWeight: "bold", fontFamily: "", fontSize:25, textAlign:"center"}}>{name}</Text>
            <Image
              source={{
                uri: `${imageUrl}${image}`,
              }}
              style={{
                width: 160,
                height: 160,
                alignSelf: "center",
                justifyContent: "center",
              }}
            />
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
                  width: 110,
                  height: 105,
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
              zIndex={1}
              zIndexInverse={1}
              style={{ borderColor: "transparent" }}
            />
            {selectedDrink && (
              <Image
                source={{
                  uri: `${imageUrl}${selectedSnack}`,
                }}
                style={{
                  marginTop: 12,
                  width: 150,
                  height: 105,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              />
            )}
          </SafeAreaProvider>
        ) : (
          <View>
            <Text style={{fontWeight: "bold", fontFamily: "", fontSize:25, textAlign:"center"}}>{name}</Text>
            <Image
              source={{
                uri: `${imageUrl}${image}`,
              }}
              style={{
                width: 255,
                height: 225,
                alignSelf: "center",
                justifyContent: "center",
              }}
            />
          </View>
        )}
      </SafeAreaProvider>
      <SafeAreaView
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => sQuantity("-1")}
            style={{
              alignItems: "center",
              width: 50,
              height: 50,
              justifyContent: "center",
              borderRadius: 50,
              marginBottom: 15,
              borderColor: "#316CB2",
              borderWidth: 4,
            }}
          >
          <Text style={{fontWeight: "bold", fontSize:30}}> - </Text>
          </TouchableOpacity>
          <Text style={{fontWeight: "bold", fontSize:30, paddingBottom:20}}> {qte} </Text>
          <TouchableOpacity
            onPress={() => sQuantity("+1")}
            style={{
              alignItems: "center",
              width: 50,
              height: 50,
              justifyContent: "center",
              borderRadius: 50,
              marginBottom: 15,
              borderColor: "#316CB2",
              borderWidth: 4,
            }}
          >
          <Text style={{fontWeight: "bold", fontFamily: "", fontSize:30}} > + </Text>
          </TouchableOpacity>
        </View>
        < TouchableOpacity
          onPress={() =>{
            if(!user.id_user){
              return navigation.navigate("Mon Compte")
            }
            setPanier(name, qte, (selectedDrink ? drink.find((item) => item.value === selectedDrink).label : null), (selectedSnack ? snack.find((item) => item.value === selectedSnack).label : null),(new Date), ((qte * price).toFixed(2)), image, user.id_user);
            navigation.navigate("Panier")
          }
          }
          style={{
            alignItems: "center",
            backgroundColor: "#316CB2",
            width: 250,
            height: 50,
            justifyContent: "center",
            borderRadius: 8,
            marginVertical: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontFamily: "" }}>
            Ajouter au panier
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", fontFamily: "" }}>
            {(qte * price).toFixed(2)} €
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default Description;