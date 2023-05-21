/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useContext, useState, useEffect } from "react";
import { style } from "../style/style";
import { View } from "react-native";
import { Field, Formik} from "formik";
import { signUpValidationSchema } from "../services/formValidation";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { UserContext } from "./context";
import { postUsers } from "../services/post";
import CustomInput from "./custumForm";
function SignUp({ navigation }: any): JSX.Element {
  const connected = useContext(UserContext);
  return (
    <>
      <SafeAreaView>
        <View style={{ margin: 30, borderWidth:2, padding:20, backgroundColor:'white', borderRadius:10 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Nouveau compte</Text>
          <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values) =>
                postUsers(values.name, values.email, values.password, connected)
              }
            >
              {({ handleSubmit, values, isValid }) => (
                <>
                  <Text style={style.text}>Nom </Text>
                  <Field
                    placeholder="Entrez votre nom"
                    style={style.inputText}
                    component={CustomInput}
                    name="name"
                    value={values.name}
                  />
                  <Text style={style.text}>Adresse mail </Text>
                  <Field
                    placeholder="Entrez votre adresse mail"
                    style={style.inputText}
                    component={CustomInput}
                    name="email"
                    keyboardType="email-address"
                  />

                  <Text style={style.text}>Mot de passe </Text>
                  <Field
                    placeholder="Entrez votre mot de passe"
                    style={style.inputText}
                    component={CustomInput}
                    name="password"
                    secureTextEntry
                  />
                  <Text style={style.text}>Confirmé le mot de passe </Text>
                  <Field
                    placeholder="Confirmer votre mot de passe"
                    style={style.inputText}
                    component={CustomInput}
                    name="confirmPassword"
                    secureTextEntry
                  />
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
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontFamily: "",
                        fontSize: 20,
                      }}
                    >
                      M'inscrire
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </Formik>
        </View>
      </SafeAreaView>
    </>
  );
}
export default SignUp;