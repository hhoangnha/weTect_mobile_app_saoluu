import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'
import { 
    Badge,
 } from 'react-native-paper';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons';

export default class OrderedPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableNativeFeedback onPress={()=>alert("Đã đặt 1")}>
                        <View style={styles.boxOrder}>
                            <View style={{flexDirection:"row",padding:"2%"}}>
                                <View style={{width:"80%",flexDirection:"row"}}>
                                    <Entypo name="shop" size={20} color="black" />
                                    <Text> Hoangnha</Text>
                                </View>
                                <View style={{width:"20%"}}>
                                    <Badge>Chờ đóng gói</Badge>
                                </View>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View style={{width:"30%"}}>
                                    <View style={styles.boxImgProduct}>
                                        <Image source={{uri:"https://salt.tikicdn.com/cache/280x280/ts/product/24/cc/7f/49a8772b42f32f3bfb737d470f87b0ab.jpg",width:100,height:100}} />
                                    </View>
                                </View>
                                <View style={{width:"70%",justifyContent:"center"}}>
                                    <Text style={styles.titleProduct}>Truyện tranh conan trá hình sách</Text>
                                    <Text>x1 x 65.000</Text>
                                    <View style={{flexDirection:"row",paddingTop:"10%",paddingBottom:"5%"}}>
                                        <View style={{width:"70%",justifyContent:"center"}}>
                                            <Text>Vẫn còn 3 sản phẩm</Text>
                                        </View>
                                        <View style={{width:"30%",justifyContent:"center"}}>
                                            <Text style={{fontWeight:"bold",color:"red", fontSize:17}}>65.000</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("Đã đặt 1")}>
                        <View style={styles.boxOrder}>
                            <View style={{flexDirection:"row",padding:"2%"}}>
                                <Entypo name="shop" size={20} color="black" />
                                <Text> Hoangnha</Text>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View style={{width:"30%"}}>
                                    <View style={styles.boxImgProduct}>
                                        <Image source={{uri:"https://salt.tikicdn.com/cache/280x280/ts/product/24/cc/7f/49a8772b42f32f3bfb737d470f87b0ab.jpg",width:100,height:100}} />
                                    </View>
                                </View>
                                <View style={{width:"70%",justifyContent:"center"}}>
                                    <Text style={styles.titleProduct}>Truyện tranh conan trá hình sách</Text>
                                    <Text>x1 x 65.000</Text>
                                    <View style={{flexDirection:"row",paddingTop:"10%",paddingBottom:"5%"}}>
                                        <View style={{width:"70%",justifyContent:"center"}}>
                                            <Text>Vẫn còn 3 sản phẩm</Text>
                                        </View>
                                        <View style={{width:"30%",justifyContent:"center"}}>
                                            <Text style={{fontWeight:"bold",color:"red", fontSize:17}}>65.000</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("Đã đặt 1")}>
                        <View style={styles.boxOrder}>
                            <View style={{flexDirection:"row",padding:"2%"}}>
                                <Entypo name="shop" size={20} color="black" />
                                <Text> Hoangnha</Text>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View style={{width:"30%"}}>
                                    <View style={styles.boxImgProduct}>
                                        <Image source={{uri:"https://salt.tikicdn.com/cache/280x280/ts/product/24/cc/7f/49a8772b42f32f3bfb737d470f87b0ab.jpg",width:100,height:100}} />
                                    </View>
                                </View>
                                <View style={{width:"70%",justifyContent:"center"}}>
                                    <Text style={styles.titleProduct}>Truyện tranh conan trá hình sách</Text>
                                    <Text>x1 x 65.000</Text>
                                    <View style={{flexDirection:"row",paddingTop:"10%",paddingBottom:"5%"}}>
                                        <View style={{width:"70%",justifyContent:"center"}}>
                                            <Text>Vẫn còn 3 sản phẩm</Text>
                                        </View>
                                        <View style={{width:"30%",justifyContent:"center"}}>
                                            <Text style={{fontWeight:"bold",color:"red", fontSize:17}}>65.000</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={()=>alert("Đã đặt 1")}>
                        <View style={styles.boxOrder}>
                            <View style={{flexDirection:"row",padding:"2%"}}>
                                <Entypo name="shop" size={20} color="black" />
                                <Text> Hoangnha</Text>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View style={{width:"30%"}}>
                                    <View style={styles.boxImgProduct}>
                                        <Image source={{uri:"https://salt.tikicdn.com/cache/280x280/ts/product/24/cc/7f/49a8772b42f32f3bfb737d470f87b0ab.jpg",width:100,height:100}} />
                                    </View>
                                </View>
                                <View style={{width:"70%",justifyContent:"center"}}>
                                    <Text style={styles.titleProduct}>Truyện tranh conan trá hình sách</Text>
                                    <Text>x1 x 65.000</Text>
                                    <View style={{flexDirection:"row",paddingTop:"10%",paddingBottom:"5%"}}>
                                        <View style={{width:"70%",justifyContent:"center"}}>
                                            <Text>Vẫn còn 3 sản phẩm</Text>
                                        </View>
                                        <View style={{width:"30%",justifyContent:"center"}}>
                                            <Text style={{fontWeight:"bold",color:"red", fontSize:17}}>65.000</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    boxOrder:{
        backgroundColor:"white",
        marginTop:"3%",
        
    },
    boxImgProduct:{

    },
    titleProduct:{
        fontWeight:"bold",
    }
})