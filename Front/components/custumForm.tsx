// CustomInput.js
import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'

export const CustomInput = (props: { [x: string]: any; field: { name: any; onBlur: any; onChange: any; value: any }; form: { errors: any; touched: any; setFieldTouched: any } }) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        style={[
          styles.textInput,
          hasError && styles.errorInput
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  )
}

export const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    fontStyle: "italic",
    alignSelf: "center",
  },
  errorInput: {
    borderColor: 'red',
  }
})

export default CustomInput