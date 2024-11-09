
// Importações necessárias
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header'; // Reutilização do componente de cabeçalho
import ProfileCard from '../components/ProfileCard'; // Componente de cartão de perfil

// Tela de perfil
export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cabeçalho personalizado com botão de voltar */}
      <Header title="Perfil" goBack={() => navigation.goBack()} />

      {/* Corpo da tela */}
      <View style={styles.content}>
        {/* Uso do componente de cartão de perfil com propriedades */}
        <ProfileCard
          name="Leyukezer Cruz de Lima"
          bio="Desenvolvedor mobile."
          image={require('../assets/profile.jpg')} // Imagem de exemplo
        />
      </View>
    </View>
  );
}

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fundo branco para consistência
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
