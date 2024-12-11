import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido al Parqueadero ESPE</Text>
            <Text style={styles.subtitle}>Horario: Lunes a Viernes, 8:00 AM - 8:00 PM</Text>
            <Button title="Información de Contacto" onPress={() => navigation.navigate('Contact')} />
            <Button title="Información de Parqueaderos" onPress={() => navigation.navigate('ParkingInfo')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    subtitle: { fontSize: 16, marginBottom: 20 },
});
