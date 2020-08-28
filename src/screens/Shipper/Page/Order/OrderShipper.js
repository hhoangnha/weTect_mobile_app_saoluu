import React,{useState} from 'react'
import { View, StyleSheet, StatusBar,Picker,Alert, } from 'react-native'
import { ThemeProvider,Header,Button,Text,Avatar } from 'react-native-elements';
import { FontAwesome5,Feather,Ionicons,FontAwesome } from '@expo/vector-icons';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

export default function OrderShipper({ navigation }) {
    const [showModalDetail, setShowModalDetail] = React.useState(false)
    const [orderStatus, setOrderStatus] = React.useState("Đang giao")
    const [listOrder, setListOrder] = React.useState([
        {
            name:"Tiến chuột",
            address:"288 - Nguyễn Văn Linh - Hưng Lợi - Ninh Kiều - Cần Thơ",
            phone:"0123456789",
            location:"1.2"
        },
        {
            name:"Tiến chim",
            address:"289 - Nguyễn Văn Linh - Hưng Lợi - Ninh Kiều - Cần Thơ",
            phone:"012345678d",
            location:"2.3"
        }
    ])

    return (
        <View style={styles.container}>
            
            <Modal isVisible={showModalDetail} animationInTiming={300} animationIn="slideInLeft" animationOut="slideOutRight">
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.64)"/>
                <View style={{ flex: 1,backgroundColor:"white" }}>
                    
                    <View style={{position:"absolute", bottom:"5%", right:"5%"}}>
                        <Button
                            title="Đóng"
                            type="clear"
                            onPress={()=>{
                                setShowModalDetail(!showModalDetail)
                            }}
                        />
                    </View>

                    <View style={{padding:20, marginTop:20}}>
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Text style={{fontSize:16, textTransform:"uppercase", }}>Ghi chú</Text>
                        </View>
                        <Text style={{color:"#999999", marginTop:20}}>
                            Giao giờ hành chính
                        </Text>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text style={{color:"#999999"}}>
                                Thanh toán khi nhận hàng thu
                            </Text>
                            <Text h4 style={{color:"red", paddingLeft:5}}>250.000</Text>
                        </View>
                    </View>

                    <View style={{padding:10, margin:20}}>
                        <Picker
                            mode="dropdown"
                            selectedValue={orderStatus}
                            style={{ height: 50, width: "100%", color:"#05910A" }}
                            onValueChange={(itemValue, itemIndex) => setOrderStatus(itemValue)}
                        >
                            <Picker.Item label="Đang giao" value="Đang giao" />
                            <Picker.Item label="Hẹn giao lại" value="Hẹn giao lại" />
                            <Picker.Item label="Không liên lạc được" value="Không liên lạc được" />
                            <Picker.Item label="Đã giao" value="Đã giao" />
                        </Picker>
                            <Button
                                title="Cập nhật"
                                buttonStyle={{marginTop:10, backgroundColor:"#05910A"}}
                                type="solid"
                                onPress={()=>{
                                    Alert.alert(
                                        "Xác nhận",
                                        orderStatus,
                                        [
                                          {
                                            text: "Hủy",
                                            style: "cancel"
                                          },
                                          { text: "Xác nhận", onPress: () => {
                                            setShowModalDetail(!showModalDetail)
                                          }}
                                        ],
                                        { cancelable: false }
                                    );
                                }}
                            />
                    </View>
                    
                </View>
            </Modal>
            <TouchableNativeFeedback onPress={()=>{
                navigation.goBack()
            }}>
                <Header
                    leftComponent={
                        <Ionicons name="ios-arrow-back" size={24} color="white" />
                    }
                    centerComponent={
                        <Text style={{color:"white", fontSize:17}}>ĐƠN GIAO</Text>
                    }
                    containerStyle={{
                        backgroundColor: '#2DAC5C',
                    }}
                />
            </TouchableNativeFeedback>

            <View style={styles.content}>
                <ScrollView>
                    {
                        listOrder.map((item,index)=>{
                            return(
                                <View key={index} style={styles.boxContent}>
                                    <View style={{width:"60%", paddingLeft:20}}>
                                        <Text h4>{item.name}</Text>
                                        <View style={{flexDirection:"row", padding:5, justifyContent:"center", alignItems:"center"}}>
                                            <FontAwesome name="address-card-o" size={20} color="#F67619" />
                                            <Text style={{padding:5}}>
                                                Đc: {item.address}
                                            </Text>
                                        </View>
                                        
                                        <View style={{flexDirection:"row",alignItems:"center"}}>
                                            <Feather name="phone" size={20} color="#1FA12B" />
                                            <Text style={{paddingLeft:5}}>
                                                {item.phone}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{width:"30%", justifyContent:"center", alignItems:"center"}}>
                                        <TouchableNativeFeedback 
                                            style={{padding:15}}
                                            onPress={()=>{
                                                setShowModalDetail(!showModalDetail)
                                            }}
                                        >
                                            <Text>Chi tiết</Text>
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={{width:"10%", justifyContent:"center", alignItems:"center"}}>
                                        <Text><FontAwesome5 name="map-marker-alt" size={24} color="#FF0202" /></Text>
                                        <Text>{item.location} km</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>

                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        alignItems:"center", 
    },
    boxContent:{
        flexDirection:"row",
        backgroundColor:"white",
        padding:10,
        borderBottomWidth:2,
        borderColor:"#D5D5D5"
    }
})
