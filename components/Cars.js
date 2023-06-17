import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { styles } from '../assets/styles/styles';
import axios from 'axios';
import { useState } from 'react';

export default function Cars(){
    return(
        <View style={styles.container}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Placa del vehiculo
            </Text>
            <TextInput
                label="Placa"
                mode="outlined"
                left={<TextInput.Icon icon="account" />}
                value={platenumber}
                onChangeText={setPlatenumber}
            />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Marca vehiculo
            </Text>
            <TextInput
                label="Marca"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={brand}
                onChangeText={setBrand}
            />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Estado (disponible/No disponible)
            </Text>
            <TextInput
                label="Estado"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={state}
                onChangeText={setState}
            />
            <Button
                style={{ marginTop: 10, backgroundColor: "red" }}
                icon="login"
                mode="contained"
                title="Registro"
                onPress={handleCar}
            >
                {" "}
                Registrar
            </Button>
            <Text
                style={{ fontWeight: "bold", marginBottom: 10, alignItems: "center" }}
            >
                {message}
            </Text>
            <FlatList
                data={carList}
                renderItem={({ item }) => (
                    <Text>{`${item.platenumber} - ${item.brand} - ${item.state}`}</Text>
                )}
                keyExtractor={(item) => item.platenumber}
            />
        </View>
    )
} 