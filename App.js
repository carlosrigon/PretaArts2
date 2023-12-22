import * as React from 'react';
import { NativeBaseProvider, Box } from "native-base";
import { Button, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { estilo } from './src/style/estilos';
import Icones from 'react-native-vector-icons/Ionicons';
import { Notification } from './src/componentes/NotificationService';

import Home from '.src/pages';
import Produtos from '.src/pages';
import Footer from '.src/pages';

// Declaração de constantes
const notificador = Notification;


export default function App() {
 
    notificador.configurar()
    notificador.criarCanal()
    notificador.agendarNotificacoes()
  
  return (
    <NativeBaseProvider>
      <Home />
      <Produtos />
      <Footer />
    </NativeBaseProvider>
  );
}
