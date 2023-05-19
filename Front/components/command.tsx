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
import { ScrollView, TouchableOpacity, Image, Text, View } from "react-native";
import { getProduct, imageUrl } from "../services/get";
import Spinner from 'react-native-loading-spinner-overlay';

function Command({ navigation, route }): JSX.Element {
  const [view, setView] = useState("");
  const [products, setProduct] = useState<{id_bg: number; name: string, image: string, price: string}[]>([]);
  const [loading, setLoading] = useState(products && products.length >= 0);

  useEffect(() => {
    setView(route);
    setAliment()
  }, []);
  
  const setAliment = async () => {
    const data = await getProduct(`${route.params?.option}`);
    setProduct(data)
    setLoading(false)
  };

  return (
    <ScrollView horizontal={false}>
      <Spinner visible={loading} textContent={'Chargement...'}/>
      {(products && products.length) > 0 && (
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
              onPress={() => navigation.navigate("Menu", {select: route.params?.option, name:product.name, image: product.image, price : product.price})}
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
                  uri: `${imageUrl}${product.image}`
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
                {(product.price)} €
              </Text>
            </TouchableOpacity>

          ))}
        </View>
      )}
    </ScrollView>
  );
}

export default Command;
