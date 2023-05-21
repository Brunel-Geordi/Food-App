/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useContext, useState, useEffect } from "react";
import { style } from "../style/style";
import { Button, View } from "react-native";
import { Formik, Form } from "formik";
import { loginValidationSchema } from "../services/formValidation";
import { SafeAreaView, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { UserContext, getUser } from "./context";
function Login({ navigation }: any): JSX.Element {
  const connected = useContext(UserContext);

  useEffect(() => {
    
  },[])
  return (
    <>
      <SafeAreaView>
        <View style={{ margin: 30, borderWidth:2, padding:20, backgroundColor:'white', borderRadius:10 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Se connecter</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) =>
              getUser(values.email, values.password, connected)
            }
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <Text style={style.text}>Mail </Text>
                <TextInput
                  placeholder=" Entrez votre adresse mail "
                  style={style.inputText}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {(errors.email && touched.email) && (
                  <Text style={{ fontSize: 15, color: "red" }}>
                    {errors.email}
                  </Text>
                )}
                <Text style={style.text}>Mot de passe </Text>
                <TextInput
                  placeholder="Entrez votre mot de passe"
                  style={style.inputText}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {(errors.password && touched.password) && (
                  <Text style={{ fontSize: 15, color: "red" }}>
                    {errors.password}
                  </Text>
                )}
                <TouchableOpacity
                  disabled={!isValid}
                  style={{
                    alignItems: "center",
                    backgroundColor: "#316CB2",
                    width: 250,
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
                      fontFamily: "",
                      fontSize: 20,
                    }}
                  >
                    Connexion
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
export default Login;