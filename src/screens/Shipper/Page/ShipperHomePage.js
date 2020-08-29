import React from 'react'
import { View, StyleSheet,ImageBackground } from 'react-native'
import { Button, ThemeProvider,Header,Avatar,Text } from 'react-native-elements';
import { AntDesign,FontAwesome5,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default function ShipperHomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("./../../../../public/pexels-pixabay-40996.jpg")} style={{flex:1, resizeMode:"cover"}}>
            <Header
                centerComponent={
                    <Text style={{color:"white", fontSize:17}}>TRANG CHỦ</Text>
                }
                leftComponent={
                    <Avatar
                        size="medium"
                        rounded
                        source={{
                            uri:
                            'data:image/jpeg;base64,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',
                        }}
                    ></Avatar>
                }
                containerStyle={{
                    backgroundColor: 'transparent',
                    borderBottomWidth:0
                  }}
            />

            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <View style={styles.content}>
                <View style={styles.boxContent}>
                    <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
                        <View style={styles.item}>
                            <TouchableNativeFeedback style={{alignItems:"center", padding:20}}>
                                <MaterialCommunityIcons name="run-fast" size={30} color="#F73D02" />
                                <Text>Lấy hàng</Text>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.item}>
                            <TouchableNativeFeedback 
                                style={{
                                    alignItems:"center", 
                                    padding:20
                                }}
                                onPress={()=>{
                                    navigation.navigate("OrderShipper")
                                }}
                            >
                                <FontAwesome5 name="shipping-fast" size={24} color="#BEAA00" />
                                <Text>Đơn giao</Text>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.item}>
                            <TouchableNativeFeedback style={{alignItems:"center", padding:20}}>
                                <MaterialCommunityIcons name="sync" size={30} color="#0329FA" />
                                <Text>Hẹn giao lại</Text>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
                        <View style={styles.item}>
                            <TouchableNativeFeedback style={{alignItems:"center", padding:20}}>
                                <AntDesign name="export2" size={24} color="#8E2828" />
                                <Text>Đổi trả</Text>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.item}>
                            <TouchableNativeFeedback style={{alignItems:"center", padding:20}}>
                                <MaterialCommunityIcons name="cancel" size={25} color="#6D6D6D" />
                                <Text>Không nhận hàng</Text>
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.item}>
                            <TouchableNativeFeedback style={{alignItems:"center", padding:20}}>
                                <AntDesign name="checkcircle" size={24} color="#0D9F1A" />
                                <Text>Đã giao</Text>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </View>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    content:{
        flex:0.5,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        width:'100%'
    },
    boxContent:{
        justifyContent:"center",
        alignItems:"center"
    },
    item:{
        width:"33%", 
        alignItems:"center", 
        justifyContent:"center",
        
    }
})
