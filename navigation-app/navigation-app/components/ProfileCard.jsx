// Importações necessárias
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Componente de cartão de perfil personalizado
export default function ProfileCard({ name, bio, image }) {
  return (
    // Contêiner do cartão
    <View style={styles.card}>
      {/* Imagem de perfil */}
      <Image source={image} style={styles.profileImage} />
      {/* Nome do usuário */}
      <Text style={styles.name}>{name}</Text>
      {/* Biografia do usuário */}
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
}

// Estilos para o cartão de perfil
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    backgroundColor: '#f5f5f5',
    elevation: 3, // Sombra para melhor UI
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Torna a imagem circular
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  bio: {
    marginTop: 10,
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});