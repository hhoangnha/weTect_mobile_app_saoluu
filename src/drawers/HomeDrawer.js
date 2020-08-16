import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomePage from './../screens/Home/Page/HomePage'
import ContactPage from './../screens/Home/Infomation/ContactPage'
 
const Drawer = createDrawerNavigator();
export default function HomeDrawer(){
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                activeBackgroundColor:"white",
            }} >
            <Drawer.Screen 
                name="Home" 
                component={HomePage} 
                options={{
                    drawerLabel:"Trang chủ",
                    drawerIcon:({color})=> <Icon name="home" size={20} color={color}/>
                }} />
            <Drawer.Screen 
                name="Category" 
                component={ContactPage}
                options={{
                    drawerLabel:"Danh mục sản phẩm",
                    drawerIcon:({color})=> <Icon name="list" size={18} color={color}/>
                }} />
            <Drawer.Screen 
                name="Lovelist" 
                component={ContactPage}
                options={{
                    drawerLabel:"Danh sách yêu thích",
                    drawerIcon:({color})=> <Icon name="heart" size={18} color={color}/>
                }} />
            <Drawer.Screen 
                name="Sale2" 
                component={ContactPage}
                options={{
                    drawerLabel:"Khuyến mãi",
                    drawerIcon:({color})=> <Icon name="ticket" size={18} color={color}/>
                }} />
            <Drawer.Screen 
                name="Contact" 
                component={ContactPage} 
                options={{
                    drawerLabel:"Liên hệ",
                    drawerIcon:({color})=> <Icon name="phone" size={18} color={color}/>
                }} />
            
        </Drawer.Navigator>
    );
}
