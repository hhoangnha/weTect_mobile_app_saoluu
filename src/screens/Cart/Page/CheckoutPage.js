import React, { useState } from 'react'
import { View, 
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableNativeFeedback,
    FlatList,
    Picker,
    Image } from 'react-native'
import { 
    Ionicons,
    Entypo,
    AntDesign,
} from '@expo/vector-icons';
import { 
    Badge,
 } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';



const ListItem = (props)=>{
    return(
        <View style={styles.productDetailItem}>
            <View style={{width:"70%", flexDirection:"row"}}>
                <Image source={{uri:props.item.image, width:50,height:50}} />
                <Text style={{paddingLeft:"10%", fontSize:15}}>{props.item.title}</Text>
            </View>
            <View style={{width:"30%", flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"red"}}>x1  -  {props.item.price}</Text>
            </View>
        </View>
    )
}
export default function CheckoutPage({ navigation,route }) {
    const [selectedValue, setSelectedValue] = useState("java");
    const [modal,setModal] = React.useState(false)
    const [modalAddress,setModalAddress] = React.useState(true)
    const zoomIn = {
        0: {
          opacity: 0,
          scale: 0,
        },
        0.5: {
          opacity: 1,
          scale: 0.3,
        },
        1: {
          opacity: 1,
          scale: 1,
        },
    };
    var options =[
        {
        "description": "Meditações com foco na Respiração", 
        "id": 1, 
        "name": "Respiração"
      }, 
      {
        "description": "Meditações que projetam atenção nos sentidos e percepções do corpo, do ambiente.", 
        "id": 2, 
        "name": "java"
      }, 
      {
        "description": "Meditação ativa, pode ser feita em durante outras atividades", 
        "id": 3, 
        "name": "Ativa"
      }]
      
    return (
        <View style={styles.container}>  
            {modal ? (
                <Animatable.View animation="fadeIn" style={styles.boxModal}>
                    <View style={styles.modal}>
                        <TouchableNativeFeedback onPress={()=>setModal(false)}>
                            <View style={{position:"absolute", top:"2%", right:"2%"}}>
                                <AntDesign name="closesquareo" size={24} color="red" />
                            </View>
                        </TouchableNativeFeedback>
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Text style={{fontSize:17,}}>XÁC NHẬN ĐƠN HÀNG</Text>
                            <Text style={{padding:"2%",fontSize:15}}>Chào bạn, đây là hộp thư xác nhận thông tin đơn hàng của bạn</Text>
                        </View>

                        <View style={{padding:"2%"}}>
                            <Text style={{fontSize:15}}>Bạn có: <Badge style={{fontSize:15}}> 8 sản phẩm </Badge></Text>
                            <Text style={{fontSize:15}}>Tổng đơn giá: <Badge style={{fontSize:15}}> 280.000 vnđ </Badge></Text>
                        </View>

                        <View style={{padding:"2%"}}>
                            <Text style={{fontSize:15}}>Địa chỉ của bạn: 288 - Nguyễn văn linh - Cần thơ </Text>
                        </View>

                        <View style={{marginTop:"5%", borderTopWidth:0.5, padding:"2%"}}>
                            <Text style={{fontSize:15}}>Đơn vị vận chuyển: <Badge style={{fontSize:15, backgroundColor:"#1C6A1F"}}> Giao hàng nhanh </Badge></Text>
                            <Text style={{marginTop:"1%", color:"red"}}>Hiện tại chúng tôi chỉ có hình thức thanh toán trực tiếp khi nhận hàng</Text>
                        </View>

                        <View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"row"}}>
                            <TouchableNativeFeedback onPress={()=>navigation.replace('CheckoutLoaderPage')}>
                                <View style={{backgroundColor:"#23904E", padding:"3%", borderRadius:5}}>
                                    <Text style={{color:"white"}}>Đặt hàng</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </Animatable.View>
            ) : null}
            {modalAddress ? (
                <Animatable.View animation='fadeIn' style={styles.boxModal}>
                    <View style={styles.modal}>
                        <TouchableNativeFeedback onPress={()=>setModalAddress(false)}>
                            <View style={{position:"absolute", top:"2%", right:"2%"}}>
                                <AntDesign name="closesquareo" size={24} color="red" />
                            </View>
                        </TouchableNativeFeedback>
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Text style={{fontSize:17,}}>THÊM ĐỊA CHỈ GIAO HÀNG</Text>
                            <Text style={{padding:"2%",fontSize:15}}>Chào bạn, đây là hộp thư xác nhận thông tin đơn hàng của bạn</Text>
                        </View>

                        <View>
                        <Picker
                            mode="dialog"
                            selectedValue={selectedValue}
                            onValueChange={(item) => console.log(item)}>{
                                options.map( (v)=>{
                                    return <Picker.Item label={v.name} value={v.id} />
                                })
                            }
                        </Picker>
                        </View>

                        <View style={{justifyContent:"center", alignItems:"center", marginTop:"5%", flexDirection:"row"}}>
                            <TouchableNativeFeedback >
                                <View style={{backgroundColor:"#23904E", padding:"3%", borderRadius:5}}>
                                    <Text style={{color:"white"}}>Đặt hàng</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </Animatable.View>
            ) : null}

            <TouchableNativeFeedback onPress={()=>navigation.goBack()}>
                <View style={styles.header}>
                    <View style={styles.iconBack}>
                        <Ionicons name="ios-arrow-back" size={24} color="black" />
                    </View>
                    <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>thanh toán</Text>
                </View>
            </TouchableNativeFeedback>
            <SafeAreaView showsVerticalScrollIndicator={false}
                style={{height:"65%",marginTop:"1%"}} >
                <TouchableNativeFeedback onPress={()=>alert("Địa chỉ")} style={{borderBottomWidth:.5,borderBottomColor:"#C4CCDF"}}>
                    <View style={styles.boxAddress}>

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
                
                <TouchableNativeFeedback onPress={()=>setModalAddress(true)}>
                    <View style={{backgroundColor:"white", justifyContent:"center",padding:"2%"}}>
                        <Text style={{color:"#256DB5",padding:"2%"}}>Thêm địa chỉ mới</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.boxTotal}>
                    <TouchableNativeFeedback>
                        <View style={{flexDirection:"row",padding:"1%"}}>
                            <View style={{width:"70%"}}><Text>Giao hang nhanh</Text></View>
                            <View style={{width:"30%"}}><Text>30.000</Text></View>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={{flexDirection:"row",justifyContent:"center", alignItems:"center",}}>
                        <View style={{width:"50%",justifyContent:"center", alignItems:"center"}}>
                            <Text>San pham: 250.000</Text>
                            <Text >van chuyen: 30.000</Text>
                        </View>
                        <TouchableNativeFeedback onPress={()=>setModal(true)}>
                            <View style={{width:"50%", backgroundColor:"#F56530",padding:"3%",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{color:"white"}}>THANH TOÁN</Text>
                                <Text>280.000</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={styles.boxProductDetail}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={route.params.data}
                        renderItem={({item,index})=>{
                            return(
                                <ListItem item={item} index={index} />
                            )
                        }}
                        keyExtractor = {item=>`${item.id}`}
                    />
                </View>
            </SafeAreaView>   
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:"relative"
    },
    header:{
        width:"100%",
        backgroundColor:"#1ABC9C",
        justifyContent:"center",
        alignItems:"center",
    },
    iconBack:{
        position:"absolute",
        left:"5%"
    },
    boxAddress:{
        width:"100%",
        backgroundColor:"white",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },
    boxProductDetail:{
        width:"100%",
        backgroundColor:"white",
        marginTop:"3%"
    },
    boxStatusAddress:{
        flexDirection:"row",
    },
    boxTotal:{
        backgroundColor:"white",
        marginTop:"2%"
    },
    productDetailItem:{
        paddingLeft:"5%",
        flexDirection:"row",
        padding:"2%",
        borderBottomWidth:.5,
        borderBottomColor:"#D5D5D5"
    },
    boxModal:{
        width:"100%",
        height:"100%",
        position:"absolute",
        backgroundColor:"rgba(0,0,0,0.5)",
        zIndex:5
    },
    modal:{
        backgroundColor:"white",
        width:"100%",
        position:"absolute",
        zIndex:9,
        top:"20%",
        padding:"5%"
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
      },
      fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
      },
      buttonRow: {
        flexDirection: "row",
        marginVertical: 16
      }
 
})