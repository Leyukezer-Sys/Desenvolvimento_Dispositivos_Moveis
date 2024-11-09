// Importações necessárias
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Componente de botão personalizado reutilizável
export default function CustomButton({ text, onPress }) {
  return (
    // Botão com estilos personalizados
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

// Estilos para o botão
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#03dac5',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
  },
});