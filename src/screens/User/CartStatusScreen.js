import React from 'react'
import { View, Text,StyleSheet,TouchableNativeFeedback } from 'react-native'
import { 
    Ionicons,
} from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderedPage from './Page/OrderedPage'
import ShippingPage from './Page/ShippingPage'
import DeliveredPage from './Page/DeliveredPage'

const Tab = createMaterialTopTabNavigator();

export default function CartStatusPage({navigation}) {
    return (
        <View style={styles.container}>   
            <TouchableNativeFeedback onPress={()=>navigation.replace('HomeScreen')}>
                <View style={styles.header}>
                    <View style={styles.iconBack}>
                        <Ionicons name="ios-arrow-back" size={24} color="black" />
                    </View>
                    <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>Đơn hàng của bạn</Text>
                </View>
            </TouchableNativeFeedback>
            <Tab.Navigator
                tabBarOptions={{
                    style:{
                        elevation:0
                    },
                }}>
                <Tab.Screen 
                    name="OrderedPage" 
                    component={OrderedPage}
                    options={{
                        title:"Đã đặt",
                    }} />
                <Tab.Screen 
                    name="ShippingPage" 
                    component={ShippingPage}
                    options={{
                        title:"Đang giao"
                    }} />
                <Tab.Screen 
                    name="DeliveredPage" 
                    component={DeliveredPage}
                    options={{
                        title:"Đã giao"
                    }} />
            </Tab.Navigator>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        width:"100%",
        backgroundColor:"#1ABC9C",
        justifyContent:"center",
        alignItems:"center"
    },
    iconBack:{
        position:"absolute",
        left:"5%"
    },
})