import React,{useState} from 'react'
import { View, StyleSheet, StatusBar,Picker,Alert,ImageBackground } from 'react-native'
import { ThemeProvider,Header,Button,Text,Avatar } from 'react-native-elements';
import { FontAwesome5,Feather,Ionicons,FontAwesome } from '@expo/vector-icons';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';

export default function OrderShipper({ navigation }) {
    const [showModalDetail, setShowModalDetail] = React.useState(false)
    const [modalContent,setModalContent] = React.useState({})
    const [orderStatus, setOrderStatus] = React.useState("Đang giao")
    const [selectOrder,setSelectOrder] = React.useState(
        ""
    )
    const [listOrder, setListOrder] = React.useState([
        {
            name:"Tiến chuột",
            address:"288 - Nguyễn Văn Linh - Hưng Lợi - Ninh Kiều - Cần Thơ",
            phone:"0123456789",
            location:"1.2",
            payType:"Thanh toán khi nhận hàng",
            total:'250.000'
        },
        {
            name:"Tiến chim",
            address:"289 - Nguyễn Văn Linh - Hưng Lợi - Ninh Kiều - Cần Thơ",
            phone:"012345678d",
            location:"2.3",
            payType:"Thanh toán khi nhận hàng",
            total:'250.000'
        }
    ])

    return (
        <View style={styles.container}>
            <ImageBackground source={require("./../../../../../public/pexels-pixabay-40996.jpg")} style={{flex:1, resizeMode:"cover"}}>
            
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
                                {modalContent.payType}
                            </Text>
                            <Text h4 style={{color:"red", paddingLeft:5}}>250.000</Text>
                        </View>
                        <View style={{margin:10, marginTop:"20%"}}>
                            <View style={{flexDirection:"row",  alignItems:"center"}}>
                                <View style={{width:"50%",justifyContent:"center", alignItems:"center"}}>
                                    <Avatar
                                        rounded
                                        size="medium"
                                        source={{
                                            uri:
                                            'data:image/png;base64,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',
                                        }}
                                        onPress={()=>alert("ok")}
                                    />
                                    <Text>Gọi ngay</Text>
                                </View>
                                <View style={{width:"50%", justifyContent:"center", alignItems:"center"}}>
                                    <Avatar
                                        rounded
                                        size="medium"
                                        source={{
                                            uri:
                                            'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-pushpin-flat-multi-color-icon-png-image_315787.jpg',
                                        }}
                                        onPress={()=>{
                                            // setSelectOrder()
                                            setSelectOrder(modalContent.address)
                                            setShowModalDetail(!showModalDetail)
                                        }}
                                    />
                                    <Text>Ghim đơn giao</Text>
                                </View>
                            </View>
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
                            title="CẬP NHẬT"
                            buttonStyle={{marginTop:10, backgroundColor:"#197D4B", padding:20}}
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
                        backgroundColor: 'transparent',
                        borderBottomWidth:0
                    }}
                />
            </TouchableNativeFeedback>

            <View style={styles.content}>
                <ScrollView>
                    {
                        listOrder.map((item,index)=>{
                            return(
                                selectOrder == item.address ?
                                (
                                    <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" key={index} style={styles.boxContentActive}>
                                        <View style={{width:"60%", paddingLeft:20}}>
                                            <Text h4>{item.name}</Text>
                                            <View style={{flexDirection:"row", padding:5, justifyContent:"center", alignItems:"center"}}>
                                                <FontAwesome name="address-card-o" size={20} color="white" />
                                                <Text style={{padding:5}}>
                                                    Đc: {item.address}
                                                </Text>
                                            </View>
                                            
                                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                                <Feather name="phone" size={20} color="#1FA12B" />
                                                <Text style={{paddingLeft:5, color:"white"}}>
                                                    {item.phone}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{width:"30%", justifyContent:"center", alignItems:"center"}}>
                                            <TouchableNativeFeedback 
                                                style={{padding:15}}
                                                onPress={()=>{
                                                    setShowModalDetail(!showModalDetail);
                                                    setModalContent(item)
                                                }}
                                            >
                                                <Text>Chi tiết</Text>
                                            </TouchableNativeFeedback>
                                        </View>
                                        <View style={{width:"10%", justifyContent:"center", alignItems:"center"}}>
                                            <Button
                                                icon={
                                                    <FontAwesome5 name="map-marker-alt" size={24} color="#FF0202" />
                                                }
                                                onPress={()=>{alert("ok")}}
                                                buttonStyle={{backgroundColor:"transparent"}}
                                            />
                                            <Text>{item.location} km</Text>
                                        </View>
                                    </Animatable.View>
                                )
                                : 
                                (
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
                                                    setModalContent(item)
                                                }}
                                            >
                                                <Text>Chi tiết</Text>
                                            </TouchableNativeFeedback>
                                        </View>
                                        <View style={{width:"10%", justifyContent:"center", alignItems:"center"}}>
                                            <Button
                                                icon={
                                                    <FontAwesome5 name="map-marker-alt" size={24} color="#FF0202" />
                                                }
                                                buttonStyle={{backgroundColor:"transparent"}}
                                                onPress={()=>{
                                                    navigation.push("OrderShipMap")
                                                }}
                                            />
                                            <Text>{item.location} km</Text>
                                        </View>
                                    </View>
                                )
                            )
                        })
                    }
                </ScrollView>

                
            </View>
            </ImageBackground>
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
        marginTop:"1%"
    },
    boxContentActive:{
        flexDirection:"row",
        backgroundColor:"#D3A965",
        padding:10,
        marginTop:"1%"
    }
})
