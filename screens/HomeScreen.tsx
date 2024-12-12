import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Parqueadero de</Text>
      <Text style={styles.title}>La Universidad de las Fuerzas</Text>
      <Text style={styles.title}>Armadas-ESPE</Text>
      <Text style={styles.subtitle}>Horario:</Text>
      <Text style={styles.subtitle}>Lunes a Viernes, 7:00 AM - 9:00 PM</Text>
      <Text style={styles.subtitle}>Tarifa:</Text>
      <Text style={styles.subtitle}>$1 por día</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
});
