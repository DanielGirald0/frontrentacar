import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { styles } from '../assets/styles/styles';
import axios from 'axios';
import { useState } from 'react';

export default function Rents(){
    return(
        <View style={styles.container}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>NUmero de renta:</Text>
            <TextInput
                label="Numero renta"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={rentnumber}
                onChangeText={setRentnumber} />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Nombre de usuario:</Text>
            <TextInput
                label="Usuario"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={username}
                onChangeText={setUsername} />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Placa vehiculo:</Text>
            <TextInput
                label="Placa"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={platenumber}
                onChangeText={setPlatenumber} />
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Fecha de renta:</Text>
            <TextInput
                label="Fechar renta"
                mode="outlined"
                left={<TextInput.Icon icon="key" />}
                value={rentdate}
                onChangeText={setRentdate} />
            <Button style={{ marginTop: 10, backgroundColor:'red' }}
                icon="login"
                mode="contained"
                title="Registrarse"
                onPress={handleRentCar}
            > Registrar </Button>
            <FlatList
                data={rentList}
                renderItem={({ item }) => (
                    <Text>{`${item.rentnumber} - ${item.username} - ${item.platenumber} - ${item.rentdate}`}</Text>
                )}
                keyExtractor={(item) => item.rentnumber}
            />
        </View>
    )
}