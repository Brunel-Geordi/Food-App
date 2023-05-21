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
import React, { useContext, useRef, useState } from "react";
import {
  Text,
  Button,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { UserContext } from "./context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { Field, Formik } from "formik";
import CustomInput from "./custumForm";
import { blogValidationSchema } from "../services/formValidation";
import { style } from "../style/style";
import { launchImageLibraryAsync } from "expo-image-picker";

function Compte({ navigation }: any): JSX.Element {
  const connected = useContext(UserContext);
  const disconnect = async () => {
    connected.setToken(null);
    connected.setID(null);
    connected.setName(null);
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("name");
  };
  return (
    <ScrollView>
      <Text>Bienvenu {connected.name}</Text>
      <TouchableOpacity
        onPress={() => {
          disconnect();
        }}
        style={{
          alignItems: "center",
          backgroundColor: "#316CB2",
          width: 100,
          height: 50,
          justifyContent: "center",
          borderRadius: 8,
          marginVertical: 5,
          marginStart: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontFamily: "" }}>
          Deconnecter
        </Text>
      </TouchableOpacity>
      <Formik
        validationSchema={blogValidationSchema}
        initialValues={{
          name: "",
          price: "",
          photo: "",
        }}
        onSubmit={(values) => console.log(values)}
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
                alignItems: "center",
                backgroundColor: "#316CB2",
                width: 120,
                height: 50,
                justifyContent: "center",
                borderRadius: 8,
                marginVertical: 5,
                marginStart: 10,
              }}
              onPress={async () => {
                // const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(false);
                // if (status !== 'granted') {
                //   console.log('Permission to access media library was denied');
                //   return;
                // }

                const result = await launchImageLibraryAsync({
                  allowsEditing: true,
                  aspect: [4, 4],
                });
                if (!result.canceled) {
                  setFieldValue("photo", result.assets[0].uri);
                  setFieldTouched("photo", true);
                  return
                }
              }}
            >
              <Text>Add Image</Text>
            </TouchableOpacity>
            {values.photo && (
              <>
              <Image
                source={{ uri: values.photo }}
                style={{ width: 200, height: 200 }}
              />
              </>
            )}
            {errors.photo && touched.photo && (
              <Text style={{ color: "red" }}>{errors.photo}</Text>
            )}
            <View style={{ margin: 10 }} />
            <Button
              onPress={() => handleSubmit()}
              title="POST"
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

export default Compte;
