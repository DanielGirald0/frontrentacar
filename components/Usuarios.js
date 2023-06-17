import { Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper'
import { useForm, Controller } from 'react-hook-form';
import { styles } from '../assets/styles/styles';
import axios from 'axios';
import { useState } from 'react';

export default function Usuarios({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIserror] = useState(false);
  const [message, setMessage] = useState('');
  
  const { control, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    dwfaultValues: {
      firstName: '',
      lastName: ''
    }
  })

  const onSave = async (data) => {
    let nombre = data.firstName;
    let apellidos = data.lastName;
    const response = await axios.post(`http://localhost:3500/api/Usuarios`, {
      nombre,
      apellidos
    })
    setIserror(false)
    setMessage("Usuario agregado con exito.")
    setTimeout(() => {
      setMessage('Error')
    }, 1000)
    reset();
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Inicio sesión</Text>
      <TextInput
        label="Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account" />}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        label="Contraseña"
        mode="outlined"
        left={<TextInput.Icon icon="key" />}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button style={{ marginTop: 10, backgroundColor:'red' }}
          icon="login"
          mode="contained"
          onPress={handleLogin}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Entrar</Text>
      </Button>
      <Text style={{ fontWeight: "bold", marginBottom: 10, alignItems:'center' }}>{message}</Text>
      <Button
        style={{marginTop:10, backgroundColor:'red' }}
        icon="login" 
        mode="contained"
        title="Registarse"
        onPress={() => {
          navigation.navigate("Register");
        }}
      >Registrarse</Button>
    </View>
  );
}