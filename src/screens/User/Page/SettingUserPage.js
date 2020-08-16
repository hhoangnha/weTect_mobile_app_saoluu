import React from 'react'
import { View,
     Text,
     Button, 
     StyleSheet, 
     Image,
     ImageBackground,
     ScrollView, 
     SafeAreaView,
     TouchableNativeFeedback} from 'react-native'
import { 
    Badge,
} from 'react-native-paper';
import { 
    Ionicons,
    Entypo,
    Feather,
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
    MaterialIcons
} from '@expo/vector-icons';

export default function SettingUserPage({ navigation }) {
    return (
        <View style={styles.container}>   
            <TouchableNativeFeedback onPress={()=>navigation.goBack()}>
                <View style={styles.header}>
                    <View style={styles.iconBack}>
                        <Ionicons name="ios-arrow-back" size={24} color="black" />
                    </View>
                    <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>tài khoản</Text>
                </View>
            </TouchableNativeFeedback>
            <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableNativeFeedback onPress={()=>alert("Địa chỉ")} style={{borderBottomWidth:.5,borderBottomColor:"#C4CCDF"}}>
                <View style={styles.boxAddress}>
                    <View style={{width:"60%"}}></View>
                    
                        <View style={{flexDirection:"row",padding:"3%",width:"100%",}}>
                            <Text> Địa chỉ của bạn</Text>
                            <MaterialIcons name="navigate-next" size={20} />
                        </View>
                    
                    <View style={{flexDirection:"row",padding:"3%"}}>
                        <View style={{width:"10%"}}>
                            <Entypo name="address" size={20} color="black" />
                        </View>
                        <View style={{width:"70%"}}>
                            <Text style={{marginLeft:"3%"}}>288 - Nguyễn Văn Linh</Text>
                        </View>
                        <View style={{width:"20%"}}>
                            <Text style={{color:"#F54509"}}>Mặc định</Text>
                        </View>
                    </View>

                </View>
            </TouchableNativeFeedback>

                <View style={styles.boxSetting}>
                    <TouchableNativeFeedback onPress={()=>alert("sua ten")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"70%", flexDirection:"row"}}>
                                <MaterialCommunityIcons name="rename-box" size={17} color="#4D4F4E" />
                                <Text style={{paddingLeft:"10%", fontSize:15}}>Họ tên</Text>
                            </View>
                            <View style={{width:"30%", flexDirection:"row"}}>
                                <Text>Hoàng Nhã</Text>
                                <AntDesign name="edit" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("gioi tinh")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"70%", flexDirection:"row"}}>
                                <FontAwesome name="transgender" size={17} color="#14996A" />
                                <Text style={{paddingLeft:"10%", fontSize:15}}>Giới tính</Text>
                            </View>
                            <View style={{width:"30%", flexDirection:"row"}}>
                                <Text>Nam</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("ngay sinh")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"70%", flexDirection:"row"}}>
                                <MaterialCommunityIcons name="cake-layered" size={17} color="#F38534" />
                                <Text style={{paddingLeft:"10%", fontSize:15}}>Ngày sinh</Text>
                            </View>
                            <View style={{width:"30%", flexDirection:"row"}}>
                                <Text>12-12-2000</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("Điện thoại")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"70%", flexDirection:"row"}}>
                            <Feather name="phone" size={17} color="#12AF3E" />
                                <Text style={{paddingLeft:"10%", fontSize:15}}>Điện thoại</Text>
                            </View>
                            <View style={{width:"30%", flexDirection:"row"}}>
                                <Text>+843******48</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("Email")}>
                        <View style={styles.settingItem}>
                            <View style={{width:"70%", flexDirection:"row"}}>
                                <AntDesign name="mail" size={17} color="#3475F3" />
                                <Text style={{paddingLeft:"10%", fontSize:15}}>Email</Text>
                            </View>
                            <View style={{width:"30%", flexDirection:"row"}}>
                                <Text>hoa*****.com</Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    
                </View>

                {/* <View style={styles.boxSetting}>
                    
                   
                    <View style={styles.settingItem}>
                        <View style={{width:"100%", flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <TouchableNativeFeedback onPress={()=>alert("Đăng xuất")}>
                                <View style={{width:"100%", backgroundColor:"#FF6B01",marginBottom:"5%"}}>
                                    <Text style={{color:"white",padding:"5%",paddingLeft:"40%",paddingRight:"40%"}}>Đăng xuất</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    
                </View> */}
            </ScrollView>
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
        alignItems:"center",
        flexDirection:"row",
        position:"relative"
    },
    iconBack:{
        position:"absolute",
        left:"5%"
    },
    boxAddress:{
        width:"100%",
        backgroundColor:"white",
        flexDirection:"column",
    },
    boxSetting:{
        width:"100%",
        backgroundColor:"white",
        marginTop:"5%",
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

