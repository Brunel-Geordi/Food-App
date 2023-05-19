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
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { apiUrl, imageUrl } from "../services/get";
import { EvilIcons } from "@expo/vector-icons";
import Spinner from 'react-native-loading-spinner-overlay';
import { UserContext } from "./context";

function Panier({ navigation }: any): JSX.Element {
  const [panier, setPanier] = useState([]);
  const [loading, setLoading] = useState(panier.length >= 0);
  const user = useContext(UserContext)


  useEffect(() => {
    getProduct();
    setLoading(false)
  }, []);

  const token = useContext(UserContext)
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
      const response = await fetch(
        `${apiUrl}panier?id=${idPanier}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        await getProduct(); // mettre à jour les données du panier
        return true; // indiquer que la suppression a réussi
      } else {
        throw new Error("Impossible de supprimer le panier");
      }
    } catch (error) {
      console.log(error);
      return false; // indiquer que la suppression a échoué
    }
  };

  return (
    <ScrollView>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Spinner visible={loading} textContent={'Chargement...'}/>
      {token.token && panier && panier.length > 0 ? (
        <View>
          {panier.map((produit) => (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#E8E2E2",
              }}
              key={produit.id}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
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
                    {produit.qte} X
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "500",
                    }}
                  >
                    {produit.name}
                  </Text>
                  {!produit.boisson && !produit.snack && (
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
                        {produit.drink}
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
        </View>
      ) : (
        <Text>Panier vide</Text>
      )}
    </ScrollView>
  );
}
export default Panier;
