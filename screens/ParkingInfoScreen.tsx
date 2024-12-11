import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ParkingInfoScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Información de Parqueaderos</Text>
            <Text>Parqueadero A: Capacidad 50 vehículos</Text>
            <Text>Parqueadero B: Capacidad 100 vehículos</Text>
            <Text>Parqueadero C: Capacidad 50 vehículos</Text>
            <Button title="Regresar" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
