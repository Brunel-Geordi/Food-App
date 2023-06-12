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
import {
  Text,
  Button,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { apiUrl, imageUrl } from "../services/api";
import { EvilIcons } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";
import { UserContext } from "./context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Card from "./paiement";
import { number } from "yup";

function Panier({ navigation }: any): JSX.Element {
  const [panier, setPanier] = useState([]);
  const [loading, setLoading] = useState(panier.length >= 0);
  const [view, setView] = useState(false);
  const user = useContext(UserContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    somme();
    getProduct();
    setLoading(false);
  }, [panier.length]);

  const somme = () => {
    if (panier.length > 0) {
      const sumValue = panier.reduce(
        (price, total) => price + parseFloat(total.montant),
        0
      );
      setTotal(sumValue);
    }
  };
  const token = useContext(UserContext);
  const getProduct = async () => {
    try {
      detetePanier;
      const response = await fetch(`${apiUrl}panier?&id_users=${user.id_user}`);
      const data = await response.json();
      setPanier(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const detetePanier = async (idPanier: Number) => {
    try {
      const response = await fetch(`${apiUrl}panier?id=${idPanier}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        await getProduct();
        return true;
      } else {
        throw new Error("Impossible de supprimer le panier");
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Spinner visible={loading} textContent={"Chargement..."} />
        {token.token && panier && panier.length > 0 ? (
          <SafeAreaProvider>
            <Button
              title="Commander de nouveau"
              onPress={() => navigation.navigate("Notre carte™")}
            />
            <ScrollView>
              {panier.map((produit) => (
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#E8E2E2",
                    marginTop: 5,
                  }}
                  key={produit.id}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#316CB2",
                      width: 50,
                      justifyContent: "center",
                    }}
                    onPress={() => detetePanier(produit.id)}
                  >
                    <EvilIcons
                      name="trash"
                      size={45}
                      color="red"
                      style={{ alignSelf: "center" }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      backgroundColor: "#E8E2E2",
                      justifyContent: "center",
                      paddingVertical: 8,
                    }}
                  >
                    <Image
                      source={{
                        uri: `${imageUrl}${produit.image}`,
                      }}
                      style={{
                        width: 100,
                        height: 100,
                        alignItems: "center",
                        alignContent: "center",
                        marginEnd: 15,
                      }}
                    />
                    <View
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "bold",
                        }}
                      >
                        : {produit.qte}
                      </Text>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "500",
                        }}
                      >
                        {produit.name}
                      </Text>
                      {produit.boisson && produit.snack && (
                        <>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: "500",
                            }}
                          >
                            {produit.snack}
                          </Text>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: "500",
                            }}
                          >
                            {produit.boisson}
                          </Text>
                        </>
                      )}
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: "500",
                        }}
                      >
                        Sous - Total : {produit.montant} €
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <View style={{ alignItems: "center", borderTopWidth: 2 }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: "#316CB2",
                  width: 250,
                  height: 50,
                  justifyContent: "center",
                  borderRadius: 8,
                  marginVertical: 5,
                }}
                onPress={() => setView(true)}
              >
                <Text
                  style={{ color: "white", fontWeight: "900", fontSize: 17 }}
                >
                  Passer la commande
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontWeight: "900",
                    fontSize: 17,
                  }}
                >
                  {total} €
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaProvider>
        ) : (
          <View style={{ flex: 1, alignSelf: "center" }}>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => navigation.navigate("Notre carte™")}
            >
              <Text style={{}}>Passer une commande</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaProvider>
      {view && (
        <Card
          navigation={navigation}
          view={view}
          closeView={() => setView(false)}
          sum={total}
          list={panier}
          clear={() => setPanier(null)}
        />
      )}
    </>
  );
}
export default Panier;
