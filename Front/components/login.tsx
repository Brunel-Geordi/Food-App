/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useContext, useState, useEffect } from "react";
import { style } from "../style/style";
import { View } from "react-native";
import { Formik, Field } from "formik";
import CustomInput, { styles } from "./custumForm";
import { Entypo } from "@expo/vector-icons";
import { loginValidationSchema } from "../services/formValidation";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { UserContext} from "./context";
function Login({ navigation }: any): JSX.Element {
  const connected = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {}, []);
  return (
      <SafeAreaView>
        <View
          style={{
            margin: 30,
            borderWidth: 2,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Se connecter</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) =>
              connected.getUser(values.email, values.password)
            }
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <Text style={style.text}>Mail </Text>
                <Field
                  name="email"
                  component={CustomInput}
                  placeholder=" Entrez votre adresse mail "
                  style={style.inputText}
                  keyboardType="email-address"
                />
                <Text style={style.text}>Mot de passe </Text>
                <View style={style.container}>
                  <TextInput
                    placeholder="Entrez votre mot de passe"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry={showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => togglePasswordVisibility()}
                    style={style.eyeIcon}
                  >
                    <Entypo
                      name={showPassword ? "eye" : "eye-with-line"}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && (
                  <Text style={[styles.errorText]}>{errors.password}</Text>
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
  );
}
export default Login;
