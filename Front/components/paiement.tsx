import React, { useContext } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "../style/style";
import CustomInput, { styles } from "./custumForm";
import { Formik, Field } from "formik";
import { SafeAreaView } from "react-native-safe-area-context";
import { cardValidation } from "../services/formValidation";
import { setList } from "../services/post";
import { UserContext } from "./context";
import { clearPanier } from "../services/delete";
import { updateFidelity } from "../services/update";

function Card({ view, closeView, navigation, sum, list }): JSX.Element {
  const connected = useContext(UserContext);

  const addList = () => {
    list.map((element: any) => {
      setList(
        element.name,
        element.qte,
        element.boisson,
        element.snack,
        element.montant,
        connected.id_user
      );
    });
  };
  return (
    <SafeAreaView style={modal.centeredView}>
      <Modal
        transparent={true}
        visible={view}
        onRequestClose={() => {
          closeView();
        }}
      >
        <View style={[modal.centeredView]}>
          <Pressable style={modal.button} onPress={() => closeView()}>
            <MaterialIcons name="cancel" size={30} color="black" />
          </Pressable>
          <View style={modal.modalView}>
            <Formik
              validationSchema={cardValidation}
              initialValues={{
                carte: "",
                crypto: "",
                validation: "",
              }}
              onSubmit={(values) => {
                addList(),
                  clearPanier(connected.id_user),
                  navigation.navigate("Liste de commande"),
                  closeView();
                  updateFidelity(Math.round(2*sum), connected.id_user)
              }}
            >
              {({ handleSubmit, values, errors }) => (
                <>
                  <Text style={style.text}>Numéro de la carte </Text>
                  <Field
                    placeholder="XXXX XXXX XXXX XXXX"
                    style={style.inputText}
                    component={CustomInput}
                    keyboardType="numeric"
                    maxLength={16}
                    name="carte"
                  />
                  {errors.carte && (
                    <Text style={[styles.errorText]}>{errors.carte}</Text>
                  )}
                  <SafeAreaView style={{ flexDirection: "row" }}>
                    <View>
                      <Text style={style.text}>Date d'expiration</Text>
                      <Field
                        placeholder="01/26"
                        style={style.inputText}
                        component={CustomInput}
                        name="validation"
                        maxLength={5}
                      />
                      {errors.validation && (
                        <Text style={[styles.errorText]}>
                          {errors.validation}
                        </Text>
                      )}
                    </View>

                    <View
                      style={{
                        flex: 1,
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                      }}
                    >
                      <Text style={style.text}>Crypto</Text>
                      <Field
                        placeholder="XXX"
                        style={style.inputText}
                        component={CustomInput}
                        name="crypto"
                        keyboardType="numeric"
                        maxLength={3}
                      />
                      {errors.crypto && (
                        <Text style={[styles.errorText]}>{errors.crypto}</Text>
                      )}
                    </View>
                  </SafeAreaView>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      alignSelf: "center",
                      marginTop: 10,
                      backgroundColor: "#316CB2",
                      width: 175,
                      height: 50,
                      justifyContent: "center",
                      borderRadius: 8,
                      marginVertical: 5,
                    }}
                    onPress={() => handleSubmit()}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      Payé
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {sum} €
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const modal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
  },
  button: {
    alignItems: "flex-end",
    paddingEnd: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Card;
