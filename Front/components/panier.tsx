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
import { Text, Button, Image, View, SafeAreaView } from "react-native";
import { imageUrl, apiUrl } from "../services/get";

function Panier({ navigation, route }: any): JSX.Element {
  const { name, qte, image, total, snack, drink } = route.params;

  return (
    <SafeAreaView>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#E8E2E2",
          marginBottom: 5,
        }}
      >
        <Image
          source={{
            uri: `${imageUrl}${image}`,
          }}
          style={{
            width: 150,
            height: 140,
            alignSelf: "center",
            justifyContent: "flex-end",
          }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            {qte} X
          </Text>
          <Text
            style={{
              justifyContent: "center",
              fontSize: 17,
              fontWeight: "500",
            }}
          >
            {name}
          </Text>

          {drink && snack && (
            <>
              <Text
                style={{
                  justifyContent: "center",
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                {snack}
              </Text>
              <Text
                style={{
                  justifyContent: "center",
                  fontSize: 17,
                  fontWeight: "500",
                }}
              >
                {drink}
              </Text>
            </>
          )}
          <Text
            style={{
              justifyContent: "center",
              fontSize: 17,
              fontWeight: "500",
            }}
          >
            Total : {total} €
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Panier;
