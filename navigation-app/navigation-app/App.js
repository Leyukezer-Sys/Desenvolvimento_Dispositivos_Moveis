import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importação das telas
import TelaInicial from './screens/TelaInicial';
import TelaDetalhes from './screens/TelaDetalhes';
import TelaPerfil from './screens/TelaPerfil';
import TelaConfiguracao from './screens/TelaConfiguracao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{headerShown: false}}>
        <Stack.Screen
          name='Home'
          component={TelaInicial}
          options={{ title: "Tela Inicial" }}
        />
        <Stack.Screen
          name='Detalhes' 
          component={TelaDetalhes}
          options={{ title: "Detalhes" }}
        />
        <Stack.Screen
          name='Perfil' 
          component={TelaPerfil}
          options={{ title: "Perfil" }}
        />
        <Stack.Screen
          name='Configuração' 
          component={TelaConfiguracao}
          options={{ title: "Configuração" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
