import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator } from '@react-navigation/stack';
import CartPage from './Page/CartPage'
import CheckoutPage from './Page/CheckoutPage'


const Stack = createStackNavigator();
export default function CartScreen() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen 
                name="Cart" 
                component={CartPage}
                options={{
                    
                }} />
            <Stack.Screen name="Checkout" component={CheckoutPage} />
        </Stack.Navigator>
    )
}
