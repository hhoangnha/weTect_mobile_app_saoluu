import React from 'react'
import { View, StyleSheet,ImageBackground } from 'react-native'
import DetailProductCarousel from './Carousel/DetailProductCarousel'
import { Ionicons,FontAwesome5,EvilIcons} from '@expo/vector-icons';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';
import { Avatar, Badge, Icon, Text, Button  } from 'react-native-elements'

export default function ProductScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("./../../../public/background2.jpg")} style={styles.image}>
                <TouchableNativeFeedback onPress={()=>{
                    navigation.goBack();
                }}>
                <View style={styles.header}>
                    <View style={styles.iconBack}>
                        <Ionicons name="ios-arrow-back" size={24} color="white" />
                    </View>
                    <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>Chi tiết sản phẩm</Text>
                </View>
                </TouchableNativeFeedback>
      
                <ScrollView>
                    <View style={styles.boxImg}>
                        <View style={{width:"50%", justifyContent:"center",}}>
                            <DetailProductCarousel/>
                            <View style={{flexDirection:"row"}}>
                                <View style={{width:"20%"}}>
                                    <Text>2/3</Text>
                                </View>
                                <View style={{width:"80%"}}>
                                    <Text style={{color:"#696868"}}>Vuốt sang trái xem thêm ảnh</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{width:"50%"}}>
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                                <Text style={{fontSize:16, textTransform:"uppercase"}}>mô tả ngắn</Text>
                            </View>
                            <View style={{padding:5}}>
                                <Text style={{padding:5}}>
                                    Danh mục: Quần áo
                                </Text>
                                <View style={{ position:"relative", justifyContent:"center", padding:5}}>
                                    <Text>Kích cỡ:</Text>
                                    <Badge
                                        status="success"
                                        value="S"
                                        containerStyle={{ position: 'absolute',left:60, padding:5 }}
                                    />
                                    <Badge
                                        status="error"
                                        value="M"
                                        containerStyle={{ position: 'absolute',left:80, padding:5 }}
                                    />
                                    <Badge
                                        status="warning"
                                        value="freesize"
                                        containerStyle={{ position: 'absolute',left:100, padding:5 }}
                                    />
                                    
                                </View>
                                
                                <View style={{padding:5}}>
                                    <Text>còn lại: 254 sản phẩm</Text>
                                </View>

                                <View style={{padding:5, flexDirection:"row"}}>
                                    <View style={{width:'30%', justifyContent:"center", alignItems:"center"}}>
                                        <TouchableNativeFeedback onPress={()=>{alert("yeu thich")}}>
                                            <EvilIcons name="heart" size={25} color="gray" style={{padding:10}} />
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={{width:'70%'}}>
                                        <TouchableNativeFeedback onPress={()=>alert("them vao gio")}>
                                            <View style={{backgroundColor:"#FF830F", justifyContent:"center", alignItems:"center", padding:10}}>
                                            <Text style={{color:"white"}}>Thêm vào giỏ</Text> 
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                
                    <View style={styles.boxDescription}>
                        <View>
                            <Text style={{fontSize:17}}>Chi tiết sản phẩm</Text>
                        </View>
                        <View style={{
                            width:"80%", 
                            justifyContent:"center", 
                            alignItems:"center", 
                            borderWidth:0.5,
                            borderColor:"#A6A6A6", 
                            marginTop:20, 
                            borderRadius:10}}>
                            <View style={{padding:20}}>
                                <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10,}}>
                                    <Text>Danh mục sản phẩm: </Text>
                                    <Button
                                        title="Quần áo"
                                        type="clear"
                                    />
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10}}>
                                    <Text>Cung cấp bởi: </Text>
                                    <Button
                                        title="weTech"
                                        type="outline"
                                        titleStyle={{color:"red"}}
                                        onPress={()=>alert("ok")}
                                    />
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", padding:10}}>
                                    <Text>kích cỡ: </Text>
                                    <Badge
                                        status="success"
                                        value="S"
                                        containerStyle={{ position: 'absolute',left:60, padding:5 }}
                                    />
                                    <Badge
                                        status="error"
                                        value="M"
                                        containerStyle={{ position: 'absolute',left:80, padding:5 }}
                                    />
                                    <Badge
                                        status="warning"
                                        value="freesize"
                                        containerStyle={{ position: 'absolute',left:100, padding:5 }}
                                    />
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10}}>
                                    <Text>Mã sản phẩm: </Text>
                                    <Text>id457w54d2xs2</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.boxDescription}>
                        <Text>ok</Text>
                    </View>
                    
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    header:{
        width:"100%",
        backgroundColor:"transparent",
        justifyContent:'center', 
        alignItems:"center",
        padding:10
    },
    iconBack:{
        position:"absolute",
        left:"5%"
    },
    boxImg:{
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"center", 
        alignItems:"center",
        padding:20
    },
    boxDescription:{
        width:"100%",
        backgroundColor:"white",
        marginTop:"2%",
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:50,
        paddingTop:10
    }
})
