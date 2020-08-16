import React, { Component, } from 'react'
import { 
    Text, 
    View,
    StyleSheet, 
    ImageBackground,
    ScrollView,
    Button
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
    MaterialIcons
 } from '@expo/vector-icons';
import { 
    TouchableNativeFeedback
 } from 'react-native-gesture-handler'


export default function UserPage({ navigation }){
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback onPress={()=>alert("no")}>
                <View style={styles.boxUser} >
                    <ImageBackground  
                        style={styles.boxLeftUser} 
                        source={{uri:"https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"}}
                        resizeMode="contain">
                        
                    </ImageBackground>
                    <View style={styles.boxCenterUser}>
                        <Text style={{fontWeight:"bold", fontSize:17,color:"white"}}>Nguyễn ăn a</Text>
                        <Text style={{fontStyle:"italic",color:"white"}}>Xem thông tin tài khoản</Text>
                    </View>
                    {/* <View style={styles.boxRightUser}>
                        <Text><Icon name="chevron-right" size={20} /></Text>
                    </View> */}
                </View>
            </TouchableNativeFeedback>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.boxOrder}>
                    <View style={{width:"60%"}}></View>
                    <TouchableNativeFeedback onPress={()=>navigation.navigate("CartStatusPage")} >
                        <View style={{flexDirection:"row",padding:"3%",width:"100%",}}>
                            <Text>Đơn hàng của bạn</Text>
                            <MaterialIcons name="navigate-next" size={20} />
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.boxStatusOrder}>
                        <TouchableNativeFeedback>
                            <View style={styles.itemOrder}>
                                <Badge style={styles.countItemOrder}>ok</Badge>
                                <MaterialIcons name="content-paste" size={24} color="#979797" />
                                <Text style={{fontSize:10,color:"#979797"}}>Chờ xác nhận</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={styles.itemOrder}>
                                <Badge style={styles.countItemOrder}>ok</Badge>
                                <AntDesign name="inbox" size={25} color="#979797" />
                                <Text style={{fontSize:10,color:"#979797"}}>Đang đóng gói</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={styles.itemOrder}>
                                <Badge style={styles.countItemOrder}>ok</Badge>
                                <MaterialIcons name="local-shipping" size={25} color="#979797" />
                                <Text style={{fontSize:10,color:"#979797"}}>Đang giao</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={styles.itemOrder}>
                                <Badge style={styles.countItemOrder}>ok</Badge>
                                <MaterialCommunityIcons name="clipboard-check-outline" size={25} color="#979797" />
                                <Text style={{fontSize:10,color:"#979797"}}>Đã giao</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    
                </View>

                <View style={styles.boxSetting}>
                    <TouchableNativeFeedback onPress={()=>alert("ok")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"90%", flexDirection:"row"}}>
                                <Entypo name="shop" size={25} color="#C42222" />
                                <Text style={{paddingLeft:"10%", fontSize:15, color:"#CA2121"}}>Đăng ký bán hàng</Text>
                            </View>
                            <View style={{width:"10%"}}>
                                <Badge>New</Badge>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("ok")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"90%", flexDirection:"row"}}>
                                <Feather name="heart" size={24} color="#FF3B00" />
                                <Text style={{paddingLeft:"10%", fontSize:15, }}>Danh sách yêu thích</Text>
                            </View>
                            <View style={{width:"10%"}}>
                                {/* <Badge>New</Badge> */}
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("ok")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"90%", flexDirection:"row"}}>
                                <MaterialCommunityIcons name="bell-outline" size={25} color="#598EFD" />
                                <Text style={{paddingLeft:"10%", fontSize:15, }}>Thông báo của tôi</Text>
                            </View>
                            <View style={{width:"10%"}}>
                                {/* <Badge>New</Badge> */}
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("ok")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"90%", flexDirection:"row"}}>
                            <FontAwesome name="star-half-full" size={25} color="#E9BA05" />
                                <Text style={{paddingLeft:"10%", fontSize:15, }}>Đánh giá của tôi</Text>
                            </View>
                            <View style={{width:"10%"}}>
                                {/* <Badge>New</Badge> */}
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    
                    <TouchableNativeFeedback onPress={()=>alert("ok")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"90%", flexDirection:"row"}}>
                                <MaterialCommunityIcons name="ticket" size={24} color="#46983D" />
                                <Text style={{paddingLeft:"10%", fontSize:15, }}>Voucher của tôi</Text>
                            </View>
                            <View style={{width:"10%"}}>
                                {/* <Badge>New</Badge> */}
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("ok")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"90%", flexDirection:"row"}}>
                                <FontAwesome name="life-ring" size={23} color="#1478E0" />
                                <Text style={{paddingLeft:"10%", fontSize:15, }}>Hỗ trợ</Text>
                            </View>
                            <View style={{width:"10%"}}>
                                {/* <Badge>New</Badge> */}
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>

                <View style={styles.boxSetting}>
                    <TouchableNativeFeedback onPress={()=>{
                        navigation.navigate('SettingUserPage');
                    }}>
                        <View style={styles.settingItem}>
                            <View style={{width:"90%", flexDirection:"row"}}>
                                <MaterialCommunityIcons name="account-edit" size={25} color="#038CA3" />
                                <Text style={{paddingLeft:"10%", fontSize:15}}>Cài đặt tài khoản</Text>
                            </View>
                            <View style={{width:"10%"}}>
                                {/* <Badge>New</Badge> */}
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                   
                    <View style={styles.settingItem}>
                        <View style={{width:"100%", flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <TouchableNativeFeedback onPress={()=>alert("Đăng xuất")}>
                                <View style={{width:"100%", backgroundColor:"#FF6B01",marginBottom:"5%"}}>
                                    <Text style={{color:"white",padding:"5%",paddingLeft:"40%",paddingRight:"40%"}}>Đăng xuất</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    boxUser:{    
        width:"100%",
        backgroundColor:"#1ABC9C",
        flexDirection:"row",
        alignItems:"center",
        padding:20,
    },
    boxLeftUser:{
        width:60,
        height:60,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:50,
    },
    boxCenterUser:{
        paddingLeft:"5%",
        width:"60%"
    },
    boxRightUser:{
        width:"30%",
        paddingLeft:"10%"
    },
    boxOrder:{
        width:"100%",
        backgroundColor:"white",
        flexDirection:"column",
    },
    boxSetting:{
        width:"100%",
        backgroundColor:"white",
        marginTop:"2%",
    },
    boxStatusOrder:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    itemOrder:{
        justifyContent:"center",
        alignItems:"center",
        padding:"5%",
        position: "relative",
        marginTop:"15%",
        marginBottom:"15%"
    },
    countItemOrder:{
        position:"absolute",
        right:"30%",
        top:"-5%",
        zIndex:9
    },
    settingItem:{
        paddingLeft:"5%",
        flexDirection:"row",
        padding:"4%",
        borderBottomWidth:.5,
        borderBottomColor:"#D5D5D5"
    }
})