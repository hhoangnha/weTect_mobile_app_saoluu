import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
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
                activeColor="white"
                barStyle={{backgroundColor:"#1ABC9C"}}
                >
                <Tab.Screen 
                    name="Home" 
                    component={HomeDrawer}
                    options={{
                        title:"Trang chủ",
                        tabBarIcon:({color}) => <Icon name='home' size={22} color={color} />
                    }} />
                <Tab.Screen 
                    name="Hot Sale" 
                    component={HotSalePage}
                    options={{
                        title:"Hot",
                        tabBarIcon:({color}) => <Icon name="history" size={22} color={color} />
                    }} />
                <Tab.Screen 
                    name="Notification" 
                    component={NotifyPage}
                    options={{
                        title:"Thông báo",
                        tabBarBadge:"ok",
                        tabBarIcon:({color}) => <Icon name='bell' size={20} color={color} />
                    }} />
                <Tab.Screen 
                    name="CartScreen" 
                    component={CartScreen}
                    options={{
                        title:"Giỏ hàng",
                        tabBarIcon:({color}) => <Icon name='shopping-cart' size={22} color={color} />
                    }} />
                <Tab.Screen 
                    name="UserScreen" 
                    component={UserScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: '#f4511e',
                          },
                        title:"Tài khoản",
                        tabBarIcon:({color}) => <Icon name='user' size={23} color={color} />
                    }} />
                
            </Tab.Navigator>
        );
    }
}
