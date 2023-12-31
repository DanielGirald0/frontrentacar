import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './components/HomeTabs';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeTabs} options={{title: 'Renta de carros'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}