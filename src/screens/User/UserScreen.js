import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import UserPage from './Page/UserPage'

const Stack = createStackNavigator();
export default function UserScreen() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen 
                name="UserPage" 
                component={UserPage}
                options={{
                    title:"Tài khoản",
                    // headerStyle:{
                    //     backgroundColor:"white",
                    //     elevation:0,
                    //     height:70,
                        
                    // },
                    // headerTitleStyle: {
                    //     fontSize:17,
                    //     textTransform:"uppercase",
                    //     justifyContent:"center",
                    //     alignItems:"center",
                        
                    //   },
                }} />
        </Stack.Navigator>
    )
}
