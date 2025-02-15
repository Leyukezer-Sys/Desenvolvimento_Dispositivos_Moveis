import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import AddressForm from "../components/AddressForm";
import { getAddressByCep } from "../services/api"; // Ajuste o caminho conforme necessário
import Toast from "react-native-toast-message";

const FormScreen = () => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAddress = async (cep) => {
    setLoading(true);
    try {
      const data = await getAddressByCep(cep);
      if (!data.erro) {
        setAddress(data);
        Toast.show({
          type: "success",
          text1: "Endereço Encontrado!",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: "CEP não encontrado",
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: error.message,
      });
      setAddress(null);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <AddressForm onSubmit={fetchAddress} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        address && (
          <View style={styles.addressContainer}>
            <Text>Logradouro: {address.logradouro}</Text>
            <Text>Bairro: {address.bairro}</Text>
            <Text>Cidade: {address.localidade}</Text>
            <Text>Estado: {address.estado}</Text>
            <Text>UF: {address.uf}</Text>
            <Text>Complemento: {address.complemento}</Text>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  addressContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default FormScreen;
