import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Información de Contacto</Text>
            <Text>Dirección: ESPE-Innovativa E.P.</Text>
            <Text>Teléfono: 0999027652</Text>
            <Text>Email: farellano@espe-innovativa.edu.ec</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
