import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeDrawer from './../../drawers/HomeDrawer'
import UserScreen from './../User/UserScreen'
import NotifyPage from './../Notication/Page/NotifyPage'
import HotSalePage from './Page/HotSalePage'
import CartScreen from './../Cart/CartScreen'
 

export default class HomeScreen extends Component {
    render() {
        const Tab = createMaterialBottomTabNavigator();
        return (
            <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            inactiveColor="#BDBDBD"
            >
            <Tab.Screen
                name="TabHome"
                component={HomeDrawer}
                options={{
                tabBarLabel: 'Trang chủ',
                tabBarColor: '#1D636D',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="shield-home-outline" size={26} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="TabNotif"
                component={NotifyPage}
                options={{
                tabBarLabel: 'Thông báo',
                tabBarColor: '#EC6E04',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell-ring-outline" size={26} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="TabCart"
                component={CartScreen}
                options={{
                tabBarLabel: 'Giỏ hàng',
                tabBarColor: '#392939',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cart-outline" size={26} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="TabUser"
                component={UserScreen}
                options={{
                tabBarLabel: 'Tài khoản',
                tabBarColor: '#195286',
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="user-o" size={24} color={color} />
                ),
                }}
            />
            </Tab.Navigator>
        );
    }
}
