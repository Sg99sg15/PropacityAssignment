import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RouteData';
import Home from '../screens/Home';
const AppNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </>
    )
}

export default AppNavigator