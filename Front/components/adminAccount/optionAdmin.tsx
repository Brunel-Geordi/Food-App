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
  Button,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { UserContext } from "../context";
import { Field, Formik } from "formik";
import CustomInput, { styles } from "../custumForm";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { newProductValidationSchema } from "../../services/formValidation";
import { style } from "../../style/style";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { launchImageLibraryAsync } from "expo-image-picker";
import { newProduct, uploadImage } from "../../services/post";
import DropDownPicker from "react-native-dropdown-picker";
function Admin({ navigation }: any): JSX.Element {
  const [selectedSnack, setSelectedSnack] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const [snack, setSnack] = useState([
    { label: " ", value: null },
    { label: "Menu", value: "menus" },
    { label: "Sandwitch", value: "burgers" },
    { label: "Boisson", value: "boissons" },
    { label: "Snack", value: "snacks" },
    { label: "Dessert", value: "desserts" },
  ]);
  const [newImage, setNewImage] = useState(null);
  const [value, setValue] = useState(true);
  const [image, setImage] = useState(true);
  const deleteImage = (values: { photo: string }) => {
    if (values.photo != "") {
      values.photo = "";
      setImage(!image);
    }
  };
  const ressetForm = (values: {
    name: string;
    price: string;
    photo: string;
  }) => {
    values.name = "";
    (values.price = ""), (values.photo = "");
    setValue(!value);
    setSelectedSnack(null);
  };
  useEffect(() => {
    ressetForm;
    deleteImage;
  }, [value, image]);

  const connected = useContext(UserContext);
  return (
    <SafeAreaProvider>
      <View
        style={{
          paddingVertical: 45,
          backgroundColor: "#316CB2",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            connected.disconnect();
          }}
          style={{ alignItems: "flex-end", paddingEnd: 10 }}
        >
          <Entypo name="log-out" size={30} color="white" />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              marginTop: 10,
              color: "white",
            }}
          >
            {connected.name}
          </Text>
          <Text style={{
              marginTop: 10,
              fontSize:15,
              color: "yellow",
              fontWeight: "bold"
            }}>Administrateur</Text>
        </View>
      </View>
      <Button title="Liste de commande" onPress={()=> navigation.navigate("Validation")}/>
      <DropDownPicker
        open={openSnack}
        value={selectedSnack}
        items={snack}
        setOpen={setOpenSnack}
        setValue={setSelectedSnack}
        placeholder="Choisir un type de produit"
        style={{ borderColor: "transparent" }}
      />
      {selectedSnack && (
        <ScrollView>
          <Formik
            validationSchema={newProductValidationSchema}
            initialValues={{
              name: "",
              price: "",
              photo: "",
            }}
            onSubmit={(values) => {
                newProduct(selectedSnack, values.name, values.price, `${selectedSnack}/${(values.name.replace(/ /g, "_")).toLowerCase()}.png`)
              ressetForm(values);
            }}
          >
            {({
              handleSubmit,
              isValid,
              values,
              errors,
              touched,
              setFieldValue,
              setFieldTouched,
            }) => (
              <>
                <Text style={style.text}>Nom produit </Text>
                <Field
                  component={CustomInput}
                  style={style.inputText}
                  name="name"
                  placeholder="Nom du produit"
                />
                <Text style={style.text}>Prix </Text>
                <Field
                  style={style.inputText}
                  component={CustomInput}
                  name="price"
                  placeholder="Prix du produit"
                  keyboardType="numeric"
                />
                <View style={{ margin: 10 }} />
                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    marginBottom: 10,
                  }}
                  onPress={async () => {
                    const { status } =
                      await ImagePicker.requestCameraPermissionsAsync();
                    if (status !== "granted") {
                      return;
                    }
                    const result = await launchImageLibraryAsync({
                      allowsEditing: true,
                    });

                    if (!result.canceled) {
                      setFieldValue("photo", result.assets[0].uri);
                      setFieldTouched("photo", true);
                      setNewImage(result.assets[0].uri);
                      return;
                    }
                    if (!values.photo) {
                      Alert.alert(
                        "Message",
                        "Veillez à selectionner une image",
                        [{ text: "Fermer" }]
                      );
                    }
                  }}
                >
                  <Text
                    style={{
                      color: "blue",
                      fontSize: 15,
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    Ajouter une image
                  </Text>
                </TouchableOpacity>
                {values.photo && (
                  <Image
                    source={{ uri: values.photo }}
                    style={{
                      width: 250,
                      height: 250,
                      alignSelf: "center",
                      borderWidth: 2,
                      borderColor: "yellow",
                    }}
                  />
                )}
                {errors.photo && touched.photo && (
                  <Text style={styles.errorText}>{errors.photo}</Text>
                )}
                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    marginTop: 10,
                  }}
                  onPress={() => {
                    deleteImage(values)
                  }}
                >
                  <Text
                    style={{
                      color: "red",
                      fontSize: 15,
                      fontStyle: "italic",
                      fontWeight: "bold",
                    }}
                  >
                    Supprimer l'image
                  </Text>
                </TouchableOpacity>
                <View style={{ margin: 10 }} />
                <Button
                  onPress={() => {
                    handleSubmit();
                    uploadImage(
                      newImage,
                      (values.name.replace(/ /g, "_")).toLowerCase(),
                      selectedSnack
                    );
                  }}
                  title="POST"
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
        </ScrollView>
      )}
    </SafeAreaProvider>
  );
}

export default Admin;
