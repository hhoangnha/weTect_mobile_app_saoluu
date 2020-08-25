import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomePage from './../screens/Home/Page/HomePage'
import ContactPage from './../screens/Home/Infomation/ContactPage'
import { DrawerContent } from './DrawerContent' 

const Drawer = createDrawerNavigator();
export default function HomeDrawer(){
    return (
        <Drawer.Navigator drawerContent={props =><DrawerContent { ... props} />} >
            <Drawer.Screen 
                name="Home" 
                component={HomePage}  />
        </Drawer.Navigator>
    );
}
