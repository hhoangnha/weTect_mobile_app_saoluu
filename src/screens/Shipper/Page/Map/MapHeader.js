import React from 'react'
import { View, Text,TouchableNativeFeedback } from 'react-native'
import { FontAwesome5,Feather,Ionicons,FontAwesome } from '@expo/vector-icons';
import { ThemeProvider,Header,Button,Avatar } from 'react-native-elements';

export default function MapHeader({ navigation }) {
    return (
        <Header
            containerStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.28)',
                position:"absolute", 
                width:"100%",
                top:"-3%",
                zIndex:9
            }}
            leftComponent={
                <TouchableNativeFeedback onPress={()=>{
                    navigation.goBack()
                }}>
                    <View style={{padding:25}}>
                        <Ionicons name="ios-arrow-back" size={24} color="white" />
                    </View>
                </TouchableNativeFeedback>
            }
            centerComponent={
                <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>Chi tiết sản phẩm</Text>
            }
        />
    )
}
