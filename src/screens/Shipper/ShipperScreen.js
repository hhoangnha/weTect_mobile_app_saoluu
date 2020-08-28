import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ShipperHomePage from './Page/ShipperHomePage'
import OrderShipper from './Page/Order/OrderShipper'

const Stack = createStackNavigator();
export default function ShipperScreen() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name="ShipperHomePage" component={ShipperHomePage} />
            <Stack.Screen name="OrderShipper" component={OrderShipper} />
        </Stack.Navigator>
    )
}

