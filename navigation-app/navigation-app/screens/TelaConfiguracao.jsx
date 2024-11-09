
// Importações necessárias
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Header from '../components/Header'; // Reutilização do componente de cabeçalho

// Tela de configurações
export default function SettingsScreen({ navigation }) {
  // Estado para o switch de notificações
  const [isEnabled, setIsEnabled] = React.useState(false);

  // Função para alternar o switch
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* Cabeçalho personalizado com botão de voltar */}
      <Header title="Configurações" goBack={() => navigation.goBack()} />

      {/* Corpo da tela */}
      <View style={styles.content}>
        <Text style={styles.settingText}>Notificações</Text>
        {/* Switch para habilitar/desabilitar notificações */}
        <Switch
          trackColor={{ false: '#767577', true: '#6200ee' }}
          thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Fundo branco
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingText: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333333',
  },
});
