import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons'
import Usuarios from "./Usuarios";
import Cars from "./Cars";

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
    return (
        <Tab.Navigator
            screenListeners={{
                headerShown: false,
                tabBarActiveBackgroudColor: 'yellow'
            }}
        >
            <Tab.Screen name='Usuarios' component={Usuarios} options={{
                title: 'Usuarios',
                tabBarIcon: () => { <MaterialIcons name='person' color='red' size={25} /> }
            }} />
            <Tab.Screen name='Cars' component={Cars} options={{
                title: 'Listado clientes',
                tabBarIcon: () => { <MaterialIcons name='person' color='red' size={25} /> }
            }} />
        </Tab.Navigator>
    )
}