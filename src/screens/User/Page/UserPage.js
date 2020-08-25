import React, { Component, } from 'react'
import { 
    Text, 
    View,
    StyleSheet, 
    ImageBackground,
    ScrollView,
    Button,
    Image
} from 'react-native'
import { 
    Badge,
 } from 'react-native-paper';
import { 
    Entypo,
    Feather,
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
    MaterialIcons,
    Foundation,
    FontAwesome5,
    Ionicons
 } from '@expo/vector-icons';
import { 
    TouchableNativeFeedback
 } from 'react-native-gesture-handler'


export default function UserPage({ navigation }){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>tài khoản</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                    <TouchableNativeFeedback onPress={()=>navigation.navigate("SettingUserPage")}>
                        <View style={styles.boxUser} >
                            <View style={[styles.boxCenterUser], {justifyContent:"center", alignItems:"center"}}>
                                <Image  
                                    style={styles.boxLeftUser} 
                                    source={{uri:"https://images.pexels.com/photos/1819483/pexels-photo-1819483.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
                                    >
                                    
                                </Image>
                                <View style={{justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{paddingTop:20, fontSize:25, color:"white"}}>ABCD</Text>
                                </View>
                            </View >
                            
                        </View>
                    </TouchableNativeFeedback>
                </View>
                
                <TouchableNativeFeedback onPress={()=>alert("ok")}>
                    <View style={{alignItems:"center",padding:"5%"}}>
                        <View style={{width:"95%", justifyContent:"center", alignItems:"center"}}>
                            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                <View style={{width:"25%", alignItems:"center", justifyContent:"center"}}>
                                    <Foundation name="checkbox" size={30} color="#EFEFEF" />
                                    <Text style={{color:"#EFEFEF"}}>Đã đặt</Text>
                                </View>
                                <View style={{width:"25%", alignItems:"center"}}>
                                    <AntDesign name="inbox" size={30} color="#EFEFEF" />
                                    <Text style={{color:"#EFEFEF"}}>Đóng gói</Text>
                                </View>
                                <View style={{width:"25%", alignItems:"center"}}>
                                    <MaterialIcons name="directions-car" size={30} color="#EFEFEF" />
                                    <Text style={{color:"#EFEFEF"}}>Đang giao </Text>
                                </View>
                                <View style={{width:"25%", alignItems:"center"}}>
                                    <MaterialCommunityIcons name="emoticon-outline" size={30} color="#EFEFEF" />
                                    <Text style={{color:"#EFEFEF"}}>Hoàn tất</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <View style={{flex:1,
                    alignItems:"center",
                    marginTop:"10%",
                    position:"relative",
                    zIndex:99,
                    
                    }}>
                    <View style={{width:"95%", backgroundColor:"white",justifyContent:"center", alignItems:"center", padding:20, flexDirection:"row"}}>
                        <View style={{width:"30%", alignItems:"center"}}>
                            <Entypo name="heart-outlined" size={24} color="#FF059E" />
                            <Text style={{color:"#FF059E"}}>Yêu thích</Text>
                        </View>
                        <View style={{width:"30%", alignItems:"center"}}>
                            <Foundation name="ticket" size={24} color="#0B8F3F" />
                            <Text style={{color:"#0B8F3F"}}>Voucher</Text>
                        </View>
                        <View style={{width:"30%", alignItems:"center"}}>
                            <AntDesign name="gift" size={24} color="#E65B18" />
                            <Text style={{color:"#E65B18"}}>Quà tặng</Text>
                        </View>
                        
                    </View>
                    <View style={{
                        width:"95%", 
                        backgroundColor:"white",
                        justifyContent:"center", 
                        alignItems:"center", 
                        padding:20, 
                        flexDirection:"row",
                        borderBottomWidth:5,
                        borderBottomColor:"#E8E9E9"}}>
                        <View style={{width:"30%", alignItems:"center"}}>
                            <Foundation name="burst-sale" size={24} color="#E11F02" />
                            <Text style={{color:"#E11F02"}}>Khuyến mãi</Text>
                        </View>
                        <View style={{width:"30%", alignItems:"center"}}>
                            <Entypo name="notification" size={24} color="#026FE1" />
                            <Text style={{color:"#026FE1"}}>Thông báo</Text>
                        </View>
                        
                        <View style={{width:"30%", alignItems:"center"}}>
                            <Entypo name="dots-three-horizontal" size={24} color="black" />
                            <Text>Thêm</Text>
                        </View>    
                    </View>
                </View>
                
                <View style={{
                    backgroundColor:"#E8E9E9", 
                    position:"relative",
                    zIndex:1, 
                    top:"-10%",
                    justifyContent:"center",
                    alignItems:"center"}}>
                    <View style={{backgroundColor:"white", width:"95%"}}>
                        <View style={styles.boxSetting}>
                            <TouchableNativeFeedback onPress={()=>alert("ban hang")}>
                            <View style={styles.settingItem}>
                                <View style={{width:"80%", flexDirection:"row"}}>
                                    <MaterialCommunityIcons name="registered-trademark" size={24} color="red" />
                                    <Text style={{paddingLeft:"10%", fontSize:15, color:"red", fontWeight:"bold"}}>Đăng ký bán hàng</Text>
                                </View>
                                <View style={{width:"20%"}}>
                                    <Badge>Mới</Badge>
                                    {/* <AntDesign name="edit" size={20} color="black" /> */}
                                </View>
                            </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={()=>alert("chinh sach")}>
                                <View style={styles.settingItem}>
                                    <View style={{width:"70%", flexDirection:"row"}}>
                                        <Entypo name="book" size={24} color="#FF2E1C" />
                                        <Text style={{paddingLeft:"10%", fontSize:15}}>Chính sách mua hàng</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={()=>alert("gioi thieu")}>
                                <View style={styles.settingItem}>
                                    <View style={{width:"70%", flexDirection:"row"}}>
                                        <Feather name="info" size={24} color="#09A733" />
                                        <Text style={{paddingLeft:"10%", fontSize:15}}>Giới thiệu weTech</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={()=>alert("Ho tro")}>
                                <View style={styles.settingItem}>
                                    <View style={{width:"70%", flexDirection:"row"}}>
                                        <Ionicons name="ios-help-buoy" size={24} color="#1C3AFF" />
                                        <Text style={{paddingLeft:"10%", fontSize:15}}>Trung tâm hỗ trợ</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                            
                        </View>
                    </View>
                </View>
                <TouchableNativeFeedback onPress={()=>alert("ok")}>
                <View style={{width:"100%", justifyContent:"center", alignItems:"center"}}>
                    <View style={{width:"95%", backgroundColor:"#FA710E", justifyContent:"center", alignItems:"center"}}>
                        <Text style={{padding:"5%", fontSize:17, color:"white"}}>Đăng xuất</Text>
                    </View>
                </View>
                </TouchableNativeFeedback>
            </ScrollView>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#48BE6F",
    },
    header:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        height:"10%",
        backgroundColor:"#3FAE64"
    },
    boxUser:{    
        width:"100%",
        flexDirection:"row",
        padding:10,
        justifyContent:"center",
    },
    boxLeftUser:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        height:200,
        width:200,
        resizeMode: 'cover',
        borderRadius:300,
    },
    boxCenterUser:{
        width:"50%"
    },
    boxRightUser:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:100,
        resizeMode:"cover",
        height:50,
        width:50,
    },
    boxSetting:{
        width:"100%",
        backgroundColor:"white",
        marginTop:"5%",
        position:"relative",
        top:"30%"
    },
    boxStatusAddress:{
        flexDirection:"row",
    },
    settingItem:{
        paddingLeft:"5%",
        flexDirection:"row",
        padding:"4%",
        borderBottomWidth:.5,
        borderBottomColor:"#D5D5D5"
    }
})