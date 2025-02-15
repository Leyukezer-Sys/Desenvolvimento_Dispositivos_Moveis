import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Toast from "react-native-toast-message";

const AddressForm = ({ onSubmit }) => {
  const [cep, setCep] = useState("");

  const handlePress = () => {
    if (cep.trim().length === 9) {
      onSubmit(cep);
    } else {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Por favor, insira um CEP válido.",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CEP:</Text>
      <TextInputMask
        type={"zip-code"}
        style={styles.input}
        placeholder="Ex:70900-300"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        required
      />
      <Button title="Consultar" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    alignSelf: "start",
  },
});

export default AddressForm;
