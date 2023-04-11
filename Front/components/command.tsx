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
import { style } from "../style/style";
import { ScrollView, TouchableOpacity, Image, Text, View } from "react-native";

function Command({ navigation, route }): JSX.Element {
  const [products, setBurgers] = useState([]);
  const [view, setView] = useState("");

  useEffect(() => {
    setView(route);
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch(`http://192.168.104.67:4548/${route.params?.option}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBurgers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <ScrollView horizontal={false}>
      {products.length > 0 && (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {products.map((product) => (
            <TouchableOpacity
              key={product.id_bg}
              style={{
                backgroundColor: "#E8E2E2",
                margin: 10,
                width: 155,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: 4,
                }}
              >
                {product.name}
              </Text>
              <Image
                source={{
                  uri: `http://192.168.104.67:4548/image/${product.image}`,
                }}
                style={{
                  width: 130,
                  height: 120,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {product.price} €
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

export default Command;
